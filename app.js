angular.module('clicker', [])
.controller("clickCtrl", ['$scope', '$interval', 
    function($scope, $interval){
        
        $scope.rps = 0;
        $scope.rockets = 1;
        $scope.rocketCost = 20;
        $scope.rocketMult = 5
        $scope.trucks = 1;
        $scope.truckCost = 5;
        $scope.truckMult = 5
        $scope.pads = 1;
        $scope.padCost = 10;
        $scope.padMult = 5
        $scope.motivation = 0;
        $scope.money = 20;
        $scope.timePerRocket = 30000; 
        $scope.timeMulti = 0;
        
        // Adds a rocket and modifies the rocket rate
        $scope.addRocket = function(){
            if ($scope.rocketCost <= $scope.money){
                $scope.rockets++;
                $scope.money = $scope.money - $scope.rocketCost;
                $scope.timeMulti = $scope.timeMulti + $scope.rocketMult;
                $scope.updateTime()

            }
        }

        // Adds a fuel truck and modifies the rocket rate
        $scope.addFuelTruck = function(){
            if ($scope.truckCost <= $scope.money){
                $scope.trucks++;
                $scope.money = $scope.money - $scope.truckCost;
                $scope.timeMulti = $scope.timeMulti + $scope.truckMult;
                $scope.updateTime()
            }
        }

        // Adds a launch pad and modifies the rocket rate
        $scope.addLaunchPad = function(){
            if ($scope.padCost <= $scope.money){
                $scope.pads++;
                $scope.money = $scope.money - $scope.padCost;
                $scope.timeMulti = $scope.timeMulti + $scope.padMult;
                $scope.updateTime()
            }
        }

        // Implement some effect for motivation to do
        $scope.workHarder = function(){
            $scope.motivation++;  
        }

        // Call this every second or at least as frequently as each rocket is ready to launch
        $scope.launchRocket = function(){
            // Animate a launching rocket here
            console.log("launch rocket interval occurredf");
            $scope.money++;
        }
        
        $interval( function(){ $scope.launchRocket();}, 1000);

        // Changes the percentage that 
        $scope.updateTime = function(){
            $scope.timePerRocket = $scope.timePerRocket*($scope.timeMulti/100); 
        }
    }
]);