(function($){
	$.fn.autoMail = function(options){
		var opts = $.extend({}, $.fn.autoMail.defaults, options);
		return this.each(function(){
			var $this = $(this);
			var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
			
			//var top = $this.offset().top + $this.height() + 6;
			//var left = $this.offset().left;
			var $mailBox = $('<div id="mailBox"></div>');
			$('#mailDYitem').append($mailBox);
			
			//设置高亮li
			function setEmailLi(index){
				$('#mailBox li').removeClass('cmail').eq(index).addClass('cmail');
			}
			//初始化邮箱列表
			var emails = o.emails;
			var init = function(input){
				//取消浏览器自动提示
				input.attr('autocomplete','off');
				//添加提示邮箱列表
				if($.trim(input.val())!=""){
					var val =input.val();
					var mLoArr = val.split('@');
					var rightMstr = mLoArr[1];
					//alert(rightMstr);
					var leftMstr = mLoArr[0];
					//alert(rightMstr);
					var emailList = '<ul>';
					if(rightMstr){
					for(var i = 0; i < emails.length; i++) {
						if( emails[i].indexOf(rightMstr)==0 && rightMstr ){
						var mail = leftMstr+'@'+emails[i];
						emailList +='<li>'+mail+'</li>';
						}
					}
					}else{
						for(var i = 0; i < emails.length; i++) {
						if(val.indexOf('@')>0){
						emailList += '<li>'+input.val()+emails[i]+'</li>';
						}else{
							emailList += '<li>'+input.val()+'@'+emails[i]+'</li>';
							}
						}
					}
					emailList += '</ul>';
					$mailBox.html(emailList).show(0);
				}else{
					$mailBox.hide(0);
				}
				//添加鼠标事件
				$('#mailBox li').hover(function(){
					$('#mailBox li').removeClass('cmail');
					$(this).addClass('cmail');
				},function(){
					$(this).removeClass('cmail');
				}).click(function(){
					input.val($(this).html());
					$mailBox.hide(0);
				});
			}
				
			//当前高亮下标
			var eindex = -1;
			//监听事件
			$this.focus(function(){
				
					init($this);
				
			}).blur(function(){
				setTimeout(function(){
					$mailBox.hide(0);
				},1000);//
			}).keyup(function(event){
				
					//上键
					if(event.keyCode == 40){
						eindex ++;
						if(eindex >= $('#mailBox li').length){
							eindex = 0;
						}
						setEmailLi(eindex);
					//下键
					}else if(event.keyCode == 38){
						eindex --;
						if(eindex < 0){
							eindex = $('#mailBox li').length-1;
						}
						setEmailLi(eindex);
					//回车键
					}else if(event.keyCode == 13){
						if(eindex >= 0){
							$this.val($('#mailBox li').eq(eindex).html());
							$mailBox.hide(0);
						}
					}else{
						eindex = -1;
						init($this);
					}
				
			//如果在表单中，防止回车提交
			}).keydown(function(event){
				if(event.keyCode == 13){
					return false;
				}
			});
		});
	}
	$.fn.autoMail.defaults = {
		emails:[]
	}
})(jQuery);