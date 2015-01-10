'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Finds all quizzes in a lesson',
  tags:['lessons'],
  validate: {
    params: {
      lessonId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('hit add function from ROUTER');
    console.log('REQUEST', request.params);
    Quiz.query (request.params.lessonId, function(err, quizzes){
      //console.log('query ERR>>>>', err);
      console.log('query >>>>', quizzes);
      reply({quizzes:quizzes}).code(err ? 400 : 200);
    });
  }
};
