const mongoose = require("mongoose");
const bcrypt = require('bcrypt');



const userSchema = new mongoose.Schema({
    email: { type: String,
         unique: true,
          required: true
         },




  username: { type: String,
     unique: true,
      required: true
    
    
    },


    password: { type: String,
         required: true 
        },
 

 

 isVerified: {
    type: Boolean,
    default: false
  },

  verificationToken: String,
  verificationTokenExpires: Date,

 
  resetOTP: {
    type: String
},
 
resetOTPExpires: {
    type: Date
},



googleId: {
    type: String,
    required: false
  },
  displayName: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },


  githubId: { type: String, sparse: true, unique: true }, // GitHub-specific field
  provider: { type: String, default: 'local' }, // Can store 'github' for GitHub accounts

  
},



{
  timestamps: true  





}


);


userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    bcrypt.hash(this.password, 10, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });




module.exports = mongoose.model('User', userSchema);
