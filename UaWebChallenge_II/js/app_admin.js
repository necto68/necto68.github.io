/**
 * Created by Roman on 16.04.2015.
 */
var UWCAppAdmin = angular.module('UWCAppAdmin', []);


UWCAppAdmin.controller('MainCtrl', ['$scope', '$http',
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
        console.log($scope.data.Categories);
    }]);