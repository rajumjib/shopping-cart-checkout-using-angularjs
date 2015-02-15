'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('AboutController', function ($scope) {
    
    $scope.emailAddress='';

    $scope.showEmail = function(clickEvent) {
        $scope.emailAddress='0nline4help@gmail.com';
        if(clickEvent)
        	$(clickEvent.target).hide();
    };

  });
