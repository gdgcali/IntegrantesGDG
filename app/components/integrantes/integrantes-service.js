(function(){
'use strict';

angular
  .module('gdg.integrantes.service', [])
  .factory('integrantes', integrantes);

  integrantes.$inject = ['WebService'];


  var path = 'integrantes';
function integrantes(WebService) {
  var list = []; //TODO update this
  return {
    getAll: function() {
      return WebService.get(path)
    },

    getDetail: function(id) {
      return WebService.get(path+'/'+id)
    },

    destroy: function(id) {
      return WebService.del(path+'/'+id)
    },

    update: function(id, data) {
      return WebService.put(path+'/'+id, data)
    },

    save: function(data) {
      return WebService.post(path, data)
    }
  };

};



})();