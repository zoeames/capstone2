'use strict';

var Joi  = require('joi'),
    User = require('../../../models/user');

module.exports = {
  description: 'Login a User',
  tags:['users'],
  validate: {
    payload: {
      institutionId: Joi.string().min(3).max(12).required(),
      password: Joi.string().min(3).required()
    }
  },
  cors:{origin: ['http://localhost:8100'],credentials: true},
  auth: false,
  handler: function(request, reply){
    console.log(request.payload);
    User.login(request.payload, function(user){
      if(!user){return reply().code(401);}
      request.auth.session.set(user);
      reply(user);
    });
  }
};
