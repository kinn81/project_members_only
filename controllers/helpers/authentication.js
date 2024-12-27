function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.redirect("/log-in");
}

module.exports = {
  isAuthenticated,
};
