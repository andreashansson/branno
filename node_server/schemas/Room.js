var mongoose = require('mongoose');

var roomSchema = new mongoose.Schema(
  {
  	room_nr: {
      type: String,
      required: true
    },
    room_name: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: false
    }
	}
);

var Room = mongoose.model('Room', roomSchema);

module.exports = Room;
