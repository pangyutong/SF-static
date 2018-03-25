// JavaScript Document
function getWordAll(isproduct, wwwurl) {
    if (isproduct > 0) {
        var searchUrl = wwwurl + "/productlist/search?inputBox=1&keyword=";
        var Url = wwwurl + '/ajax/getWordAll/type/0';
    } else {
        var searchUrl = wwwurl + "/article/search?keyword=";
        var Url = wwwurl + '/ajax/getWordAll/type/1';
    }
    $.ajax({
        url: Url,
        async: false,
        dataType: "jsonp",
        //返回json格式的数据   
        jsonp: "callback",
        success: function(data) {
            if (data.hotWords) {
                temp = data.hotWords;
                hot = '';
            }
            if(isproduct > 0){
                for (var i = 0; i < temp.length; i++) {
                    hot += "<a target='_blank' href='" + temp[i]['link'] + "#trackref=sfbest_hp_hp_head_Keywords" + (i + 1) + "' >" + temp[i]['word'] + "</a>";
                }
            }else{
                temp = temp.split(",");
                for (var i = 0; i < temp.length; i++) {
                    hot += "<a target='_blank' href='" + searchUrl + encodeURI(temp[i]) + "#trackref=sfbest_Uhead_Uhead_head_Keywords" + (i + 1) + "' >" + temp[i] + "</a>";
                }
            }
            var keywordVal = data.keyWords;
            if ($('#keyword').val() == '') {
                $('#keyword').val(keywordVal);
            }
            $('.search_hot').html(hot);
            $("#keyword").click(function() {
                var txt_value = $(this).val();
                if (txt_value == keywordVal) {
                    $(this).val("");
                }
            });
            $("#keyword").blur(function() {
                var txt_value = $(this).val();
                if (txt_value == "") {
                    $(this).val(keywordVal);
                }
            });
        }
    });
}

function search() {
	$("#searchForm").submit();
}

function getkeyword(isproduct,wwwurl){
	if(isproduct>0){
		var url = wwwurl+'/productlist/keysearch';
		var str = '相关文章';
		var searchUrl = wwwurl+'/article/search';
		var typestr = '商品';
		var company1 = '件';
		var company2 = '篇';
	}else{
		var url = wwwurl+'/article/keysearch';
		var str = '相关商品';
		var searchUrl = wwwurl+'/productlist/search';
		var typestr = '文章';
		var company1 = '篇';
		var company2 = '件';
	}
	var $input = $("#keyword");
	var $articleCount = $("<div/>").hide();
	$input.select().autocomplete(url, {
		delay: 50,
		cacheLength: 0,
		dataType: "jsonp",
		max: 100,
		selectFirst: false,
		formatItem: function(row) { // 解析数据
			var type = row[0];
			var item = "", label = null;
			if(type == 1 && row.length > 1) { // 搜索商品不带统计数据
				label = row[1];
				item += '<div class="jq_auto_complete_key">' + label + '</div>';
			} else if(type == 2 && row.length > 2) { // 搜索商品带统计数据
				label = row[1];
				var count = results = parseInt(row[2]);
				if(count == 0) {
					item += '<div class="jq_auto_complete_key">' + label + '</div><div class="jq_auto_complete_results">没有找到相关'+ typestr +'</div>';
				} else {
					item += '<div class="jq_auto_complete_key">' + label + '</div><div class="jq_auto_complete_results">约' + count + ''+ company1 +'</div>';
				}
			} else if(type == 3 && row.length > 2) { // 提示某类别下搜索
				label = row[1], categoryId = row[2]; categoryName = row[3]; categoryTwoId=row[4]; categoryTwoName = row[5]; count = parseInt(row[6]);
				categoryId = categoryTwoId?categoryTwoId:categoryId;
				item += '<input type="hidden" class="jq_auto_complete_categoryId" value="' + categoryId
					 + '"/><div class="jq_auto_complete_key" style="display:none;">' + label
					 + '</div><span class="jq_auto_complete_category_tip" style="float:left;">在<b>' + categoryName+'>'+ categoryTwoName + '</b>分类中搜索</span><div class="jq_auto_complete_results">约' + count + company1 + '</div>';
			} else if(type == 4 && row.length > 2) { // 相关文章总数统计
				var searchkeyword = row[1]; var searchkeywordcount = row[2];
				$articleCount.html("<a class='otherType' href='"+searchUrl+"?keyword="
									+ searchkeyword + "'>搜 <span>" + searchkeyword
									+ " </span>"+ str +"约 <span> " + searchkeywordcount + " </span>"+ company2 +"</a>").show()
							 .mouseover(function(event) {
							 		$("li.ac_over").removeClass("ac_over");
							 });
			}
			return item;
		},
		formatResult: function(row) {
			return row[1];
		},
		scroll: false,
		selectItem: function(activeItem) {
			var $key = $(".jq_auto_complete_key", activeItem);
			if($key.length) {$input.val($key.text());}
			
			var $categoryId = $(".jq_auto_complete_categoryId", activeItem).val();
			var $inputCategoryId = $("input[name='categoryId']");
			if($categoryId){
				$inputCategoryId.val($categoryId);
			} else {
				$inputCategoryId.val(0);
			}
		},
		searchAction: search,
		addArticleCountItem: function(parentElement) {
			$articleCount.appendTo(parentElement);
		}
	}).result(function(event, data, formatted){
		//如选择后给其他控件赋值，触发别的事件等等
		if(data[0] == 3){
			$categoryId = $(".jq_auto_complete_categoryId").val();
			$inputCategoryId = $("input[name='categoryId']");
			$inputCategoryId.val($categoryId);
		}
	});
}