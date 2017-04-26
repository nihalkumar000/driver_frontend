driver_frontend.controller('driverAppCtrl', function ($http, $scope,$state, $stateParams, $rootScope, apiService, DTOptionsBuilder) {
  $scope.driverId = $stateParams.id;
  $scope.driverData = [];
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

});


