// 根据id获取元素对象
function my$(id) {
    return document.getElementById(id);
}

/**
 * 点击抢购 或者加入购物车 动画产生一个小红点 去到购物车里面的动画实现
 *
 * #carStore targetLi #js_qgqk #js_qgtd #js_qgrsl #js_qgzl  #js_qgqcs  #addCar01 - #addCar08
 */
(function () {
    /**
     * 数据的设计
     */
    var data = ['js_qgqk', 'js_qgtd', 'js_qgrsl', 'js_qgzl', 'js_qgqcs', 'addCar01', 'addCar02', 'addCar03', 'addCar04', 'addCar05', 'addCar06', 'addCar07', 'addCar08'];

    /**
     * 动画的引入 使用
     */
    var numContent = 0;
    for (var i = 0; i < data.length; i++) {
        var strIndex = data[i];
        document.getElementById(strIndex).onclick = function () {
            var runner = funParabola(this,document.getElementById('carStore'));

            //创建小飞球
            var fly = document.createElement('div');
            fly.style.height = '20px';
            fly.style.width = '20px';

            fly.style.background = 'rgba(255,0,255,.8)';
            fly.style.position = "absolute";
            fly.style.borderRadius = "10px";
            fly.style.top = "0";
            fly.style.left = '80px';
            $(this).append($(fly));

            var parabola = funParabola(fly, document.getElementById('targetLi')).mark();
            fly.style.marginLeft = "0px";
            fly.style.marginTop = "0px";
            parabola.init();

            numContent++;
            document.getElementById('carStore').innerText = numContent;
            document.getElementById('gouw').getElementsByClassName('shul')[0].innerHTML = numContent;
            $(document.getElementById('gouw').getElementsByClassName('shul')[0]).css({
                'color':'red',
                'font-size':'14px',
                'font-weight':'700',
                'text-align':'center'
            });
        };
    }






})();
// 鼠标放在优选上的时候显示下面的内容
// 获取优选按钮
var j_hide = my$('j_hide_1');
j_hide.onmouseenter = function () {
    my$('hide').style.display = 'block';


};

j_hide.onmouseleave = function () {
    my$('hide').style.display = 'none';

};

// 鼠标经过mobile的时候显示窗口
var mobile = my$('mobile');
mobile.onmouseenter = function () {
    my$('j_dd').style.display = 'block';
};
mobile.onmouseleave = function () {
    my$('j_dd').style.display = 'none';
};
// 鼠标进入购物车 出现效果
var j_myCar = my$('j_myCar');
j_myCar.onmouseover = function () {
    my$('j_car_inner').style.display = 'block';

};
j_myCar.onmouseout = function () {
    my$('j_car_inner').style.display = 'none';

};


// 鼠标进入的时候创建一个div并且定位到li中
function mouseenterHander() {
    $('.dv1').eq($(this).index()).show();
    $(this).children('a').css('color', 'green');
    $(this).addClass('dvapp').siblings().removeClass('dvapp');

}

function mouseleaveHander() {
    $('.dv1').eq($(this).index()).hide();
    $(this).children('a').css({'color': 'white'});
    $('#j_menu>li').removeClass('dvapp');
}

var close = my$('close');
// close.onclick = function () {
//     my$('dv').style.display = 'none';
// };

// 获取fix下面的a标签

$('#j_one').mouseenter(function () {
    $('#j_car_one').animate({width: 360}, 500);

});
$('#j_one').mouseleave(function () {
    $('#j_car_one').animate({width: 0}, 900);
});

// 给two 注册鼠标进入和离开事件
$('.two').mouseenter(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.browse').stop().animate({width: 360}, 500);

});
$('.two').mouseleave(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.browse').stop().animate({width: 0}, 1000);

});
$('.three').mouseenter(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.three-inner').stop().animate({width: 230}, 500);

});
$('.three').mouseleave(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.three-inner').stop().animate({width: 0}, 1000);

});


