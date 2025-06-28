import jwt from 'jsonwebtoken';

// Middleware to authenticate user based on JWT token

const authUser = async (req,res,next) => {
    try {
        const {token} = req.headers;
        if (!token) {
            return res.status(401).json({success: false, message: "Not Authorized login again"});
        }
        
        const token_decode = jwt.decode(token)
        if (!token_decode || !token_decode.sub) {
            return res.status(401).json({success: false, message: "Invalid token"});
        }
        
        req.user = { clerkId: token_decode.sub }
        next()
    } catch (error) {
        console.log(error.message);
        res.status(401).json({success: false, message: error.message});
    }
}

export default authUser;