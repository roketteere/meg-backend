const { UserDemo } = require("../models");

const signUp = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const newDemoUser = await UserDemo.create({
      email: email,
      password: password,
    });
    console.log(`New User Created: ${newDemoUser}`);
    res.status(200).json({
      message: "Signup Success!",
      New_User: {
        email: newDemoUser.email,
        password: newDemoUser.password,
      },
    });
  } catch (err) {
    console.log(console.log(`Signup Error: ${err}`));
    res.status(500).json({
      error: "Error Signing Up",
      err: err,
    });
  }
};

module.exports = {
  signUp,
};
