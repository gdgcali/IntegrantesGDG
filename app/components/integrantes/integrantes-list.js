  (function(){
  'use strict';

  angular.module(
    'gdg.integrantes.list',
    [
      'ui.router'
    ])
    .config(
      [ '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

          $stateProvider

          .state('app.integrantes.list', {
            url: '/Integrantes-gdg-cali',
            views: {
              'content@' : {
                templateUrl: './app/components/integrantes/integrantes.html',
               controller: function(utils,  integrantesLista , $log ,Notif, integrantes, $modal, $window) {
                  var vm = this;
                       vm.path = 'integrantes';
                       vm.integrantesL = integrantesLista;
                       vm.elimco = elimco;  

                      function elimco(id) { 

                         integrantes.destroy(id)
                          .then(function(response) {
                            utils.deleteById(vm.integrantesL, id);
                         
                            alert('elimino');
                          }, function(response) {
                        alert('Enserio quieres eliminar este integrante?');                       
                           utils.deleteById(vm.integrantesL, id);
                       });               
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