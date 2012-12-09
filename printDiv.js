jQuery.printDiv = function(el) {
if(jQuery.browser.msie){
	var html = '';
	var links	 = window.document.getElementsByTagName('link');
	for(var i=0;i<links.length;i++){
	  if(links[i].rel.toLowerCase() == 'stylesheet'){
		html = html + ('<link type="text/css" rel="stylesheet" href="'+links[i].href+'"></link>');
	  }
	}
	var bases	 = window.document.getElementsByTagName('base');
	for(i=0;i < bases.length;i++){
		html = html + ('<base href="'+bases[i].href+'" />');
	}
	try{ 
		var oIframe = document.getElementById('ifrmPrint');
		var oContent = $(el).html();
		var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
		if (oDoc.document)
			oDoc = oDoc.document;
		oDoc.write("<html><head><title>title</title>");
	oDoc.write('<style type="text/css"> input{ display: none;} </style>');
		oDoc.write(html);
		oDoc.write("</head><body onload='this.focus(); this.print();'>");
		oDoc.write(oContent + "</body></html>");	
		oDoc.close(); 
	}catch(e){
		self.print();
	}
	return;
}


	/* Non IE 7 printing */
	 var iframe	 = document.getElementById('ifrmPrint');
	 var doc		 = null;
	 doc			 = iframe.contentWindow.document;
	 var links	 = window.document.getElementsByTagName('link');
	 for(var i=0;i<links.length;i++){
		  if(links[i].rel.toLowerCase() == 'stylesheet'){
				doc.write('<link type="text/css" rel="stylesheet" href="'+links[i].href+'"></link>');
		  }
	 }
doc.write('<style type="text/css"> input{ display: none;} </style>');
	 
	 var bases	 = window.document.getElementsByTagName('base');
	 for(i=0;i < bases.length;i++){
			doc.write('<base href="'+bases[i].href+'" />');
	 }
	 doc.write('<div class="'+$(el).attr("class")+'">'+$(el).html()+'</div>');
	 doc.close();
	 iframe.contentWindow.focus();
	 iframe.contentWindow.print();
}