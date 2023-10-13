//User routes

const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userControllers')

// /api/User
router.route('/').get(getUser).post(createUser);

// /api/User/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

  // /api/user/:userId/friends
router.route('/:userId/friends').post(addFriend);

 // /api/user/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
