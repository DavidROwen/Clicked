angular.module('clicker', [])
.controller("clickCtrl", ['$scope',
    function($scope){
        $scope.rps = 0;
        $scope.rockets = 1;
        $scope.rocketCost = 20;
        $scope.trucks = 1;
        $scope.truckCost = 5;
        $scope.pads = 1;
        $scope.padCost = 10;
        $scope.motivation = 0;
        $scope.money = 20;


        $scope.addRocket = function(){
            if ($scope.rocketCost <= $scope.money){
                $scope.rockets++;
            }
        }
        $scope.addFuelTruck = function(){
            if ($scope.truckCost <= $scope.money){
                $scope.trucks++;
            }
        }
        $scope.addLaunchPad = function(){
            if ($scope.padCost <= $scope.money){
                $scope.pads++;
            }
        }
        $scope.workHarder = function(){
            $scope.motivation++;
        }
        $scope.launchRocket = function(){
            $scope.money++;
        }
    }
]);