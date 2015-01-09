'use strict';

var Joi  = require('joi'),
  Lesson = require('../../../models/lesson');

module.exports = {
  description: 'Create a new lesson',
  tags:['lessons'],
  validate: {
    payload: {
      courseId: Joi.string().required(),
      lessonTitle: Joi.string().required(),
      lessonDate: Joi.string().required(),
      lessonSummary: Joi.string().required()
    }
  },
  handler: function(request, reply){
    Lesson.create(request.payload, function(err, courseId){
      console.log('THIS IS THE courseid <<<<<<<<<< ', courseId);
      reply({courseId:courseId}).code(err ? 400 : 200);
    });
  }
};
