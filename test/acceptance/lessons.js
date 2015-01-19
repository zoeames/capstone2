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
  var cookie, courseId, lessonId;
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
          courseId = response.result.courseId;
          var options3 = {
            method: 'post',
            url: '/newlesson',
            payload:{
              courseId: '1',
              lessonDate: '2015-01-21T06:00:00.000Z',
              lessonSummary: 'this is a great lesson',
              lessonTitle: 'first lesson'
            },
            headers:{
              cookie:cookie
            }
          };
          server.inject(options3, function(response){
            lessonId = response.result.lessonId;
            done();
          });
        });
      });
    });
  });

  describe('post /newlesson', function(){
    it('should add a new lesson', function(done){
      var options = {
        method: 'post',
        url: '/newlesson',
        payload:{
          courseId: '2',
          lessonDate: '2015-01-21T06:00:00.000Z',
          lessonSummary: 'this is a great lesson',
          lessonTitle: 'first lesson'
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
    it('should NOT add a new lesson - no title', function(done){
      var options = {
        method: 'post',
        url: '/newlesson',
        payload:{
          courseId: '2',
          lessonDate: '2015-01-21T06:00:00.000Z',
          lessonSummary: 'this is a great lesson'
        },
        headers:{
          cookie:cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(400);
        done();
      });
    });
  });

  describe('get /findlessons/1', function(){
    it('should find all lessons in a course', function(done){
      var options = {
        method: 'get',
        url: '/findlessons/'+courseId,
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
  describe('get /lessons/1', function(){
    it('should show a lesson', function(done){
      var options = {
        method: 'get',
        url: '/lessons/'+ lessonId,
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
