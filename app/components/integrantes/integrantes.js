(function(){
'use strict';

angular.module(
  'gdg.integrantes',
  [
    'ui.router',
  ])
  .config(
    [ '$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('app.integrantes', {
          abstract: true,
          url: 'integrantes-gdg',
           resolve: {
            integrantesLista: ['integrantes',
              function(integrantes) {
                 return [
            {
                id : 0,
                nombre : "Israel Parra",
                edad : "32 años",
                correo : "prueba@tuprueba.com",
                skill: "js"
            },
            {
                id : 1,
                nombre : "Andrés Cuenca",
                edad : "24 años",
                correo : "prueba@tuprueba.com",
                skill: "css"
            },
            {
                id : 2,
                nombre : "Juan",
                edad : "28 años",
                correo : "prueba@tuprueba.com",
                skill: "html5"
            },
            {
                id : 3,
                nombre : "Pepito",
                edad : "18 años",
                correo : "prueba@tuprueba.com",
                skill: "React"
            },
            {
                id : 4,
                nombre : "Manuel",
                edad : "45 años",
                correo : "prueba@tuprueba.com",
                skill: "Android"
            }
        ]
              }
            ]
            
          }
        })
      }
    ]
  ) //config


})();