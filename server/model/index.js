const mongo = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017/userDB';
mongo.connect(DB_URL);
mongo.connection.on('connection', () => {
	console.log('okkkkkkk');
})
mongo.model('user', new mongo.Schema({
	username: String,
	password: String,
	menus: Array
}))

module.exports = mongo;