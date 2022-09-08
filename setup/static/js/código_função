



function listaDeEmpregados() {
		let url = 'https://localhost:44314/funcionario/getultimasvendasfuncionario';
		fetch(url, {
			headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
				/*'Access-Control-Allow-Origin' : '*'*/
            },
            method: "GET",
		})
			.then(response => {
				response.json().then(data => {
					/*console.log(data);*/
					var data = data;
					console.log(data);
					console.log(data["sobrenome"]);
					var listaDeEmpregados = document.querySelector("#ListaEmpregados")
					var li = document.createElement("li");
					li.textContent = data["sobrenome"];
					listaDeEmpregados.appendChild(li);

				})
			})
		}