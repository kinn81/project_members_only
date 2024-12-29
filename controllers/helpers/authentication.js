function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.redirect('/log-in');
}

function isAdmin(req, res, next) {
  if (req.isAuthenticated && req.user.is_admin) {
    return next();
  }
  const err = new Error('User is not an admin');
  err.status(403);
  return next(error);
}

module.exports = {
  isAuthenticated,
  isAdmin,
};
