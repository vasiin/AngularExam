var app = angular.module('examApp', []);

app.controller('ExamController', function($scope, $window) {
  $scope.submitExam = function(type) {
    var candidateName = $scope.candidateName;
    if (!candidateName) {
      alert('Please enter your name.');
      return;
    }
    
    if (type === 'developer') {
      $window.location.href = 'https://exam-dev.itopplus.com/developer?name=' + candidateName;
    } else if (type === 'tester') {
      $window.location.href = 'https://exam-dev.itopplus.com/tester?name=' + candidateName;
    }
  };
});
