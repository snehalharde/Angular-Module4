(function() {
  'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath',];
  function MenuDataService($http,ApiBasePath) {
      console.log("something in service")
      var service = this;
      //getAllCategories
      service.getAllCategories = function () {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + '/categories.json')
            })
        .then(function (response){
           
            return response.data;
        })
        return response;
        }
      
      //getItemsForCategory
    service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: categoryShortName
          }
        })
    console.log(response)
        return response;
      }
    
    
    }
  
})();
