const router = require("express").Router();

const c = require("../controller/videogames.controller");

const authenticate = require("../authentication");
router.use(authenticate);

router.get("/", c.all);
router.get("/:id", c.get);

module.exports = router;
