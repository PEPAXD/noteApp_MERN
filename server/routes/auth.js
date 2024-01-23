const express = require("express");
const router = express.Router();
const passport = require("passport");
const  GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, cb) {

        console.log(profile);

    }
  )
);

// Google Login Auth
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ['email',"profile"] })
);

// Retrieve user data
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failure",
    successRedirect: "/dashboard",
  })
);

// Route if something goes wrong
router.get("/login-failure", (req, res) => {
    res.send("Something went wrong with Google OAuth");
    });

module.exports = router;
