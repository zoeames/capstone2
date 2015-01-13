(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('QuizDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', 'Quiz', '$window', function($rootScope, $scope, Course, $state, Lesson, Quiz, $window){
      Quiz.show($state.params.quizId).then(function(response){
        console.log(response.data);
        $scope.quiz = response.data;
      });

      $scope.vote = function(vote){
        $scope.myvote = {'vote' : vote, 'quizId': $state.params.quizId};
        console.log($scope.myvote);
        Quiz.vote($scope.myvote).then(function(response){
          toastr.success('Vote successful!');
          $state.go('lesson', {courseId:$state.params.courseId, lessonId:$state.params.lessonId});
        }, function(){
          toastr.error('Error submitting vote, try again.');
          console.log('error');
        });
      };
      Course.show($state.params.courseId).then(function(response){
        console.log(response.data);
        $scope.course = response.data;
      });

      $scope.startQuiz = function(quizId){
        console.log(quizId);
        Quiz.start(quizId).then(function(response){
          console.log(response.data);
        });
        $window.location.reload();
      };

      $scope.closeQuiz = function(quizId){
        console.log(quizId);
        Quiz.closeQuiz(quizId).then(function(response){
          console.log(response.data);
          });
      };

    }]);
})();
