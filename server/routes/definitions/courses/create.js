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
      semester: Joi.string().required(),
      topic: Joi.string().required(),
      webpage: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Course.create(request.auth.credentials, request.payload, function(err, courseId){
      console.log('THIS IS THE courseid <<<<<<<<<< ', courseId);
      reply({courseId:courseId}).code(err ? 400 : 200);
    });
  }
};
