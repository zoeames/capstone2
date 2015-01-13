/* jshint unused:false*/

(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('QuizDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', 'Quiz', '$window', function($rootScope, $scope, Course, $state, Lesson, Quiz, $window){
      $scope.countA = 0;
      $scope.countB = 0;
      $scope.countC = 0;
      $scope.countD = 0;
      $scope.countE = 0;

      Quiz.show($state.params.quizId).then(function(response){
        console.log('THIS IS THE QUIZ', response.data);
        $scope.quiz = response.data;
      });

      $scope.vote = function(vote){
        $scope.myvote = {'vote' : vote, 'quizId': $state.params.quizId};
        console.log($scope.myvote);
        Quiz.vote($scope.myvote).then(function(response){
          toastr.success('Vote successful!');
          $state.go('lesson', {courseId:$state.params.courseId, lessonId:$state.params.lessonId});
        }, function(){
          toastr.error('Error submitting vote, try again.');
          console.log('error');
        });
      };


      Course.show($state.params.courseId).then(function(response){
        console.log('THIS is the course', response.data);
        $scope.course = response.data;
      });

      Quiz.quizCount($state.params.quizId).then(function(response){
        //console.log(response.data.quizcount);
        for(var i= 0; i<response.data.quizcount.length; i++){
          console.log(response.data.quizcount[i]);
          if(response.data.quizcount[i].quizVote === 'A'){
            $scope.countA=response.data.quizcount[i].voteCount*1;
          }else if (response.data.quizcount[i].quizVote === 'B'){
            $scope.countB=response.data.quizcount[i].voteCount*1;
          }else if (response.data.quizcount[i].quizVote === 'C'){
            $scope.countC=response.data.quizcount[i].voteCount*1;
          }else if (response.data.quizcount[i].quizVote === 'D'){
            $scope.countD=response.data.quizcount[i].voteCount*1;
          }else{
            $scope.countE=response.data.quizcount[i].voteCount*1;
          }
        }
        $scope.plotMe();
      });

      $scope.startQuiz = function(quizId){
        console.log(quizId);
        Quiz.start(quizId).then(function(response){
          console.log(response.data);
        });
        $window.location.reload();
      };

      $scope.closeQuiz = function(quizId){
        console.log(quizId);
        Quiz.start(quizId).then(function(response){
          console.log(response.data);
        });
        Quiz.closeQuiz(quizId).then(function(response){
          console.log(response.data);
        });
        $window.location.reload();
      };

      $scope.plotMe = function(){
        var chart = AmCharts.makeChart('chartdiv', {
          'type': 'serial',
          'theme': 'none',
          'dataProvider': [{
            'Answer Choice': 'A',
            'students': $scope.countA
          }, {
            'Answer Choice': 'B',
            'students': $scope.countB
          }, {
            'Answer Choice': 'C',
            'students': $scope.countC
          }, {
            'Answer Choice': 'D',
            'students': $scope.countD
          }, {
            'Answer Choice': 'E',
            'students': $scope.countE
          }],
          'valueAxes': [{
            'gridColor':'#FFFFFF',
            'gridAlpha': 0.2,
            'dashLength': 0,
            'labelsEnabled': true,
            'title': 'Number of Students'
          }],
          'gridAboveGraphs': true,
          'startDuration': 1,
          'graphs': [{
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 0.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'students'
          }],
          'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'Answer Choice',
          'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0,
            'tickPosition':'start',
            'tickLength':20,
            'title': 'Answer Choices'
          },
          'exportConfig':{
            'menuTop': 0,
            'menuItems': [{
              'icon': '/lib/3/images/export.png',
              'format': 'png'
            }]
          }
        });
      };
  }]);
})();
