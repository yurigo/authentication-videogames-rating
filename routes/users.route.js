const router = require("express").Router();

const c = require("../controller/users.controller");

const authenticate = require("../authentication");
const authorize = require("../authorization");

// PUBLIC
router.get("/", c.all);

router.use(authenticate);
router.use(authorize);

// PRIVATE
router.get("/:id", c.get);

module.exports = router;
