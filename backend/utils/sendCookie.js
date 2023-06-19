const sendCookie = (user = {}, statusCode, res) => {
    const token = user.generateToken();

    const options = {
        expires: new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
        ),
        sameSite: "none",
        domain: "https://sensational-liger-dac015.netlify.app"
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
    });
}

module.exports = sendCookie;
