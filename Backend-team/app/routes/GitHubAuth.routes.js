const express = require('express');
const passport = require('passport');
const router = express.Router();

// Initiate GitHub Authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub Callback Route
router.get(
  '/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // After successful authentication, send the JWT token
    res.json({ message: 'GitHub authentication successful', token: req.user.token });
  }
);

module.exports = router;
