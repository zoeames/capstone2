(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('LessonDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', function($rootScope, $scope, Course, $state, Lesson){
      $scope.course = {};



      console.log('hi THIS IS THE STATE PARAMS courseid', $state.params.courseId);
      console.log('hi THIS IS THE STATE PARAMS lessonid', $state.params.lessonId);
      Lesson.show($state.params.lessonId).then(function(response){
        console.log(response.data);
        $scope.lesson = response.data;
      });

      $scope.createQuiz = function(){
        $state.go('newquiz', {courseId:$state.params.courseId, lessonId:$state.params.lessonId});
      };
/*
      Lesson.query($state.params.courseId).then(function(response){
        console.log('client findLessons >>>> ', response.data);
        $scope.lessons = response.data.lessons;
        //debugger;
      });
*/
    }]);
})();
