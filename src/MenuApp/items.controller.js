(function () {
    'use strict';

angular.module("MenuApp")
.controller('ItemsController', ItemsController);

    ItemsController.$inject = ['menuitems','$stateParams'];

    function ItemsController(menuitems) {

        var itemCtrl = this;
//        itemCtrl.name = menuitems.category.name;
//       itemCtrl.items = menuitems.menu_items;
//    console.log(itemCtrl.items)
        itemCtrl.menuitems = menuitems.data;
        console.log("itemctrl :",itemCtrl.menuitems )

    }
    console.log("inside items controller")
})();