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
            toastr.success('User successfully registered.');
            $state.go('login');
          }, function(){
            toastr.error('Error during user registration, try again.');
            $scope.user = {};
          });
        }else{
          console.log('USERSCTRL', $scope.user);
          User.login($scope.user).then(function(response){
            toastr.success('Successful login.');
            $rootScope.rootuser = response.data;
            $state.go('profile');
          }, function(){
            toastr.error('Error during login, try again.');
            $scope.user = {};
          });
        }
      };
    }]);
})();
