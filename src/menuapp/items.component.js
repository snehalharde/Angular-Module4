(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('menuList', {
      templateUrl: 'src/menuapp/templates/itemlist.template.html',
      bindings: {
        items: '<'
        
      }
    });  
    
})();    