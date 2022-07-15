const router = require('express').Router();
const { getAllThoughts, getOneThought, createThought, updateThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought);

router.route('/:thoughtId/reactions/:reactionId?')
    .post(addReaction)
    .delete(removeReaction);

module.exports = router;