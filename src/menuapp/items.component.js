(function() {
    'use strict';

angular.module('MenuApp')
.component('items'),{
    templateUrl:'item.templates.html',
    controller:itemsController,
    bindings:{
        items:'<'
    }
}

})();
