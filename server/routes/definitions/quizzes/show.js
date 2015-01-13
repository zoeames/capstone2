'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Show a quiz',
  tags:['quizzes'],
  validate: {
    params: {
      quizId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Quiz.show(request.params.quizId, function(err, quiz){
      console.log('definition quiz ERR>>>>', err);
      console.log('definition quiz >>>>', quiz);
      reply(quiz).code(err ? 400 : 200);
    });
  }
};
