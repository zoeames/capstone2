'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Finds all lessons in a course',
  tags:['lessons'],
  validate: {
    params: {
      quizId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('hit add function from ROUTER');
    console.log('REQUEST', request.params);
    Quiz.quizcount (request.params.quizId, function(err, quizcount){
      console.log('definition quizcount ERR>>>>', err);
      console.log('definition quizcount >>>>', quizcount);
      reply({quizcount:quizcount}).code(err ? 400 : 200);
    });
  }
};
