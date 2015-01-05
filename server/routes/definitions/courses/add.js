'use strict';

var Joi  = require('joi'),
  Course = require('../../../models/course');

module.exports = {
  description: 'Create a Note',
  tags:['notes'],
  validate: {
    payload: {
      courseId: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Course.add(request.auth.credentials, request.payload, function(err, course){
      reply();
    });
  }
};
