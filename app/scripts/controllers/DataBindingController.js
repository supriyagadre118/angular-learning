/**
 * Created by Supriya Gadre on 12/1/15.
 */
app.controller('DataBindingController',function($scope){
  $scope.$watch('name', function(newValue, oldValue) {
    //update the DOM with newValue
    console.log('$watch will always check for the updated value >>> \nnew value = ',newValue,'\nold value = ',oldValue);
  });
});

