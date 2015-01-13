/* jshint unused:false*/

(function(){
  'use strict';

  angular.module('hapi-auth')
    .controller('QuizDetailCtrl', ['$rootScope', '$scope', 'Course', '$state', 'Lesson', 'Quiz', '$window', function($rootScope, $scope, Course, $state, Lesson, Quiz, $window){
      Quiz.show($state.params.quizId).then(function(response){
        console.log(response.data);
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
        console.log(response.data);
        $scope.course = response.data;
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

      var chart = AmCharts.makeChart('chartdiv', {
        'type': 'serial',
        'theme': 'none',
        'dataProvider': [{
          'Answer Choice': 'A',
          'students': 2025
        }, {
          'Answer Choice': 'B',
          'students': 1809
        }, {
          'Answer Choice': 'C',
          'students': 1322
        }, {
          'Answer Choice': 'D',
          'students': 1122
        }, {
          'Answer Choice': 'E',
          'students': 395
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
    }]);
})();
