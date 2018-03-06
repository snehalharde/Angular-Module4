(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

ItemController.$inject = ['menuItems']
function ItemController(menuItems) {
  var itemCtrl = this;
  itemCtrl.item = menuItems;
   
}

})();
