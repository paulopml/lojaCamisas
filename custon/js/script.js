/**
 * Created by pauloml on 19/07/2015.
 */
var app = angular.module('filtro',[]);

app.controller('controller1', ['$scope', function($scope) {
    $scope.filtro = {categoria: ''};
    $scope.produtos = [{
        nome: 'Polo Lisa lilas',
        categoria: 'Polo',
        preco: 35.00,
        imagem: 'img/polo/3_200.png'
    }, {
        nome: 'Polo Listada',
        categoria: 'Polo',
        preco: 35.00,
        imagem: 'img/polo/6_200.png'
    }, {
        nome: 'Polo Lisa Cinza',
        categoria: 'Polo',
        preco: 35.00,
        imagem: 'img/polo/9_200.png'
    }, {
        nome: 'Polo Listada',
        categoria: 'Polo',
        preco: 35.00,
        imagem: 'img/polo/12_200.png'
    }, {
        nome: 'Camisa social',
        categoria: 'social',
        preco: 49.00,
        imagem: 'img/social/15_200.png'
    }, {
        nome: 'Camisa social',
        categoria: 'social',
        preco: 49.00,
        imagem: 'img/social/17_200.png'
    }, {
        nome: 'Camisa social',
        categoria: 'social',
        preco: 49.00,
        imagem: 'img/social/21_200.png'
    }, {
        nome: 'Camisa social',
        categoria: 'social',
        preco: 49.00,
        imagem: 'img/social/24_200.png'
    }, {
        nome: 'Camisa T-shirt',
        categoria: 'T-shirt',
        preco: 19.00,
        imagem: 'img/t-shirt/27_200.png'
    }, {
        nome: 'Camisa T-shirt',
        categoria: 'T-shirt',
        preco: 19.00,
        imagem: 'img/t-shirt/30_200.png'
    }, {
        nome: 'Camisa T-shirt',
        categoria: 'T-shirt',
        preco: 19.00,
        imagem: 'img/t-shirt/33_200.png'
    }, {
        nome: 'Camisa T-shirt',
        categoria: 'T-shirt',
        preco: 19.00,
        imagem: 'img/t-shirt/36_200.png'
    },
    ];
}]);

