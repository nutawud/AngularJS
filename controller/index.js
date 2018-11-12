var app = angular.module('myApp', []);


app.controller('appCon', function ($scope, $http, $window) {
    // $scope.newdata = null;
    // $scope.data = null;

    $scope.get_data = function () {

        $http({
            url: 'http://localhost:3000/getData',
            method: 'GET',

        }).then(function successCallback(response) {

            $scope.data = response.data
            console.log($scope.data)
        }, function errorCallback(response) {
            console.log(response)
        });
    }

    $scope.add_data = function (user) {
        console.log(user)
        $http({
            url: 'http://localhost:3000/addData',
            method: 'POST',
            data: {
                name: user.name,
                telephone: user.telephone,
                address: user.address
            },
            Headers: { 'Content-Type': 'application/json' }

        }).then(function successCallback(response) {
            console.log(response)
            $window.location.reload();
        }, function errorCallback(response) {
            console.log(response)
        });
    }

    $scope.delete = function (id) {
        $http({
            url: 'http://localhost:3000/deleteData/' + id,
            method: 'DELETE',

        }).then(function successCallback(response) {
            console.log(response)
            $window.location.reload();
        }, function errorCallback(response) {
            console.log(response)
        });
    }

    $scope.update = function (datas) {
        $scope.newdata = {
            name: datas.name,
            address: datas.address,
            telephone: datas.telephone,
            id: datas.id
        }

    }
    $scope.update_data = function (new_data) {
        console.log(new_data)
        $http({
            url: 'http://localhost:3000/updateData/' + new_data.id,
            method: 'PUT',
            Headers: { 'Content-Type': 'application/json' },
            data: {
                name: new_data.name,
                telephone: new_data.telephone,
                address: new_data.address
            }
        }).then(function successCallback(response){
            console.log(response)
            $window.location.reload();
        }, function errorCallback(response){
            console.log(response)
        });
    }


});

