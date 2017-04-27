driver_frontend.controller('driverAppCtrl', function ($http, $scope,$state, $stateParams, $rootScope, apiService, DTOptionsBuilder) {
  $scope.driverId = $stateParams.id;
  $scope.driverData = {"ongoing" : [], "complete" : [], "waiting" : []};
  var vm = this;
  vm.dtOptions = DTOptionsBuilder.newOptions().withDOM('crt');

  $scope.refresh = function(){
    apiService.getDriverAppData($scope.driverId).then(
      function (response) {
        $scope.driverData = response;
      },
      function(err) {
        console.log('err');
        alert(err);
      }
    );
  };

  $scope.refresh();
  
  $scope.acceptRide = function(requestId){
    console.log('here request_id is', requestId);
    apiService.acceptRequest(requestId, $scope.driverId).then(
        function (response) {
          console.log(response);
          alert(response);
        },
        function(err) {
          console.log('err');
          alert(err);
        }
    );
  }

  $scope.getMaxElems = function(){
    var a1 = $scope.driverData.waiting.length;
    var a2 = $scope.driverData.ongoing.length;
    var a3 = $scope.driverData.complete.length;
    var n = 0;
    n = a1 >= a2 ? (a1>=a3 ?  1 : 2) : (a2 >= a3 ? 2 : 3);
    var arr = [$scope.driverData.waiting, $scope.driverData.ongoing, $scope.driverData.complete];
    console.log('here driverData', $scope.driverData.waiting, $scope.driverData.ongoing, $scope.driverData.complete);
    return arr[n-1];
  }

});


