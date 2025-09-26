import jwt from "jsonwebtoken";

// user authentication middlware
const authUser = async (req,res,next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
     // ✅ agar body undefined hai to empty object bana do
    if (!req.body) {
      req.body = {};
    }

    // ab safely userId add kar do
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export default authUser  