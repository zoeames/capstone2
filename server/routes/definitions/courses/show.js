'use strict';

var Joi  = require('joi'),
  Course = require('../../../models/course');

module.exports = {
  description: 'Show Course',
  tags:['courses'],
  validate: {
    params: {
      courseId: Joi.number().required()
    }
  },
  handler: function(request, reply){
    Course.show(request.params.courseId, function(err, course){
      reply(course).code(err ? 400 : 200);
    });
  }
};
