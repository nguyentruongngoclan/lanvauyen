const express = require('express');

const router = express.Router();

const Reservation = require('../models/Reservation');

router.post('/save', (req, res) => {
	console.log(req.body);
	const data = req.body;
	console.log(`data ${data}`);
	const newReservation = new Reservation(data);

	newReservation.save((error) => {
			if (error) {
					res.status(500).json({ msg: 'Sorry, internal server errors' });
					return;
			}
			// Reservation
			return res.json({
					msg: 'Your data has been saved!!!!!!'
			});
	});
});

module.exports = router;