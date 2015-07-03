'use strict';

/**
 * @ngdoc overview
 * @name <%= appName %>
 * @description
 * # <%= appName %>
 *
 * Main module of the application.
 */

angular.module('<%= appName %>', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
])

// Configurations
.config(function ($stateProvider) {

  // States
  $stateProvider
    
    .state('main', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })


})
.run(function( $state ) {

  $state.go('main');

});