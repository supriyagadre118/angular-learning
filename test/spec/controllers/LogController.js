'use strict';

describe('Controller: LogController', function () {

  // load the controller's module
  beforeEach(module('angularLearningProjectApp'));

  var LogController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogController = $controller('LogController', {
      $scope: scope
    });
  }));

  it('should display proper msg on console', function () {
    expect(scope.message).toBe('Hello Angular World!');
  });
});
