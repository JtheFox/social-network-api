import { User, Thought } from '../models/index.js';

const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await User.find().populate({ path: 'thoughts' }).populate({ path: 'friends' });
            !users.length ? res.status(404).json({ message: 'No users found' }) : res.json(users);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneUser({ params }, res) {
        try {
            const user = await User.findOne({ _id: params.userId }).populate({ path: 'thoughts' }).populate({ path: 'friends' });
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createUser({ body }, res) {
        try {
            const user = await User.create(body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateUser({ params, body }, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true });
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteUser({ params, body }, res) {
        try {
            const user = await User.deleteOne({ _id: params.userId });
            if (!user) res.status(404).json({ message: 'No user with that ID' });
            else {
                await User.updateMany({ _id: { $in: user.friends } }, { $pull: { friends: params.userId } });
                await Thought.deleteMany({ username: user.username });
                res.json({ message: `User ${user.username} deleted successfully` });
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addToFriends({ params }, res) {
        try {
            const user = await User.updateOne({ _id: params.userId }, { $push: { friends: params.friendId } }, { new: true });
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async removeFromFriends({ params }, res) {
        try {
            const user = await User.updateOne({ _id: params.userId }, { $pull: { friends: params.friendId } }, { new: true });
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
}

export default userController;