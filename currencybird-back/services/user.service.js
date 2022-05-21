const User = require('../models/user');

// function that returns the users sorted by money (descending)
const getUsers = async () => {
	let users = await User.find({}).exec();
	if ( users ) return users.sort( (a,b) => b.money - a.money );
	return [];
}

const getUserByEmail = async (email) => {
	let user = await User.find({ email: email }).exec()
	return user;
}

module.exports = { getUsers, getUserByEmail }
