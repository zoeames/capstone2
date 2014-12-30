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

describe('Users', function(){
  var cookie;
  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      var options = {
        method: 'post',
        url: '/login',
        payload:{
          institutionId: '9999999999',
          password: '123'
        }
      };

      server.inject(options, function(response){
        cookie = response.headers['set-cookie'][0].match(/hapi-cookie=[^;]+/)[0];
        done();
      });
    });
  });

  describe('post /register', function(){
    it('should register a new User', function(done){
      var options = {
        method: 'post',
        url: '/register',
        payload:{
          institutionId: '1111111111',
          password: '456',
          firstName:'Sam',
          lastName:'Jones',
          isAdmin:'false',
          email:'sam@aol.com',
          avatar: 'http://carleton.ca/law/wp-content/uploads/default-profile2-160x160.jpg'
    }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe('post /login', function(){
    it('should login a User', function(done){
      var options = {
        method: 'post',
        url: '/login',
        payload:{
          institutionId: '9999999999',
          password: '123'
        }
      };

      server.inject(options, function(response){
        expect(response.result.institutionid).to.equal('9999999999');
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe('delete /logout', function(){
    it('should logout a User', function(done){
      var options = {
        method: 'delete',
        url: '/logout',
        headers:{
          cookie: cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
  describe('get /status', function(){
    it('should get status of a User', function(done){
      var options = {
        method: 'get',
        url: '/status',
        headers:{
          cookie: cookie
        }
      };

      server.inject(options, function(response){
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
