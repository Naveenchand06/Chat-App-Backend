const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../controllers/authController");

const express = require("express");
const {
  loginMiddleware,
  registerMiddleware,
} = require("../middlewares/inputMiddleware");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/login", loginMiddleware, login);
router.post("/register", registerMiddleware, register);
router.get("/allusers", protect, getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;
