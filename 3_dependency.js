/*(function () {
  angular.module('DIApp',[])
  .controller('DIController',DIController);
  function DIController($scope, $filter, $injector) {
      $scope.name="Manind";
      $scope.upper= function () {

        var UppCase=$filter('uppercase');
        $scope.name=UppCase($scope.name);
      };
  //  console.log($invertor.annotate(DIController));
  console.log($injector.annotate(DIController));
  }
function console_check(name,age,hello) {
return "manind";
  };
// Check to the console of page
//console.log(console_check());
//console.log(console_check);
//console.log(console_check.toString());
//console.log(DIController.toString());
})();
*/
//=======================================================
//!function(){angular.module("DIApp",[]).controller("DIController",function n(o,e,a){o.name="Manind";o.upper=function(){var n=e("uppercase");o.name=n(o.name)};console.log(a.annotate(n))})}();
//==========================================================***============================================================================//

/*(function () {
  angular.module('DIApp',[])
  .controller('DIController',['$scope','$filter','$injector',DIController]);
  function DIController('$scope, $filter, $injector) {
      $scope.name="Manind";
      $scope.upper= function () {
        var UppCase=$filter('uppercase');
        $scope.name=UppCase($scope.name);
      };
  console.log($injector.annotate(DIController));
  }

function console_check(name,age,hello) {
return "manind";
  };
})();*/
!function(){angular.module("DIApp",[]).controller("DIController",["$scope","$filter","$injector",function n(e,o,a){e.name="Manind";e.upper=function(){var n=o("uppercase");e.name=n(e.name)};console.log(a.annotate(n))}])}();
//========================================================================****===========================================================================================================
//controller('DIController',['$scope','$filter','$injector',DIController]); =  controller('DIController',DIController); DIController.$inject = ['$scope','$filter','$injector'];
