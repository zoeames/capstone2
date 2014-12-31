'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Register a User',
  tags:['users'],
  validate: {
    payload: {
      institutionId: Joi.string().min(3).max(50).required(),
      password: Joi.string().min(3).required(),
      avatar: Joi.string().required(),
      firstName: Joi.string().min(3).max(50).required(),
      lastName: Joi.string().min(3).max(50).required(),
      email: Joi.string().min(3).max(255).required(),
      isAdmin: Joi.string().min(4).max(5).required()
    }
  },
  auth: false,
  handler: function(request, reply){
    console.log('request.payload REGISTER:', request.payload);
    User.register(request.payload, function(err){
      console.log('THIS IS THE ERROR in register:', err);
      reply().code(err ? 400 : 200);
    });
  }
};
