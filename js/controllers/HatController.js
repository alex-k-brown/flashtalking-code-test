app.controller('HatController', ['$scope', 'hat', '$routeParams', function($scope, hat, $routeParams) {
  hat.success(function(data) {
    $scope.styles = data;
    $scope.detail = data.Data.find(findReference);
    function findReference(single) {
    	return single.id === $routeParams.id;
    };
    $scope.category = "hats";
  });
}]);