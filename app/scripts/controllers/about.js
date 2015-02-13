'use strict';

/**
 * @ngdoc function
 * @name shoppingCartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the shoppingCartApp
 */
angular.module('shoppingCartApp')
  .controller('AboutCtrl', function ($scope) {
    
    $scope.emailAddress='';

    $scope.showEmail = function(clickEvent) {
        $scope.emailAddress='0nline4help@gmail.com';
        if(clickEvent)
        	$(clickEvent.target).hide();
    };

  });
