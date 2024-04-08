const jwt = require('jsonwebtoken');

//generate Access token
const generateAccessToken = (user) => {
    const token = jwt.sign({_id: user._id,name:user.Firstname,email:user.Email,},process.env.ACCESS_TOKEN,{expiresIn:'20s'})
    return token
}


//generate Refresh Token
const generateRefreshToken = (user) => {
    const token = jwt.sign({_id: user._id,name:user.Firstname,email:user.Email,},process.env.REFRESH_TOKEN,{expiresIn:'3h'})
    return token
}

module.exports = {generateAccessToken,generateRefreshToken} 