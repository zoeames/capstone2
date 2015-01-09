(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('LessonsCtrl', ['$rootScope', '$scope', 'Lesson', '$state', function($rootScope, $scope, Lesson, $state){
      $scope.lesson={};
      $scope.lesson.courseId = $state.params.courseId;
      $scope.create = function(lesson){
        Lesson.create(lesson).then(function(response){
          console.log('client lessons.js >>>> ', response.data);
          $scope.lesson={};
        });
      };
    }]);
})();
