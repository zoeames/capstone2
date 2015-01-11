'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                     config: require('../definitions/static/angular')},
  {method: 'post',   path: '/register',                     config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',                        config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',                       config: require('../definitions/users/logout')},
  {method: 'get',    path: '/status',                       config: require('../definitions/users/status')},
  {method: 'post',   path: '/newcourse',                    config: require('../definitions/courses/create')},
  {method: 'post',   path:'/addcourse',                     config: require('../definitions/courses/add')},
  {method: 'get',    path: '/findcourses',                  config: require('../definitions/courses/query')},
  {method: 'get',    path: '/courses/{courseId}',           config: require('../definitions/courses/show')},
  {method: 'post',   path:'/newlesson',                     config: require('../definitions/lessons/create')},
  {method: 'get',    path: '/findlessons/{courseId}',       config: require('../definitions/lessons/query')},
  {method: 'get',    path: '/lessons/{lessonId}',           config: require('../definitions/lessons/show')},
  {method: 'post',   path:'/newquiz',                       config: require('../definitions/quizzes/create')},
  {method: 'post',   path:'/quizzes/{quizId}/upload',       config: require('../definitions/quizzes/upload')},
  {method: 'get',    path: '/findquizzes/{lessonId}',       config: require('../definitions/quizzes/query')},
  {method: 'get',    path: '/quizzes/{quizId}',             config: require('../definitions/quizzes/show')},
  {method: 'post',   path:'/vote',                          config: require('../definitions/quizzes/vote')}
];
