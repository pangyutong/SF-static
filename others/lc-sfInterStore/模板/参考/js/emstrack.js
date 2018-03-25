var _ems_url              = document.location;
var _ems_tracking_image   = (_ems_url.protocol == "https:" ? "https:" : "http:") + "//www.emarsys.net/upages/ti.php";
var _ems_hash             = _ems_url.hash.substring(1);
var _ems_session_timeout  = 600; // session cookie timeout in seconds
var _ems_campaign_timeout = 30*24*3600; // campaign cookie timeout in seconds
var _ems_domain           = document.domain; // default domain to track. should be changed for 3rd party shopping cart
var _ems_never            = "Tue, 31 Dec 2030 23:59:59 GMT";
var _ems_tracking_param   = "emst"; // parameter added in redirect 

var _ems_customer         = "";
var _ems_visitor          = "";
var _ems_session          = "";
var _ems_campaign         = "";

var _ems_debug						= 0;

function ems_Debug() {
	var msg = "_ems_url: "+escape(_ems_url)+"\n"+
					"_ems_tracking_image: "+escape(_ems_tracking_image)+"\n"+
					"_ems_hash: "+escape(_ems_hash)+"\n"+
					"_ems_session_timeout: "+escape(_ems_session_timeout)+"\n"+
					"_ems_campaign_timeout: "+escape(_ems_campaign_timeout)+"\n"+
					"_ems_domain: "+escape(_ems_domain)+"\n"+
					"_ems_never: "+escape(_ems_never)+"\n"+
					"_ems_tracking_param: "+escape(_ems_tracking_param)+"\n"+
					"_ems_customer: "+escape(_ems_customer)+"\n"+
					"_ems_visitor: "+escape(_ems_visitor)+"\n"+
					"_ems_session: "+escape(_ems_session)+"\n"+
					"_ems_campaign: "+escape(_ems_campaign)+"\n";
	alert(msg);
}

function emsSetEnv(_ems_env) {
	_ems_tracking_image   = (_ems_url.protocol == "https:" ? "https:" : "http:") + "//"+_ems_env+".emarsys.net/upages/ti.php";
}

function emsTracking(customer, domain) {

  if(customer)
    _ems_customer = customer;

  if(domain)
    _ems_domain = domain;

  if(_ems_url.protocol == "file:")
    return;

  var _ems_date = new Date();
  
  // generate unique domain hash
  domain_hash = DJBHash(_ems_domain.substring(0,4)=="www." ? _ems_domain.substring(4,_ems_domain.length) : _ems_domain); 
  
  // get session unique id from cookie, or generate a new one
  _ems_session = _ems_getCookie("_ems_session="+domain_hash+".");
  if(_ems_session == "") {

		if(_ems_debug) alert("creating new session cookie");

    _ems_session  = Math.round(Math.random()*1073741824);
    
    // set session cookie
    var d = new Date(_ems_date.getTime()+(_ems_session_timeout*1000));
    document.cookie = "_ems_session="+domain_hash+"."+_ems_session+";path=/;domain=."+_ems_domain+";expires="+d.toGMTString()+";";
  }

  // get visitor unique id from cookie, or use session's id
  _ems_visitor = _ems_getCookie('_ems_visitor='+domain_hash+'.');
  if(_ems_visitor == '') {

		if(_ems_debug) alert("creating new visitor cookie");
    
    _ems_visitor = _ems_session;

    // set visitor cookie
    document.cookie = "_ems_visitor="+domain_hash+"."+_ems_visitor+";path=/;domain=."+_ems_domain+";";// expires="+_ems_never+";";
  }
  
  // get campaign identifier from url or from cookie
  _ems_campaign = _ems_getParam(document.location.search, _ems_tracking_param);
  if(_ems_campaign == "") {
    _ems_campaign = _ems_getCookie("_ems_campaign="+domain_hash+".");
  } else {
    // set campaign cookie

		if(_ems_debug) alert("creating new campaign cookie");

    var d = new Date(_ems_date.getTime()+(_ems_campaign_timeout*1000));
    document.cookie = "_ems_campaign="+domain_hash+"."+_ems_campaign+";path=/;domain=."+_ems_domain+";expires="+d.toGMTString()+";";
  }
  
  //_ems_Tick();
}

function _ems_Tick() {
  var t = "ems_customer="+_ems_escape(_ems_customer)+
  	"&ems_visitor="+_ems_escape(_ems_visitor)+
	"&ems_session="+_ems_escape(_ems_session)+
	"&ems_campaign="+_ems_escape(_ems_campaign)+
	"&ems_page="+_ems_escape(document.location.pathname+_ems_StripParam(document.location.search, _ems_tracking_param));
  var image = new Image();
  image.src = _ems_tracking_image+"?"+t;
}

function _ems_StripParam(search, param) {
  if(search.indexOf(param+"=")>0) {
    value = _ems_getParam(search, param);

    search=search.substr(0, search.indexOf(param))+search.substr(search.indexOf(param)+param.length+value.length+2, search.length);

    if(search.substr(search.length-1,1)=="&")
      search=search.substr(0, search.length-1);
  }
  return (search == "?" ? "" : search);
}

function emsSubmitOrder() {
	// no point in sending order to emarsys if customer or user are unknown to emarsys
	if(_ems_customer == "" || _ems_campaign == "")
		return;

  ems_items=document.getElementsByName("ems_items[]"); // expecting an array, ie. <input type=hidden name="ems_items[]"> for every item
  
  var p = "ems_customer="+_ems_escape(_ems_customer)+
  	"&ems_session="+_ems_escape(_ems_session)+
	"&ems_visitor="+_ems_escape(_ems_visitor)+
	"&ems_campaign="+_ems_escape(_ems_campaign)+
	"&ems_action=purchase";

  order_fields = new Array("order", "total", "tax", "shipping", "city", "country");
  for(var i=0; i<order_fields.length; i++)
    if(eval("document.emsform."+order_fields[i]))
      p += "&"+order_fields[i]+"="+eval("document.emsform."+order_fields[i]+".value");

  item_fields = new Array("code", "category", "productname", "price", "quantity");
  for(var j=0;j<ems_items.length;j++) {
    var item_values = ems_items[j].value.split(";");
    for(var i=0; i<item_fields.length; i++)
      p += "&"+item_fields[i]+"[]="+(item_values.length>i ? item_values[i] : "");
  }
   
  var image = new Image();
  image.src = _ems_tracking_image+"?"+p;

	if(_ems_debug) alert("image.src="+image.src);
}

function _ems_getParam(search, name) {
  if(search.charAt(0) == "?")
    search = search.substring(1, search.length);

  params = search.split("&");
  for(var i=0; i<params.length; i++) {
    param = params[i].split("=");
    if(param[0] == name)
      return param[1];
  }
  return "";
}

function _ems_getCookie(str) {
  var i = document.cookie.indexOf(str);
  if(i >= 0) {
    var start = i + str.length;
    var end = document.cookie.indexOf(";", start);
    if(end == -1) 
      end = document.cookie.length;
    return document.cookie.substring(start, end)
  }
  return '';
}

function DJBHash(d) {
  var hash = 5381;

  for(var i=0; i<d.length; i++) {
    var c=parseInt(d.charCodeAt(i));
    hash = ((hash << 5) + hash) + c;
  }

  return (hash & 0x7FFFFFFF);
}

function _ems_escape(s) {
  return typeof(encodeURIComponent) == 'function' ? encodeURIComponent(s) : escape(s);
}