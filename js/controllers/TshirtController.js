app.controller('TshirtController', ['$scope', 'tshirt', function($scope, tshirt) {
  tshirt.success(function(data) {
    $scope.tshirtStyles = data;
  });
}]);