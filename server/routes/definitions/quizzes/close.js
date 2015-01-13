'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Close a quiz',
  tags:['quizzes'],
  validate: {
    params: {
      quizId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Quiz.closeQuiz(request.params.quizId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
