const userModel = require("../models/register_model");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const isUser = await userModel.findOne({ email });
    if (isUser) {
      return res.status(400).send({
        success: false,
        message: "user already exists",
      });
    }

    const data = {
      ...req.body,
      password: await bcrypt.hash(req.body.password, 10),
    };
    const newUser = new userModel(data).save();
    return res.status(201).json({ success: true, message: "User Registerd" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "user doesnt exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong passsword" });
    }

    // create jwt Token

    const jwtAccessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "30m" }
    );

    const jwtRefreshToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_Refresh_key
    );

    return res
      .status(200)
      .json({ success: true, user, jwtAccessToken, jwtRefreshToken });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
