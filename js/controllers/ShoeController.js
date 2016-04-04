app.controller('ShoeController', ['$scope', 'shoe', function($scope, shoe) {
  shoe.success(function(data) {
    $scope.shoeStyles = data;
  });
}]);