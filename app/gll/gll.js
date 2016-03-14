'use strict';

angular.module('gllApp.gll', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gll', {
    templateUrl: 'gll/gll.html',
    controller: 'GLLProductsCtrl',
    resolve: {
      productLine: ['$http', function($http) {
        return $http.get('json/gll.json').then(function(response) {
          return response.data;
        });
      }]
    }
  });
}])

.controller('GLLProductsCtrl', ['$scope', 'productLine', function($scope, productLine) {
  $scope.products = productLine.products;
}]);