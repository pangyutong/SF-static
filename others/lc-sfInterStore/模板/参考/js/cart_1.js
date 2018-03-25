var hostUrl = document.location.host;
var urlArr = hostUrl.split('.');
var domain = urlArr[1] + '.' + urlArr[2];
var SF_STATIC_URL = 'http://i.' + domain;
var SF_STATIC_URL_HTML = 'http://i.' + domain + '/html/';
var cartHostUrl = 'http://cart.'+domain;
var wwwHostUrl = 'http://www.' + domain;

var sfAddCart = {
    pid: null,
    init: function () {
        var win_w = $(window).width();
        if (win_w <= 1400) {
            $(".side-wrap").addClass("side_pos");
        } else {
            $(".side-wrap").removeClass("side_pos");
        }
        $(window).resize(function () {
            var win_width = $(window).width();
            if (win_width <= 1400) {
                $(".side-wrap").addClass("side_pos");
            } else {
                $(".side-wrap").removeClass("side_pos");
            }
        });
        sfAddCart.cartHover();
        $(".p-btn a,.rankBtn a,.rushBuy").live("click", function () {
            $(".listpic-mini").html("");
            This = $(this);
            //是否是首页商品添加购物车标识
            var indexFlag = This.attr("indexFlag");
            //是否是生鲜频道页添加购物车标识
            var freshFlag = This.attr("freshFlag");
            sfAddCart.pid = This.attr("pid");
            var belong = This.attr("belong");
            if(typeof (belong) == "undefined"){
                belong = 0;
            }
            if (typeof (indexFlag) == "undefined") {
                if (typeof (freshFlag) == "undefined") {
                    //其它页面商品添加购物车
                    if ($('#activityId').size() > 0 && $('#activityId').val() != '') {
                      setTimeout(function () {
                          cartAdd(sfAddCart.pid, 0, belong, 15);
                      }, 100);
                    } else {
                      setTimeout(function () {
                          cartAdd(sfAddCart.pid, 0, belong, 5);
                      }, 100);
                    }
                } else {
                    //生鲜频道页商品添加购物车
                    setTimeout(function () {
                        cartAdd(sfAddCart.pid, 0, belong, 13, 1, This);
                    }, 100);
                }

            } else {
                //首页页商品添加购物车
                setTimeout(function () {
                    cartAdd(sfAddCart.pid, 0, belong, 7, 1, This);
                }, 100);
            }
        });
    },
    cartHover: function () {
        $("#side_cart").bind("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer1);
            sfAddCart.cartHover.timer1 = setTimeout(function () {
                sfAddCart.cartList("show", "1");
            }, 500);
        }).bind("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer1);
            sfAddCart.cartHover.timer1 = setTimeout(function () {
                sfAddCart.cartList("hide", "1");
            }, 500);
        });
        $(".cart-list").live("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer1);
            sfAddCart.cartHover.timer1 = setTimeout(function () {
                sfAddCart.cartList("show", "1");
            }, 500);
        }).live("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer1);
            sfAddCart.cartHover.timer1 = setTimeout(function () {
                sfAddCart.cartList("hide", "1");
            }, 500);
        });
        $("#side_guang").bind("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer2);
            sfAddCart.cartHover.timer2 = setTimeout(function () {
                sfAddCart.cartList("show", "2");
            }, 500);
        }).bind("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer2);
            sfAddCart.cartHover.timer2 = setTimeout(function () {
                sfAddCart.cartList("hide", "2");
            }, 500);
        });
        $(".his-list").live("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer2);
            sfAddCart.cartHover.timer2 = setTimeout(function () {
                sfAddCart.cartList("show", "2");
            }, 500);
        }).live("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer2);
            sfAddCart.cartHover.timer2 = setTimeout(function () {
                sfAddCart.cartList("hide", "2");
            }, 500);
        });
        $("#side_app").bind("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer3);
            sfAddCart.cartHover.timer3 = setTimeout(function () {
                sfAddCart.cartList("show", "3");
            }, 500);
        }).bind("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer3);
            sfAddCart.cartHover.timer3 = setTimeout(function () {
                sfAddCart.cartList("hide", "3");
            }, 500);
        });
        $(".appDown").live("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer3);
            sfAddCart.cartHover.timer3 = setTimeout(function () {
                sfAddCart.cartList("show", "3");
            }, 500);
        }).live("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer3);
            sfAddCart.cartHover.timer3 = setTimeout(function () {
                sfAddCart.cartList("hide", "3");
            }, 500);
        });
        $("#side_promote").bind("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer4);
            sfAddCart.cartHover.timer4 = setTimeout(function () {
                sfAddCart.cartList("show", "4");
            }, 500);
        }).bind("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer4);
            sfAddCart.cartHover.timer4 = setTimeout(function () {
                sfAddCart.cartList("hide", "4")
            }, 500);
        });
        $(".promt").live("mouseenter", function () {
            clearTimeout(sfAddCart.cartHover.timer4);
            sfAddCart.cartHover.timer4 = setTimeout(function () {
                sfAddCart.cartList("show", "4");
            }, 500);
        }).live("mouseleave", function () {
            clearTimeout(sfAddCart.cartHover.timer4);
            sfAddCart.cartHover.timer4 = setTimeout(function () {
                sfAddCart.cartList("hide", "4")
            }, 500);
        });
    },
    cartList: function (type, i) {
        var right, time;
        if (type == "hide") {
            right = "-101%";
            time = 800
        } else {
            right = 0;
            time = 300;
            if ("1" == i) {
                $(".cart-wrap").show()
            } else if ("2" == i) {
                $(".guang").show()
            } else if ("3" == i) {
                $(".appInfo").show()
            } else if ("4" == i) {
                $(".promt").show()
            }
        }
        if ("1" == i) {
            $(".cart-wrap").find(".cart-list").animate({
                "right": right
            }, time, function () {
                if (type == "hide")
                    $(".cart-wrap").hide()
            })
        } else if ("2" == i) {
            $(".guang").find(".his-list").animate({
                "right": right
            }, time, function () {
                if (type == "hide")
                    $(".guang").hide();
            })
        } else if ("3" == i) {
            $(".appInfo").find(".appItem").animate({
                "right": right
            }, time, function () {
                if (type == "hide")
                    $(".appInfo").hide();
            })
        } else if ("4" == i) {
            $(".promt").find(".promote-con").animate({
                "right": right
            }, time, function () {
                if (type == "hide")
                    $(".promt").hide();
            })
        }
    },
    cartNumShow: function () {
        var addNum = $("#number_" + sfAddCart.pid).val();
        var tips_obj = $(".cart-list").find(".cart-num");
        $("#add-num").html(addNum);
        tips_obj.height(48).show();
        var addOne_timer = setTimeout(function () {
            tips_obj.animate({
                "height": 0
            }, 300, function () {
                tips_obj.hide();
                $("#side_cart").trigger("mouseleave");
            })
        }, 3E3);
    }
};

