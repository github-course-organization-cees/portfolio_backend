const express = require("express");

const { login, signup, getUser } = require("../controllers/authController");

const router = express.Router();

router.route("/login").post(login);
router.route("/signup").post(signup);

// ============ RESTRICT TO: ADMIN ============

router.route("/:userId").get(getUser);

module.exports = router;
