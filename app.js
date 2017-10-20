angular.module('clicker', [])
.controller("clickCtrl", ['$scope', '$interval', '$window', 
    function($scope, $interval){
        
        $scope.rps = 0.1;
        $scope.rockets = 1;
        $scope.rocketCost = 30;
        $scope.rocketMult = 5;
        $scope.moneyPerRocket = 5;
        $scope.trucks = 0;
        $scope.truckCost = 10;
        $scope.truckMult = 5;
        $scope.trucksAtMax = false;
        $scope.scientists = 0;
        $scope.scientistCost = 15;
        $scope.scientistMult = 5;
        $scope.motivation = 0;
        $scope.money = 20;
        $scope.timePerRocket = 30000; 
        $scope.timeMulti = 0;
        $scope.totalTimeToLaunch = 10;
        $scope.timeToLaunch = 10;
        
        // Adds a rocket and modifies the rocket rate
        $scope.addRocket = function(){
            if ($scope.rocketCost <= $scope.money){
                $scope.rockets++;
                $scope.money = $scope.money - $scope.rocketCost;
                $scope.updateTime()
            }
        }
        $scope.addRocket10 = function(){
            if ($scope.rocketCost*10 <= $scope.money){
                $scope.rockets += 10;
                $scope.money = $scope.money - $scope.rocketCost*10;
                $scope.updateTime()
            }
        }
        $scope.addRocket100 = function(){
            if ($scope.rocketCost*100 <= $scope.money){
                $scope.rockets += 100;
                $scope.money = $scope.money - $scope.rocketCost*100;
                $scope.updateTime()
            }
        }

        // Adds a fuel truck and modifies the rocket rate
        $scope.addFuelTruck = function() {
            if ($scope.truckCost <= $scope.money){
                $scope.trucks++;
                $scope.money = $scope.money - $scope.truckCost;
                $scope.totalTimeToLaunch = ($scope.totalTimeToLaunch - 0.2).toFixed(2);
                $scope.updateTime();
                if ($scope.trucks == 45) {
                    $scope.trucksAtMax = true;
                }
            }
        }

        // Adds a launch pad and modifies the rocket rate
        $scope.addScientist = function() {
            if ($scope.scientistCost <= $scope.money){
                $scope.scientists++;
                $scope.money = $scope.money - $scope.scientistCost;
                $scope.moneyPerRocket += 0.50;
                $scope.updateTime()
            }
        }
        $scope.addScientist10 = function() {
            if ($scope.scientistCost*10 <= $scope.money){
                $scope.scientists += 10;
                $scope.money = $scope.money - $scope.scientistCost*10;
                $scope.moneyPerRocket += 0.50(100);
                $scope.updateTime()
            }
        }
        $scope.addScientist100 = function() {
            if ($scope.scientistCost*100 <= $scope.money){
                $scope.scientists += 100;
                $scope.money = $scope.money - $scope.scientistCost*100;
                $scope.moneyPerRocket += 0.50(100);
                $scope.updateTime()
            }
        }

        // Increases money by 1
        $scope.panhandle = function() {
            $scope.money++;  
        }

        $scope.goToMars = function() {
            $window.alert("You Win!");
        }

        // Call this every second or at least as frequently as each rocket is ready to launch
        $scope.launchRockets = function(){
            // Animate a launching rocket here
            console.log("launch rocket interval occurred");
            $scope.money += ($scope.rockets * $scope.moneyPerRocket);
        }

        // Changes the percentage that 
        $scope.updateTime = function() {
            $scope.rps = 3;
        }

        $interval( function(){ 
            $scope.timeToLaunch = ($scope.timeToLaunch - 0.01).toFixed(2);
        }, 10);

        $scope.$watch('timeToLaunch', function() {
            if ($scope.timeToLaunch == 0) {
                $scope.timeToLaunch = $scope.totalTimeToLaunch;
                $scope.launchRockets();
            }
        });
    }
]);