/*购物车删除单个商品
 @param  string value   活动类型-活动id-商品id  这三者组合
 */
function cartDel(value) {
    $.ajax({
        url: cartHostUrl + '/cartapi/remove/',
        type: 'GET',
        dataType: "jsonp", //返回json格式的数据   
        jsonp: "callback",
        data: {"cid":value},
        success: function (ret) {
            if (ret.code == 0) {
                getCartList();
            } else {
                jAlert(ret.msg);
            }
        }
    });
}

//购物车列表
function getCartList() {
    $.ajax({
        url: cartHostUrl + '/cartapi/getMiniCart/',
        type: 'GET',
        dataType: "jsonp", //返回json格式的数据   
        jsonp: "callback",
        data: {},
        success: function (ret) {
            if (ret.totalNum > 0) {
                $('#cartNum').html(ret.totalNum);
                $('#cart_lists').html(getCartHtml(ret,"cat_form13"));
                if (ret.totalNum > 0) {
                    $("#topCart").find("s").addClass("setCart");
                }
                if ($('#showcart').length > 0) {
                    $('#showcart').html('购物车共计' + ret.totalNum + '件商品，合计 ' + ret.totalMoney + '元');
                }
                //mini购物车
                if ($('#list_cart').length > 0) {
                    $('#list_cart').html(getCartHtml(ret,"list_cart"));
                    $('.s-cart-num').html(ret.totalNum);
                    var numList = $("li", "#list_cart").length;
                    0 !== numList && $('.s-cart-num').addClass("s-cart-add");
                    switch (numList)
                    {
                        case 0:
                            $(".cart-shopping").css("bottom", "152px");
                            $(".cart-wrap .cart-arr").css("bottom", "10px");
                            $('.s-cart-num').removeClass("s-cart-add");
                            $('.s-cart-num').hide();
                            break;
                        case 1:
                            $(".cart-shopping").css("bottom", "50px");
                            $(".cart-wrap .cart-arr").css("bottom", "110px");
                            $('.s-cart-num').show();
                            break;
                        default:
                            $(".cart-shopping").css("bottom", 0);
                            $(".cart-wrap .cart-arr").css("bottom", "160px");
                            $('.s-cart-num').show();
                    }
                }
            }else{
                $('#cartNum').html(0);
                $('.s-cart-num').html(0).hide();
                var cartNull = '<div class="btnhover"></div><div id="cat_form13" class="floatcar1">'+
                    '<div class="nopro"><p>购物车中暂无商品</p></div><div class="clear"></div></div>';
                $('#list_cart').html(cartNull);
                var cartNull = '<div id="cat_form13" class="floatcar"><div class="btnhover"></div>'+cartNull+'</div>';
                $('#cart_lists').html(cartNull);
                $(".cart-shopping").css("bottom", "152px");
                $(".cart-wrap .cart-arr").css("bottom", "10px");
                $('.s-cart-num').removeClass("s-cart-add");
            }
        }
    });
}

