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
          $scope.addNewCourse={};
        }, function(){
          console.log('error');
        });
      };

      Course.query().then(function(response){
        console.log('client findCourses >>>> ', response.data);
        $scope.myCourses = response.data.mycourses;
        debugger;
      });

    }]);
})();
