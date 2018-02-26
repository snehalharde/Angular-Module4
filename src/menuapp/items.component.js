(function() {
    'use strict';

angular.module('menuApp')
.component('menulist'),{
    templateUrl:'src/menuapp/templates/item.template.html',
   
    bindings:{
        menulist:'<'
    }
}

})();