//商品和礼包加入购物车
//@param product_id 商品id
//@param proType 商品类别:0普通商品,9礼包
//@param belong 归属,默认0普通，1海淘
//@param flag 提示方式 0本页提示 1跳转购物车
//@param bs  加入时是否验证商品的礼品袋开关  1,是;0,否
//@param obj 加入按钮对象
//@param cfrom 从哪里点击的购物按钮
function cartAdd(product_id, proType, belong, flag, bs, obj, cfrom) {
    if (typeof (bs) == "undefined") {
        bs = 1;
    }
    if (typeof (cfrom) == "undefined") {
        cfrom = 1;
    }
    if (3 == flag) {
        addPresale(product_id);
    } else {
        var web_url = cartHostUrl + '/cartapi/addProduct/';
        var number = 1;
        if ($("#number_" + product_id).length != 0 && flag != 6) {
            number = $("#number_" + product_id).val();
        }
        if (number > 1000) {
            jAlert('对不起购买上限不能大于1000!!');
            return;
        }
        if (!checkRate(number)) {
            jAlert('您输入的数量格式有误!!');
            return false;
        }

        if(proType == 9){
            var params = {"pid": product_id, "amount": number, "type": 9};
        }else{
            var params = {"pid": product_id, "num": number, "type": proType, "belong": belong};
        }
        if (flag == 15) {
          params['aid'] = $('#activityId').val();
        }
        $.ajax({
            url: web_url,
            type: 'GET',
            dataType: "jsonp", //返回json格式的数据   
            jsonp: "callback",
            data: params,
            success: function (msg) {
                //成功
                if (msg.code == 0) {
                    if (0 == flag) {
                        var cartDiv = '<div id="carwindow" class="pWindow"><div class="hd"><ul class="cartItem">';
                        cartDiv += '<li class="ct">该商品已成功放入购物车！</li>';
                        cartDiv += '<li id="showcart"></li>';
                        cartDiv += '<li><a href="javascript:void(0);" onclick="javascript:car_close();" class="pbtn4">&lt;&lt; 继续购物 </a><a href="' + cartHostUrl + '/cart/index/" class="pbtn4"> 去结算&gt;&gt; </a></li>';
                        cartDiv += '</ul></div><div id="elsebuy">正在加载更多商品...</div>';
                        cartDiv += '<div class="pClose" onclick="$(\'#add-cart-box-sf\').hide();"></div></div>';

                        $("#add-cart-box-sf").html(cartDiv);

                        if (cfrom == 1) {
                            var top = $(obj).offset().top - 5, left = $(obj).offset().left - 91;
                            $("#add-cart-box-sf").css({"top": top, "left": left, "position": "absolute"}).show();
                        } else if (cfrom == 2) {
                            var top = $(obj).offset().top + 26, left = $(obj).offset().left - 40;
                            $("#add-cart-box-sf").css({"top": top, "left": left, "position": "absolute"}).show();
                        } else if (cfrom == 3) {
                            var top = $(obj).offset().top + 31, left = $(obj).offset().left - 253;
                            $("#add-cart-box-sf").css({"top": top, "left": left, "position": "absolute"}).show();
                        }

                        BuyAlsoBuy(product_id);
                        getCartList();
                        car_ie6hack();
                    } else if (2 == flag) {
                        url = cartHostUrl + '/cart/index/';
                        if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || /MSIE(\d+\.\d+);/.test(navigator.userAgent)) {
                            var referLink = document.createElement('a');
                            referLink.href = url;
                            document.body.appendChild(referLink);
                            referLink.click();
                        } else {
                            location.href = url;
                        }
                    } else if (4 == flag) {
                        return msg;
                    } else if (5 == flag || 7 == flag || 13 == flag || 15 == flag) {
                        imgUrl = This.attr("data_url");
                        var imgMini = "<img src=" + imgUrl + ">";
                        var posTop = This.offset().top, posLeft = This.offset().left;
                        var animate_gap = -80;
                        var offsetEndTop = $(".side-panel").offset().top, offsetEndLeft = $(".side-panel").offset().left - 20;
                        $(imgMini).appendTo(".listpic-mini");
                        $(".listpic-mini").css({
                            top: posTop,
                            left: posLeft
                        }).show().animate({
                            top: posTop + animate_gap
                        }, 300).animate({
                            top: offsetEndTop,
                            left: offsetEndLeft
                        }, 700, function () {
                            $(".listpic-mini").hide();
                            $("#side_cart").trigger("mouseenter");
                            sfAddCart.cartNumShow();
                        });
                        getCartList();
                        if (15 == flag) {
                            // 凑单
                              showCartbar(msg.data);
                        }
                    } else if (6 == flag) {
                        if(proType == 9){
                            jAlert("礼包商品已成功放入购物车！");
                        }
                        getCartList();
                    } else if (11 == flag) {
                        imgUrl = This.attr("data_url");
                        var imgMini = "<img src=" + imgUrl + ">";
                        var posTop = This.offset().top, posLeft = This.offset().left;
                        var animate_gap = -80;
                        var offsetEndTop = $(".side-panel").offset().top, offsetEndLeft = $(".side-panel").offset().left - 20;
                        $(imgMini).appendTo(".listpic-mini");
                        $(".listpic-mini").css({
                            top: posTop,
                            left: posLeft
                        }).show().animate({
                            top: posTop + animate_gap
                        }, 300).animate({
                            top: offsetEndTop,
                            left: offsetEndLeft
                        }, 700, function () {
                            $(".listpic-mini").hide();
                            $("#side_cart").trigger("mouseenter");
                            sfAddCart.cartNumShow();
                        });
                        getCartList();
                        jAlert('您的等级不够，可用优选价购买');
                    } else if (12 == flag) {
                        imgUrl = This.attr("data_url");
                        var imgMini = "<img src=" + imgUrl + ">";
                        var posTop = This.offset().top, posLeft = This.offset().left;
                        var animate_gap = -80;
                        var offsetEndTop = $(".side-panel").offset().top, offsetEndLeft = $(".side-panel").offset().left - 20;
                        $(imgMini).appendTo(".listpic-mini");
                        $(".listpic-mini").css({
                            top: posTop,
                            left: posLeft
                        }).show().animate({
                            top: posTop + animate_gap
                        }, 300).animate({
                            top: offsetEndTop,
                            left: offsetEndLeft
                        }, 700, function () {
                            $(".listpic-mini").hide();
                            $("#side_cart").trigger("mouseenter");
                            sfAddCart.cartNumShow();
                        });
                        getCartList();
                        jAlert('您的等级不够，可用优选价购买');
                    }

                    if (typeof sendAddCartToWebLog == 'function') {
                        sendAddCartToWebLog(product_id, number);
                    }
                    yibo('cart', product_id, number);
                } else {
                    if (7 == flag) {
                        if (msg.info.indexOf("库存不足") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('抱歉，该商品已售罄');
                            return;
                        }
                        if (msg.info.indexOf("无法送达") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('抱歉，该商品无法送达');
                            return;
                        }
                        if (msg.info.indexOf("已经下架") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('抱歉，该商品已售罄');
                            return;
                        }
                        if (msg.info.indexOf("已经售完") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('抱歉，该商品已售罄');
                            return;
                        }
                        jAlert(msg.msg);
                        return;
                    }
                    if (13 == flag) {
                        if (msg.info.indexOf("库存不足") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('已售罄');
                            return;
                        }
                        if (msg.info.indexOf("无法送达") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('无法送达');
                            return;
                        }
                        if (msg.info.indexOf("已经下架") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('已售罄');
                            return;
                        }
                        if (msg.info.indexOf("已经售完") >= 0) {
                            obj.parent().removeClass('p-btn');
                            obj.parent().addClass('outBtn');
                            obj.html('已售罄');
                            return;
                        }
                        jAlert(msg.msg);
                        return;
                    }
                    jAlert(msg.msg);
                    return;
                }
            }
        });
    }
}

