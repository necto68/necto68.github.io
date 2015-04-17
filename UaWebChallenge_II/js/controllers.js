/**
 * Created by Roman on 16.04.2015.
 */

var UWCAppControllers = angular.module('UWCAppControllers', []);

/* UWCAppControllers.controller('MainCtrl', ['$scope', '$http',
    function($scope, $http) {
        if (localStorage.getItem('data')){
            $scope.data = angular.fromJson(localStorage.getItem('data'));
        }
        else {
            $http.get('data/data.json').success(function (data) {
                $scope.data = data;
                localStorage.setItem('data', angular.toJson(data))
            });
        }
    }]);*/







UWCAppControllers.controller('CatCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.catId = $routeParams.catId;
    }]);

/*
UWCAppControllers.controller('ProductCtrl', function($scope, $routeParams) {

});*/