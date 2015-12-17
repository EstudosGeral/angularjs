angular.module('pricipal').controller('FotosController', function ($scope, $http) {
    $scope.fotos = [];

    $http.get('v1/fotos').success(function (dados) {
        $scope.fotos = dados;
    }).error(function(error){
        console.log(error);
    });

});