//添加预售商品
function addPresale(product_id) {
    var requestUrl = cartHostUrl + '/order/addProduct/'; //请求URL
    var ownUrl = cartHostUrl + '/order/index?hashKey='; //自营和商铺商品的订单页面
    var number = 1;

    if ($("#number_" + product_id).length != 0) {
        number = $("#number_" + product_id).val();
    }
    if (!checkRate(number)) {
        jAlert('您输入的数量格式有误!!');
        return false;
    }
    $.ajax({
        url: requestUrl,
        type: 'GET',
        dataType: "jsonp",
        jsonp: "callback",
        data: {
            product_id: product_id,
            number: number,
            opencity_id: 0,
            cart_type: 0,
            mes: 1
        },
        success: function(msg) {
            if (msg.error == -1) {
                SF.Widget.login(); //登录成功后停留在商品详情页面 
            } else if (msg.error == 0) {
                location.href = ownUrl + msg.hashKey;
            } else{
                jAlert(msg.info);
            }
        }
    });
}

/*
 逛商品加购物车
 */
function hisCartAdd(pid) {
    cartAdd(pid, 0, 0, 6);
    $.ajax({
        type: 'POST',
        async: false,
        dataType: 'json',
        url: "/product/delHistory/",
        data: {pid: pid},
        success: function (str) {
            getHistory();
        }
    });
}
/**
 获了逛数据
 */
