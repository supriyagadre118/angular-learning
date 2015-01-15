/**
 * Created by Supriya Gadre on 15/1/15.
 */
'use strict';

describe('Controller: SimpleController', function () {

  // load the controller's module
  beforeEach(module('angularLearningProjectApp'));

  var SimpleController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SimpleController = $controller('SimpleController', {
      $scope: scope
    });
  }));

  it('should display proper values in text box', function () {
    expect(scope.firstName).toBe('Supriya');
    expect(scope.lastName).toBe('Gadre');
  });
});
