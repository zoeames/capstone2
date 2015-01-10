(function(){
  'use strict';

  angular.module('hapi-auth', ['ui.router', 'angularFileUpload'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('profile',      {url:'/',                                                       templateUrl:'/views/profile/profile.html',        controller:'ProfileCtrl'})
        .state('register',     {url:'/register',                                               templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
        .state('login',        {url:'/login',                                                  templateUrl:'/views/users/users.html',            controller:'UsersCtrl'})
        .state('newcourse',    {url:'/newcourse',                                              templateUrl:'/views/courses/newcourse.html',      controller:'CoursesCtrl'})
        .state('course',       {url:'/courses/{courseId}',                                     templateUrl:'/views/courses/course_detail.html',  controller:'CourseDetailCtrl'})
        .state('newlesson',    {url:'/courses/{courseId}/newlesson',                           templateUrl:'/views/lessons/newlesson.html',      controller:'LessonsCtrl'})
        .state('grades',       {url:'/courses/{courseId}/grades',                              templateUrl:'/views/courses/grades.html',         controller:'CoursesCtrl'})
        .state('lesson',       {url:'/courses/{courseId}/lessons/{lessonId}',                  templateUrl:'/views/lessons/lesson_detail.html',  controller:'LessonDetailCtrl'})
        .state('newquiz',      {url:'/courses/{courseId}/lessons/{lessonId}/newquiz',          templateUrl:'/views/quizes/newquiz.html',        controller:'QuizCtrl'})
        .state('quiz',         {url:'/courses/{courseId}/lessons/{lessonId}/quizes/{quizId}',  templateUrl:'/views/quizes/quiz_detail.html',    controller:'QuizCtrl'});


      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
