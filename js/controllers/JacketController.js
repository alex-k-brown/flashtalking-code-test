app.controller('JacketController', ['$scope', 'jacket', function($scope, jacket) {
  jacket.success(function(data) {
    $scope.jacketStyles = data;
  });
}]);