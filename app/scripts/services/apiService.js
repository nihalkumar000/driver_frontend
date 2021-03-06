driver_frontend.service('apiService',function($http){

  this.getDashboardData = function(){
    var dashboardDataUrl = 'http://14.139.56.19:8029/getDashboardData';
    return $http({
      method: 'POST',
      url : dashboardDataUrl,
      data : {},
      'headers': {
        'content-type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return $.param(data);
      }
    }).then(
        function(res){
          console.log('got data in post request', res.data);
          return res.data;
        },
        function(error){
          console.log(error);
          return error;
        }
    );
  };

  this.getDriverAppData = function(driverId){
    var driverAppUrl = "http://14.139.56.19:8029/getDriverAppData?driverId="+driverId;
    return $http({
      method: 'POST',
      url : driverAppUrl,
      data : {"driverId" : driverId},
      'headers': {
        'content-type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return $.param(data);
      }
    }).then(
      function(res){
        console.log('got data in post request', res.data);
        return res.data;
      },
      function(error){
        console.log(error);
        return error;
      }
    );
  };

  this.rideNow = function(customerId){
    var rideNowUrl = 'http://14.139.56.19:8029/requestRide';
    return $http({
      method: 'POST',
      url : rideNowUrl,
      data : {"customerId" : customerId},
      'headers': {
        'content-type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return $.param(data);
      }
    }).then(
      function(res){
        console.log('got data in post request', res.data);
        return res.data;
      },
      function(error){
        console.log(error);
        return error;
      }
    );
  };

  this.acceptRequest = function(requestId, driverId){
    var acceptRequestUrl = 'http://14.139.56.19:8029/acceptRequest';
    return $http({
      method: 'POST',
      url : acceptRequestUrl,
      data : {
        "requestId" : requestId,
        "driverId" : driverId
      },
      'headers': {
        'content-type': 'application/x-www-form-urlencoded'
      },
      transformRequest: function (data) {
        return $.param(data);
      }
    }).then(
        function(res){
          console.log('got data in post request', res.data);
          return res.data;
        },
        function(error){
          console.log(error);
          return error;
        }
    );
  };

});

