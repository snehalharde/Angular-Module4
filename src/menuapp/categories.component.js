(function() {
    'use strict';

angular.module('MenuApp')
.component('category'),{
    templateUrl:'category.templates.html',
    controller:itemsController,
    bindings:{
        category:'<'
    }
}

})();
