(function(){

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.myObj = {
   "color" : "green",
 }
  const str = $scope.items;
  console.console.log(str);
  const words = str.split(',');
  $scope.CheckIfTooMuch = function(words){
    //console.log(words.length);
    $scope.noOfItems = words.length;
    if ($scope.noOfItems == 0) {
      $scope.myObj = {
       "color" : "red",
     }
        $scope.foodQuantity = "Please enter data first";
    }
    else if(($scope.noOfItems != 0) && ($scope.noOfItems <= 3)){
      $scope.foodQuantity = "Enjoy!";
    }
    else {
      $scope.foodQuantity = "Too much!";
    }
  }
}
})();
