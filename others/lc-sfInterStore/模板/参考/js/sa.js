/*！
 * SFbest.com Statistical Analysis JavaScript Library
 * 
 * Author mengfankang@sf-express.com
 * Date  2014.06.12
 */
var _sa_sf = _sa_sf || [];
_sa_sf.push(['domain', '.'+ location.host.split('.')[1] +'.com']);
(function(a, b, c, d, e, f, g) {
    if (!a || a.getElementById(b) === null) {
        var _s = a.createElement(c),
        _sa = a.getElementsByTagName(c)[0];
        _s.type = d; _s.id = b; _s.async = e;
        _s.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + f + '?' + g;
        _sa.parentNode.insertBefore(_s, _sa);
    }
})(window.document, 'script-sf-sa', 'script', 'text/javascript', true, 'i.'+location.host.split('.')[1]+'.com/com/js/sa.min.js', '20171214');


//data analytics Start
var _trackData = _trackData || [];
(function() {
	var sfbest_js = document.createElement('script'); sfbest_js.type = 'text/javascript'; 
	sfbest_js.charset = 'utf-8'; sfbest_js.id = 'da_js_id_d'; sfbest_js.async = true;
    	sfbest_js.src = 'http://da.sfbest.com/da.js';
    	var sfbest_cjs = document.getElementsByTagName('script')[0]; sfbest_cjs.parentNode.insertBefore(sfbest_js, sfbest_cjs);
  })();
//data analytics Stop


// 聚效广告
// var _mvq = _mvq || [];
// _mvq.push(['$setAccount', 'm-24102-1']);
// _mvq.push(['$logConversion']);
// (function() {
//  var mvl = document.createElement('script');
//  mvl.type = 'text/javascript'; mvl.async = true;
//  mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
//  var s = document.getElementsByTagName('script')[0];
//  s.parentNode.insertBefore(mvl, s);
// })();