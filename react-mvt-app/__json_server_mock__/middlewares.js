module.exports = (req, res, next) => {
  // login
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "admin" && req.body.password === "admin") {
      return res.status(200).json({
        user: {
          id: 1,
          name: "admin",
          email: "admin@admin.com",
          token: "123456789",
        },
      });
    } else {
      return res.status(401).json({
        message: "用户名或者密码错误",
      });
    }
  }

  // me
  if (req.method === "GET" && req.path === "/me") {
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "请先登录",
      });
    }

    return res.status(200).json({
      user: {
        id: 1,
        name: "admin",
        email: "admin@admin.com",
        token: "123456789",
      },
    });
  }

  next();
};
