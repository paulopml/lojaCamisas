/**
 * Created by pauloml on 19/07/2015.
 */
var app = angular.module('shop',['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'paginas/list.html',
            controller: 'controller1'
        })
        .when('/camisa/:id_camisa', {
            templateUrl: 'paginas/detail.html',
            controller: 'controller2'
        })
        .when('/camisa/', {
            templateUrl: 'paginas/detail.html',
            controller: 'controller2'
        });
});
app.controller('controller1', ['$scope', function($scope) {
    $scope.camisas = estoqueCamisas;
    $scope.filtro = {categoria: ""};
}]);
app.controller('controller2', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.camisa = estoqueCamisas[$routeParams.id_camisa];
    $scope.slides = estoqueCamisas[$routeParams.id_camisa].imagemDetalhe;
    $scope.myInterval = 4000;
}]);