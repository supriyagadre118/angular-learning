/**
 * Created by Supriya Gadre on 8/1/15.
 */
app.controller('LogController', function($scope,$log) {
  $scope.$log = $log;
  $scope.message = 'Hello Angular World!';
});