function getHistory() {
    $.post("/product/guang/", {}, function (str) {
        if (str) {
            $("#history_con").html(str);
        }
    });
}

/*
 购买了还购买了
 */
function buyelse(pid) {
    $.ajax({
        url: wwwHostUrl + '/product/alsoBuy',
        type: 'GET',
        dataType: 'html',
        data: {pid: pid},
        success: function (htmlcode) {
            //alsoBuy = htmlcode;
            if ($('#elsebuy').length > 0) {
                $('#elsebuy').html(htmlcode);
            }
        }
    });
}

function yibo(type, product_id, product_num) {
    return false;
    var del = 0;
    //var _adwq = new Array();
    if (type == 'delete') {
        del = 1;
    }
    _adwq.push(['_setDataType',
        type
    ]);
    $.ajax({
        url: cartHostUrl + '/ajax/getproduct/',
        type: 'GET',
        dataType: "jsonp", //返回json格式的数据   
        jsonp: "callback",
        data: {product_id: product_id, opencity_id: 1, del: del, t: Math.random()},
        async: false,
        success: function (msg) {
            var json = msg;

            _adwq.push(['_setCustomer',
                json.userid   //1234567是一个例子，请换成当前登陆用户ID或用户名
            ]);
            // 下面代码是商品组代码，根据订单中包括多少种商品来部署，每种商品部署一组
            //商品组一组开始
            var webtrekk = new Object();
            webtrekk.product = new Array();
            webtrekk.productCategory1 = new Array();
            webtrekk.productCategory2 = new Array();
            webtrekk.productCategory3 = new Array();
            webtrekk.productQuantity = new Array();
            webtrekk.productCost = new Array();
            if (json.info) {
                $.each(json.info, function (i, val) {
                    if (val) {
                        var b = eval('(' + val + ')');
                        _adwq.push(['_setItem',
                            b.product_sn, // 09890是一个例子，请填入商品编号  - 必填项
                            b.product_name, // 电视是一个例子，请填入商品名称  - 必填项
                            b.product_price, // 12.00是一个例子，请填入商品金额  - 必填项
                            product_num, // 1是一个例子，请填入商品数量  - 必填项
                            b.category_id, // A123是一个例子，请填入商品分类编号  - 必填项
                            b.category_name        // 家电是一个例子，请填入商品分类名称  - 必填项
                        ]);
                    }
                    webtrekk.product.push(b.product_sn);
                    webtrekk.productCategory1.push(b.category_one);
                    webtrekk.productCategory2.push(b.category_two);
                    webtrekk.productCategory3.push(b.category_id);
                    webtrekk.productQuantity.push(product_num);
                    webtrekk.productCost.push(b.product_price * product_num);
                });
                webtrekkSend(webtrekk);
                // 下面是提交订单代码，此段代码必须放在以上代码后面 - 必填项
                _adwq.push(['_trackTrans']);
            }
            //商品组一组结束
        }
    });
}

