(function () {
'use strict';

angular.module('menuApp')
.controller('MenuItemController', MenuItemController);


MenuItemController.$inject = ['menulist'];
function MenuItemController(menulist) {
    var menuItem = this;
     menuItem.name = menulist.data.name;
     menuItem.description = menulist.data.description;
    console.log("inside menuItemController")
}
})();
