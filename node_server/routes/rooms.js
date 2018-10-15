var express = require('express');
var router = express.Router();
var Room = require('../schemas/Room');

/* GET home page. */
router.get('/rooms', function(req, res, next) {
  Room.find().then(allRooms => {
    res.json(allRooms);
  }).catch(err => {
    console.log(err);
  });
  /*
  User.find().then(function(allData) {
    console.log(allData);
    res.json(allData);
  });
  */
});

router.get('/room/:id', (req, res, next) => {
  var id = req.params.id;
  Room.findById(id, (err, room) => {
    res.json(room)
  });
});

router.post('/room/add', (req, res, next) => {
  Room.create(req.body, (err, data) => {
    if (err) return handleError(err);
    res.json(data);
  });
});

router.get('/room/add', (req, res, next) => {
  var room = new Room({
    room_nr: "1",
    room_name: "Single Angel",
    available: true
  });

  room.save(err => {
    if (err) {
      console.log(err);
    }
  });

  res.json({room: room});

});

module.exports = router;
