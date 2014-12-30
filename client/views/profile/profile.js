(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('ProfileCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
        if($rootScope.rootuser.isadmin === 'true'){
            $scope.institutionStatus='Professor';
        }else{
            $scope.institutionStatus='Student';
        }
    }]);
})();
