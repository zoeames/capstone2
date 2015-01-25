'use strict';

var Joi  = require('joi'),
  Gradebook = require('../../../models/gradebook');

module.exports = {
  description: 'Finds all students in a gradebook',
  tags:['gradebook'],
  validate: {
    params: {
      courseId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    console.log('hit add function from ROUTER');
    console.log('REQUEST', request.params);
    Gradebook.query (request.params.courseId, function(err, students){
      //console.log('query ERR>>>>', err);
      console.log('gradebook query >>>>', students);
      reply({students:students}).code(err ? 400 : 200);
    });
  }
};
