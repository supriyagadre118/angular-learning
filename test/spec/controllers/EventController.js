/**
 * Created by Supriya Gadre on 15/1/15.
 */
'use strict';

describe('Controller: EventController', function () {

  // load the controller's module
  beforeEach(module('angularLearningProjectApp'));

  var EventController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventController = $controller('EventController', {
      $scope: scope
    });
  }));

  it('should display proper event on console', function () {
    expect(scope.$event).not.toBe('');
  });
});
