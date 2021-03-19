function authorize(req, res, next) {
  const user = req.USER;

  if (user.id === 4)
    next({ status: 403, error: "No estas autorizado a ver este recurso" });

  next();
}

module.exports = authorize;
