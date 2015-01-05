'use strict';

var Joi  = require('joi'),
  Course = require('../../../models/course');

module.exports = {
  description: 'Create a Note',
  tags:['notes'],
  validate: {
    payload: {
      courseTitle: Joi.string().required(),
      institutionId: Joi.string().required(),
      topic: Joi.string().required(),
      webpage: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Course.create(request.auth.credentials, request.payload, function(err, note){
      reply();
    });
  }
};
