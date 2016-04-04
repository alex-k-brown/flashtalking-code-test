app.factory('jacket', ['$http', function($http) { 
  return $http.get('http://awsstaging.flashtalkingfeeds.com/temp/bas/test-api/get.php?category=jackets') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            });
}]);