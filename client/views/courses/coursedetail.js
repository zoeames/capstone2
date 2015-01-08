(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('CourseDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', function($rootScope, $scope, Course, $state){
      $scope.course = {};

      $('.nav-toggle').click(function(){
        var collapse_content_selector = $(this).attr('href'),
            toggle_switch = $(this);
        $(collapse_content_selector).toggle(function(){
          if($(this).css('display')==='none'){
            toggle_switch.html('Show Course ID');
          }else{
            toggle_switch.html('Hide Course ID');
          }
        });
      });

      console.log('hi THIS IS THE STATE PARAMS', $state.params.courseId);
      Course.show($state.params.courseId).then(function(response){
        console.log(response.data);
        $scope.course = response.data;
      });
      $scope.createLesson = function(){
        //$state.go('newlesson');
        $state.go('newlesson', {courseId:$scope.course.courseId});
      };
    }]);
})();
