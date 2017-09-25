const express = require('express')
const app = express()
const cheerio=require('cheerio');
const XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
const requests={
	get:function(url,headers){
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", url, false ); // false for synchronous request
	    try{
		    xmlHttp.setRequestHeader(headers[0],headers[1])
	    }catch(err){

	    }
	    xmlHttp.send( null );
	    return xmlHttp.responseText;	
	}
}


const genome={

	base_url:'https://genomicexplorer.io/v1/reports/',

	url:function(trait){
		return this.base_url + trait + '?population=european'
	},

	get:function(data){
		var url=this.url(data['trait'])
		try{
			return requests.get(url,['Authorization','Bearer GENOMELINKTEST'])
		}catch(err){
			console.log(err);
			return 'failed genome request'
		}
	}
}

const maps={

	key:'AIzaSyB9PHEWpp1-5JYCJkFDAKQBAwwafB-tnuI&location=Cluj-Napoca%2C%20Romania',

	url:function(latitude,longitude,keyword){
		return 'https://maps.googleapis.com/maps/api/place/nearbysearch/xml?location=' + latitude + ',' + longitude + '&radius=5000&type=cafe&keyword=' + keyword + '&key=' + this.key		
	},

	getXML:function(url){
		return requests.get(url)
	},

	getNearby:function(xml){
		try{
			temp={names:[],types:[]}
			$=cheerio.load(xml)
			var places=$('result');
			for(i=0;i<places.length;i++){
				var place=cheerio.load(places[i])
				var name=place('name').text();
				var type=place('type').eq(0).text();
				temp.names.push(name);
				temp.types.push(type);
			}
			return temp
		}catch(err){
			console.log(err)
		}

	},

	get:function(data){
		var url=this.url(data['latitude'],data['longitude'],data['keyword'])
		var xml=this.getXML(url)
		var nearby=this.getNearby(xml)
		return nearby
	}

}

function router(req,res){
	var routes=['latitude','trait']
	var apis={
		'latitude':maps,
		'trait':genome
	}
	for(i=0;i<routes.length;i++){
		var route=routes[i];
		try{
			if(req.query[route]){
				res.send(apis[route].get(req.query))
				return false
			}
		}catch(err){

		}
	}

	res.send('Nothing Found')
}



app.get('/', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin','*');

	router(req,res)

})

app.listen(3000, function () {
  console.log('Genomic Server listening on port: ' + 3000)
})