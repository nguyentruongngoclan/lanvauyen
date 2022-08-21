const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const ReservationSchema = new Schema({
	first_name: String,
	last_name: String,
	attend: String,
	reservations: Number,
	date: {
		type: String,
		default: Date.now()
	}
});

// Model
const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;