// 增加顶部的网站导航
function Mix(to, from) {
    for (var k in from) {
        to[k] = from[k]
    }

}

function Content(opts) {
    this.data = opts.data || [];
    this.container = opts.container;
    this.title = opts.title;
    this.color = opts.color;

}

// 首先先是初始化
Mix(Content.prototype,
    {
        infinite: function () {
            // 固定不变 的dom对象有 div
            var div = document.createElement('div');
            div.className = 'inner-dv';
            // 还有ul
            var ul = document.createElement('ul');
            var h3 = document.createElement('h3');
            h3.innerHTML = this.title;
            h3.style.color = this.color;
            div.appendChild(h3);
            div.appendChild(ul);
            ul.className = 'inner-ul';
            this.ul = ul;
            this.div = div;

            this.render();

            this.container.appendChild(div);
        },
        render: function () {
            // 里面的li会发生变化  所以写在render里面
            //    首先创建之前先清楚li
            var lis = this.ul.childNodes;
            for (var i = lis.length - 1; i >= 0; i--) {
                this.ul.removeChild(lis[i])
            }
            // 创建li
            // var ulObj = document.createElement('ul')

            for (var j = 0; j < this.data.length; j++) {

                var li = document.createElement('li');
                // li.style.marginRight = '10px';
                // 创建
                var a = document.createElement('a');
                a.style.fontSize = '12px';
                a.style.color = '#565656';
                a.href = 'javascript:;';
                a.appendChild(document.createTextNode(this.data[j]));
                li.appendChild(a);
                this.ul.appendChild(li);
            }
        },

        // 增加内容的方法
        addData: function (newData) {
            this.data.push(newData);

        },
        // 修改标题的内容


    }
);


var content = new Content(
    {
        container: document.getElementById('nav-mask'),
        title: '商品分类',
        color: '#669900',
        data: ['肉类海鲜', ' 肉类海鲜', '新鲜果蔬', '速食冷藏', '酒水饮料', '休闲糖巧', '粮油干货', '冲调茶饮']

    }
);
content.infinite();


var content1 = new Content(
    {
        container: document.getElementById('nav-mask'),
        title: '特色频道',
        color: '#FA6400',
        data: ['特色频道', ' 跨境直发', '企业专区', '红酒廊', '寰宇美食']

    }
);


content1.infinite();
var content2 = new Content(
    {
        container: document.getElementById('nav-mask'),
        title: '更多',
        color: '#000',
        data: ['更多', ' 客户端', '关注我们', '客服电话：9533858']

    }
);
content2.infinite();


// 点击按钮隐藏 遮挡层


$('#j_inner_help').mouseenter(function () {
    $('#nav-mask').stop().show(800);

});
$('#j_inner_help').mouseleave(function () {
    $('#nav-mask').stop().hide(800);

});


// // 鼠标进入精品分类的时候显示下面的二级菜单
// my$('menu').onmouseover = function () {
//     // 进入显示ul
//     my$('j_menu').style.display = 'block';
//
// };
// my$('menu').onmouseout = function () {
//     // 进入显示ul
//     my$('j_menu').style.display = 'none';
// };
// var ul = my$('j_menu');
// // 给j_menu下面的每个 li注册鼠标进入事件
// var list = my$('j_menu').children;
// var length = list.length;
// for(var i = 0; i < length; i++ ){
//     list[i].onmouseenter = mouseenterHander;
//     list[i].onmouseleave = mouseleaveHander;
//
//
// }
// 获取ul中 的素有div

// 鼠标放到指定的li上让对应的div进行显示
// var count = 0;
// $('#j_menu>li').mouseenter(function () {
//     count++;
//     console.log(count);
//    $(this).eq(count).addClass('dvapp').siblings().removeClass('dvapp');
//    $('.dv').eq($(this).index()).show().siblings().hide()
//
// });


