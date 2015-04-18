/**
 * Created by Roman on 16.04.2015.
 */
    var UWCApp = angular.module('UWCApp', [
        'ngRoute',
        'ngSanitize',
        'UWCAppControllers'
    ]);

    UWCApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/c/:catId/p/:prodId', {
                    templateUrl: 'product-page.html',
                    controller: 'MainCtrl'
                }).
                when('/c/:catId', {
                    templateUrl: 'catalogue.html',
                    controller: 'MainCtrl'
                }).
                when('/', {
                    templateUrl: 'main.html',
                    controller: 'MainCtrl'
                }).
                otherwise({
                    redirectTo: "/"
                });
        }]);