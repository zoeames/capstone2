(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('CoursesCtrl', ['$rootScope', '$scope', 'Course', '$state', function($rootScope, $scope, Course, $state){
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
          var c =''+response.data.courseId,
              addNewCourse ={courseId : c};
          console.log(addNewCourse);
          $scope.course={};
          Course.add(addNewCourse).then(function(response){
          }, function(){
            console.log('error');
          });
        }, function(){
          console.log('error');
        });
      };
      $scope.createLesson = function(){
        $state.go('newlesson');
        //$state.go('newlesson', {courseId:courseId});
      };
    }]);
})();
