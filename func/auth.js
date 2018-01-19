module.exports = function(req, res, next) {
  if (req.session)
    return next();
  else
    return res.sendStatus(401);
};