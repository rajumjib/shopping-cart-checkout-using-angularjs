'use strict';

describe('Service: ProductService', function () {

  // load the service's module
  beforeEach(module('shoppingCartApp'));

  // instantiate service
  var productService;
  beforeEach(inject(function (_ProductService_) {
    productService = _ProductService_;
  }));

  it('should do something', function () {
    expect(!!productService).toBe(true);
  });

});
