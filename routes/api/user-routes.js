import { Router } from 'express';
import Users from '../../controllers/user-controller.js';

const router = Router();

router.route('/')
    .get(Users.getAllUsers)
    .post(Users.createUser);

router.route('/:userId')
    .get(Users.getOneUser)
    .put(Users.updateUser)
    .delete(Users.deleteUser);

router.route('/:userId/friends/:friendId')
    .post(Users.addToFriends)
    .delete(Users.removeFromFriends);

export default router;