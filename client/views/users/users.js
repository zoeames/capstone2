(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('UsersCtrl', ['$rootScope', '$scope', '$state', 'User', function($rootScope, $scope, $state, User){
      $scope.user = {};
      $scope.mode = $state.current.name;

      $scope.submit = function(){
        if($scope.mode === 'register'){
          $scope.user.avatar = 'http://carleton.ca/law/wp-content/uploads/default-profile2-160x160.jpg';
          User.register($scope.user).then(function(response){
            $state.go('login');
          }, function(){
            $scope.user = {};
          });
        }else{
          console.log('USERSCTRL', $scope.user);
          User.login($scope.user).then(function(response){
            $rootScope.rootuser = response.data;
            $state.go('profile');
          }, function(){
            $scope.user = {};
          });
        }
      };
    }]);
})();
