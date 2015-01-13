/* jshint loopfunc:true, camelcase:false */

(function(){
  'use strict';

  angular.module('hapi-auth')
    .factory('Quiz', ['$rootScope', '$http', '$upload', function($rootScope, $http, $upload){

      function create(quiz){
        console.log('hit add factory', quiz);
        return $http.post('/newquiz', quiz);
      }

      function query(lessonId){
        console.log('hit add factory');
        return $http.get('/findquizzes/' + lessonId);
      }

      function show(quizId){
        return $http.get('/quizzes/' + quizId);
      }

      function vote(myvote){
        console.log('hit add factory', myvote);
        return $http.post('/vote', myvote);
      }

      function start(quizId){
        console.log('hit add factory', quizId);
        return $http.post('/startquiz/' + quizId);
      }

      function closeQuiz(quizId){
        console.log('hit add factory', quizId);
        return $http.post('/closequiz/' + quizId);
      }

      function upload(quizId, files){
        var count = 0;
        for (var i = 0; i < files.length; i++){
          var file = files[i];
          $upload.upload({
            url: '/quizzes/' + quizId + '/upload',
            method: 'POST',
            file: file
          }).success(function(data, status, headers, config){
            count++;
            $rootScope.$broadcast('upload', count);
          }).error(function(){
            console.log('An error has occurred during a file upload');
          });
        }
      }

      return {create:create, query:query, show:show, vote:vote, upload:upload, start:start, closeQuiz:closeQuiz};
    }]);
})();