// 创建对象
function Litag(opts) {
    //收集数据
    this.container = opts.container;
    this.data = opts.data || [];
    this.classObj = opts.classObj;
    this.spanObj = opts.spanObj || [];
    this.divObj = opts.divObj || [];
    this.dtA = opts.dtA;
    this.imgSrc = opts.imgSrc;
    //创建li
    this.dom = document.createElement('li');
    //放到ul
    this.container.appendChild(this.dom);
    //创建span
    var span = document.createElement('span');
    //放到li
    this.dom.appendChild(span);
    //创建s
    var s = document.createElement('s');
    s.className = this.classObj;
    //放到span
    span.appendChild(s);
    //创建a
    var a = document.createElement('a');
    a.className = 'span-a';
    a.href = '#';
    a.innerHTML = this.spanObj;
    //放到span
    span.appendChild(a);
    //调用render
    this.render();
}

Litag.prototype.render = function () {
    //循环遍历 创建a
    for (var i = 0; i < this.data.length; i++) {
        //创建a
        var a = document.createElement('a');
        //添加内容
        a.innerHTML = this.data[i];
        a.href = '#';
        //添加到Li
        this.dom.appendChild(a);

    }
    //创建隐藏显示div
    var div = document.createElement('div');
    //添加内容
    div.className = 'left-show';
    //放到li
    this.dom.appendChild(div);
    //创建隐藏显示内部div
    var divInner = document.createElement('div');
    //添加Class
    divInner.className = 'left-show-inner';
    //创建dl
    var dl = document.createElement('dl');
    //添加class
    dl.className = 'clearfix';
    //放到divInner
    divInner.appendChild(dl);
    //创建dt
    var dt = document.createElement('dt');
    //创建a
    var dtA = document.createElement('a');
    //添加内容
    dtA.innerHTML = this.dtA;
    //放到dt
    dt.appendChild(dtA);
    //把dt放到dl
    dl.appendChild(dt);
    // 循环遍历创建dd
    for (var j = 0; j < this.divObj.length; j++) {
        //创建dd
        var dd = document.createElement('dd');
        // 创建a
        var ddA = document.createElement('a');
        //添加内容
        ddA.innerHTML = this.divObj[j];
        //放到dd
        dd.appendChild(ddA);
        //放到dl
        dl.appendChild(dd);

    }
    //放到div
    div.appendChild(divInner);
    //创建图片div
    var divImg = document.createElement('div');
    //添加Class
    divImg.className = 'left-show-img';
    // 创建a
    var imgA = document.createElement('a');
    //放到divImg
    divImg.appendChild(imgA);
    //创建Img
    var img = document.createElement('img');
    //添加图片
    var imgS = this.imgSrc;
    for (var k in imgS) {
        var value = imgS[k];
        img.src = value;
        //放到imgA
        imgA.appendChild(img);
        //放到div
        div.appendChild(divImg);
    }
};
//new新对象  创建li
var li1 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-1',
    spanObj: ['肉类海鲜'],
    data: ['牛肉', '羊肉', '大闸蟹', '鱼'],
    dtA: '精品肉类',
    divObj: [' 牛肉', '| 羊肉', '| 猪肉', '| 禽类', '| 加工肉类'],
    imgSrc: {src: 'images/hide.jpg'}
});
var li2 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-2',
    spanObj: ['新鲜果蔬'],
    data: ['柑橘', '橙猕', '猴桃', '蔬菜'],
    dtA: '水果蔬菜',
    divObj: ['| 柑橘', '| 橙猕', '| 猴桃', '| 猴桃', '| 猴桃', '| 猴桃', '| 猴桃', '| 猴桃', '| 猴桃', '| 猴桃', '| 蔬菜'],
    imgSrc: {src: 'images/hide1.jpg'}
});
var li3 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-3',
    spanObj: ['速食冷藏'],
    data: ['速冻', '食品', '蛋冷', '冻甜点'],
    dtA: '速冻冷藏',
    divObj: ['| 速冻', '| 食品', '| 蛋冷', '| 冻甜点', '| 蛋冷', '| 冻甜点', '| 蛋冷', '| 冻甜点'],
    imgSrc: {src: 'images/hide2.jpg'}
});
var li4 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-4',
    spanObj: ['酒水饮料'],
    data: ['葡萄酒', '啤酒', '白酒', '牛奶'],
    dtA: '酒水',
    divObj: ['| 葡萄酒', '| 啤酒', '| 白酒', '| 牛奶'],
    imgSrc: {src: 'images/hide3.jpg'}
});
var li5 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-5',
    spanObj: ['休闲糖巧'],
    data: ['巧克力', '坚果', '曲奇'],
    dtA: '休闲糖巧',
    divObj: ['| 巧克力', '| 坚果', '| 曲奇'],
    imgSrc: {src: 'images/hide4.jpg'}
});
var li6 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-6',
    spanObj: ['粮油干货'],
    data: ['橄榄油', '泰国米', '枣'],
    dtA: '粮油干货',
    divObj: ['| 橄榄油', '| 泰国米', '| 橄榄油', '| 枣'],
    imgSrc: {src: 'images/hide5.jpg'}
});
var li7 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-7',
    spanObj: ['冲调茶饮'],
    data: ['蜂蜜', '咖啡', '麦片', '茗茶'],
    dtA: '冲调茶饮',
    divObj: ['| 蜂蜜', '| 麦片', '| 咖啡', '| 麦片', '| 茗茶'],
    imgSrc: {src: 'images/hide1.jpg'}
});
var li8 = new Litag({
    container: my$('J_left-ul'),
    classObj: 'spr spr-8',
    spanObj: ['优选国际'],
    data: ['奶粉', '彩妆', '营养'],
    dtA: '优选国际',
    divObj: ['| 奶粉', '| 彩妆', '| 营养', '| 奶粉'],
    imgSrc: {src: 'images/hide2.jpg'}
});


