import { User, Thought } from '../models/index.js';

const thoughtController = {
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
    async updateThought({params, body}, res) {

    }
 }

export default thoughtController;