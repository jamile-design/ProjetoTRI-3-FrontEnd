var dataurl = document.URL;
var splitbarra = dataurl.split("/");
let funcionarioQueSeraDeletado = splitbarra.find(item => item > 0);
let statusResponse;

let requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
};
  
fetch(`https://desafiotrimestral.azurewebsites.net/funcionario/delete/${funcionarioQueSeraDeletado}`, requestOptions)
.then(response => response.json())
.then(result => {
    if (result.status === 200){
        alert('Funcionário deletado com SUCESSO.');
        window.location.href = '/funcionarios';
    }

    alert('Funcionario NÃO deletado.');
    window.location.href = '/funcionarios';

    
})
.catch(error => console.log('error', error));

