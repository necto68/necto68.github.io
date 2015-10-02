
var UWCApp = angular.module('UWCApp', [
    'UWCAppControllers'
]);
var UWCAppControllers = angular.module('UWCAppControllers', []);

UWCAppControllers.controller('MainCtrl', ['$scope',
    function($scope) {
        var categories = ["Junior", "Middle/Senior"];
        var nominations = ["Frontend", "Backend", "QA", "Верстка", "Дизайн", "Команда"];
        var marks = ["01.png", "02.png", "03.png", "04.png"];
        $scope.data = "";
        if (localStorage.getItem('data')){
            $scope.data = angular.fromJson(localStorage.getItem('dataFinal'));
        }
        else {
            $scope.data = DATA;
            localStorage.setItem('dataFinal', angular.toJson($scope.data));
        }

        $scope.$watch("data", function(newValue, oldValue){
            localStorage.setItem('dataFinal', angular.toJson(newValue));
        });

        $scope.toCategory = function(cat){
            if(cat !== null){
                return categories[cat];
            } else {
                return "";
            }
        };

        $scope.toNomination = function(n){
            if(n !== null){
                return nominations[n];
            } else {
                return "";
            }
        };

        $scope.toImgMarks = function(av){
            if (av!==null){
                if (av <= 10 && av >= 8.6) return marks[0];
                if (av <= 8.5 && av >= 6.6) return marks[1];
                if (av <= 6.5 && av >= 4.6) return marks[2];
                if (av <= 4.5 && av >= 0) return marks[3];
            }
        };

        $scope.acceptMark = function(index){
            var data = $scope.data[index];
            data.isChecked = true;
            data.averageScore = Number(((data.scores.accordance+data.scores.originality+data.scores.quality+data.scores.bonus)/4).toFixed(1));
            localStorage.setItem('dataFinal', angular.toJson($scope.data));
        };
    }]);