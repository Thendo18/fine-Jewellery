const express = require("express");
const router = express.Router();

const login = require("../controllers/login.controllers");

router.post('/login',login.login);

module.exports = router;
