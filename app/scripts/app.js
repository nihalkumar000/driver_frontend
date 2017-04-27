'use strict';

/**
 * @ngdoc overview
 * @name driver_frontend
 * @description
 * # driver_frontend
 *
 * Main module of the application.
 */

var driver_frontend= angular
  .module('driver_frontend', [
    'ui.router',
    'ngCookies',
    'datatables',
    'angucomplete-alt',
    '720kb.datepicker',
    'daterangepicker',
    'ngFileUpload'
  ]);



driver_frontend.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/customerapp');

  $stateProvider

  .state('customerapp', {
      url: '/customerapp',
      templateUrl: 'views/customerapp.html',
      controller:'customerAppCtrl'
    })
    .state('dashboard',{
      url : '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .state('driverapp',{
      url : '/driverapp/:id',
      templateUrl: 'views/driverapp.html',
      controller: 'driverAppCtrl'
    })
});

driver_frontend.filter("status", function(){
    return function(s) {
        if(s == 1){
            return "WAITING";
        }
        else if(s == 2 || s == 3){
            return "ONGOING";
        }
        else{
            return "COMPLETED";
        }
    };
})
