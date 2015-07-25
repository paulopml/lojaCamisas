/**
 * Created by pauloml on 19/07/2015.
 */
var app = angular.module('app1',[]);

app.controller('controller1', function($scope){
    $scope.produtos = meuProdutos;
})

var meuProdutos = [{
    nome: 'Polo Lisa lilas',
    preco: 29.00,
    imagem : 'img/polo/3.jpg'
},{
    nome: 'Polo Listada',
    preco: 29.00,
    imagem : 'img/polo/6.jpg'
},{
    nome: 'Polo Lisa Cinza',
    preco: 29.00,
    imagem : 'img/polo/9.jpg'
}];
