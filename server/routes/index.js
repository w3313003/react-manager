var express = require('express');
var router = express.Router();
var Model = require('../model').model('user');
var multer = require('multer');

var upload = multer({
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, './uploads/');
		},
		filename: function (req, file, cb) {
			//file.originalname上传文件的原始文件名
			var changedName = (new Date().getTime()) + '-' + file.originalname;
			cb(null, changedName);
		}
	})
});


/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});



router.post('/img', function (req, res, next) {
	console.log(312312);
	next();
}, upload.single('files'), (req, res) => {
	res.json({
		code: '0',
		type: 'single',
		msg: '上传成功',
		originalname: req.file.originalname
	})
});

router.post('/login', (req, res) => {
	const { username, password } = req.body;
	// const Usermodels = new Model({
	// 	username,
	// 	password,
	// 	menus
	// });
	// Usermodels.save((err, doc) => {
	// 	if(err) {
	// 		return res.json({ code: 1, msg: "登录失败" });
	// 	};
	// });
	Model.findOne({ username, password }, (err, doc) => {
		if (err) {
			res.send({
				code: 1,
				msg: err
			})
		};
		if (doc) {
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
	});
})

module.exports = router;
