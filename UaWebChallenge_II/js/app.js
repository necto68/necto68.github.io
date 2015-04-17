/**
 * Created by Roman on 16.04.2015.
 */
(function() {
    var UWCApp = angular.module('UWCApp', [
        'ngRoute',
        'ngSanitize',
        'UWCAppControllers'
    ]);

    UWCApp.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/catalogue/:catId', {
                    templateUrl: 'catalogue.html',
                    controller: 'CatCtrl'
                }).
                when('/', {
                    templateUrl: 'main.html',
                    controller: 'MainCtrl'
                }).
                otherwise({
                    redirectTo: "/"
                });
        }]);


})();