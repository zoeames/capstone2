'use strict';

var Joi  = require('joi'),
  Lesson = require('../../../models/lesson');

module.exports = {
  description: 'Finds all lessons in a course',
  tags:['lessons'],
  validate: {
    params: {
      courseId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('hit add function from ROUTER');
    console.log('REQUEST', request.params);
    Lesson.query (request.params.courseId, function(err, lessons){
      //console.log('query ERR>>>>', err);
      console.log('query >>>>', lessons);
      reply({lessons:lessons}).code(err ? 400 : 200);
    });
  }
};
