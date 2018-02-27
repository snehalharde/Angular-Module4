(function () {
'use strict';

//angular.module('MenuApp',['ui.router']);
    angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider

    // Home page
        .state('home', {
            url: '/',
            templateUrl: 'src\home.template.html'
        })

    // Categories page
        .state('categories',{
            url:'/categories',
            templateUrl:'src\categories.template.html',
            controller:'CategoryController as mainList',
            resolve: {
                categories:['MenuDataService',
                function(MenuDataService){
                    return MenuDataService.getAllCategories()
                    .then(function (result){
                        category = result.data;
                    });
                }]
            }
        
        })
    // Items for the chosen category
        .state('itemDetail',{
            url:'/item-detail/{categoryId}',
            templateUrl:'src/items.template.html',
            controller:'ItemsController as itemDetail',
            resolve: {
                item:['$stateParams','MenuDataService',
                function($stateParams,MenuDataService){
                    return MenuDataService.getItemsForCategory($stateParams.categoryId)
                    .then(function (categories){
                        return items[$stateParams.categoryId]
                        
                    });
                }]
            }
        });
    }       
})();