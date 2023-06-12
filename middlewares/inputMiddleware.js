// Register Middleware
// PATH -> /api/auth/signup
const registerMiddleware = (req, res, next) => {
  const { username, mobile, email, password } = req.body;
  if (!username || !mobile || !email || !password) {
    return res.status(401).json({ error: "Invalid Inputs" });
  }
  next();
};

// Login Middleware
// PATH -> /api/auth/login
const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ error: "Invalid Inputs" });
  }
  next();
};

module.exports = {
  registerMiddleware,
  loginMiddleware,
};
