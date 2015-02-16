'use strict';

describe('Controller: ProductController', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var productController,
    scope;
  var dataFake=[{name: 'Nexus S'}, {name: 'Motorola DROID'}];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('../data/product/products.json')
      .respond(dataFake);

    scope = $rootScope.$new();
    productController = $controller('ProductController', {$scope: scope});
  }));

  it("Should contain list of products", function() {
    $httpBackend.flush();
    expect(scope.products.length).toBeGreaterThan(0);
  });

  it('should have products (2 products) fetched from xhr', function() {
    expect(scope.products).toEqual([]);
    $httpBackend.flush();

    expect(scope.products).toEqual(dataFake);
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

    it("Should contain list of products", function() {
        expect($scope.products.length).toBeGreaterThan(0);
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

    it("Should contain list of products", function() {
        expect($scope.products.length).toBeGreaterThan(0);
  });

});