function webtrekkSend(webtrekk) {
    var pageConfig = {
        linkTrack: "link",
        heatmap: "1"
    };
    var wt = new webtrekkV3(pageConfig);
    wt.sendinfo({
        contentId: "WEB:购物车:加入购物车",
        contentGroup: {
            1: "WEB:购物车", 2: "加入购物车", 3: "加入购物车"
        },
        // 以下代码用来记录添加购物车时的商品信息
        product: webtrekk.product.join(";"), // 请填写商品 ID
        productCategory: {
            1: webtrekk.productCategory1.join(";"), // 请填写商品一级类别名称
            2: webtrekk.productCategory2.join(";"), // 请填写商品二级类别名称
            3: webtrekk.productCategory3.join(";") // 请填写商品三级类别名称
        },
        productQuantity: webtrekk.productQuantity.join(";"), // 请填写用户加入购物车时的商品数量
        productCost: webtrekk.productCost.join(";"), // 请填写用户加入购物车时的商品总价值（单价×数量）
        productStatus: "add", // 固定值，请勿修改
        customEcommerceParameter: {
            2: "加入购物车" // 固定值，请勿修改
        }
    });
}

//carwindow遮罩
function car_ie6hack() {
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        var iframehide = '<iframe id="car_iframe" style="width:340px;height:50px;z-index:99;position:absolute;left:0;top:200px;"></iframe>';
        $(iframehide).appendTo("#add-cart-box-sf");
    }
}

