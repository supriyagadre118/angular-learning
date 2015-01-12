app.controller('firstControllerScope', function ($scope)
{
  // Initialize the model variables
  $scope.firstName = "Supriya";
});

app.controller('secondControllerScope', function ($scope)
{
  // Initialize the model variables
  $scope.lastName = "Gadre";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  };
});

app.controller('thirdControllerScope', function ($scope)
{
  // Initialize the model variables
  $scope.middleName = "Kamlesh";
  $scope.lastName = "Bhagat";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
  };
});

app.controller('firstControllerObj', function ($scope)
{
  // Initialize the model object
  $scope.firstModelObj = {
    firstName: "Supriya"
  };
});

app.controller('secondControllerObj', function ($scope)
{
  // Initialize the model object
  $scope.secondModelObj = {
    lastName: "Gadre"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.secondModelObj.lastName;
  };
});

app.controller('thirdControllerObj', function ($scope)
{
  // Initialize the model object
  $scope.thirdModelObj = {
    middleName: "Kamlesh",
    lastName: "Bhagat"
  };

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstModelObj.firstName + " " +
      $scope.thirdModelObj.middleName + " " +
      $scope.thirdModelObj.lastName;
  };
});