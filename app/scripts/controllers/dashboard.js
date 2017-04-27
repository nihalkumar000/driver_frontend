driver_frontend.controller('dashboardCtrl', function ($http, $scope,$state, $stateParams, $rootScope, DTOptionsBuilder, apiService) {


   $scope.dashboardData = [];
  var vm = this;
  vm.dtOptions = DTOptionsBuilder.newOptions().withDOM('crt');

  $scope.getDataFromServer = function() {
    apiService.getDashboardData().then(
      function (response) {
          $scope.dashboardData = response;
      },
      function () {
        console.log('err');
      }
    );
  };
  
  $scope.getDataFromServer();
  
});


