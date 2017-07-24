var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;
module.exports = {
	index: function(req, res){
		console.log('find function users controller /server/controllers/users.js');
		User.find({}, function(err, users){
			if(err){
				console.log(err);
				// res.status(401).json({message: "somethign went worng"})
			} else {
				console.log(users)
				res.json(users);
			}
		})		
	},
	add: function(req, res){
		console.log('fourth: create function users controller /server/controllers/users.js');		
		User.create(req.body, function(err, user){
			console.log("sending json back to user factory check browser console")				
			if(err){
				console.log("something went wrong" + err.message);
        res.status(401).json({message: "something went wrong"})
			} else {
				res.json(user);
			}
		})
	},
	show: function(req, res){
		// retrieve single user
		// this is how we retrieve the users id
		console.log(req.body.id)
	},
	delete: function(req, res){
		console.log('delete function entered for '+ req.body._id);		
		User.remove({_id: req.body._id}, function(err, user){
			console.log("sending json from delete")				
			if(err){
				console.log("something went wrong with DELETE" + err.message);
        res.status(401).json({message: "something went wrong"})
			} else {
				console.log("delete successful")
				res.json(user);
			}
		})
	},
}

// module.exports = new UsersController();