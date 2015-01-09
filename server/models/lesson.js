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



module.exports = Lesson;
