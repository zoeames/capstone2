(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('QuizCtrl', ['$rootScope', '$scope', '$state', 'Quiz', function($rootScope, $scope, $state, Quiz){
      $scope.files = [];
      $scope.count=0;

      $scope.create = function(quiz){
        $scope.count = 0;
        $scope.quiz.isActive = 'false';
        $scope.quiz.isCompleted = 'false';
        $scope.quiz.lessonId = $state.params.lessonId;
        Quiz.create(quiz).then(function(response){
          console.log('THIS IS THE response.data >>>>>', response.data);
          $scope.quiz = {};
          Quiz.upload(response.data.quizId, $scope.files);
        });
      };

      $scope.$on('upload', function(e, count){
        $scope.count = count;
        if($scope.count === $scope.files.length){
          $state.reload();
        }
      });
    }]);
})();
