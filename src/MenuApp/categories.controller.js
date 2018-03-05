(function() {
    'use strict';

angular.module("data",[])
.controller('CategoryController', CategoryController);

    CategoryController.$inject = ['MenuDataService','categories'];

    function CategoryController(MenuDataService,categories) {
        var categoryCtrl = this;
          categoryCtrl.category = categories;
        console.log("cccc :" ,categoryCtrl.category)
                }
        console.log("inside category controller")
    
})();