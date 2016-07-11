# -*- encoding:utf-8 -*-
import urllib2
from bs4 import BeautifulSoup

def gethouses(url):
    req = urllib2.Request(url)  
    html = urllib2.urlopen(req).read()
    soup = BeautifulSoup(html)
    results = []
    for li in soup.find_all('a', attrs={'data-el' : 'ershoufang'}):
        if li.has_attr('title'):
            results.append(li['href'])
    return results

def gethouseinfo(url):
    req = urllib2.Request(url)
    html = urllib2.urlopen(req).read()
    soup = BeautifulSoup(html)
    div = soup.find('div', attrs={'class' : 'desc-text clear'})
    for dl in div.children:
        value =  None
        if dl.dd.a and dl.dd.span:
            value = dl.dd.a.contents[0]
        elif dl.dd.span:
            value =  dl.dd.span.strong.contents[0] + dl.dd.span.i.contents[0]
        else:
            value = dl.dd.contents[0]
        value = value.strip()
        if len(value) > 9:
            print '%15s' % value,
        else:
            print '%10s' % value,
    print ''
        
allhouses = []
for i in range(100):
    url = 'http://bj.lianjia.com/ershoufang/pg' + str(i+1) + 'tf1l2rs%E9%BE%99%E8%B7%83%E8%8B%91/'
    #url = 'http://bj.lianjia.com/ershoufang/huilongguan2/pg%stf1l2/' % str(i+1) 
    houses = gethouses(url)
    if houses:
        allhouses.extend(houses)
    else:
        break
print '==================================== 共 %s 套房源' % len(allhouses)
for tmp in allhouses:
    gethouseinfo(tmp)
    
    
