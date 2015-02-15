'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('shoppingCartApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
    });
  }));

  var eventFake, spanFake;

  beforeEach(function() {

    spanFake = document.createElement('SPAN');
    eventFake = {
      target: function() {
        retun;
      }

    };
   
    spyOn(eventFake, "target").and.callFake(function() {
      return spanFake;
    });

  });

  it('should get empty email', function () {
    expect(scope.emailAddress).toBe('');
  });

  it('should get the email address', function () {

    scope.showEmail();
    expect(scope.emailAddress).toBe('0nline4help@gmail.com');
  });

  xit('should hide the eye element', function () {

    /*
    expect(element('.value-entry input').css('display')).toBe('inline');
    expect(element('.value-entry select').css('display')).toBe('inline-block');
    expect(element('.value-entry input').css('display')).toBe('none');
    expect(element('.value-entry select').css('display')).toBe('none');
    expect(element('#some-id:visible').count()).toBe(1);
    expect(element('.value-entry input').hasClass('ng-hide')).toBe(true);
    */
    //expect(spanFake.style.display).toBeUndefined();
    scope.showEmail(eventFake);
    //expect(spanFake.style.display).toBe('');
    expect($(spanFake).css('display')).toBe('none');
  });

});
