(function() {
  'use strict';

    angular.module('MenuApp')
  .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath','$q'];
  function MenuDataService($http,ApiBasePath) {
      
      var service = this;
      service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
            });
         
            return response.data.name;
        };

    service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json?category="),
          params: {
            category: categoryShortName
          }
        })
//    var deferred = $q.defer();
//// in .then function resolve the promise
//deferred.resolve(response.data.menu_items);
//// and finally return the promise
//return deferred.promise;

return response;
      }
    console.log("response")
    }
  
})();