//判断正整数
function checkRate(input)
{
    var re = /^[0-9]*[1-9][0-9]*$/;
    if (!re.test(input))
    {
        return false;
    } else {
        return true;
    }
}

//详情页面关闭carwindow
function car_close() {
    $("#carwindow").remove();
    $("#add-cart-box-sf").hide();
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        $("#car_iframe").remove();
    }

}

//首页关闭
function closeCart(obj)
{
    $('.gWindow').remove();
    $(".gBtn").hide();
}

function getCartHtml(ret,id){
    var html = '';
    var comboHtml = '';
    var nmHtml = '';
    var defimg = SF_STATIC_URL+"/html/images/60pic.jpg";
    html += '<div id="'+id+'" class="floatcar">';
    html += '<div class="btnhover"></div><div class="title">冷链配送，顺丰到家！</div>';    
    html += '<ul class="tEvent">';
    //N元M件
    if(ret.nm != undefined && ret.nm.length > 0){
        var nm = ret.nm;
        for(var n in nm){
            var delkey = nm[n].belong+"-"+nm[n].cartType+"-"+nm[n].cartId+"-"+nm[n].pid;
            nmHtml += '<li class="nmtop"><div class="nmtitle">'+nm[n].name+'</div>';
            nmHtml += '<div class="nmtotal"><font>¥'+nm[n].price+'</font> ×1'; 
            nmHtml += '<a href="javascript:void(0)" onclick="cartDel(\''+delkey+'\')">删除</a>';
            nmHtml += '</div></li>';
            var nmpro = nm[n].subProductList;
            for(var k in nmpro){
                nmHtml += '<li class="nmlist">';
                nmHtml += '<div class="l"><a href="'+nmpro[k].url+'"><img src="'+nmpro[k].pic+'" onerror="this.src=\''+defimg+'\'" target="_blank"></a></div>';
                nmHtml += '<div class="c"><a href="'+nmpro[k].url+'" title="'+nmpro[k].productName+'" target="_blank">'+nmpro[k].productName+'</a><b>'+nmpro[k].weight+'kg</b></div>';
                nmHtml += '<div class="r">'+nmpro[k].productNum+'</div>';
                nmHtml += '</li>';
            }
            nmHtml += '<li class="nmline"></li>';
        }
    }
    html += nmHtml;
    //礼包
    if(ret.combo != undefined && ret.combo.length > 0){
        var combo = ret.combo;
        for(var j in combo){
            var delkey = combo[j].belong+"-"+combo[j].cartType+"-"+combo[j].cartId+"-"+combo[j].pid;
            comboHtml += '<li class="nmtop"><div class="nmtitle">'+combo[j].name+'</div>';
            comboHtml += '<div class="nmtotal"><font>¥'+combo[j].price+'</font> ×1'; 
            comboHtml += '<a href="javascript:void(0)" onclick="cartDel(\''+delkey+'\')">删除</a>';
            comboHtml += '</div></li>';
            var compro = combo[j].subProductList;
            for(var k in compro){
                comboHtml += '<li class="nmlist">';
                comboHtml += '<div class="l"><a href="'+compro[k].url+'"><img src="'+compro[k].pic+'" onerror="this.src=\''+defimg+'\'" target="_blank"></a></div>';
                comboHtml += '<div class="c"><a href="'+compro[k].url+'" title="'+compro[k].productName+'" target="_blank">'+compro[k].productName+'</a><b>'+compro[k].weight+'kg</b></div>';
                comboHtml += '<div class="r">'+compro[k].productNum+'</div>';
                comboHtml += '</li>';
            }
            comboHtml += '<li class="nmline"></li>';
        }
    }
    //单品
    html += comboHtml;
    if(ret.alone != undefined && ret.alone.length > 0){
        var data = ret.alone;
        for(var i in data){
            var delkey = data[i].belong+"-"+data[i].productType+"-"+data[i].cartId+"-"+data[i].productId;
            html += '<li>';
            html += '<div class="l">';
            html += '<a href="'+data[i].url+'" target="_blank">';
            html += '<img src="'+data[i].pic+'" onerror="this.src=\''+defimg+'\'">';
            html += '</a>';
            html += '</div>';
            html += '<div class="c">';
            html += '<a href="'+data[i].url+'" title="'+data[i].productName+'" target="_blank">'+data[i].productName+'</a>';
            html += '<b>'+data[i].weight+'kg</b>';
            html += '</div>';
            html += '<div class="r">';
            html += '<font>¥'+data[i].sellPrice+'</font> ×'+data[i].productNum+'<br>';
            html += '<a href="javascript:void(0)" onclick="cartDel(\''+delkey+'\')">删除</a>';
            html += '</div>';
            html += '</li>';
        }
    }
    html += '</ul>';
    html += '<div class="total">';
    html += '<p style="width:210px;">';
    html += '共有 <font id="listCartNum"> '+ret.totalNum+' </font> 件商品<br>';
    html += '总重 <font id="listCartNum">'+ret.totalWeight+'</font> kg（含包装）';
    html += '</p>';
    html += '<p style="width:120px;text-align:right;">';
    html += '共计：<font>¥'+ret.totalMoney+'</font><br>';
    html += '<a href="'+cartHostUrl+'" class="submit5">去购物车结算</a>';
    html += '</p>';
    html += '</div>';
    html += '<div class="clear"></div>';
    html += '</div>';
    
    if(id == 'cat_form13'){
        var extHtml = '<div class="btn"><a href="'+cartHostUrl+'/cart/index/" rel="nofollow">购物车 <font id="cartNum">'+ret.totalNum+'</font> 件 </a></div>';
        var rethtml = '<div id="cart_lists">'+extHtml+html+'</div>';
    }else{
        var rethtml = html;
    }
    return rethtml;
}

