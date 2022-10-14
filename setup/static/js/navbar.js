var dataurl = document.URL;
var splitbarra = dataurl.split("/");
let currentPage = splitbarra[splitbarra.length - 1];
let HOME = document.getElementById('linkHome');
let FUNCIONARIOS = document.getElementById('linkEmpregados');
let PRODUTOS = document.getElementById('linkProdutos');
let allPagesOfNavbar = document.getElementById('ancoras');

if (currentPage == ''){
    HOME.classList.add('current_page_of_navbar');
}
if (currentPage == 'funcionarios'){
    FUNCIONARIOS.classList.add('current_page_of_navbar');
}
if (currentPage == 'produtos'){
    PRODUTOS.classList.add('current_page_of_navbar');
}