//为J_mainNav-nav注册鼠标进入离开事件
//进入显示J_left-nav菜单
my$('J_mainNav-nav').onmouseenter = function () {
    my$('J_left-nav').style.display = 'block';
    // $('#J_left-nav').show();
};
//鼠标离开 隐藏
my$('J_mainNav-nav').onmouseleave = function () {
    my$('J_left-nav').style.display = 'none';
    // $('#J_left-nav').hide();
};
//循环遍历J_left-ul li
var list = my$('J_left-ul').children;
for (var i = 0; i < list.length; i++) {
    //注册鼠标进入事件
    list[i].index = i;
    list[i].onmouseenter = function () {
        // console.log(i)
        //获取a标签
        var alist = my$('J_left-ul').children[this.index].querySelectorAll('a');
        var divList = my$('J_left-ul').querySelectorAll('.left-show');
        divList[this.index].style.display = 'block';
        //获取div标签
        //循环判断 改变类样式
        for (var j = 0; j < alist.length; j++) {
            if (alist[j].className == 'span-a') {
                alist[j].style.color = '#669900';
            } else {
                alist[j].style.color = '#669900';
            }

        }
        //鼠标移动li到显示对应div
        // $(this).children('div').show();
        this.style.backgroundColor = '#fff';

    };
    //注册鼠标离开事件
    list[i].onmouseleave = function () {
        var alist = my$('J_left-ul').children[this.index].querySelectorAll('a');
        var divList = my$('J_left-ul').querySelectorAll('.left-show');
        divList[this.index].style.display = 'none';


        for (var j = 0; j < alist.length; j++) {
            if (alist[j].className == 'span-a') {
                alist[j].style.color = '#fff';
            } else {
                alist[j].style.color = '#ddeac8';
            }

        }
        //鼠标离开li隐藏对应div
        // $(this).children('div').hide();
        this.style.backgroundColor = '#76ac25';
    };

}

