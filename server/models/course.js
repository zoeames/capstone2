'use strict';

var pg = require('../postgres/manager');

function Course(){
}

Course.create = function(user, obj, cb){
  pg.query('select add_course($1, $2, $3, $4, $5)', [user.id, obj.courseTitle, obj.institutionId, obj.webpage, obj.topic], function(err, results){
    //console.log('SERVER results add Note:', err, results);
    cb(err, results && results.rows ? results.rows[0].add_course : null);
  });
};

Course.add = function(user, obj, cb){
  pg.query('insert into mycourses (userid, courseid) values ($1, $2)', [user.id, obj.courseId], function(err, results){
    //console.log(err, results);
    cb();
  });
};

Course.query = function(user, cb){
  pg.query('select * from find_courses($1)', [user.id], function(err, results){
    console.log('SERVER results query', results.rows);
    cb(err, results && results.rows ? results.rows : null);
  });
};
module.exports = Course;
