const router = require('express').Router();
const Users = require('../../controllers/user-controller.js');

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

module.exports = router;