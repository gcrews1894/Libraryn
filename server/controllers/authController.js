const authController = {}  

    // eslint-disable-next-line no-undef
    authController.setCookie = (req, res, next) => {
        console.log('I am in setCookie, req.body: ', req.body)
        const userId = req.body.reqObj
            res.cookie("userId", userId);
            return next();
    };

    // eslint-disable-next-line no-undef
    authController.getCookie = (req, res, next) => {
        // console.log('I am in validateCookie, cookie: ', req.cookies)
        const { userId } = req.cookies
        console.log('this is req.cookies', req.cookies, 'This is req.body: ', req.body)
        res.locals.userId = userId
            return next()
        } 
    // eslint-disable-next-line no-undef
    module.exports = authController;