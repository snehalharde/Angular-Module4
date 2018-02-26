(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemController', MenuItemController);


MenuItemController.$inject = ['menulist'];
function MenuItemController(menulist) {
    var menuItem = this;
     menuItem.name = menulist.name;
     menuItem.description = menulist.description;
  //   menuItem.logMenuItems = function (categoryShortName) {
  //   var newpromise = MenuDataService.getItemsForCategory(categoryShortName);
  //
  //   newpromise.then(function (response) {
  //       console.log(response.data.menu_items)
  //       return response.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };

}
})();
