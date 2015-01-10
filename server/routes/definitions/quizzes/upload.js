'use strict';

var Joi  = require('joi'),
  Quiz = require('../../../models/quiz');

module.exports = {
  description: 'Upload a Photo',
  tags:['quizes'],
  validate: {
    params: {
      quizId: Joi.number().required()
    }
  },
  payload:{
    maxBytes: 4194304, // 2^22 ; 4MB
    output:'stream',
    parse: true
  },
  handler: function(request, reply){
    Quiz.upload(request.auth.credentials, request.payload.file, request.payload.file.hapi.filename, request.params.quizId, function(err){
      reply().code(err ? 400 : 200);
    });
  }
};
