(function(){
'use strict';

angular.module(
  'gdg.integrantes.detalle',
  [
    'ui.router','ui.bootstrap'
  ])
  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider , $http) {
        $stateProvider
 .state('app.integrantes.detalle', {
          url: '/{id:[0-9]}',
          views: {
            'header@': {
              templateUrl: './app/layout/header.html',
              controller: function ($rootScope) {
                $rootScope.modSubTitle = 'Detalles';
              }
            },
            'content@': {
              templateUrl: './app/components/integrantes/detalle.html',
              controllerAs: 'vm',
              controller: function($stateParams,utils,  integrantesLista , $log ,Notif,  $modal, $window, $http, integrantes, $state ){
                var vm = this;
                vm.id = $stateParams.id;
                vm.integrante = utils.findById(integrantesLista, vm.id);           
                vm.path = 'integrantes'; 
              }
            }
          }
        })        
      }
    ]
  )                
})();