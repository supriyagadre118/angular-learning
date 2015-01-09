/**
 * Created by Supriya Gadre on 8/1/15.
 */
app.controller('WatchController',function($scope,$parse){
  $scope.$watch('expr', function(newVal, oldVal, scope) {
    if (newVal !== oldVal) {
      // Let's set up our parseFun with the expression
      var parseFun = $parse(newVal);
      // Get the value of the parsed expression
      $scope.parsedValue = parseFun(scope);
    }
  });
});