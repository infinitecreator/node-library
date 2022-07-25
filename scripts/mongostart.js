var mongoose = require('mongoose');
console.log('1') ;

const DB = {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    db: process.env.MONGO_DBNAME,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  };

  let mongoURI =
  "mongodb://" +
  DB.host +
  ":" +
  DB.port +
  "/" +
  DB.db +
  "?authSource=admin" +
  "&socketTimeoutMS=180000&connectTimeoutMS=180000";
if (DB.user && DB.pass) {
  //mongoURI = 'mongodb://' + DB.user + ':' + DB.pass + '@' + DB.host + ':' + DB.port + '/' + DB.db + '?authSource=admin';
  // mongodb://niraj.kumar:jfjfjfjjfjfj@localhost:36018/library?authSource=admin
  mongoURI =
    "mongodb://" +
    DB.user +
    ":" +
    DB.pass +
    "@" +
    DB.host +
    ":" +
    DB.port +
    "/" +
    DB.db +
    "?authSource=admin" +
    "&socketTimeoutMS=180000&connectTimeoutMS=180000";
}

console.log(mongoURI, 'mongoURI') ;

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection ;

// printing the connection object 

// console.log(db,'db') ;
db.on('error', console.error.bind(console, 'MongoDB connection error')) ;
db.on('connected', ()=> {
  console.log('database connected') ;
} )
// console.log(db.on,'db.on') ;