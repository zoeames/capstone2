/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    Course       = require('../../server/models/course'),
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
    it('should create a Course object', function(done){
      var course = new Course({userId:'1'});

      expect(course).to.be.instanceof(Course);
      done();
    });
  });

  describe('.create', function(){
    it('should create a course', function(done){
      Course.create({id:1}, {InstructorId: '1', courseTitle: 'Phys102: intro to physics', institutionId:'234235', semester: 'Fall 2015', webpage:'www.google.com', topic:'Astronomy'}, function(err, results){
        expect(err).to.be.null;
        expect(results).to.be.above(0);
        done();
      });
    });
    it('should NOT create a course - no title', function(done){
      Course.create({id:1}, {InstructorId: '1', institutionId:'234235', semester: 'Fall 2015', webpage:'www.google.com', topic:'Astronomy'}, function(err, results){
        expect(err).to.be.ok;
        done();
      });
    });
  });
  describe('.show', function(){
    it('should show a course', function(done){
      Course.show(1, function(err, results){
        expect(err).to.be.null;
        expect(results.courseTitle).to.equal('Phys101: intro to physics');
        done();
      });
    });
  });
  describe('.add', function(){
    it('should add a course', function(done){
      Course.add({id: 2}, 2, function(err, results){
        expect(err).to.be.null;
        done();
      });
    });
  });
});
