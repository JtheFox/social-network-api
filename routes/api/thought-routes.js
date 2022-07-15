import { Router } from 'express';
import Thoughts from '../../controllers/thought-controller.js';

const router = Router();

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

export default router;