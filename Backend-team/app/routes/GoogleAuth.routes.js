const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route for Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route for Google callback
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign({ userId: req.user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
    res.json({ success: true, token, user: req.user });
  }
);





module.exports = router;
