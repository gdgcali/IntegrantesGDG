(function () {
    'use strict';

    angular.module(
        'gdg'
    )
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {templateUrl: 'app/views/users/login.html', controller: 'usersCtrl'})
            //$routeProvider.when('/home',{templateUrl:'app/views/home.html', controller: 'homeCtrl'})
            //$routeProvider.when('/hoteles',{templateUrl:'app/views/crud-table.html', controller: 'hotelCtrl'})
            $routeProvider.otherwise({redirectTo: '/'});
        }])

        .config(function ($httpProvider) {
            $httpProvider.interceptors.push(function ($q, $rootScope, $location, $injector) {
                return {
                    responseError: function (response) {
                        if (response.status == 0) {
                            // $injector.get('$mdToast').showSimple('Se ha perdido la conexión con el servidor!');
                            console.log("FATAL ERROR RE-PAILAS: Como que no hay interné!");
                        } else if (response.status == 401) {
                            delete sessionStorage.authenticated
                            $rootScope.isLoggedIn = false;
                            $location.path('login').replace();
                            // $injector.get('$mdToast').showSimple(response.data.flash);
                        } else if (response.status == 500) {
                            // $injector.get('$mdToast').showSimple(response.data.flash);
                            // console.error("ERROR:", response.data.errorMessage);
                        } else if (response.status == 503) {
                            // $injector.get('$mdToast').showSimple('Ha ocurrido un error con el servidor de base de datos!');
                            console.log("ERROR: Servidor de base de datos fuera de línea! ", response.data.errorMessage);
                        }
                        return $q.reject(response);
                    }
                };
            });
        })

        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })

})();