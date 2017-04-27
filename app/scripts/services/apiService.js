driver_frontend.service('apiService',function($http){

  this.getDashboardData = function(invoiceDated, city, token){
    var dashboardDataUrl = 'https://invoice.jugnoo.in:8029/getDashboardData';
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
    var driverAppUrl = "http://localhost:8026/getDriverAppData?driverId="+driverId;
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

  this.rideNow = function(){
    var rideNowUrl = 'https://localhost:8029/rideNow';
    return $http({
      method: 'POST',
      url : rideNowUrl,
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

  this.acceptRequest = function(requestId, driverId){
    var acceptRequestUrl = 'http://localhost:8026/acceptRequest';
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

