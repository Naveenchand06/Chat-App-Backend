const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/authController");

const express = require("express");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
