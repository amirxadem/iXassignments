var app = angular.module('list', []); 

app.controller('ListCtrl', function($scope) {
  
  $scope.doAdd = function() {
    var numX = parseInt($scope.x);
    var numY = parseInt($scope.y);
    $scope.result = numX + numY;
  };
  $scope.doMultiply = function() {
    var numX = parseInt($scope.x);
    var numY = parseInt($scope.y);
    $scope.result = numX * numY;
  };
});