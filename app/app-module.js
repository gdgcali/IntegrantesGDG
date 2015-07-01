(function(){
'use strict';

angular.module(
    'gdg',
    [
        'ngRoute',
        'ui.router',
        'ngSanitize',
        'ngAria',
        'ngAnimate',
        


        'angular-loading-bar',
        'ngToast',
        'smart-table',
        'ui.select',

        'gdg.webservice',
        'gdg.utils',
        'ui.bootstrap',

        

        'gdg.integrantes',
        'gdg.integrantes.list',
        'gdg.integrantes.nuevo',
        'gdg.integrantes.editar',
        'gdg.integrantes.detalle',
        'gdg.integrantes.service'

    ])

    

})();