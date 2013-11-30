'use strict';

angular.module('onebyoneApp')
  .controller('MainCtrl', function ($scope) {
  })
  .controller('AboutCtrl', function ($scope) {
  })
  .directive('headerdirective', function() {
	  	return {
	  		restrict: 'E',
	  		templateUrl: 'views/partial-header.html'
	  	};
  })
  .directive('footerdirective', function() {
      return {
        restrict: 'E',
        templateUrl: 'views/partial-footer.html'
      };
  });;
