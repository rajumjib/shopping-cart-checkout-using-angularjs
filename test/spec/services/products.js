'use strict';

describe('Service: ProductService', function () {

  // load the service's module
  beforeEach(module('shoppingCartApp'));

  // instantiate service
  var productService;
  beforeEach(inject(function (_ProductService_) {
    productService = _ProductService_;
  }));

  // Test service availability
  it('should have existence of Phone Service factory', inject(function(Phone) {
      expect(productService).toBeDefined();
  }));

});
