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


// 鼠标进入精品分类的时候显示下面的二级菜单
my$('menu').onmouseover = function () {
  // 进入显示ul
    my$('j_menu').style.display = 'block';

};
my$('menu').onmouseout = function () {
    // 进入显示ul
    my$('j_menu').style.display = 'none';
};
var ul = my$('j_menu');
// 给j_menu下面的每个 li注册鼠标进入事件
var list = my$('j_menu').children;
var length = list.length;
for(var i = 0; i < length; i++ ){
    list[i].onmouseenter = mouseenterHander;
    list[i].onmouseleave = mouseleaveHander;


}
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


// 鼠标进入的时候创建一个div并且定位到li中
function mouseenterHander() {
    $('.dv1').eq($(this).index()).show();
    $(this).children('a').css('color', 'green');
    $(this).addClass('dvapp').siblings().removeClass('dvapp');

}

function mouseleaveHander() {
    $('.dv1').eq($(this).index()).hide();
    $(this).children('a').css({'color':'white'});
    $('#j_menu>li').removeClass('dvapp');
}

var close = my$('close');
// close.onclick = function () {
//     my$('dv').style.display = 'none';
// };

// 获取fix下面的a标签

$('#j_one').mouseenter(function () {
   $('#j_car_one').stop().animate({width : 360},500);

});
$('#j_one').mouseleave(function () {
    $('#j_car_one').stop().animate({width : 0},900);
});

// 给two 注册鼠标进入和离开事件
$('.two').mouseenter(function () {
   // 鼠标进入的时候显示浏览记录的框
    $('.browse').stop().animate({width : 360},500);

});
$('.two').mouseleave(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.browse').stop().animate({width : 0},1000);

});
$('.three').mouseenter(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.three-inner').stop().animate({width : 230},500);

});
$('.three').mouseleave(function () {
    // 鼠标进入的时候显示浏览记录的框
    $('.three-inner').stop().animate({width : 0},1000);

});


// 给window注册页面向上卷曲事件

onscroll = function () {
   if(getScroll().top > 0){
       my$('j_scoTop').style.display = 'block';
   }
   if( getScroll().top == 0 ){
       my$('j_scoTop').style.display = 'none';
   }

};
my$('j_scoTop').onclick = function () {
  // 点击按钮返回顶部
     window.scroll(0, 0)


};


// 点击按钮隐藏城市选项
$('#city').mouseenter(function () {
    $('#j-hidden').show();
});
$('#j-hidden').mouseenter(function () {
   $(this).show();
});
$('#city').mouseleave(function () {
    $('#j-hidden').hide();
});
$('#j-hidden').mouseleave(function () {
    $(this).hide();
});

// 点击按钮切换选择的城市
// $('.city-hidden-mid').click(function () {
//
//
// });
$('#j_helpSelf').mouseenter(function () {
   $('#active').stop().show();

});
$('#j_helpSelf').mouseleave(function () {
    $('#active').stop().hide();

});





