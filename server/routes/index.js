var menus = require('../public/javascripts/menus');
var express = require('express');
var router = express.Router();
var Model = require('../model').model('user');
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	// const Usermodels = new Model({
	// 	username,
	// 	password,
	// 	 menus
	// });
	// Usermodels.save((err, doc) => {
	// 	if(err) {
	// 		return res.json({ code: 1, msg: "登录失败" });
	// 	};
	// });
	Model.findOne({ username, password }, (err, doc) => {
		if(err) {
			res.send({
				code: 1,
				msg: err
			})
		}; 
		if(doc) {
			res.send({
				code: 0,
				msg: '登陆成功',
				data: doc
			})
		} else {
			res.send({
				code: 1,
				msg: '用户名密码错误'
			})
		}
	})
})

module.exports = router;
