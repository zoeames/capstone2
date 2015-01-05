'use strict';

var pg = require('../postgres/manager');

function Course(){
}

Course.create = function(user, obj, cb){
  pg.query('insert into courses (instructorid, coursetitle, institutionid, webpage, topic) values ($1, $2, $3, $4, $5)', [user.id, obj.courseTitle, obj.institutionId, obj.webpage, obj.topic], function(err, results){
    console.log(err, results);
    cb();
  });
};

module.exports = Course;
