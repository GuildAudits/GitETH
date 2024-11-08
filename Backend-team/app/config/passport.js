const passport = require('passport');
//const GoogleStrategy = require('passport-google-oauth20').Strategy;
//const GitHubStrategy = require('passport-github2').Strategy;
const userSchema = require('../models/user.model');



// Google OAuth Strategy
passport.use(new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await userSchema.findOne({ googleId: profile.id });
        if (!user) {
          // Create a new user if not found
          user = new userSchema({
            googleId: profile.id,
            displayName: profile.displayName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            image: profile.photos[0].value,
            email: profile.emails[0].value,
          });
          await user.save();
        }
        done(null, user);
      } catch (err) {
        done(err, false, err.message);
      }
    }
  ));
  




// GitHub OAuth Strategy

passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/github/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        // Here you would typically find or create a user in your database
        const user = {
          id: profile.id,
          username: profile.username,
          email: profile.emails?.[0]?.value,
        };
        return done(null, user);
      }
    )
  );




module.exports = passport;
