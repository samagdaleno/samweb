'use strict';

/**
 * @ngdoc overview
 * @name samWebApp
 * @description
 * # samWebApp
 *
 * Main module of the application.
 */
angular
  .module('samWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
     'ngMd5'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chart', {
            templateUrl: 'views/chart.html',
            controller: 'ChartCtrl',
            controllerAs: 'chart'
        })
      .when('/marvel', {
        templateUrl: 'views/marvel.html',
        controller: 'MarvelCtrl',
        controllerAs: 'marvel'
       })
      .otherwise({
        redirectTo: '/'
      });
  });
