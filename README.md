# Angularjs-dropdown-with-select-and-ng-options
This is only the directive to add at the main project. The directive manage all select function my project needed. It will easy for user to add new feature.

Soon I'll publish a better explaination of how it work. It could be used on the html like that:

<dropdown ng-model="model" list="list" label="'label'"  field-name="fieldname" ng-disabled="disable == true" visual="visual" no-value="false" placeholder="'placeholder'" req="!model" callback="callback()"></bir-dropdown>

In the controller connected to the HTML should be those variables of $scope:

$scope.model;
$scope.list;
$scope.disable;
$scope.visual;
$scope.callback = function() {};
