const authController = {};

// eslint-disable-next-line no-undef
authController.setCookie = (req, res, next) => {
  console.log("I am in setCookie, res.locals: ", res.locals.user);
  const user_id = res.locals.user._id;
  console.log("user id is:", user_id);
  res.cookie("user_id", user_id);
  console.log("finished cookie", req.cookie);
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
