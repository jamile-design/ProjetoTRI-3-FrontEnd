from django.shortcuts import render
import requests
import json

def index(request):
    return render(request, 'index.html')

def funcionarios(request):
    return render(request, 'funcionarios.html')

def produtos(request):
    return render(request, 'produtos.html')

def detalhando_produto(request, produto_id):

    r = requests.get('http://18.231.157.213/api/products/'+str(produto_id), auth=('Publico', 'usuariopublico'))
    produto = json.loads(r.content)
    
    produtos_a_exibir = {
        'produto': produto,
        'url': produto['url'],
        'product_code': produto['product_code'],
        'product_name': produto['product_name'],
        'description': produto['description'],
        'standard_cost': produto['standard_cost'],
        'list_price': produto['list_price'],
        'reorder_level': produto['reorder_level'],
        'target_level': produto['target_level'],
        'quantity_per_unit': produto['quantity_per_unit'],
        'discontinued': produto['discontinued'],
        'minimun_reorder_quantity': produto['minimun_reorder_quantity'],
        'category': produto['category'],
        'attachaments': produto['attachaments'],
        'status': produto['status'],
        'UnitsInStock': produto['UnitsInStock'],
        'supplyers_ids': produto['supplyers_ids'],
    }

    
    return render(request, 'detalhe_produto.html', produtos_a_exibir)


def detalhando_funcionario(request, funcionario_id):
    r = requests.get('https://desafiotrimestral.azurewebsites.net/funcionario/get/'+str(funcionario_id), verify=False)
    funcionario = json.loads(r.content)
    print(funcionario['foto'])


    funcionario_a_exibir = {
        'funcionario': funcionario,
        'id': funcionario['id'],
        'nome': funcionario['nome'],
        'cargo': funcionario['cargo'],
        'telefoneComercial': funcionario['telefoneComercial'],
        'telefoneResidencial': funcionario['telefoneResidencial'],
        'telefoneCelular': funcionario['telefoneCelular'],
        'endereco': funcionario['endereco'],
        'cidade': funcionario['cidade'],
        'estado': funcionario['estado'],
        'codigoPostal': funcionario['codigoPostal'],
        'pais': funcionario['pais'],
        'foto': funcionario['foto'],
        'website': funcionario['website'],
        'observacao': funcionario['observacao'],
        'sobrenome': funcionario['sobrenome'],
    }

    
    return render(request, 'detalhe_funcionario.html', funcionario_a_exibir)

    





def exibindo_produtos(request):
    r = requests.get('http://18.231.157.213/api/products/', auth=('Publico', 'usuariopublico'))
    produtos_json = json.loads(r.content)
    produtos_json = produtos_json['results']  
    produtos = []
    for produto in produtos_json: 
        produto['product_name'] = produto['product_name'].replace('Northwind Traders ', '')
        produto['url'] = produto['url'].replace("http://18.231.157.213/api/products/", "")
        produtos = produto
    
    lista_produtos = {
        'produtos': produtos_json,
    }

    return render(request, 'produtos2.html', lista_produtos)

def criar_produto(request):
    return render(request, 'criar_produto.html')

def load(request):
    return render(request, 'partials/_load.html',)