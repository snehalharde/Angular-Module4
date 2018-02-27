(function() {
    'use strict';

    angular.module('MenuApp',['ui.router'])
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['items'];

    function CategoryController(items) {
var mainList = this;
  mainList.items = item;
        }
        console.log("inside category controller")
    
})();