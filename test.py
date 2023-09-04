import requests
import json

payload = json.dumps({"content": "This is test"})
res = requests.post(url="http://xxxxxx", data=payload, headers={"Content-Type": "application/json"})

print(res.status_code)
