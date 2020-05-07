(function my_function() {
'use strict'
var x= "hello";
angular.module('MyfirstApp',[])
.controller('MyFirstController',function ($scope) {
$scope.name="manind singh chauhan"
$scope.name_function = function () {
  return "This one is name function";
};
});
})();
