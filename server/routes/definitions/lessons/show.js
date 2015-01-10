'use strict';

var Joi  = require('joi'),
  Lesson = require('../../../models/lesson');

module.exports = {
  description: 'Show a lesson',
  tags:['lessons'],
  validate: {
    params: {
      lessonId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Lesson.show(request.params.lessonId, function(err, course){
      reply(course).code(err ? 400 : 200);
    });
  }
};
