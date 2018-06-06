var app = angular.module("ControllerApp", []);

// Parent Controller
app.controller("parentCtrl",function ($scope) {
$scope.text = " ";
});

// Child Controller

app.controller("childCtrl",function ($scope) {
    //$scope.text = " ";

});