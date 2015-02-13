'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('ProductsCtrl', function ($scope) {

  	this.message = "Hello";
  	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
