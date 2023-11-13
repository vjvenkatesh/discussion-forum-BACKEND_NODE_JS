const PASSWORD = process.env.ROUTE_PASSWORD;

const verifyAuth = (req, res, next) => {
  const ApiKey = req.headers["x-api-key"];
  if (!ApiKey) {
    return res.status(403).json({ message: "Unauthorised Access" });
  }
  if (ApiKey !== PASSWORD) {
    return res.status(403).json({ message: "Unauthorised Access" });
  }
  next();
};

module.exports = { verifyAuth };
