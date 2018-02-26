(function() {
    'use strict';

angular.module('menuApp')
.component('categories'),{
    templateUrl:'src/menuapp/templates/category.template.html',

    bindings:{
        categories:'<'
    }
}

})();
