//User routes

const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers')

// /api/User
router.route('/').get(getUsers).post(createUser);

// /api/User/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


 // /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
