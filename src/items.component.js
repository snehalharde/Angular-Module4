(function() {
    'use strict';

angular.module('MenuApp')
.component('items'),{
    templateUrl:'src/items.template.html',
   
    bindings:{
        item:'<'
    }
}
console.log("inside item component")
})();
