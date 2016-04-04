app.controller('HatController', ['$scope', 'hat', function($scope, hat) {
  hat.success(function(data) {
    $scope.hatStyles = data;
  });
}]);