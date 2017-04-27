driver_frontend.controller('customerAppCtrl',function ($http,$q, $scope, $rootScope, apiService){
  $scope.customerId = "";
  $scope.rideNow = function(){
    if($scope.customerId){
        console.log($scope.customerId)
       apiService.rideNow($scope.customerId).then(
         function (response) {
           console.log(response);
           alert(response);
         },
          function (err) {
           console.log('err');
              alert(err);
         });
    }
    else{
        alert("Please enter a customerId");
    }
  };

});
