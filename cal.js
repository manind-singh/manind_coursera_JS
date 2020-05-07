(function () {
'use strict'
angular.module('NameCal',[])
.controller('NameCalController',function ($scope) {
  $scope.name="";
  $scope.totalValue=0;
  $scope.calFunction = function()
  {
    var totalnamevalue= calculatenumericforstring($scope.name);
    $scope.totalValue=totalnamevalue;
  };

  function calculatenumericforstring(string) {
    var totalstringvalue=0;
    for(var i=0; i<string.length; i++)
    {
      totalstringvalue += string.charCodeAt(i);
    }
    return totalstringvalue;
  };
});
})();
