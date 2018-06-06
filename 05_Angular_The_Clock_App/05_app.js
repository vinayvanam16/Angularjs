var app=angular.module("ClockApp",[]); //Creation of Angular Module
app.controller("ClockAppCtrl",function ($scope,$interval) {
    function indianDate() {
        var today = new Date();
        var options = {timeZone: "Asia/Kolkata"};
        $scope.indianTime = today.toLocaleTimeString('en-US' , options);
        $scope.indianDate = today.toLocaleDateString('en-Us', options);
    }
    indianDate();
    $interval(indianDate,1000);

    function usaDate() {
        var today = new Date();
        var options = {timeZone: "America/New_York"};
        $scope.usaTime = today.toLocaleTimeString('en-US' , options);
        $scope.usaDate = today.toLocaleDateString('en-Us', options);
    }

    usaDate();
    $interval(usaDate,1000);


    function chinaDate() {
        var today = new Date();
        var options = {timeZone: "Asia/Shanghai"};
        $scope.chinaTime = today.toLocaleTimeString('en-US' , options);
        $scope.chinaDate = today.toLocaleDateString('en-Us', options);
    }

    chinaDate();
    $interval(chinaDate,1000);
});