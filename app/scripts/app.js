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
      .otherwise({
        redirectTo: '/'
      });
  });
