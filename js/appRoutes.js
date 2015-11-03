console.log('loaded');
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function($routeProvider, $locationProvider){
	$routeProvider
  //for home page
	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
  //for portfolio page
  .when('/work', {
      templateUrl: 'pages/work.html',
      controller: 'workController'
  })
  //for fun page
  .when('/fun', {
      templateUrl: 'pages/fun.html',
      controller: 'funController'
  })
  //for contact page
  .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
  });
  //for non hash urls
  $locationProvider.html5Mode(true);
});