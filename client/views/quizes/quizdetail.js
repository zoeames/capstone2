(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('QuizDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', 'Quiz', function($rootScope, $scope, Course, $state, Lesson, Quiz){
      Quiz.show($state.params.quizId).then(function(response){
        console.log(response.data);
        $scope.quiz = response.data;
      });
    }]);
})();
