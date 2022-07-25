var mongoose = require("mongoose") ;
var schema = mongoose.Schema ;

var AuthorSchema = new schema({
    first_name : {
        type: String,
        required: true,
        maxLength: 100,

    },
    family_name: {
        type: String,
        required: true,
        maxLength: 100,
    },
    date_of_birth : {type: Date},
    date_of_death : {type: Date},
}) ;

AuthorSchema.virtual('name').get(function() {
    let full_name = '';
    if(this.first_name && this.family_name){
        full_name = this.first_name + ' ' + this.last_name ; 

    }
    if(!this.first_name || !this.family_name) {
        full_name = '' ;
    }
    return full_name ;

}) ;

AuthorSchema.virtual('lifespan').get(function() {
    var life_span = '' ;
    if(this.date_of_birth && this.date_of_death){
        life_span = this.date_of_death.getYear().toString() -  this.date_of_birth.getYear().toString() ;
    }
    return life_span ;

}) ;


// virtual url ( hardcoded )

AuthorSchema.virtual('url').get(function(){
    return "/catalog/author/" + this._id ;
}) ;

module.exports = mongoose.model('Author',AuthorSchema) ;


