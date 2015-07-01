(function(){
'use strict';

angular
	.module('gdg.webservice', [])
  .factory('WebService', WebService);

  WebService.$inject = ['$http'];

  function WebService($http) {
    return {
      get: function(path, data) {
        return request('GET', path, data);
      },

      post: function(path, data) {
        return request('POST', path, data);
      },

      put: function(path, data) {
        return request('PUT', path, data);
      },

      del: function(path, data) {
        return request('DELETE', path, data);
      }

    }

    function request(method, path, data)
    {
    return $http({
        method: method,
       url: '' + path,
       
        data: data
      }).then(function(response) {
        return response.data;
      });
    };

  }



})();