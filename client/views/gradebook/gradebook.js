(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('GradesCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Gradebook', function($rootScope, $scope, Course, $state, Gradebook){
      $scope.courseId = $state.params.courseId;
      $scope.course = {};

      Course.show($state.params.courseId).then(function(response){
        console.log(response.data);
        $scope.course = response.data;
      });

      Gradebook.query($state.params.courseId).then(function(response){
        console.log('client findgradebook >>>> ', response.data);
        $scope.students = response.data.students;
        //debugger;
      });
    }]);
})();
