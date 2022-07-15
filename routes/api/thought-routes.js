const router = require('express').Router();
const Thoughts = require('../../controllers/thought-controller.js');

router.route('/')
    .get(Thoughts.getAllThoughts)
    .post(Thoughts.createThought);

router.route('/:thoughtId')
    .get(Thoughts.getOneThought)
    .put(Thoughts.updateThought)
    .delete(Thoughts.deleteThought);

router.route('/:thoughtId/reactions/:reactionId?')
    .post(Thoughts.addReaction)
    .delete(Thoughts.removeReaction);

module.exports = router;