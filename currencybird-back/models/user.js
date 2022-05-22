const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	email: { type: String , unique: true},
	fullName: {type: String},
	direction: {type: String},
	gender: {type: String},
	money: {type: Number},
	referalString: {type: String},
	referedBy: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
