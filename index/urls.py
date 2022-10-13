from django.urls import path
from index.views import *

urlpatterns = [
    path("", index, name='index'),
    path('funcionarios', funcionarios, name='funcionarios'),
    path('funcionarios/<int:funcionario_id>/', detalhando_funcionario, name='funcionario_detalhado'),
    path('criar_funcionario', criar_funcionario, name='criar_funcionario'),
    # path('edita_funcionario/<int:id_funcionario>/', edita_funcionario, name='edita_funcionario'),
    path('deleta_funcionario/<int:id_funcionario>/', deleta_funcionario, name='deleta_funcionario'),
    path('produtos/<int:produto_id>/', detalhando_produto, name='produto_detalhado'),
    path('produtos', exibindo_produtos, name='exibindo_produtos'),
    path('deleta_produto/<int:id_produto>/', deleta_produto, name='deleta_produto'),
    path('edita_produto/<int:id_produto>/', edita_produto, name='edita_produto'),
    path('criar_produto', criar_produto, name='criar_produto'),
    path('load', load, name='load'),
]
