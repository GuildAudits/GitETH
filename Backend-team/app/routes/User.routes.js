const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = require('../models/user.model');
const router = express.Router();

const {  sinupValidationRules, loginValidationRules,  validate } = require('../utils/Validator.util');


router.post('/signup', sinupValidationRules(), validate, (req, res) => {
  const { username, email, password } = req.body;

  userSchema.findOne({ $or: [{ email: email }, { username: username }] }, (err, existingUser) => {
    if (err) return res.status(500).json({ message: 'Error checking user' });
    if (existingUser) return res.status(400).json({ message: 'Username or email already in use' });

    const newUser = new userSchema({ username, email, password });
    newUser.save((err) => {
      if (err) return res.status(500).json({ message: 'Error creating user' });
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});




router.post('/login', loginValidationRules(), validate, (req, res) => {
  const { email, password } = req.body;

  userSchema.findOne({ email: email }, (err, user) => {
    if (err) return res.status(500).json({ message: 'Error finding user' });
    if (!user) return res.status(400).json({ message: 'User not found' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: 'Error checking password' });
      if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

      const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    });
  });
});








module.exports = router;
