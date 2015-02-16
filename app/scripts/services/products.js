'use strict';

/**
 * @ngdoc service
 * @name shoppingCartApp.productService
 * @description
 * # productService
 * Service in the shoppingCartApp.
 */
/*
angular.module('shoppingCartApp')
  .service('ProductService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
  });
*/
angular.module('shoppingCartApp')
  .factory('ProductService', ['$resource',
    function($resource){

	  return $resource('../data/product/:productId.json', {}, {
	    query: {method:'GET', params:{productId:'products'}, isArray:true}
	  });

	}]);