'use strict';

describe('Controller: ProductdetailController', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var ProductdetailController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductdetailController = $controller('ProductdetailController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
