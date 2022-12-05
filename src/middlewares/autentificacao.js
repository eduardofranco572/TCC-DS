module.exports = (req, res, next) => {
  const { usuario } = req.session;

  if (!usuario) {
    return res.redirect(301, '/login');
  }
  return next();
}