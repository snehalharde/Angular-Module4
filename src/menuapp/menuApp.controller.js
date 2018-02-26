(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);

MenuAppController.$inject = ['category'];
function MenuAppController(category) {
    var menucategory = this;
    menucategory.category = category;
    // var promise = MenuDataService.getAllCategories();
    // promise.then(function (response){
    //     category.categories = response.data;
    //     console.log("response.data is ", response.data)
    //     console.log("category.categories are ",category.categories)
    //
    // })
    // .catch(function (error) {
    // console.log("Something went terribly wrong.");
    // });

}
})();
