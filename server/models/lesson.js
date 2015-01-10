'use strict';

var pg = require('../postgres/manager');

function Lesson(){
}

Lesson.create = function(obj, cb){
  console.log('hit the server model');
  pg.query('select add_lesson($1, $2, $3, $4)', [obj.courseId, obj.lessonTitle, obj.lessonDate, obj.lessonSummary], function(err, results){
    console.log('SERVER results add lesson:', results);
    cb(err, results && results.rows ? results.rows[0].add_lesson : null);
  });
};

Lesson.query = function(courseid, cb){
  console.log('lesson server model courseID', courseid);
  pg.query('select * from find_lessons($1)', [courseid], function(err, results){
    cb(err, results && results.rows ? results.rows : null);
  });
};


Lesson.show = function(lessonId, cb){
  pg.query('select * from show_lesson($1)', [lessonId], function(err, results){
    console.log('server side model lesson SHOW', results);
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};


module.exports = Lesson;
