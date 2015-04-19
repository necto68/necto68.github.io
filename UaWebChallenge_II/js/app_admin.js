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
                localStorage.setItem('data', angular.toJson(data));
            });
        }

        $scope.saveData = function(){
            localStorage.setItem('data', angular.toJson($scope.data));
        };

        $scope.addCat = function(){
            var form = $('#addCat');
            $scope.data.Categories.push({
                "name": $(form).children('input[name=name]').val(),
                "img": $(form).children('input[name=img]').val(),
                "goods":[]
            });
        };

        $scope.addProd = function(){
            var form = $('#addProd');
            $scope.data.Categories[$(form).children('select').val()].goods.push({
                "name": $(form).children('input[name=name]').val(),
                "img": $(form).children('input[name=img]').val(),
                "price": Number($(form).children('input[name=price]').val()),
                "description": $(form).children('input[name=description]').val().split(','),
                "miniImg": $(form).children('input[name=miniImg]').val().split(','),
                //"title": $(form).children('textarea[name=title]').val(),
                "title": CKEDITOR.instances['editor'].getData(),
                "companyLogo": $(form).children('input[name=companyLogo]').val(),
                "companyUrl": $(form).children('input[name=companyUrl]').val(),
                "companyAdress": $(form).children('input[name=companyAdress]').val(),
                "companyTel": $(form).children('input[name=companyTel]').val(),
                "companyMap": $(form).children('input[name=companyMap]').val()

            });
        };

        $scope.delCat = function(){
            var form = $('#delCat');
            $scope.data.Categories.splice($(form).children('select').val(),1);
        };

        $scope.delProd = function(){
            var form = $('#delProd');
            $scope.data.Categories[$(form).children('select').eq(0).val()].goods.splice($(form).children('select').eq(1).val(),1);
        };


        $scope.addNew = function(){
            var form = $('#addNew');
            $scope.data.News.push({
                "title": $(form).children('input[name=title]').val(),
                "text": CKEDITOR.instances['New'].getData()
            });
        };

        $scope.delNew = function(){
            var form = $('#delNew');
            $scope.data.News.splice($(form).children('select').val(),1);
        };
    }]);