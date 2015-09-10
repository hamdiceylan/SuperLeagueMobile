angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ScorerCtrl', function($scope,$http) {
$http.get('http://api.webron.social/TFF/GetScorers').
  then(function(response) { 
      $scope.scorerList = response.data;
  }, function(response) {
  });
})

.controller('PointTableCtrl', function($scope,$http) {
$http.get('http://api.webron.social/TFF/GetActualList').
  then(function(response) { 
      $scope.teams = response.data;
  }, function(response) {
  });
})

.controller('liveScoreCtrl', function($scope, $stateParams,$http) {
  $http.get('http://api.webron.social/TFF/LiveScore/0').
  then(function(response) { 
      $scope.matches = response.data;
  }, function(response) {
  });
})

.controller('FixtureCtrl', function($scope, $stateParams, $http) {
  $http.get('http://api.webron.social/TFF/GetFixture/3').
  then(function(response) { 
      $scope.matches = response.data;
  }, function(response) {
  });
});
