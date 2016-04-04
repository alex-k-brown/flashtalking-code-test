app.controller('CategoryController', ['$scope', 'product', function($scope, product) {
  product.success(function(data) {
    $scope.productCategories = data;
  });
}]);