(function(){
  'use strict';

  angular.module('hapi-auth', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('profile',      {url:'/',                                        templateUrl:'/views/profile/profile.html'})
        .state('register',     {url:'/register',                                templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
        .state('login',        {url:'/login',                                   templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
        .state('newcourse',    {url:'/newcourse',                               templateUrl:'/views/courses/newcourse.html',      controller:'CoursesCtrl'})
        .state('course',       {url:'/courses/{courseId}',                      templateUrl:'/views/courses/course_detail.html',  controller:'CoursesCtrl'})
        .state('newlesson',    {url:'/courses/{courseId}/newlesson',            templateUrl:'/views/courses/newlesson.html',      controller:'CoursesCtrl'})
        .state('grades',       {url:'/courses/{courseId}/grades',               templateUrl:'/views/courses/grades.html',         controller:'CoursesCtrl'})
        .state('lesson',       {url:'/courses/{courseId}/{lessonId}',           templateUrl:'/views/courses/lesson_detail.html',  controller:'CoursesCtrl'})
        .state('newquiz',      {url:'/courses/{courseId}/{lessonId}/newquiz',   templateUrl:'/views/courses/newquiz.html',        controller:'CoursesCtrl'})
        .state('quiz',         {url:'/courses/{courseId}/{lessonId}/{quizId}',  templateUrl:'/views/courses/quiz_detail.html',    controller:'CoursesCtrl'});

      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
