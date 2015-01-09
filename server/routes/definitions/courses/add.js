'use strict';

var Joi  = require('joi'),
  Course = require('../../../models/course');

module.exports = {
  description: 'adds a course to mycourses',
  tags:['profile', 'courses'],
  validate: {
    payload: {
      courseId: Joi.string().required()
    }
  },
  handler: function(request, reply){
    //console.log('hit add function from ROUTER');
    //console.log('add.js credentials  >>>>', request.auth.credentials);
    //console.log('add.js payload  >>>>', request.payload);
    Course.add(request.auth.credentials, request.payload, function(err, courseStatus){
      console.log(courseStatus);
      reply(courseStatus).code(err ? 400 : 200);
    });
  }
};
