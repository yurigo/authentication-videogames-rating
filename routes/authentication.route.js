const router = require("express").Router();

const c = require("../controller/authentication.controller");

router.post("/login", c.login);
router.post("/register", c.register);

router.all("/login", onlyPostError);
router.all("/register", onlyPostError);

async function onlyPostError(req, res, next) {
  next({ error: `only POST ${req.path}` });
}

module.exports = router;
