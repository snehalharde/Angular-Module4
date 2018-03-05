(function() {
    'use strict';

angular.module("data")
.component('categoryList'),{//tagname in category tempalte
    templateUrl:'src/templates/categories.template.html',
    bindings:{
        category:'<'
    }
   
}
console.log("inside category component")
    
})();
