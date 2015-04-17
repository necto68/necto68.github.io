/**
 * Created by Roman on 16.04.2015.
 */
(function() {
    var UWCApp = angular.module('UWCApp', [
        'ngRoute',
        'UWCAppControllers'
    ]);


    UWCApp.controller('MainCtrl', ['$scope', '$http',
        function ($scope, $http) {
            if (localStorage.getItem('data')) {
                $scope.data = angular.fromJson(localStorage.getItem('data'));
            }
            else {
                $http.get('data/data.json').success(function (data) {
                    $scope.data = data;
                    localStorage.setItem('data', angular.toJson(data))
                });
            }
        }]);

    angular.module('UWCApp', ['ngRoute']).config(['$routeProvider',
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