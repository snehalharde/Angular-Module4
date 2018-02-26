(function() {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url :'/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('menucategory', {
    url: '/menucategory',
    templateUrl: 'src/shoppinglist/templates/category.template.html',
    controller: 'MenuAppController as menucategory',
    resolve: {
      category: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (response){
            return response.data.category;
        });
      }]
    }
  })


  .state('menuItem', {
    url: '/menuItem/{itemCd}',
    templateUrl: 'src/shoppinglist/templates/item.template.html',
    controller: 'MenuItemController as menuItem',
    resolve: {
      menulist: ['$stateParams', 'MenuDataService', function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory(itemCd)
        .then(function (response){
            return response[$stateParams.itemCd];
        });
      }]
    }
  })
}

})();
