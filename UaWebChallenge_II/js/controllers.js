/**
 * Created by Roman on 16.04.2015.
 */

var UWCAppControllers = angular.module('UWCAppControllers', []);

 UWCAppControllers.controller('MainCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        if (localStorage.getItem('data')){
            $scope.data = angular.fromJson(localStorage.getItem('data'));
        }
        else {
            $http.get('data/data.json').success(function (data) {
                $scope.data = data;
                localStorage.setItem('data', angular.toJson(data));
            });
        }
        var catStr = "";
        var prodStr = "";
        var catLength = 0;
        $scope.data.Categories.forEach(function(c, i){
            if((i+1)/4 == Math.floor((i+1)/4) || i ==  $scope.data.Categories.length-1){
                catStr += '<div class="crow-item"><i id=cr'+(i+1)+'><img src='+ c.img+' alt="..."></i><a href=#/c/'+(i+1)+'><span>'+ c.name+'</span></a></div></div>';
            }
            else if((i+1)%4==1 || i == 0 ){
            catStr += '<div class="catal-row"><div class="crow-item"><i id=cr'+(i+1)+'><img src='+c.img+' alt="..."></i><a href=#/c/'+(i+1)+'><span>'+c.name+'</span></a></div>';
            }
            else {
                catStr += '<div class="crow-item"><i id=cr'+(i+1)+'><img src='+ c.img+' alt="..."></i><a href=#/c/'+(i+1)+'><span>'+ c.name+'</span></a></div>';
            }
        });
        $scope.catStr = catStr;

        if($routeParams.catId && $routeParams.catId <= $scope.data.Categories.length && $routeParams.catId > 0) {
            catLength = $scope.data.Categories[$routeParams.catId-1].goods.length;
            $scope.data.Categories[$routeParams.catId - 1].goods.forEach(function (p, i) {
                if ((i + 1) / 3 == Math.floor((i + 1) / 3) || i == $scope.data.Categories[$routeParams.catId - 1].goods.length - 1) {
                    prodStr += '<div class="col-xs-6 col-md-3"><a href='+window.location+'/p/'+(i+1)+' class="thumbnail"><img src=' + p.img + ' alt="..."></a> <div class="tr-desc"><span class="tr-text">' + p.name + '</span> <span class="tr-price">' + p.price + ' грн.</span></div></div>' + '</div>';
                }
                else if ((i + 1) % 3 == 1 || i == 0) {
                    prodStr += '<div class="row">' + '<div class="col-xs-6 col-md-3"><a href='+window.location+'/p/'+(i+1)+' class="thumbnail"><img src=' + p.img + ' alt="..."></a> <div class="tr-desc"><span class="tr-text">' + p.name + '</span> <span class="tr-price">' + p.price + ' грн.</span></div></div>';
                }
                else {
                    prodStr += '<div class="col-xs-6 col-md-3"><a href='+window.location+'/p/'+(i+1)+' class="thumbnail"><img src=' + p.img + ' alt="..."></a> <div class="tr-desc"><span class="tr-text">' + p.name + '</span> <span class="tr-price">' + p.price + ' грн.</span></div></div>';
                }
            });
            prodStr += '<div class="download-more"><div class="circle"><i><img src="img/load_more.png" alt=""></i></div><span>Завантажити ще</span></div>';
            $scope.catName = $scope.data.Categories[$routeParams.catId-1].name;
        }
        else {
            prodStr = "Категория не найдена";
        }
        $scope.prodStr = prodStr;
        $scope.catLength = catLength;
        if($routeParams.prodId && $routeParams.prodId <= $scope.data.Categories[$routeParams.catId-1].goods.length && $routeParams.prodId > 0){
            $scope.pData = $scope.data.Categories[$routeParams.catId-1].goods[$routeParams.prodId-1];
        }
    }]);
