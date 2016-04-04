app.controller('TshirtController', ['$scope', 'tshirt', '$routeParams', function($scope, tshirt, $routeParams) {
  tshirt.success(function(data) {
    $scope.styles = data;
    $scope.detail = data.Data.find(findReference);
    function findReference(single) {
    	return single.id === $routeParams.id;
    };
    $scope.category = "tshirts";
  });
}]);