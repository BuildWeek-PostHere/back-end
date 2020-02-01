// importing json web token
const jwt = require('jsonwebtoken');

// exporting restricted  middleware
module.exports = (req, res, next) => {
    // getting the token from authorization headers
    const token = req.headers.authorization;

    if (token){
        const secret = process.envJWT_SECRET || 'is it a secret, is it safe?';

        // verification
        jwt.verify(token, secret,(error, decodedToken) =>{
            if (error){
                res.status(401).json({ message: 'Invalid Credentials!'});
            }
            else {
                req.decodedJWT = decodedToken;
                next();
            }
        });
    }
    else {
        res.status(400).json({ message: 'No credentials provided!'})
    }
}