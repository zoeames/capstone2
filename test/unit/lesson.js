/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Lesson       = require('../../server/models/lesson'),
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
    it('should create a Lesson object', function(done){
      var lesson = new Lesson({userId:'1'});

      expect(lesson).to.be.instanceof(Lesson);
      done();
    });
  });

  describe('.create', function(){
    it('should create a lesson', function(done){
      Lesson.create({courseId: '1', lessonTitle: 'Week 6: Dying Stars', lessonDate: 'Fri Jan 16 2015 00:00:00', lessonSummary: 'How stars die'}, function(err, results){
        expect(err).to.be.null;
        expect(results).to.be.above(0);
        done();
      });
    });
  });
  describe('.show', function(){
    it('should show a lesson', function(done){
      Lesson.show(1, function(err, results){
        expect(err).to.be.null;
        expect(results.lessonTitle).to.equal('Week 1');
        done();
      });
    });
  });
  describe('.query', function(){
    it('should query Lessons from a course', function(done){
      Lesson.query(1, function(err, results){
        expect(err).to.be.null;
        expect(results).to.have.length(1);
        done();
      });
    });
  });
});
