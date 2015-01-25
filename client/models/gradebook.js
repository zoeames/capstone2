(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Gradebook', ['$http', function($http){

      function query(courseId){
        console.log('hit add factory');
        return $http.get('/findgradebook/' + courseId);
      }

      return {query:query};
    }]);
})();
