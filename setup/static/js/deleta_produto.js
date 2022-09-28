
var dataurl = document.URL;
var splitbarra = dataurl.split("/");
var idURL = splitbarra.find(item => item > 0);

let produtoQueSeraDeletado = idURL;

let myHeaders = new Headers();

myHeaders.append('Authorization', `Basic ${btoa('Publico:usuariopublico')}`)


let requestOptions = {
    method: 'DELETE', 
    headers: myHeaders,
    redirect: 'follow'
}
let loading = document.getElementById('principal')
loading.style.display = 'block'

fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
.then((result) => {
    console.log(result)
    console.log('Produto deletado.')
    window.location.href = '/produtos';
})
.catch((error) => console.log(error))
.finally(() =>{
    loading.style.display = 'none' 
})

