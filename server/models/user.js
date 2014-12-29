'use strict';

var bcrypt  = require('bcrypt'),
    request = require('request'),
    path    = require('path'),
    AWS     = require('aws-sdk'),
    crypto  = require('crypto'),
    pg      = require('../postgres/manager');

function User(obj){
  this.institutionid = obj.institutionId;
  this.firstname = obj.firstName;
  this.lastname = obj.lastName;
  this.email = obj.email;
  this.isadmin = obj.isAdmin;
}

User.register = function(obj, cb){
  var user = new User(obj);
  user.password = bcrypt.hashSync(obj.password, 8);

  randomUrl(obj.avatar, function(file, avatar, token){
    user.avatar = avatar;
    user.token = token;
    //console.log('SERVER SIDE USER>>>>>>', user);
    pg.query('insert into users (institutionid, password, avatar, token, firstname, lastname, email, isadmin) values ($1, $2, $3, $4, $5, $6, $7, $8) returning id', [user.institutionid, user.password, user.avatar, user.token, user.firstname, user.lastname, user.email, user.isadmin], function(err, results){
      if(err){return cb(true);}
      download(obj.avatar, file, cb);
    });
  });
};

User.login = function(obj, cb){
  console.log('SERVER SIDE institutionID>>>>>>', obj.institutionId);
  pg.query('select * from users where institutionId = $1 limit 1', [obj.institutionId], function(err, results){
    if(err || !results.rowCount){return cb();}
    var isAuth = bcrypt.compareSync(obj.password, results.rows[0].password);
    if(!isAuth){return cb();}
    var user = results.rows[0];
    delete user.password;
    cb(user);
  });
};

function randomUrl(url, cb){
  var ext  = path.extname(url);

  crypto.randomBytes(48, function(ex, buf){
    var token  = buf.toString('hex'),
        file   = token + '/avatar' + ext,
        avatar = 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/' + file;
    cb(file, avatar, token);
  });
}

function download(url, file, cb){
  var s3 = new AWS.S3();

  request({url: url, encoding: null}, function(err, response, body){
    var params = {Bucket: process.env.AWS_BUCKET, Key: file, Body: body, ACL: 'public-read'};
    s3.putObject(params, cb);
  });
}

module.exports = User;
