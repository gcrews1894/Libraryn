const authController = {};

// eslint-disable-next-line no-undef
authController.setCookie = (req, res, next) => {
  const cookie = req.cookies.user_id;
  if (cookie === undefined) {
    // no cookie
    const user_id = res.locals.user._id;
    res.cookie("user_id", user_id, { maxAge: 5000000, httpOnly: true });
  } else {
    console.log("cookie exists", cookie);
  }
  return next();
};

// eslint-disable-next-line no-undef
authController.getCookie = (req, res, next) => {
  // console.log('I am in validateCookie, cookie: ', req.cookies)
  const { userId } = req.cookies;
  console.log(
    "this is req.cookies",
    req.cookies,
    "This is req.body: ",
    req.body
  );
  res.locals.userId = userId;
  return next();
};
// eslint-disable-next-line no-undef
module.exports = authController;
