(function(){
'use strict';

angular.module(
  'gdg.integrantes.editar',
  [
    'ui.router','ui.bootstrap'
  ])

  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider , $http) {

        $stateProvider
 .state('app.integrantes.editar', {
          url: '/{id:[0-9]}',
          views: {
            'header@': {
              templateUrl: './app/layout/header.html',
              controller: function ($rootScope) {
                $rootScope.modSubTitle = 'Detalles';
              }
            },
            'content@': {
              templateUrl: './app/components/integrantes/agregar.html',
              controllerAs: 'vm',
              controller: function($stateParams,utils,  integrantesLista , $log ,Notif,  $modal, $window, $http, integrantes, $state ){

              


                var vm = this;
                vm.id = $stateParams.id;
                vm.integrante = utils.findById(integrantesLista, vm.id);           
                vm.path = 'integrantes';

                 vm.agregarintegrante = function(){       
                 
                 integrantes.save({                   
                    'nombre': vm.integrante.nombre,
                    'edad': vm.integrante.edad,
                    'mail': vm.integrante.mail ,
                    'skill': vm.integrante.skill                   
                  }).then(
                    function(response) {
                     
                      integrantesLista.data.push(response.data);
                      $state.go('app.integrantes.list');
                     
                    },
                    function(response) {
                      alert('funciono!');                       
                        // console.log('vm.integrantesL', vm.integrantesL);
                        // console.log('vm.integrantesL', vm.integrante);
                         integrantesLista.push(vm.integrante);

                        $state.go('app.integrantes.list');
                           
                     }
                  );
                }


              }
            }
          }
        })

        
      }
    ]
  )                
})();