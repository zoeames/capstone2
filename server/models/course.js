'use strict';

var pg = require('../postgres/manager');

function Course(){
}

Course.create = function(user, obj, cb){
  console.log('hit the server model');
  pg.query('select add_course($1, $2, $3, $4, $5, $6)', [user.id, obj.courseTitle, obj.institutionId, obj.semester, obj.webpage, obj.topic], function(err, results){
    console.log('SERVER results add Course:', err, results);
    cb(err, results && results.rows ? results.rows[0].add_course : null);
  });
};

Course.add = function(user, obj, cb){
  pg.query('select add_mycourse ($1, $2)', [user.id, obj.courseId], function(err, results){
    //console.log('ADD MODEL' , results.rowCount);
    var rows = results.rowCount.toString(),
        myresult;
    console.log('ADD MODEL rowcountType of' , typeof results.rowCount);
    if (rows !== '1') {
      myresult='created';
      console.log('COURSE not ADDED');
      pg.query('insert into mycourses (userid, courseid) values ($1, $2)', [user.id, obj.courseId], function(err, results){
      });
    }else{
      myresult='existed';
      console.log('COURSE ALREADY ADDED');
    }
    cb(err, myresult);
  });
};

Course.query = function(user, cb){
  pg.query('select * from find_courses($1)', [user.id], function(err, results){
    //console.log('SERVER results query', results.rows);
    cb(err, results && results.rows ? results.rows : null);
  });
};

Course.show = function(courseId, cb){
  pg.query('select * from show_course($1)', [courseId], function(err, results){
    //console.log('server side model model SHOW', results);
    cb(err, results && results.rows ? results.rows[0] : null);
  });
};



module.exports = Course;
