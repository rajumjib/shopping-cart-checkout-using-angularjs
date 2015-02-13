'use strict';

describe('Service: productslist', function () {

  // load the service's module
  beforeEach(module('shoppingCartApp'));

  // instantiate service
  var productslist;
  beforeEach(inject(function (_productslist_) {
    productslist = _productslist_;
  }));

  it('should do something', function () {
    expect(!!productslist).toBe(true);
  });

});
