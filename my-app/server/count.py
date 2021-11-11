from konlpy.corpus import kobill    # Docs from pokr.kr/bill
files_ko = kobill.fileids()         # Get file ids
doc_ko = kobill.open('1809890.txt').read()

from konlpy.tag import Okt; t = Okt()
tokens_ko = t.morphs(doc_ko)

import nltk
ko = nltk.Text(tokens_ko, name='대한민국 국회 의안 제 1809890호')

print(len(ko.tokens))       # returns number of tokens (document length)
print(len(set(ko.tokens)))  # returns number of unique tokens
ko.vocab() 
ko.count("초등학교")
ko.dispersion_plot(['육아휴직', '초등학교', '공무원'])
ko.concordance('초등학교')