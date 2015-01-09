/**
 * Created by Supriya Gadre on 23/12/14.
 */

app.run(function($rootScope) {
  $rootScope.color = 'yellow';
});
app.controller('SkyController', function($scope) {
  $scope.color = 'blue';
});
app.controller('SunController', function($scope) {
});
