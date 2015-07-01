(function(){
'use strict';

angular.module(
  'gdg'
  )
  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
          .otherwise('/');

        $stateProvider

        .state('app', {

          url: '/',

          views: {
            'header': {
              templateUrl: './app/layout/header.html'
            }
          }
        })


      }
    ]
  )


})();