var dataurl = document.URL;
var splitbarra = dataurl.split("/");
let funcionarioQueSeraDeletado = splitbarra.find(item => item > 0);

let requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
};
  
let URL = `https://desafiotrimestral.azurewebsites.net/funcionario/delete/${funcionarioQueSeraDeletado}`;
fetch(URL, requestOptions)
.then(response => response.json())
.then(result => {
    if (result.status === 200){
        alert('Funcionário deletado com SUCESSO.');
        window.location.href = '/funcionarios';
    } else if (result.status === 500) {

        var formdata = new FormData();
        formdata.append("id", "1");
        formdata.append("ativo", "false");
        
        var requestOptions = {
          method: 'PATCH',
          body: formdata,
          redirect: 'follow'
        };
        
        fetch(`https://desafiotrimestral.azurewebsites.net/funcionario/patch/${funcionarioQueSeraDeletado}`, requestOptions)
          .then(response => response.json())
          .then(result => {
            console.log(result)
            if (result.status === 200){
                alert('Funcionário desativado.')
                window.location.href = '/funcionarios'
            }
        })
          .catch(error => console.log('error', error));
    } else{

        alert('Funcionario NÃO deletado.');
        window.location.href = '/funcionarios';
    }
    
})
.catch(error => console.log('error', error));

