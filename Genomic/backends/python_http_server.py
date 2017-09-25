import socket
import re
from nkrypt import *
from http_header import *

class http_server:
	def __init__(self,setup):
		self.location=setup['location']
		self.port=setup['port']
		self.buffer_size=setup['buffer_size']
		self.custom=setup['custom']

	def init(self):
		s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
		s.bind((self.location,self.port))
		s.listen(0)
		return s

	def stripQuery(self,message):
		print(message)
		query=re.search('[GET|POST] \/\?*([^\s]*)',message).group(1)
		return query

	#returns object
	def formatQuery(self,query):
		temp={}
		if(query.find('=',0,len(query))==-1): return temp
		answers=re.findall('[^\&]+',query)
		for answer in answers:
			answer=re.findall('[^\=]+',answer)
			temp.update({answer[0]:answer[1]})
		return temp

	def manageRespose(self,message):
		query=self.stripQuery(message)
		print('query:',query)
		answer=self.formatQuery(query)
		response=self.custom(answer)
		print('answer:',answer)
		secureResponse=nkrypt.cipher(response)
		return secureResponse

	def start_server(self):
		s=self.init()
		print('Server started at ' + str(self.location) + ' on port ' + str(self.port))
		while 1:
			conn, acc=s.accept()
			
			try:
				message=conn.recv(self.buffer_size).decode()
			except:
				message='none=none'

			print('message:',message)
			secureResponse=self.manageRespose(message)
			print('secureResponse:',secureResponse)
			http_response=format(secureResponse)
			print('http_response:',http_response)
			conn.send(http_response.encode())
			conn.close()