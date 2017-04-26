driver_frontend.controller('customerAppCtrl',function ($http,$q, $scope, $rootScope, apiService){
  
  $scope.rideNow = function(){
    apiService.rideNow().then(
        function (response) {
          console.log(response);
        },
        function () {
          console.log('err');
        }
    )
  };
});
