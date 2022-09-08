import requests 
import json

r = requests.get('http://18.231.157.213/api/products/', auth=('Publico', 'usuariopublico'))
json = json.loads(r.content)
print(json['results'])