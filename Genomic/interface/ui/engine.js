function create(element,name,append,reach){

	if(!reach){
		try{
			reach=append
		}
		catch(err){

		}
		append=name
		name=element
		element='div'
	}

	if (name[0]=='.' || name[0]=='#') name=name.slice(1,name.length);
	if (append[0]=='.' || append[0]=='#') append=append.slice(1,append.length);

	function all(element){
		var appends=document.getElementsByClassName(append).length;
		for (i=0;i<appends;i++){	
			console.log('element:',element)
			var create=document.createElement(element);
			create.className=name;
			document.getElementsByClassName(append)[i].appendChild(create);
		}
	}
	function choose(c,element){		
		var create=document.createElement(element);
		create.className=name;
		try{
			document.getElementsByClassName(append)[c].appendChild(create);
		}
		catch(err){
			for (i=0;i<c;i++){
				var create=document.createElement(element);
				create.className=name;
				document.getElementsByClassName(append)[0].appendChild(create);	
			}
		}
	}
	function last(element){
		var create=document.createElement(element);
		create.className=name;
		var lastChild=document.getElementsByClassName(append).length - 1;
		document.getElementsByClassName(append)[lastChild].appendChild(create);
	}
	if (reach && reach[0]=='a'){
		all(element);
	}else if (typeof reach === 'number'){
		choose(reach,element);
	}else{
		last(element);
	}
}