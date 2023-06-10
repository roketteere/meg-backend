const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, EmergencyContact, Experience, Journey } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await User.findOne({
      where: { email: email },
      include: [Experience, Journey, EmergencyContact],
    });
    if (!login) {
      res.status(400).json({
        message: "Email Not Found",
      });
    }
    const validPassword = login.checkPassword(password);
    if (!validPassword) {
      res.status(400).json({
        message: "Password Invalid",
      });
    } else {
      const jwtToken = jwt.sign(
        {
          email: login.email,
          userId: login.id,
        },
        process.env.SESSION_SECRET,
        {
          expiresIn: "3h",
        }
      );
      // console.log({
      //   email: login.email,
      //   // password: login.password,
      //   // jwtToken: jwtToken,
      // });

      res.status(200).json({
        message: "Success!",
        body: {
          userId: login.id,
          email: login.email,
          // password: login.password,
          jwtToken: jwtToken,
        },
      });
    }
  } catch (err) {
    console.log(console.log(`Login Error: ${err}`));
    res.status(500).json({
      error: "Error Logging In",
      err: err,
    });
  }
});

module.exports = router;

// HTTP/1.1 200 OK
// X-Powered-By: Express
// Access-Control-Allow-Origin: *
// Content-Type: application/json; charset=utf-8
// Content-Length: 336
// ETag: W/"150-XPRapsO/UgQc1hK2gQd937DnvM4"
// Date: Wed, 07 Jun 2023 18:23:21 GMT
// Connection: close

// {
//   "message": "Signup Success!",
//   "New_User": {
//     "email": "jxp489@gmail.com",
//     "password": "$2b$10$WAwYvE3tDwqf94X3vUawo.vRlou5RjzZLIzPQabPYHlDKXiKVfwG.",
//     "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp4cDQ4OUBnbWFpbC5jb20iLCJ1c2VySWQiOjIsImlhdCI6MTY4NjE2MjIwMSwiZXhwIjoxNjg2MTczMDAxfQ.E98pA-HRrk2EgffQScduyPd1QdICWqCx7c9ZSMxWmzA"
//   }
// }