//轮播图 jQuery
$(function () {
    function autoMove() {
        num++;
        if (num > $('#list>li').length - 1) {
            num = 0;

        }
        $('#list>li').eq(num).fadeIn(800).siblings().fadeOut();
        $('#nav>li').eq(num).addClass('active').siblings().removeClass('active');

    }

    //设置全局变量
    var num = 0;
    //设置定时器
    var setTime = setInterval(autoMove, 2000);
    // 鼠标进入小圆点切换图片
    $('#nav>li').mouseenter(function () {
        //清除定时器
        clearInterval(setTime);
        $('#list>li').eq($(this).index()).stop().fadeIn(800).siblings().fadeOut();
        $('#nav>li').eq($(this).index()).addClass('active').siblings().removeClass('active');


    });
    // 鼠标离开小圆点恢复定时器
    $('#nav>li').mouseleave(function () {
        setTime = setInterval(autoMove, 2000);


    });
    //鼠标进图ul li  显示左右焦点
    $('.cen-scroll-inner').mouseenter(function () {
        $('.scr-left').show();
        $('.scr-right').show();

    });
    $('.cen-scroll-inner').mouseleave(function () {
        $('.scr-left').hide();
        $('.scr-right').hide();

    });

});
//中间内容jQuery特效
//鼠标经过当前li时
$('.check_one-middle li').mouseenter(function () {
    $(this).children('.gouwucar').fadeIn();
});
//鼠标经过当前li时
$('.check_one-middle li').mouseleave(function () {
    $(this).children('.gouwucar').fadeOut();
});

// // 点击按钮回到顶部
// onscroll = function () {
//     //判断
//     // console.log(getScroll().top);
//     if (getScroll().top > 300) {
//         my$('backToTop').style.display = 'block';
//
//     } else {
//         my$('backToTop').style.display = 'none';
//     }
//
//
// };
//注册点击事件
// my$('backToTop').onclick = function () {
//
// };
// $('.backToTop').click(function () {
//
//     window.scroll(0,0);
// });
// // 给window注册页面向上卷曲事件
//
// onscroll = function () {
//     if(getScroll().top > 0){
//         my$('j_scoTop').style.display = 'block';
//     }
//     if( getScroll().top == 0 ){
//         my$('j_scoTop').style.display = 'none';
//     }
//
// };
// my$('j_scoTop').onclick = function () {
//     // 点击按钮返回顶部
//     window.scroll(0, 0)
//
//
// };
//倒计时
function countDown(times) {
    var timer = null;
    timer = setInterval(function () {
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;//时间默认值
        if (times > 0) {
            day = Math.floor(times / (60 * 60 * 24));
            hour = Math.floor(times / (60 * 60)) - (day * 24);
            minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (day <= 9) day = '0' + day;
        if (hour <= 9) hour = '0' + hour;
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        //
        // console.log(day+"天:"+hour+"小时："+minute+"分钟："+second+"秒");
        my$('p-hour').innerHTML = hour;
        my$('p-minute').innerHTML = minute;
        my$('p-second').innerHTML = second;
        times--;
    }, 1000);
    if (times <= 0) {
        clearInterval(timer);
    }
}

countDown(43200);

// 固定定位部分
var gou = $('#gouw');
gou.prepend('<div class="shul"></div>');
// 右下角弹出动画
$('#gouw>li>a').mouseenter(function () {
    $('.tan' + $(this).parent().index() + '').stop().animate({'width': 380}, 300);
});
$('#tan').mouseenter(function () {
    $(this).stop().animate({'width': 380}, 300);
});
$('#gouw>li>a').mouseleave(function () {
    $('.tan' + $(this).parent().index() + '').stop().animate({'width': 0}, 800)
});
$('#tan').mouseleave(function () {
    $(this).stop().animate({'width': 0}, 800)
});
// 滚动条控制置顶按钮
$(window).scroll(function () {
    if ($(this).scrollTop() == 0) {
        $('#gouw>li:eq(3)>a').css('display', 'none');
    } else {
        $('#gouw>li:eq(3)>a').css('display', 'block');
    }
    ;
});


