(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('CoursesCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
        $scope.newcourse = {};
        $scope.topics = [
          {name:'Astronomy'},
          {name:'Physics'},
          {name:'Biology'},
          {name:'Chemistry'},
          {name:'Math'},
          {name:'Foreign Language'},
          {name:'History'},
          {name:'Humanities'},
          {name:'Other'}];
    }]);
})();
