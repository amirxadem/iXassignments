var app = angular.module('phoneBook',[]);

app.controller('PhoneCtrl', function($scope) {
  $scope.newItem = "";
  $scope.newItemQuantity = "";
  $scope.items = [];

  $scope.addItem = function() {
    var repeat = false;
    for(var i = 0; i < $scope.items.length; i++) {
      if($scope.items[i].name.toLowerCase() === $scope.newItem.toLowerCase()) { // if the user types a name into the box, it will log as new item //
        $scope.items[i].quantity = parseInt($scope.items[i].quantity,10 // why is this 10 here // 
          ) + parseInt($scope.newItemQuantity,10);
        repeat = true;
      }
    }
    if(!repeat) {
      var item = {
        "name": $scope.newItem, 
        "quantity": $scope.newItemQuantity,
        "isEditing": false
      };
      $scope.items.push(item);
      $scope.newItem = "";
      $scope.newItemQuantity = "";
    }
  }
  
  $scope.deleteItem = function(i) {
    $scope.items.splice(i, 1);
  };

  $scope.incQuantity = function(item) {
    console.log(item);
    item.quantity = parseInt(item.quantity,10) + 1;
  };

  $scope.decQuantity = function(item) {
    console.log(item);
    if(parseInt(item.quantity,10) - 1 >= 0)
      item.quantity = parseInt(item.quantity,10) - 1;
  };
  $scope.emptyItems = function() {
    $scope.items = []
  };
  
  
});







// somearray = [ allie, gabe, ben, rafi, amir ] - 5

// for(var i = 0; i < somearray.length; i++) {
//   console.log(somearray[i]);
// }

// 0 -> allie
// 1 -> gabe
// 2 -> 
// 3
// 4
// 5 