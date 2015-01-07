(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('LessonsCtrl', ['$rootScope', '$scope', function($rootScope, $scope){
      $scope.files = [];
/*
      $scope.create = function(note){
        $scope.count = 0;
        Lesson.create(note).then(function(response){
          console.log('THIS IS THE lesson response.data >>>>>', response.data);
          $scope.lesson = {};
          Lesson.upload(response.data.lessonId, $scope.files);
        });
      };

      $scope.$on('upload', function(err, count){
        $scope.count = count;
        if($scope.count === $scope.files.length){
          $state.reload();
        }
      });
      */
    }]);
})();
