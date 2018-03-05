(function () {
'use strict';


angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

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