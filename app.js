(function(){
'use strict';
  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject =['$scope'];
    function LunchCheckController($scope){
      $scope.foodList = "";
      $scope.calculateAmount = function(){

        var food = $scope.foodList;
        var foodSplit = food.split(","); //Create array with comma-separated element
        var FoodSplitValid = foodSplit.filter(String); //Taking out empty elements.. Ex [cucumber, bread ,, turkey]
        var totalFood = FoodSplitValid.length;

        if (totalFood >= 1){
              $scope.messageColor = {
                            "color" : "green",
                        }
              if (totalFood<=3) {
                $scope.messageFood = "Enjoy!";
              } else {
                $scope.messageFood = "Too Much!";
              }
          }else {
              $scope.messageColor = {
                        "color" : "red",
                    }
              $scope.messageFood ="Please enter data first";
          }

      }
    }


})();
