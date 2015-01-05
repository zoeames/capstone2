(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('CoursesCtrl', ['$rootScope', '$scope', 'Course', function($rootScope, $scope, Course){
      $scope.course = {};
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
      $scope.create = function(course){
        Course.create(course).then(function(response){
          console.log('client course.js >>>> ', response.data);
          $scope.note={};
        }, function(){
          console.log('error');
        });
      };
    }]);
})();
