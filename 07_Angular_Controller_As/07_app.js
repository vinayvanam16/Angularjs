var app = angular.module("ControllerAsApp",[]);

// Parent Controller
app.controller("ParentCtrl",function () {
    this.text = "";
});

// Child Controller
app.controller("ChildCtrl",function () {
    this.text = "";
});