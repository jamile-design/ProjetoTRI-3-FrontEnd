from django.urls import path
from index.views import *

urlpatterns = [
    path("", index, name='index'),
    path('funcionarios', funcionarios, name='funcionarios'),
    path('funcionarios/<int:funcionario_id>/', detalhando_funcionario, name='funcionario_detalhado'),
    path('produtos/<int:produto_id>/', detalhando_produto, name='produto_detalhado'),
    path('produtos', exibindo_produtos, name='exibindo_produtos'),
    path('criar_produto', criar_produto, name='criar_produto'),
    path('load', load, name='load'),
]
