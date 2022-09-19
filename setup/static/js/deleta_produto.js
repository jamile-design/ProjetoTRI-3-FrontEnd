
let produtoQueSeraDeletado;

let myHeaders = new Headers();

myHeaders.append('Authorization', `Basic ${btoa('Publico:usuariopublico')}`)


let requestOptions = {
    method: 'DELETE', 
    headers: myHeaders,
    redirect: 'follow'
}

fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
.then((result) => console.log(result))
.catch((error) => console.log(error))








