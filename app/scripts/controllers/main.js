'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:MainController
 * @description
 * # MainController
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('MainController', function ($scope) {
  	
    $scope.features = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
