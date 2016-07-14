var app = angular.module('movieApp',['ngRoute']);

app.controller('MainCtrl', function($scope, $http) {
	$scope.movieSearch=function() {
		$http({
			url: "http://www.omdbapi.com/?",
			method: "GET", 
			params:{
				s: $scope.msearch,
			}
		}).then(function(response){
			console.log(response);
		});
	}
});
