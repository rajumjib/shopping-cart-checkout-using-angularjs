'use strict';

describe('Service: productService', function () {

  // load the service's module
  beforeEach(module('shoppingCartApp'));

  // instantiate service
  var productService;
  beforeEach(inject(function (_productService_) {
    productService = _productService_;
  }));

  it('should do something', function () {
    expect(!!productService).toBe(true);
  });

});
