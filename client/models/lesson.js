(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Lesson', ['$http', function($http){

      function create(lesson){
        console.log('hit add factory', lesson);
        return $http.post('/newlesson', lesson);
      }
/*
      function add(courseId){
        //console.log('hit add factory', courseId);
        return $http.post('/addcourse', courseId);
      }
*/
      function query(courseId){
        console.log('hit add factory');
        return $http.get('/findlessons/' + courseId);
      }
/*
      function show(courseId){
        return $http.get('/courses/' + courseId);
      }
      */
      return {create:create, query:query};
    }]);
})();
