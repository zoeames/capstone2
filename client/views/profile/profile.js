(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('ProfileCtrl', ['$rootScope', '$scope', 'Course', function($rootScope, $scope, Course){
      $scope.addNewCourse={};

      if($rootScope.rootuser.isadmin === 'true'){
        $scope.institutionStatus='Professor';
      }else{
        $scope.institutionStatus='Student';
      }

      $scope.addCourse = function(addNewCourse){
        Course.add(addNewCourse).then(function(response){
          console.log('client ADDcourse >>>> ', response.data);
          $scope.note={};
        }, function(){
          console.log('error');
        });
      };
    }]);
})();
