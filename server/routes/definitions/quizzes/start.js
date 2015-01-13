'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Start a quiz',
  tags:['quizzes'],
  validate: {
    params: {
      quizId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('START quiz controller', request.params.quizId);
    Quiz.start(request.params.quizId, function(err, results){
      reply().code(err ? 400 : 200);
      console.log(results);
    });
  }
};
