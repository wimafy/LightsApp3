'use strict';

/**
 * @ngdoc overview
 * @name angularfireSlackApp
 * @description
 * # angularfireSlackApp
 *
 * Main module of the application.
 */
angular
  .module('lightShowApp', [
    'firebase',
    'angular-md5',
    'ui.router',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',

      })
      .state('homepage', {
        url: '/homepage',
        controller: 'HomepageCtrl as homepageCtrl',
        templateUrl: 'homepage/homepage.html',

      })
      .state('homepage.projects', {
        url: '/projects',
        templateUrl: 'homepage/projects.html',
        controller: 'ProjectsCtrl as projectsCtrl'
      })
      .state('homepage.templates', {
        url: '/templates',
        templateUrl: 'homepage/templates.html',
        controller: 'TemplatesCtrl as templatesCtrl'
      })
      .state('homepage.showplans', {
        url: '/showplans',
        templateUrl: 'homepage/showplans.html',
        controller: ''
      })

    $urlRouterProvider.otherwise('/');
  })
  .config(function(){
    // Replace this config with your Firebase's config.
    // Config for your Firebase can be found using the "Web Setup"
    // button on the top right of the Firebase Dashboard in the
    // "Authentication" section.

    var config = {
      apiKey: "AIzaSyBc6yn3_ydeKJ6ioDSPzkPfBqzkEff1BuA",
      authDomain: "lightsapp-b03f4.firebaseapp.com",
      databaseURL: "https://lightsapp-b03f4.firebaseio.com",
      storageBucket: "lightsapp-b03f4.appspot.com",
      messagingSenderId: "1022638520289"
    };

    firebase.initializeApp(config);
  });
