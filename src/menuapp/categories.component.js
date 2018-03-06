(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('categoryList', {
      templateUrl: 'src/menuapp/templates/category-list.template.html',
      bindings: {
        category: '<'
      }
    });
    
    
})();    