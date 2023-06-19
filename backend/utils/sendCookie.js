const sendCookie = (user = {}, statusCode, res) => {
    const token = user.generateToken();

    const options = {
        expires: new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
        ),
        secure: false,
        httpOnly: false,
        sameSite: "none"
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
    });
}

module.exports = sendCookie;
