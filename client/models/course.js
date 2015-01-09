(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Course', ['$http', function($http){

      function create(course){
        console.log('hit add factory', course);
        return $http.post('/newcourse', course);
      }

      function add(courseId){
        //console.log('hit add factory', courseId);
        return $http.post('/addcourse', courseId);
      }
      function query(){
        console.log('hit add factory');
        return $http.get('/findcourses');
      }

      function show(courseId){
        return $http.get('/courses/' + courseId);
      }
      return {create:create, add:add, query:query, show:show};
    }]);
})();
