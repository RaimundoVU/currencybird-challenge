const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String , unique: true},
	fullName: {type: String},
	direction: {type: String},
	genre: {type: String},
	money: {type: Number}
});

module.exports = mongoose.model('User', UserSchema);
