// bon je commence par creer le model

const { model , Schema } = require('mongoose');


// mon model prend trois champs 
// NAME , EMAIL , PASSWORD
// vous pouvez ajouter les champs si vous voulez

const userSchema = new Schema({
    name : { String },
    email : { String } ,
    password : {String }
});

const user = model( 'user' , userSchema );

// toujour exporter le model

module.exports = user;
