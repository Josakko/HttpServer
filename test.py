import requests
import json

payload = json.dumps({"content": "This is test"})
res = requests.post(url="http://89.172.248.156", data=payload, headers={"Content-Type": "application/json"}) #89.172.248.156

print(res.status_code)
