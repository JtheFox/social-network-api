import User from '../models/User.js';
import Thought from '../models/Thought.js';

export default {
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            !thoughts.length ? res.status(404).json({ message: 'No thoughts found' }) : res.json(thoughts);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async getOneThought({ params }, res) {
        try {
            const thought = await Thought.findOne({ _id: params.thoughtId });
            !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async createThought({ body }, res) {
        try {
            const thought = await Thought.create(body);
            const user = User.findOneAndUpdate({ username: body.username }, { $addToSet: { thoughts: thought._id } }, { new: true })
            !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought({ params, body }, res) {
        try {
            await Thought.updateOne({ _id: params.thoughtId }, body, { new: true, runValidators: true });
            const thought = await Thought.findOne({ _id: params.thoughtId });
            !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async deleteThought({ params }, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: params.thoughtId });
            if (!thought) res.status(404).json({ message: 'No thought with that ID' });
            else {
                const user = await User.findOneAndUpdate({ thoughts: params.thoughtId }, { $pull: { thoughts: params.thoughtId } }, { new: true });
                res.json(user);
            }
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async addReaction({ params, body }, res) {
        try {
            await Thought.updateOne({ _id: params.thoughtId }, { $push: { reactions: body }, new: true, runValidators: true });
            const thought = await Thought.findOne({ _id: params.thoughtId });
            !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async removeReaction({ params }, res) {
        try {
            await Thought.updateOne({ _id: params.thoughtId }, { $pull: { reactions: { reactionId: params.reactionId } }, new: true });
            const thought = await Thought.findOne({ _id: params.thoughtId });
            !thought ? res.status(404).json({ message: 'No thought with that ID' }) : res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
}