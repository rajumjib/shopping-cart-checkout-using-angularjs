'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:ProductsController
 * @description
 * # ProductsController
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('ProductController', ['$scope', 'ProductService', function ($scope, productService) {

  	 $scope.products = productService.query();
  	

  }]);
