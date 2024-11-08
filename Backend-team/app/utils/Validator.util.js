const { check, validationResult } = require('express-validator');


const sinupValidationRules = () => {
    return [

        check('username')
        .trim()
        .escape()
        .notEmpty().withMessage('Username is required')
        .isAlphanumeric().withMessage('Username must be alphanumeric'),
    

        check('email')
        .trim()
        .isEmail().withMessage('Enter a valid email address')
        .normalizeEmail(),


        check('password')
            .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
          //  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
          //  .withMessage('Password must include an uppercase letter, a lowercase letter, a number, and a special character'),


    ];
};

// Validation rules for login
const loginValidationRules = () => {
    return [
        check('email')
            .trim()
            .isEmail().withMessage('Enter a valid email address')
            .normalizeEmail(),

        check('password')
            .notEmpty().withMessage('Password is required'),
    ];
};



// General validation middleware to check for validation errors
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    sinupValidationRules,
    loginValidationRules,
    validate,
};
