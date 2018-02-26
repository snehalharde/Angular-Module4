(function() {
  'use strict';

  angular.module('menuApp')
  .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'APiBasePath'];
  function MenuDataService($http) {
      var service = this;
      service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + "/categories.json")
            });

            return response;
        };

    service.getItemsForCategory = function(shortCategoryName) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: shortCategoryName
          }
        })

        return response;
      }
    };
  
})();
