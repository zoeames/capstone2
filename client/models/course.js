(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Course', ['$http', function($http){

      function create(course){
        return $http.post('/newcourse', course);
      }

      function add(courseId){
        return $http.post('/addcourse', courseId);
      }
      return {create:create, add:add};
    }]);
})();
