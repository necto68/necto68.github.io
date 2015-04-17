/**
 * Created by Roman on 16.04.2015.
 */

var UWCAppControllers = angular.module('UWCAppControllers', []);

 UWCAppControllers.controller('MainCtrl', ['$scope', '$http',
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
        var catStr = "";
        $scope.data.Categories.forEach(function(c, i, cat){
            if((i+1)/4 == Math.floor((i+1)/4) || i == cat.length-1){
                catStr += '<div class="crow-item"><i id="cr"'+(i+1)+'><img src='+ c.img+' alt="..."></i><span>'+ c.name+'</span></div></div>';
            }
            else if((i+1)%4==1 || i == 0 ){
            catStr += '<div class="catal-row"><div class="crow-item"><i id="cr"'+(i+1)+'><img src='+c.img+' alt="..."></i><span>'+c.name+'</span></div>';
            }
            else {
                catStr += '<div class="crow-item"><i id="cr"'+(i+1)+'><img src='+ c.img+' alt="..."></i><span>'+ c.name+'</span></div>';
            }
        });
        $scope.catStr = catStr;
    }]);







UWCAppControllers.controller('CatCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.catId = $routeParams.catId;
    }]);


UWCAppControllers.controller('ProductCtrl', function($scope, $routeParams) {

});