'use strict';

describe('Controller: ProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var ProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsCtrl = $controller('ProductsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});


describe("Controller: ProductsCtrl", function() {
    
    var $rootScope, $scope;
    var $controller;
    var productsCtrl;

    beforeEach(module("shoppingCartApp"));

    beforeEach(inject(function($injector) {

        $rootScope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
        $scope = $rootScope.$new();

    }));

    beforeEach(inject(function($controller) {
        productsCtrl = $controller("ProductsCtrl", {$scope: $scope});

    }));

    it("Should say hello", function() {
        expect(productsCtrl.message).toBe("Hello");
    });

});

describe("Controller: ProductsCtrl", function() {
  
    var $scope;
    var controller;

    beforeEach(function() {

        module("shoppingCartApp");

        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("ProductsCtrl", {$scope: $scope});

        });

    });

    it("Should say hello", function() {
        expect(controller.message).toBe("Hello");
    });

});
