var app = angular.module('nytimesApp', []);
var NY_TIMES_API_KEY = '8fb24da97f6c4acfbfc3b17972be03b5';
app.controller('MainCtrl', function($scope, $http) {

	$http({
		url: 'https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code'
		method: 'GET'
	
	}).then(function(response) {

		$scope.articles = response.data.results;
	});
