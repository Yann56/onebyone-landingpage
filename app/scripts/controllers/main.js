'use strict';
/*jshint unused: false */

angular.module('onebyoneApp')
  .controller('MainCtrl', function ($scope) {
})
  .controller('ProjectCtrl', function ($scope) {
})
  .controller('TeamCtrl', function ($scope) {
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
    });
