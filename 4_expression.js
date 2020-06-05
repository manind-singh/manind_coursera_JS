(function () {
 'use strict'
 angular.module('MsgApp',[])
 .controller('MsgController',MsgController);
 MsgController.$inject=['$scope'];

 function MsgController($scope)
 {
   $scope.name='Hello';
   $scope.country= function()
   {
     return 'India is my country';
   };
   $scope.pic=function () {
     $scope.pictures='shiva';
   };
 }

})();
