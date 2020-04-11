(function(){

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){

  $scope.CheckIfTooMuch = function(){
    const str = $scope.items;
    if(str === undefined){
      $scope.noOfItems = 0;
    }
    else{
    const words = str.split(',');
    $scope.noOfItems = words.length;
    }
    if ($scope.noOfItems === 0) {
      $scope.myObj = {
       "color" : "red",
     }
        $scope.foodQuantity = "Please enter data first";
    }
    else if(($scope.noOfItems != 0) && ($scope.noOfItems <= 3)){
      $scope.myObj = {
       "color" : "green",
     }
      $scope.foodQuantity = "Enjoy!";
    }
    else {
      $scope.myObj = {
       "color" : "green",
     }
      $scope.foodQuantity = "Too much!";
    }
  }
}
})();
