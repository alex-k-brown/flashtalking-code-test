app.controller('ShoeController', ['$scope', 'shoe', '$routeParams', function($scope, shoe, $routeParams) {
  shoe.success(function(data) {
    $scope.styles = data;
    $scope.detail = data.Data.find(findReference);
    function findReference(single) {
    	return single.id === $routeParams.id;
    };
    $scope.category = "shoes";
  });
}]);