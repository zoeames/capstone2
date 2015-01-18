/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Quiz       = require('../../server/models/quiz'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb(),
    fs         = require('fs');

describe('User', function(){
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a Quiz object', function(done){
      var quiz = new Quiz({userId:'1'});

      expect(quiz).to.be.instanceof(Quiz);
      done();
    });
  });

  describe('.create', function(){
    it('should create a quiz', function(done){
      Quiz.create({answerA: 'asdfasd', answerB: '323', answerC: 'sdfs', answerD: 'sdfs', answerE: 'asdfd', correctAnswer: 'answerD', isActive: 'false', isCompleted: 'false', lessonId:'1', quizQuestion: 'asdfe', quizTitle: 'awerwer'}, function(err, results){
        expect(err).to.be.null;
        expect(results).to.be.above(0);
        done();
      });
    });
    it('should NOT create a quiz - no title', function(done){
      Quiz.create({answerA: 'asdfasd', answerB: '323', answerC: 'sdfs', answerD: 'sdfs', answerE: 'asdfd', correctAnswer: 'answerD', isActive: 'false', isCompleted: 'false', lessonId:'1', quizQuestion: 'asdfe'}, function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.show', function(){
    it('should show a quiz', function(done){
      Quiz.show(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
  describe('.vote', function(){
    it('should create a vote', function(done){
      Quiz.vote({id:'1'}, {quizId:'1', vote:'A'}, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
    it('should NOT create a vote - no userId', function(done){
      Quiz.vote({}, {quizId:'1', vote:'A'}, function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.start', function(){
    it('should start a quiz', function(done){
      Quiz.start(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
  describe('.closeQuiz', function(){
    it('should close a quiz', function(done){
      Quiz.closeQuiz(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
  describe('.quizcount', function(){
    it('should show number of votes for a quiz', function(done){
      Quiz.quizcount(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
    it('should NOT show number of votes for a quiz - no quizId', function(done){
      Quiz.quizcount('', function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.upload', function(){
    it('should upload an image', function(done){
      var file = fs.createReadStream(__dirname + '/../fixtures/flag.png');
      Quiz.upload({token:'tok'}, file, 'flag.png', 1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
    it('should NOT upload an image - no quizId', function(done){
      var file = fs.createReadStream(__dirname + '/../fixtures/flag.png');
      Quiz.upload({token:'tok'}, file, 'flag.png', '', function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.query', function(){
    it('should query all quizzes from a lesson', function(done){
      Quiz.query(1, function(err, results){
        expect(err).to.be.null;
        expect(results).to.have.length(1);
        done();
      });
    });
    it('should NOT query all quizzes from a lesson - no lessonId', function(done){
      Quiz.query('', function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
});
