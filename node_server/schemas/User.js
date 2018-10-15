var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
  	user: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: false
    }
	}
);

var User = mongoose.model('User', userSchema);

module.exports = User;
