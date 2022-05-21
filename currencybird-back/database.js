const mongoose = require('mongoose');

const uri = "mongodb+srv://userdev:QNH0p9WoPZwYwWlR@devcluster1.hl4fr.mongodb.net/currencybird?retryWrites=true&w=majority"

mongoose.connect(uri)
	.then(db => console.log('DB Connected'))
	.catch( error => console.log(error) )


module.exports = mongoose;