var ProdutosDetalhe = [{
    nome: 'Polo Lisa lilas',
    preco: 35.00,
    cor: 'Lilas',
    descricao: 'A camisa polo composta por tecido de poliéster uma camisa adequada para quem aprecia o conforto e um toque macio. ' +
    'Corte confortável e moderno, praticidade (fácil de lavar e passar), alta durabilidade e fácil transpiração.',
    dicas: 'Use com calça jeans, de sarja ou bermuda.',
    comprimento: 'Comprimento de Mangas Curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Polo Listada',
    preco: 35.00,
    cor: 'branco e rosa',
    descricao: 'A camisa polo composta por tecido de poliéster uma camisa adequada para quem aprecia o conforto e um toque macio. ' +
    'Corte confortável e moderno, praticidade (fácil de lavar e passar), alta durabilidade e fácil transpiração.',
    dicas: 'Use com calça jeans, de sarja ou bermuda.',
    comprimento: 'Comprimento de Mangas Curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Polo Lisa Cinza',
    preco: 35.00,
    cor: 'Cinza',
    descricao: 'A camisa polo composta por tecido de poliéster uma camisa adequada para quem aprecia o conforto e um toque macio. ' +
    'Corte confortável e moderno, praticidade (fácil de lavar e passar), alta durabilidade e fácil transpiração.',
    dicas: 'Use com calça jeans, de sarja ou bermuda.',
    comprimento: 'Comprimento de Mangas Curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Polo Listada',
    preco: 35.00,
    cor: 'branco e cinza',
    descricao: 'A camisa polo composta por tecido de poliéster uma camisa adequada para quem aprecia o conforto e um toque macio. ' +
    'Corte confortável e moderno, praticidade (fácil de lavar e passar), alta durabilidade e fácil transpiração.',
    dicas: 'Use com calça jeans, de sarja ou bermuda.',
    comprimento: 'Comprimento de Mangas Curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa social',
    preco: 49.00,
    cor: 'branco e azul',
    descricao: 'A camisa possui fio tinto e é composta por tecido misto. O fio tinto é aquele que recebe o tingimento, antes mesmo de ser tecido, o que garante maior durabilidade a peça. ' +
    'Uma de sua vantagens é o corte confortável e moderno, várias possibilidades de combinações e alta durabilidade.',
    dicas: 'Use com calças sociais ou de sarja.',
    comprimento: 'Comprimento de Mangas longas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa social',
    preco: 49.00,
    cor: 'branco, cinza e azul',
    descricao: 'A camisa possui fio tinto e é composta por tecido misto. O fio tinto é aquele que recebe o tingimento, antes mesmo de ser tecido, o que garante maior durabilidade a peça. ' +
    'Uma de sua vantagens é o corte confortável e moderno, várias possibilidades de combinações e alta durabilidade.',
    dicas: 'Use com calças sociais ou de sarja.',
    comprimento: 'Comprimento de Mangas longas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa social',
    preco: 49.00,
    cor: 'azul claro',
    descricao: 'A camisa possui fio tinto e é composta por tecido misto. O fio tinto é aquele que recebe o tingimento, antes mesmo de ser tecido, o que garante maior durabilidade a peça. ' +
    'Uma de sua vantagens é o corte confortável e moderno, várias possibilidades de combinações e alta durabilidade.',
    dicas: 'Use com calças sociais ou de sarja.',
    comprimento: 'Comprimento de Mangas longas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa social',
    preco: 49.00,
    cor: 'rosa',
    descricao: 'A camisa possui fio tinto e é composta por tecido misto. O fio tinto é aquele que recebe o tingimento, antes mesmo de ser tecido, o que garante maior durabilidade a peça. ' +
    'Uma de sua vantagens é o corte confortável e moderno, várias possibilidades de combinações e alta durabilidade.',
    dicas: 'Use com calças sociais ou de sarja.',
    comprimento: 'Comprimento de Mangas longas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa T-shirt',
    preco: 19.00,
    cor: 'azul',
    descricao: 'A t-shirt cor azul e gola redonda, é uma peça masculina composta por tecido de algodão. Possui mangas curtas,' +
    'portanto é ideal para os dias mais quentes. Sua vantagens: não desbota, fácil transpiração, não amassa e possui alta durabilidade.',
    dicas: 'Use com bermudas, calças jeans ou de sarja',
    comprimento: 'Comprimento de Mangas curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa T-shirt',
    preco: 19.00,
    cor: 'cinza claro',
    descricao: 'A t-shirt cor azul e gola redonda, é uma peça masculina composta por tecido de algodão. Possui mangas curtas,' +
    'portanto é ideal para os dias mais quentes. Sua vantagens: não desbota, fácil transpiração, não amassa e possui alta durabilidade.',
    dicas: 'Use com bermudas, calças jeans ou de sarja',
    comprimento: 'Comprimento de Mangas curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa T-shirt',
    preco: 19.00,
    cor: 'verde água',
    descricao: 'A t-shirt cor azul e gola redonda, é uma peça masculina composta por tecido de algodão. Possui mangas curtas,' +
    'portanto é ideal para os dias mais quentes. Sua vantagens: não desbota, fácil transpiração, não amassa e possui alta durabilidade.',
    dicas: 'Use com bermudas, calças jeans ou de sarja',
    comprimento: 'Comprimento de Mangas curtas',
    imagem : 'img/polo/3_200.png'
},{
    nome: 'Camisa T-shirt',
    preco: 19.00,
    cor: 'vermelha',
    descricao: 'A t-shirt cor azul e gola redonda, é uma peça masculina composta por tecido de algodão. Possui mangas curtas,' +
    'portanto é ideal para os dias mais quentes. Sua vantagens: não desbota, fácil transpiração, não amassa e possui alta durabilidade.',
    dicas: 'Use com bermudas, calças jeans ou de sarja',
    comprimento: 'Comprimento de Mangas curtas',
    imagem : 'img/polo/3_200.png'
}]

