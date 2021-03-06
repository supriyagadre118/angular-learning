'use strict';

/**
 * @ngdoc overview
 * @name angularLearningProjectApp
 * @description
 * # angularLearningProjectApp
 *
 * Main module of the application.
 */
  var app = angular.module('angularLearningProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/ScopeView.html'
      })
      .when('/scope', {
        templateUrl: 'views/ScopeView.html'
      })
      .when('/rootScope', {
        templateUrl: 'views/ScopeView.html'
      })
      .when('/scopeLifecycle', {
        templateUrl: 'views/ScopeLifecycleView.html'
      })
      .when('/expressions', {
        templateUrl: 'views/ExpressionsView.html'
      })
      .when('/digestCycle', {
        templateUrl: 'views/DataBindingView.html',
        controller : 'DataBindingController'
      })
      .when('/$injector', {
        templateUrl: 'views/DataBindingView.html',
        controller : 'DataBindingController'
      })
      .when('/$compile', {
        templateUrl: 'views/DataBindingView.html',
        controller : 'DataBindingController'
      })
      .when('/$apply', {
        templateUrl: 'views/DataBindingView.html',
        controller : 'DataBindingController'
      })
      .when('/$watch', {
        templateUrl: 'views/WatchView.html'
      })
      .when('/dirtyChecking', {
        templateUrl: 'views/DataBindingView.html',
        controller : 'DataBindingController'
      })
      .when('/simpleController', {
        templateUrl: 'views/SimpleControllersView.html',
        controller : 'SimpleController'
      })
      .when('/nestedController', {
        templateUrl: 'views/NestedControllersView.html',
        controller : 'firstControllerScope'
      })
      .when('/scopeInheritance', {
        templateUrl: 'views/ScopeInheritanceView.html',
        contoller : 'scopeInheritance'
      })
      .when('/log', {
        templateUrl: 'views/LogView.html',
        controller: 'LogController'
      })
      .when('/event', {
        templateUrl: 'views/EventView.html',
        controller: 'EventController'
      })
      .when('/repeat', {
        templateUrl: 'views/RepeatView.html'
      })
      .when('/specialProperties', {
        templateUrl: 'views/SpecialPropertiesView.html'
      })
      .when('/filter', {
        templateUrl: 'views/FilterView.html'
      })
      .when('/unitTesting', {
        templateUrl: 'views/TestView.html',
        controller : 'TestController'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
