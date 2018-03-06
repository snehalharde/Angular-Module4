(function () {
'use strict';

<<<<<<< HEAD
=======

>>>>>>> 2cb0c464b6fa017303648d1f222c7bcd1f5a5cdf
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
<<<<<<< HEAD
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })
  
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/category.template.html',
    controller: 'CategoriesController as categoryCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('itemDetail', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/item.template.html',
    controller: 'ItemController as itemCtrl',
    resolve: {
      menuItems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
    }
  });
}

})();
=======

function RoutesConfig($stateProvider, $urlRouterProvider) {
    console.log("somewhere in routes");
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // Home page
        .state('home', {
            url: '/',
           templateUrl: 'src/home.template.html'
        
        })

        // Categories page
        .state('categories',{
            url:'/categories',
            templateUrl:'src/templates/categories.template.html',
            controller:'CategoryController as categoryCtrl',
            resolve: {
                categories:['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();

                }]
            }
        
        })
        // Items for the chosen category
        .state('itemDetail',{
            url:'/items/{categoryShortName}',
            templateUrl:'src/templates/items.template.html',
            controller:'ItemsController as itemCtrl',
            resolve: {
                menuitems:['$stateParams','MenuDataService', function($stateParams,MenuDataService){
                     return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                   
                }]
            }
        });
    }       
})();
>>>>>>> 2cb0c464b6fa017303648d1f222c7bcd1f5a5cdf
