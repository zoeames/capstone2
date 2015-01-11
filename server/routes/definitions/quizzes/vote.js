'use strict';

var Joi  = require('joi'),
    Quiz = require('../../../models/Quiz');

module.exports = {
  description: 'Submits vote',
  tags:['quizzes'],
  validate: {
    payload: {
      vote: Joi.string().required(),
      quizId: Joi.string().required()
    }
  },
  handler: function(request, reply){
    console.log('hit the controller with joi', request.payload);
    Quiz.vote(request.auth.credentials, request.payload, function(err, voteId){
      console.log('THIS IS THE voteid <<<<<<<<<< ', voteId);
      reply({voteId:voteId}).code(err ? 400 : 200);
    });
  }
};
