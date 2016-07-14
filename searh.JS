var app = angular.module('nytimesApp', []);
var NY_TIMES_API_KEY = '8fb24da97f6c4acfbfc3b17972be03b5';
app.controller('MainCtrl', function($scope, $http) {

	$http({
		url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
		method: 'GET'
		params: {
			'api-key': NY_TIMES_API_KEY
		}
	}).then(function(response) {

		$scope.articles = response.data.results;
	});
