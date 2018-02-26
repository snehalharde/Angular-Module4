(function() {
'use strict';

angular.module('menuApp')
.config(RoutesConfig);

RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url :'/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/category.template.html',
    controller: 'MenuAppController as menucategory',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })


  .state('menulist', {
    url: '/menulist/{itemCd}',
    templateUrl: 'src/menuapp/templates/item.template.html',
    controller: 'MenuItemController as menuItem',
    resolve: {
      menulist: ['$stateParams', 'MenuDataService', 
        function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemCd);
      }]
    }
  })
}

})();
