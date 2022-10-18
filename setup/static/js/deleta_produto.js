///////
var dataurl = document.URL;
var splitbarra = dataurl.split("/");
var idURL = splitbarra.find(item => item > 0);
let statusResponse;
let produtoQueSeraDeletado = idURL;

var myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${btoa('Publico:usuariopublico')}`);

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

const URLFETCH = `http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`

fetch(URLFETCH, requestOptions)
  .then(response => {
    response.text()
    statusResponse = response.status;
  })
  .then(result => {

    console.log(statusResponse);
    if (statusResponse === 500) {
      
      // var requestOptions = {
      //   method: 'GET',
      //   headers: myHeaders,
      //   redirect: 'follow'
      // };
      
      // fetch(URLFETCH, requestOptions)
      //   .then(response => response.text())
      //   .then(result => {
          // result = JSON.parse(result);   
       
      let discontinued = '1'
  
      var formdata = new FormData();
      formdata.append("discontinued", discontinued);
      
      var requestOptions = {
        method: 'PATCH', // ANTES AQUI ESTAVA PUT
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(URLFETCH, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          alert('Produto discontinuado.')
          window.location.href = '/produtos';
        })
        .catch(error => console.log('error', error));
      
      // })
      //   .catch(error => console.log('error', error));
      
      

    }else{
      console.log(result);
      alert('Produto deletado.');
      window.location.href = '/produtos';
    }
  })
  .catch(error => console.log('error', error));

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
//   .then(response => response.text())
//   .then(result => {
//     result = JSON.parse(result);   
 
//     let discontinued = '1'

//     var formdata = new FormData();
//     formdata.append("discontinued", discontinued);
    
//     var requestOptions = {
//       method: 'PATCH', // ANTES AQUI ESTAVA PUT
//       headers: myHeaders,
//       body: formdata,
//       redirect: 'follow'
//     };
    
//     fetch(`http://18.231.157.213/api/products/${produtoQueSeraDeletado}/`, requestOptions)
//       .then(response => response.text())
//       .then(result => {
//         console.log(result);
//         window.location.href = '/produtos';
//       })
//       .catch(error => console.log('error', error));

// })
//   .catch(error => console.log('error', error));

