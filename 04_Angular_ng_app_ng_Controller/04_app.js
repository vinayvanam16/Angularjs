var app = angular.module("likesApp",[]); //Creation of Angular Module.
app.controller("likesAppCtrl",function ($scope) { //Creation of Controler
    $scope.likes = 0;
    $scope.dislikes = 0;
    $scope.total = 0;
    $scope.liked = function () {
        // console.log("like Button is Cliked");
        $scope.likes++;
        $scope.total++;
    };
    $scope.disliked = function () {
        $scope.dislikes++;
        $scope.total++;
    }
});