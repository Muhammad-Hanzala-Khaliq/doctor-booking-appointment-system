import jwt from "jsonwebtoken";

// doctor authentication middlware
const authDoctor = async (req,res,next) => {
  try {
    const { dtoken } = req.headers;
    if (!dtoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
     // ✅ agar body undefined hai to empty object bana do
    if (!req.body) {
      req.body = {};
    }

    // ab safely docId add kar do
    req.body.docId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export default authDoctor 