import datetime
import inspect

http_userInfo={
	'headers':['Transfer-Encoding','Date','Server','Connection','X-Powered-By','Pragma',
	'Expires','Etag','Cache-Control','Content-Type','Last-Modified','X-Pingback','Vary','Access-Control-Allow-Origin'],
	'Transfer-Encoding':'chunked',
	'Date':'Sat, 28 Nov 2009 04:36:25 GMT',
	'Server':'LiteSpeed',
	'Connection':'close',
	'X-Powered-By':'W3 Total Cache/0.8',
	'Pragma':'public',
	'Expires':'Sat, 28 Nov 2009 04:36:25 GMT',
	'Etag':'"pub1259380237;gz"',
	'Cache-Control':'max-age=3600, public',
	'Content-Type':'text/html; charset=UTF-8',
	'Last-Modified':'Sat, 28 Nov 2009 04:36:25 GMT',
	'X-Pingback':'http://localhost:8080',
	'Vary':'Accept-Encoding, Cookie, User-Agent',
	"Access-Control-Allow-Origin":" *"
}

class dynamic_http_header:
	def __init__(self):
		pass

	version='HTTP/1.x 200 OK\r\n'
	
	date=datetime.datetime.now().strftime("%A, %d %B %Y %I:%M%p")

	def contentLength(self,message):
		return str(len(message))

dynamic_http=dynamic_http_header()

def format(message):
	http_response=''
	for header in http_userInfo['headers']:
		current=http_userInfo[header]
		# print('currentType:',type(current))
		if(inspect.ismethod(current)): current=current(message)
		http_response = http_response + header + ': ' + current + '\r\n'
	http_response=dynamic_http.version + http_response + '\n' +  message
	return 	http_response
	# response='HTTP/1.x 200 OK\r\nTransfer-Encoding: chunked\r\nDate: Sat, 28 Nov 2009 04:36:25 GMT\r\nServer: LiteSpeed\r\nConnection: close\r\nX-Powered-By: W3 Total Cache/0.8\r\nPragma: public\r\nExpires: Sat, 28 Nov 2009 05:36:25 GMT\r\nEtag: "pub1259380237;gz"\r\nCache-Control: max-age=3600, public\r\nContent-Type: text/html; charset=UTF-8\r\nLast-Modified: Sat, 28 Nov 2009 03:50:37 GMT\r\nX-Pingback: http://net.tutsplus.com/xmlrpc.php\r\nVary: Accept-Encoding, Cookie, User-Agent	\r\n\nSending this fucking data'
	# return response
