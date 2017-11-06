(function(){var _id="b67c8ab12e4a07c07452339ee632e53c";
	while(document.getElementById("timer"+_id))_id=_id+"0";
	document.write("<div id='timer"+_id+"' style='min-width:294px;height:71px;'></div>");
	var _t=document.createElement("script");_t.src="http://ssospektr.ru/js/timer.min.js";
	var _f=function(_k){var l=new MegaTimer(_id, {"view":[1,1,1,1],"type":{"currentType":"1","params":{"usertime":true,"tz":"3","utc":1511377200000}},"design":{"type":"plate","params":{"round":"0","background":"solid","background-color":"#ffffff","effect":"slide","space":"2","separator-margin":"0","number-font-family":{"family":"Scada","link":"<link href='http://fonts.googleapis.com/css?family=Scada&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"},"number-font-size":"41","number-font-color":"#000","padding":"6","separator-on":false,"separator-text":":","text-on":true,"text-font-family":{"family":"Scada","link":"<link href='http://fonts.googleapis.com/css?family=Scada&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"},"text-font-size":"16","text-font-color":"#ffffff"}},"designId":2,"theme":"white","width":294,"height":71});
		if(_k!=null)l.run();};_t.onload=_f;
	_t.onreadystatechange=function(){if(_t.readyState=="loaded")_f(1);};
	var _h=document.head||document.getElementsByTagName("head")[0];
	_h.appendChild(_t);}).call(this);