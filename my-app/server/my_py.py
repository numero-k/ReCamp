import requests
from bs4 import BeautifulSoup
import json
from collections import OrderedDict
import sys

file_data=OrderedDict()
rows=[]
pp="export const ProductData="
new_string=pp.strip('"')
def api(keyword):
    key = "915783f11028ae03b79f539bd6475e3b"
    url = "http://openapi.11st.co.kr/openapi/OpenApiService.tmall?key="+key+"&apiCode=ProductSearch&keyword="+keyword+""
    req = requests.get(url)
    xmlRowdata = req.content.decode('cp949')
    soup = BeautifulSoup(xmlRowdata, 'html.parser')
    for i in soup.find_all("product"):
        rows.append({"ProductName": i.productname.string,
                     "ProductImg": i.productimage.string,
                     "ProductPrice":i.productprice.string})
    with open('../src/components/data.js','w') as f:
        f.write(pp)
        json.dump(rows,f,indent='\t')
        f.write(";")
    #
    # print(json.dumps(rows,ensure_ascii=False,indent="\t"))
    # with open


if __name__ == '__main__':
    api(sys.argv[1])

