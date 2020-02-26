var mongoose = require('mongoose');
const InitiateMongoServer = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/JWT-jsonToken', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('Connected to MongoDB database...');
	} catch(e) {
		console.log(e);
		throw e;
	}

	global.mongoDB = InitiateMongoServer;
}

module.exports = InitiateMongoServer;