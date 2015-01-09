(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('LessonsCtrl', ['$rootScope', '$scope', 'Lesson', '$state', function($rootScope, $scope, Lesson, $state){
      $scope.lesson={};
      $scope.lesson.courseId = $state.params.courseId;

      $scope.create = function(lesson){
        Lesson.create(lesson).then(function(response){
          toastr.success('Lesson successfully added.');
          $state.go('course', {courseId:$scope.lesson.courseId});
          $scope.lesson={};
          }, function(){
            toastr.error('Error creating lesson, try again.');
            console.log('error');
        });
      };
    }]);
})();
