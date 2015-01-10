'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/Quiz');

module.exports = {
  description: 'Create a new quiz',
  tags:['quizzes'],
  validate: {
    payload: {
      lessonId: Joi.string().required(),
      quizTitle: Joi.string().required(),
      quizQuestion: Joi.string().required(),
      answerA: Joi.string().required(),
      answerB: Joi.string().required(),
      answerC: Joi.string().required(),
      answerD: Joi.string().required(),
      answerE: Joi.string().required(),
      correctAnswer: Joi.string().required(),
      isActive: Joi.string().required(),
      isCompleted: Joi.string().required()
    }
  },
  handler: function(request, reply){
    console.log('hit the controller with joi', request.payload);
    Quiz.create(request.payload, function(err, quizId){
      console.log('THIS IS THE quizid <<<<<<<<<< ', quizId);
      reply({quizId:quizId}).code(err ? 400 : 200);
    });
  }
};
