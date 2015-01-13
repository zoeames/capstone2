'use strict';

var pg     = require('../postgres/manager'),
    AWS    = require('aws-sdk'),
    crypto = require('crypto'),
    path   = require('path'),
    concat = require('concat-stream');

function Quiz(){
}

Quiz.create = function(obj, cb){
  console.log('hit the server model', obj);
  pg.query('select add_quiz ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [obj.lessonId, obj.quizTitle, obj.quizQuestion, obj.answerA, obj.answerB, obj.answerC, obj.answerD, obj.answerE, obj.correctAnswer, obj.isActive, obj.isCompleted], function(err, results){
    console.log(err);
    cb(err, results && results.rows ? results.rows[0].add_quiz : null);
  });
};

Quiz.query = function(lessonid, cb){
  console.log('lesson server model lessonID', lessonid);
  pg.query('select * from find_quizzes($1)', [lessonid], function(err, results){
    cb(err, results && results.rows ? results.rows : null);
  });
};


Quiz.show = function(quizId, cb){
  pg.query('select * from show_quiz($1)', [quizId], function(err, results){
    console.log('server side model quiz SHOW', results);
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};

Quiz.vote = function(user, obj, cb){
  console.log('hit the server model', obj);
  pg.query('insert into quizanswers (userid, quizid, vote) values ($1, $2, $3)', [user.id, obj.quizId, obj.vote], function(err, results){
    console.log(err);
    cb(err, results);
  });
};

Quiz.start = function(quizId, cb){
  console.log('hit the server model', quizId);
  pg.query('UPDATE quizzes SET isactive = NOT isactive where id = $1;', [quizId], function(err){
    //console.log(err);
    cb(err);
  });
};


Quiz.closeQuiz = function(quizId, cb){
  console.log('hit the server model', quizId);
  pg.query('UPDATE quizzes SET iscompleted = NOT iscompleted where id = $1;', [quizId], function(err){
    //console.log(err);
    cb(err);
  });
};

Quiz.quizcount = function(quizId, cb){
  pg.query('select * from quiz_count($1)', [quizId], function(err, results){
    console.log('server side model quizcount', results);
    cb(err, results && results.rows ? results.rows : null);
  });
};


Quiz.upload = function(user, file, name, quizId, cb){
  var s3   = new AWS.S3();

  crypto.randomBytes(48, function(ex, buf){
    var hex = buf.toString('hex'),
      loc = user.token + '/' + quizId + '/' + hex + path.extname(name),
      url = 'https://s3.amazonaws.com/' + process.env.AWS_BUCKET + '/' + loc;

    pg.query('insert into photos (url, quizid) values ($1, $2) returning id', [url, quizId], function(err, results){
      if(err){return cb(err);}

      file.pipe(concat(function(buf){
        var params = {Bucket: process.env.AWS_BUCKET, Key: loc, Body: buf, ACL: 'public-read'};
        s3.putObject(params, cb);
      }));
    });
  });
};


module.exports = Quiz;
