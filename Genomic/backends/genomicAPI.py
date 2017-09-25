import requests
from pyquery import PyQuery
from python_http_server import *

class genomicAPI:
	def __init__(self):
		pass

	def get(self,data):
		base_url='https://genomicexplorer.io/v1/reports/'
				
		url=base_url + data['trait'] + '?population=european'

		headers={"Authorization":" Bearer GENOMELINKTEST"}

		genome=requests.get(url,headers=headers).text
		print('genomic')
		return str(genome)
genomic=genomicAPI()



class googleMaps:
	def __init__(self):
		pass

	key='AIzaSyB9PHEWpp1-5JYCJkFDAKQBAwwafB-tnuI&location=Cluj-Napoca%2C%20Romania'
	
	def url(self,latitude,longitude):
		return 'https://maps.googleapis.com/maps/api/place/nearbysearch/xml?location=' + latitude + ',' + longitude + '&radius=5000&type=cafe&keyword=vegetarian&key=' + self.key

	def getXML(self,url):
		return requests.get(url).text

	def getNearby(self,xml):
		locations={'names':[],'types':[]}
		places={'name':'','types':[]}
		placeData=PyQuery(xml.encode('utf-8'))('result')
		for place in placeData:
			place=PyQuery(place)
			name=PyQuery(place('name'))
			types=PyQuery(place('type'))
			locations['names'].append(name.text())
			locations['types'].append(types.eq(0).text())
		return locations

	def get(self,data):
		print('data:',data)
		url=self.url(data['latitude'],data['longitude'])
		xml=self.getXML(url)
		print('xml:',xml)
		got=self.getNearby(xml)
		return got

maps=googleMaps()

# sample={
# 	'latitude':'48.859294',
# 	'longitude':'2.347589'
# }	

def router(data):
	routes=['latitude','trait']
	apis={
		'latitude':maps,
		'trait':genomic
	}
	for route in routes:
		try:
			if(data[route]):
				return apis[route].get(data)
		except:
			pass
	return 'I wish I had an excuse for this...'
# test=router(sample)
# print(test)

init={'location':'localhost','port':8070,'buffer_size':2048,'custom':router}
server=http_server(init)
server.start_server() 
