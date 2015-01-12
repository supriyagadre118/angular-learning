/**
 * Created by Supriya Gadre on 12/1/15.
 */
app.controller('ParentCtrl', function ($scope) {
  $scope.parentMethod = function () {
    console.log("Parent method called by Child..");
  };
  $scope.callChildMethod = function(){
    $scope.$broadcast('some-event');
  };
  $scope.$on('event-response', function (result) {
    console.log("Child called by Parent >> ",result);
  });
});
app.controller('ChildCtrl', function ($scope) {
  $scope.$on('some-event', function () {
    var result = "Child method called by Parent";
    $scope.$emit('event-response', result);
  });
});