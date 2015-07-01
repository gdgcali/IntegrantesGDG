angular
  .module('gdg')
  .factory('Notif', function($injector){
    var $mdToast = $injector.get('ngToast');
    return {
            show: function(msg, type) {
                ngToast.create(msg);
            },
            clear: function(){
                ngToast.dismiss();
            }
        }
    });