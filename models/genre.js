var mongoose = require('mongoose') ;
var schema = mongoose.Schema ;
var GenreModel = new schema( {
    name : {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100, 
    }

}) ;


GenreModel.virtual('url').set(function(){
    return "./catalog/genre/" + this._id ;
}) ;

module.exports = mongoose.model('Genre',GenreModel);