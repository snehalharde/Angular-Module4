(function() {
    'use strict';

angular.module("MenuApp")
.component('categoryItem'),{
    templateUrl:'src/templates/items.template.html',   
    bindings:{
        items:'<'
    }
}
console.log("inside item component")
})();
