'use strict';

var Joi  = require('joi'),
  Course = require('../../../models/course');

module.exports = {
  description: 'Create a Note',
  tags:['notes'],
  validate: {
    payload: {
      courseId: Joi.string().required()
    }
  },
  handler: function(request, reply){
    //console.log('hit add function from ROUTER');
    //console.log('add.js credentials  >>>>', request.auth.credentials);
    //console.log('add.js payload  >>>>', request.payload);
    Course.add(request.auth.credentials, request.payload, function(err, courseId){
      reply({courseId:courseId}).code(err ? 400 : 200);
    });
  }
};
