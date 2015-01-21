(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('LessonDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', 'Quiz', function($rootScope, $scope, Course, $state, Lesson, Quiz){
      $scope.courseId = $state.params.courseId;
      $scope.lessonId = $state.params.lessonId;
      $scope.moment = moment;

      Lesson.show($state.params.lessonId).then(function(response){
        console.log(response.data);
        $scope.lesson = response.data;
      });

      $scope.createQuiz = function(){
        $state.go('newquiz', {courseId:$state.params.courseId, lessonId:$state.params.lessonId});
      };

      Quiz.query($state.params.lessonId).then(function(response){
        console.log('client findQuizzes >>>> ', response.data);
        $scope.quizzes = response.data.quizzes;
        //debugger;
      });
    }]);
})();
