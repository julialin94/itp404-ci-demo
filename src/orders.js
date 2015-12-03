angular
  .module('orders-app')
  .factory('orders', function($http) {
    return {
      getAllOrders: function() {
        return $http.get('https://some-shopping-site.com/orders').then(function(response) {
          return response.data.orders;
        });
      },

      getTotalSpent: function() {

        var ordersPromise = this.getAllOrders();

        return ordersPromise.then(function(response) {
          var sum = 0;

          for (var i = 0; i < response.length; i++) {
            sum += response[i].total;
          }

          return sum;
        });
      }
    };
  });