// 增加顶部的网站导航
function Mix(to,from) {
    for(var k in from){
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
        infinite : function () {
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
        render : function () {
            // 里面的li会发生变化  所以写在render里面
            //    首先创建之前先清楚li
            var lis = this.ul.childNodes;
            for(var i = lis.length-1; i>=0; i--){
                this.ul.removeChild(lis[i])
            }
            // 创建li
            // var ulObj = document.createElement('ul')

            for(var j = 0;  j <  this.data.length; j++){

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
        addData : function (newData) {
            this.data.push(newData);

        },
        // 修改标题的内容


    }
);




var content = new Content(
    {
        container : document.getElementById('nav-mask'),
        title : '商品分类',
        color : '#669900',
        data : ['肉类海鲜', ' 肉类海鲜', '新鲜果蔬', '速食冷藏', '酒水饮料', '休闲糖巧', '粮油干货', '冲调茶饮']

    }
);
content.infinite();


var content1 = new Content(
    {
        container : document.getElementById('nav-mask'),
        title : '特色频道',
        color : '#FA6400',
        data : ['特色频道', ' 跨境直发', '企业专区', '红酒廊', '寰宇美食']

    }
);


content1.infinite();
var content2 = new Content(
    {
        container : document.getElementById('nav-mask'),
        title : '更多',
        color : '#000',
        data : ['更多', ' 客户端', '关注我们', '客服电话：9533858']

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


// 选项卡添加内容函数
// 先分析思路   首先div的类样式 大小都是统一的 可以不用变化
// 里面写上的是  dl dt+dd  里面的内容 会发生变化 还有图片的src属性
// 可以写个增加内容的方法
function Mix(to, from) {
    for(var k in from){
        to[k] = from[k]
    }
}

function Dlobj(opts) {
    this.container = opts.container;
    // 传入列表 数据 还有类样式 还有dt的单独的文本 和类样式 还有下面图片的路径
    this.cssClass = opts.cssClass || '';
    this.data = opts.data || [];
    this.url = opts.url || '';
    this.text = opts.text;
    this.dtCls = opts.dtCls || '';//不传dt的类样式 类样式为空
    this.aCls = opts.aCls || '';
}

Mix(
    Dlobj.prototype, {
        // 初始化
        infite : function () {
            // 首先先创建那些固定不会变的dom、对象
            var div = document.createElement('div');

            // 然后创建dl
            var dl = document.createElement('dl');
            div.className = this.cssClass;
            div.appendChild(dl);
            this.div = div;
            this.dl = dl;
            // 需要创建个div 用来盛图片  还有a标签
            this.div1 = document.createElement('div');

            this.render();
            this.container.appendChild(div);
            this.container.appendChild(this.div1);

        },
        // 渲染方法
        render : function () {
            // 创建dt + dd 标签之前先清除所有的子节点
            //   var dts = this.div.childNodes;
            //   while( dts.length ){
            //       this.div.removeChild(dts[0])
            //
            //   }
            // 然后开始创建元素
            var dt = document.createElement('dt');
            dt.innerHTML = this.text;
            dt.className = this.dtCls;
            this.dl.appendChild(dt);
            for(var i = 0; i < this.data.length; i++){
                // 创建dd标签和 a标签
                var dd = document.createElement('dd');
                var a = document.createElement('a');
                a.href = 'javascript:;';
                a.appendChild(document.createTextNode(this.data[i]));
                a.className = this.aCls;
                dd.appendChild(a);
                this.dl.appendChild(dd);

            }
            // 创建img标签
            var img = document.createElement('img');
            img.src = this.url;
            // 创建a标签用来装img标签
            var a1 = document.createElement('a');
            a1.href = 'javascript:;';
            a1.appendChild(img);

            // 然后加入dom对象
            this.div1.appendChild(img);

        },
        // 增加加入列表数据的方法
        addData : function (newData,newText) {
            this.text = newText;
            this.data.push(newData);
            this.render();
        }
    }
);



var dlObj = new Dlobj(
    {
        container : document.getElementById('j_dv1'),
        cssClass : 'cat-sort',
        text : '精品肉类',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/menu1.jpg'
    }
);
dlObj.infite();

// var dlObj1 = new Dlobj(
//     {
//         container : document.getElementById('j_dv2'),
//         cssClass : 'cat-sort',
//         text : '商品冷冻',
//         data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
//         aCls : ' aCls',
//         dtCls : ' dtCls',
//         url : 'images/menu1.jpg'
//     }
// );
// dlObj1.infite();

// var dlOb = new Dlobj(
//     {
//         container : document.getElementById('j_dv2'),
//         cssClass : 'cat-sort',
//         text : '商品冷冻',
//         data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
//         aCls : ' aCls',
//         dtCls : ' dtCls',
//         url : 'images/menu1.jpg'
//     }
// );
// dlOb.infite();

var dlObj6 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[1],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/hide1.jpg'
    }
);
dlObj6.infite();

var dlObj0 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[2],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/hide2.jpg'
    }
);
dlObj0.infite();

var dlObj2 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[3],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/hide3.jpg'
    }
);
dlObj2.infite();

var dlObj3 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[4],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/hide4.jpg'
    }
);
dlObj3.infite();

var dlObj4 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[5],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/hide5.jpg'
    }
);
dlObj4.infite();

var dlObj7 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[6],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/qrj.jpg'
    }
);
dlObj7.infite();

var dlObj8 = new Dlobj(
    {
        container : document.getElementsByClassName('dv1')[7],
        cssClass : 'cat-sort',
        text : '商品冷冻',
        data : '牛肉,羊肉,猪肉,禽类,加工,肉类'.split(','),
        aCls : ' aCls',
        dtCls : ' dtCls',
        url : 'images/wanghong.jpg'
    }
);
dlObj8.infite();















