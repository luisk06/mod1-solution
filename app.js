(function(){
'use strict';
  angular.module('mod1App',[])

  .controller('foodController',foodController);

    foodController.$inject =['$scope'];
    function foodController($scope){
      $scope.calculateAmount = function(){
        console.log("it's going well");
      }
    }


})();
