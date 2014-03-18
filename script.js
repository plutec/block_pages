//alert("asd")
var url = document.URL;

chrome.storage.sync.get({
		block_sites: [],
	}, function(items) {
	    for (var i=0; i<items.block_sites.length; ++i) { 
	      //document.write(cars[i] + "<br>");
	      site = items.block_sites[i];
	      if (url.search(site) > -1) {
	      	alert("BLOCKED");
	      	/*
	      	var width = screen.width;
	      	var height = screen.height;
			console.log(width + " x " + height);
			//var div = '<div width="'+width+'" height="'+height+'"></div>'
			var div = document.createElement('div');
			div.width = width;
			div.height = height;
			document.body.innerHTML += div;
			*/
			chrome.tabs.getCurrent(function(tab){
			    console.log(tab);
			});
			break;
	      }
	    }
	}
);