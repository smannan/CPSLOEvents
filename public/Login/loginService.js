app.service("login", ["$http", "$state",
function($http, $state) {
   var cookie;
   var user;

   return {
      login: function(loginData) {
         return $http.post("Ssns", loginData)
         .then(function(response) {
            var location = response.headers().location.split('/');

            cookie = location[location.length - 1];
            return $http.get("Ssns/" + cookie);
         })
         .then(function(response) {
            return $http.get('/Prss/' + response.data.prsId);
         })
         .then(function(response) {
            user = response.data[0];
            return response.data[0];
         });
      },
      logout: function() {
         return $http.delete("Ssns/" + cookie)
         .then(function() {
            console.log("Trying to logout..." + user.email);
            
            user = null;
            cookie = null;
            $state.go('home');
         });
      },
      getUser: function() {
         return user;
      }
   };
}]);