/*
* N元M件加入购物车 nm活动, pid:活动id,amount数量，默认1.type=6，cfg='256881-1,256882-1'  字符串，前面商品id，后面商品数量，belong归属0普通，1海淘
*/
function cartAddNm(aid, cfg, num, belong)
{
    belong = belong || 0;
    var web_url = cartHostUrl + '/cartapi/addProduct/';
    $.ajax({
        url: web_url,
        type: 'GET',
        dataType: "jsonp", //返回json格式的数据   
        jsonp: "callback",
        data: {"pid": aid, "cfg":cfg, "num":num, "type":6, "belong":belong},
        success: function (ret) {
                if(ret.code == 0){
                    getCartList();
                    jAlert("成功加入购物车");
                }else{
                    jAlert(ret.msg);
                }
        }
    });
}

// 凑单显示
function showCartbar (data) {
   $('#total_money').find('font').html(data.totalMoney);
   $('#cartbar_message').html(data.message);
   //$('#cartbar_admessage').find('span').html(data.adMessage);
}

//批量加入购物车
function patchAddCart(pidAll) {
    var web_url = cartHostUrl + '/cartapi/addProducts/';
    $.ajax({
        url: web_url,
        type: 'GET',
        dataType: "jsonp", //返回json格式的数据   
        jsonp: "callback",
        data: {"pid":pidAll},
        success: function (ret) {
            if (ret.code == 0) {
                getCartList();
                jAlert("成功加入购物车");
            } else {
                jAlert(ret.msg);
            }
        }
    });
}
