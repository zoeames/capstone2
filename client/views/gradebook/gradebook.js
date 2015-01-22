(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('GradesCtrl', ['$rootScope', '$scope', 'Course', '$state', function($rootScope, $scope, Course, $state){
      $scope.course = {};

      Course.show($state.params.courseId).then(function(response){
        console.log(response.data);
        $scope.course = response.data;
      });

    }]);
})();
