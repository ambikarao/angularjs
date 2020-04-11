(function(){

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

  $scope.CheckIfTooMuch = function(){
    const str = $scope.items;
    const words = str.split(',');
    $scope.noOfItems = words.length;
    if ($scope.noOfItems == 0) {
      $scope.myObj = {
       "color" : "red",
     }
        $scope.foodQuantity = "Please enter data first";
    }
    else if(($scope.noOfItems != 0) && ($scope.noOfItems <= 3)){
      $scope.foodQuantity = "Enjoy!";
      $scope.myObj = {
       "color" : "green",
     }
    }
    else {
      $scope.foodQuantity = "Too much!";
      $scope.myObj = {
       "color" : "green",
     }
    }
  }
}
})();
