'use strict';

var Course = require('../../../models/course');

module.exports = {
  description: 'Create a Note',
  tags:['notes'],
  handler: function(request, reply){
    //console.log('hit add function from ROUTER');
    //console.log('add.js credentials  >>>>', request.auth.credentials);
    //console.log('add.js payload  >>>>', request.payload);
    Course.query (request.auth.credentials, function(err, mycourses){
      //console.log('query ERR>>>>', err);
      //console.log('query >>>>', mycourses);
      reply({mycourses:mycourses}).code(err ? 400 : 200);
    });
  }
};
