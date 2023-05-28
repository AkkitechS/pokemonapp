const angularLib = require("./libs/angular.min");

let app = angular.module("app", []);

app.controller("c1", ($scope) => {
    $scope.name = "ABC";
});