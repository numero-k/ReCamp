# import requests
# from bs4 import BeautifulSoup
# import json
# from collections import OrderedDict
import sys

# file_data=OrderedDict()
# rows=[]


# def api(keyword):
#     key = "915783f11028ae03b79f539bd6475e3b"
#     url = "http://openapi.11st.co.kr/openapi/OpenApiService.tmall?key="+key+"&apiCode=ProductSearch&keyword="+keyword+""
#     req = requests.get(url)
#     xmlRowdata = req.content.decode('cp949')
#     soup = BeautifulSoup(xmlRowdata, 'html.parser')
#     for i in soup.find_all("product"):
#         rows.append({"ProductName": i.productname.string,
#                      "ProductImg": i.productimage.string,
#                      "ProductPrice":i.productprice.string})
#     with open('productdata.json','w') as f:
#         json.dump(rows,f,indent='\t')
#     #
#     # print(json.dumps(rows,ensure_ascii=False,indent="\t"))
#     # with open


# if __name__ == '__main__':
#     api(sys.argv[1])

print('HI Iam ken')