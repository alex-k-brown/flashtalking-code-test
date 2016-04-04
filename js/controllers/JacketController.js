app.controller('JacketController', ['$scope', 'jacket', '$routeParams', function($scope, jacket, $routeParams) {
  jacket.success(function(data) {
    $scope.styles = data;
    $scope.detail = data.Data.find(findReference);
    function findReference(single) {
    	return single.id === $routeParams.id;
    };
    console.log($routeParams);
    $scope.category = "jackets";
  });
}]);