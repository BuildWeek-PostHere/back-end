// importing json web token
const jwt = require('jsonwebtoken');

// distructuring jwtSecret from secrets
const { jwtSecret } = require('../config/secret.js')


// exporting restricted  middleware
module.exports = (req, res, next) => {
    // getting the token from authorization headers
    const token = req.headers.authorization;

    if (token){
        // verification
        jwt.verify(token, jwtSecret,(error, decodedToken) =>{
            if (error){
                // if the token is not valid http status code Authorization Error
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