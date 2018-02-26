(function () {
'use strict';

angular.module('menuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['categories'];
function CategoryController(categories) {
    var menucategory = this;
    menucat.categories = categories;

}
})();
