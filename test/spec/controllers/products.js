'use strict';

describe('Controller: ProductController', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var productController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();
    productController = $controller('ProductController', {$scope: scope});
  }));

  it("Should say hello", function() {
        expect(productController.message).toBe("Hello");
  });
});


describe("Controller: ProductController", function() {
    
    var $rootScope, $scope;
    var $controller;
    var productController;

    beforeEach(module("shoppingCartApp"));

    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $scope = $rootScope.$new();
    }));

    beforeEach(inject(function($controller) {
        productController = $controller("ProductController", {$scope: $scope});
    }));

    it("Should say hello", function() {
        expect(productController.message).toBe("Hello");
    });

});

describe("Controller: ProductController", function() {
  
    var $scope;
    var controller;

    beforeEach(function() {

        module("shoppingCartApp");

        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("ProductController", {$scope: $scope});
        });

    });

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });

});
