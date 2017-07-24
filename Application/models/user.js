var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    position: {type: String, required: true, minlength: 3},
    status: {
     game1: {type: String, required: true, minlength: 3 },
     game2: {type: String, required: true, minlength: 3}, 
     game3: {type: String, required: true, minlength: 3}
   }
},
{ timestamps: true });
// Remember we can treat mongoose.model() as a getter function or a setter function
// mongoose.model('User') will be used to retrieve user scema
// mongoose.model('User', UserSchema) will be used to set the userSchema to the User key
// we will retrieve this schema in our userController later

var User = mongoose.model('User', UserSchema);

// Custom Validations for user schema
// UserSchema.path('first_name').required(true, 'First Name cannot be blank');
// UserSchema.path('last_name').required(true, 'Last Name cannot be blank');
// UserSchema.path('email').required(true, 'Email cannot be blank');