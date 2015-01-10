(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Lesson', ['$http', function($http){

      function create(lesson){
        console.log('hit add factory', lesson);
        return $http.post('/newlesson', lesson);
      }

      function query(courseId){
        console.log('hit add factory');
        return $http.get('/findlessons/' + courseId);
      }

      function show(lessonId){
        return $http.get('/lessons/' + lessonId);
      }

      return {create:create, query:query, show:show};
    }]);
})();
