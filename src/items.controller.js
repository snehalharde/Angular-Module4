(function () {
    'use strict';

    angular.module('MenuApp',['ui.router'])
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['item'];

    function ItemsController(item) {

        var itemDetail = this;
  itemDetail.name = item.name;
//        itemList.names = items.map(function (itemObject) {
//            //console.log(itemObject)
//            return itemObject.name;
//        });//console.log(items)
    }
    console.log("inside items controller")
})();