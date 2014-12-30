/* jshint expr:true */

'use strict';

var expect     = require('chai').expect,
    cp         = require('child_process'),
    h          = require('../helpers/helpers'),
    User       = require('../../server/models/user'),
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
    it('should create a User object', function(done){
      var user = new User({institutionId:'9999999999'});

      expect(user).to.be.instanceof(User);
      expect(user.institutionid).to.equal('9999999999');
      done();
    });
  });

  describe('.register', function(){
    it('should register a new User', function(done){
      User.register({institutionId:'3333333333', password:'123', avatar:'http://images.apple.com/global/elements/flags/16x16/usa_2x.png', firstName:'sam', lastName:'jones', email:'sam@aol.com', isAdmin:'false'}, function(err){
        expect(err).to.be.null;
        done();
      });
    });
    it('should NOT register a new User - duplicate', function(done){
      User.register({institutionId:'9999999999', password:'123', avatar:'http://images.apple.com/global/elements/flags/16x16/usa_2x.png'}, function(err){
        expect(err).to.be.ok;
        done();
      });
    });
  });

  describe('.login', function(){
    it('should login a User', function(done){
      User.login({institutionId:'9999999999', password:'123'}, function(user){
        expect(user.institutionid).to.equal('9999999999');
        done();
      });
    });
    it('should NOT login a User - bad institutionid', function(done){
      User.login({institutionId:'5555555555', password:'123'}, function(user){
        expect(user).to.be.undefined;
        done();
      });
    });
    it('should NOT login a User - bad password', function(done){
      User.login({institutionId:'9999999999', password:'wrong'}, function(user){
        expect(user).to.be.undefined;
        done();
      });
    });
  });
});
