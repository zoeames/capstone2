/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    server     = require('../../server/index'),
    Lab        = require('lab'),
    lab        = exports.lab = Lab.script(),
    describe   = lab.describe,
    it         = lab.it,
    beforeEach = lab.beforeEach,
    db         = h.getdb();

describe('Courses', function(){
  var cookie, courseId;
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      var options1 = {
        method: 'post',
        url: '/login',
        payload:{
          institutionId: '9999999999',
          password: '123'
        }
      };

      server.inject(options1, function(response){
        cookie = response.headers['set-cookie'][0].match(/hapi-cookie=[^;]+/)[0];
        var options2 = {
          method: 'post',
          url: '/newcourse',
          payload:{
            courseTitle: 'intro 101',
            institutionId: '55555',
            semester: 'Fall 2015',
            topic: 'Other',
            webpage: 'www.aol.com'
          },
          headers:{
            cookie:cookie
          }
        };
        server.inject(options2, function(response){
          courseId = response.result.courseId
        done();
        });
      });
    });
  });

  describe('post /newcourse', function(){
    it('should add a new course', function(done){
      var options = {
        method: 'post',
        url: '/newcourse',
        payload:{
          courseTitle: 'intro to stuff',
          institutionId: '345345',
          semester: 'Fall 2016',
          topic: 'Other',
          webpage: 'www.aol.com'
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe('post /addcourse', function(){
    it('should add a new course', function(done){
      var options = {
        method: 'post',
        url: '/addcourse',
        payload:{
          courseId: '2'
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe('get /findcourses', function(){
    it('should add a new course', function(done){
      var options = {
        method: 'get',
        url: '/findcourses',
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe('get /courses/1', function(){
    it('should show a course', function(done){
      var options = {
        method: 'get',
        url: '/courses/'+ courseId,
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
