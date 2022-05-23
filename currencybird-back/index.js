const express = require('express');
const app = express();
const port = 5555;
const cors = require('cors')
const { mongoose } = require('./database')
const User = require('./models/user')
const { getUsers, getUserByEmail, getUserByReferal } = require('./services/user.service');

app.use(cors());
app.use(express.json());

app.get('/', ( req, res ) => {
	res.send('hello world');
})

app.get('/getUsers', async (req, res) => {
	let sortedUsers = await getUsers();
	res.json(({
		status: 200,
		users: sortedUsers
	}))
})

app.get('/user/:email',  async (req, res) => {
	let email = req.params.email;
	let user = await getUserByEmail(email);
	res.json({
		status: 200,
		user: user[0]
	})
})

const makeReferal = (length) => {
		var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

app.post('/addUser', async ( req, res ) => {
	let values = req.body
	values.referalString = makeReferal(6);
	let user = new User(values)
	try {
		await user.save()
	} catch(err) {
		res.status(500).send(err);
		return;
	}
	// modificamos al usuario que es usaron su enlace.
	if (values.referedBy !== '') {
		let referalUser = await getUserByReferal(values.referedBy)
		referalUser[0].money = referalUser[0].money + 5000;
		try {
			await user.save()
		} catch(err) {
			res.status(500).send(err);
			return;
		}
	}
	res.status(200).send(user)
})

app.listen( port , () => {
	console.log(`Listening port ${port}`)
} )
