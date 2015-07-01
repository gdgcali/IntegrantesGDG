(function(){
'use strict';

angular.module(
  'gdg.integrantes.nuevo',
  [
    'ui.router','ui.bootstrap',
  ])

  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider , $http) {

        $stateProvider

      .state('app.integrantes.nuevo', {
          url: '/nuevo-integrante',
         

          views: {
            'content@' : {
              templateUrl: './app/components/integrantes/agregar.html',

               controller: function(utils,  integrantesLista , $log ,Notif,  $modal, $window, $http, integrantes, $state ) {
               var vm = this;    
               vm.integrantesL = integrantesLista.data;               
                vm.http = $http;              
                  vm.agregarintegrante = function(){
                  integrantes.update({                                                  
                  }).then(
                    function(response) {     
                    },
                    function(response) {
                      alert('Nuevo integrante creado!');                        
                         integrantesLista.push(vm.integrante);
                      $state.go('app.integrantes.list');
                           
                     }
                  );
                }  
              },
              controllerAs: 'vm'
            }
          }
        })

        
      }
    ]
  )                
})();