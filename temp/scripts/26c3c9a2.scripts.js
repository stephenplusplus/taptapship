'use strict';

// Declare app level module which depends on filters, and services
var taptapship = angular.module('taptapship', []);

taptapship.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'Home'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

'use strict';

taptapship.controller('Home', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});
