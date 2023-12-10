const jwt = require('jsonwebtoken');

function authToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log('JWT verification error:', err);
            return res.status(401).json({ message: 'Invalid token.' });
        }
        req.user = user;
        next();
    });
}

module.exports = authToken;