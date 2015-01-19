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
    Lesson.create(request.payload, function(err, lessonId){
      console.log('THIS IS THE courseid <<<<<<<<<< ', lessonId);
      reply({lessonId:lessonId}).code(err ? 400 : 200);
    });
  }
};
