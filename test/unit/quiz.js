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
    db         = h.getdb();

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
  });
  describe('.show', function(){
    it('should show a quiz', function(done){
      Quiz.show(1, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
