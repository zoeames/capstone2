'use strict';

var pg = require('../postgres/manager');

function Gradebook(){
}

Gradebook.query = function(courseid, cb){
  console.log('gradebook server model courseID', courseid);
  pg.query('select * from find_enrolledstudents($1)', [courseid], function(err, results){
    cb(err, results && results.rows ? results.rows : null);
  });
};


module.exports = Gradebook;
