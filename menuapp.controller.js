(function () {
'use strict';

angular.module('MenuApp',[])
.controller('MenuAppController', MenuAppController);
.directive('menuappdirective', MenuAppDirective);
    

function MenuAppDirective (){
    var ddo ={
       templateUrl : 'home.html',
        scope:{
            category:'<'
        },
        controller: MenuAppDirectiveController,
        controllerAs: 'ctrl',
        bindToController:true
    }
    return ddo;
};
    
    
function MenuAppDirectiveController(){
    var ctrl = this;
    ctrl.category = getAllCategories();
}

MenuAppController.$inject = ['MenuDataService'];
function MenuAppController(MenuDataService) {
    var menu = this;
    var promise = MenuDataService.getAllCategories();
    promise.then(function (response){
        menu.categories = response.data;
        console.log("response.data is ", response.data)
        console.log("menu.categories are ",menu.categories)
      
    })
    .catch(function (error) {
    console.log("Something went terribly wrong.");
    });
    
    menu.logMenuItems = function (categoryShortName) {
    var newpromise = MenuDataService.getItemsForCategory(categoryShortName);
      
    newpromise.then(function (response) {
        console.log(response.data.menu_items)
        return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  };
    
}

    

})();