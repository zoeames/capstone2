(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Course', ['$http', function($http){

      function create(course){
        return $http.post('/newcourse', course);
      }

      return {create:create};
    }]);
})();
