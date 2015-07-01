angular.module('gdg.utils', [

])

.factory('utils', function () {
  return {
    // Util for finding an object by its 'id' property among an array
    findById: function findById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) {
        	return a[i];
        }
      }
      return null;
      /*var found = $filter('filter')(encuestas.data, {id: vm.id}, true);
       if (found.length) {
       console.log(found);
       } else {
       console.log('Not found');
       }*/
    },

    findByKey: function findByKey(a, key, value) {
      for (var i = 0; i < a.length; i++) {
        if (a[i][key] == value) {
          return a[i];
        }
      }
      return null;
    },

    deleteById: function deleteById(a, id) {
      for (var i = 0; i < a.length; i++) {
        if (a[i].id == id) {
        	return a.splice(i, 1);
        }
      }
      return null;
    }

  };
});
