const express = require('express');
const app = express();
const port = 5555;
const { mongoose } = require('./database')
const User = require('./models/user')
const { getUsers, getUserByEmail } = require('./services/user.service');

app.get('/', ( req, res ) => {
	res.send('hello world');
})

app.get('/getUsers', async (req, res) => {
	let sortedUsers = await getUsers();
	console.log(sortedUsers)
	res.json(({
		status: 200,
		users: sortedUsers
	}))
})

app.get('/user/:email',  async (req, res) => {
	console.log(req.params.email)
	let email = req.params.email;
	let user = await getUserByEmail(email);
	res.json({
		status: 200,
		user: user
	})
})

app.post('/addUser', async ( req, res ) => {
	let user = new User({
		email: 'email@example.com', 
		fullName: 'fullName fullName',
		direction: 'direction direction',
		genre: 'male',
		money: '0',
	})
	user.save( (err) => {
		if (err) res.status(500).send(err)
	})
})

app.listen( port , () => {
	console.log(`Listening port ${port}`)
} )
