$(function () {
    /**
     *  大轮播图big_carousel
     */
    (function () {
        /**
         * 大轮播图的动态元素创建
         */
        (function () {
            //图片数量
            var imgNum = 4;
            var ulObj = document.createElement('ul');
            var dlObj = document.createElement('dl');

            for (var i = 0; i < imgNum; i++) {
                var liObj = document.createElement('li');
                var ddObj = document.createElement('dd');
                ddObj.setAttribute('index', i);
                var imgObj = document.createElement('img');
                imgObj.setAttribute('src', 'images/big_lunbo0' + (i + 1) + '.jpg');
                liObj.appendChild(imgObj);
                ulObj.appendChild(liObj);
                dlObj.appendChild(ddObj);
            }
            document.getElementById('screen').appendChild(ulObj);
            document.getElementById('dot').appendChild(dlObj);

            document.getElementById('dot').getElementsByTagName('dl')[0].children[0].setAttribute('class', 'currentDot');
        })();
        /**
         * 大轮播图的功能实现
         */
        (function () {
            //动态获取当前屏幕的最大宽度 #screen ul li
            (function () {
                $('#screen ul li').css('width', $(window).width() + 'px');
                $('#screen ul img').css('width', $(window).width() + 'px');
            })();

            //轮播的实现
            (function () {
                //获取页面元素
                var imgWidth = $(window).width();
                var ulObj = document.getElementById('screen').getElementsByTagName('ul')[0];
                var liObjs = ulObj.getElementsByTagName('li');
                var olObj = document.getElementById('dot').getElementsByTagName('dl')[0];

                var pic = 0;
                ulObj.appendChild(ulObj.getElementsByTagName('li')[0].cloneNode(true));
                //图片的自动播放
                var timer = setInterval(f1, 2500);
                ulObj.onmouseenter = function () {
                    clearInterval(timer);
                };
                ulObj.onmouseleave = function () {
                    timer = setInterval(f1, 2500);
                };


                for (var j = 0; j < olObj.children.length; j++) {
                    olObj.children[j].onclick = function () {
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        //设置当前的样式
                        this.className = 'currentDot';
                        animate(ulObj, this.getAttribute('index') * -imgWidth);
                    };
                }

                function f1() {
                    if (pic == liObjs.length - 1) {
                        pic = 0;
                        ulObj.style.left = '0px';
                    }
                    pic++;
                    animate(ulObj, -pic * imgWidth);

                    if (pic == 4) {
                        //干掉所有的class属性
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        olObj.children[0].className = 'currentDot';
                    } else {
                        //干掉所有的class属性
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        //设置当前的样式
                        olObj.children[pic].className = 'currentDot';
                    }

                }

                //封装的动画函数
                function animate(element, target) {
                    clearInterval(element.timeId);
                    //定时器的id值存储到对象的一个属性中
                    element.timeId = setInterval(function () {
                        //获取元素的当前的位置,数字类型
                        var current = element.offsetLeft;
                        //每次移动的距离
                        var step = 10;
                        step = current < target ? step : -step;
                        //当前移动到位置
                        current += step;
                        if (Math.abs(current - target) > Math.abs(step)) {
                            element.style.left = current + "px";
                        } else {
                            //清理定时器
                            clearInterval(element.timeId);
                            //直接到达目标
                            element.style.left = target + "px";
                        }
                    }, 2);
                }
            })();
            //温馨提醒的动画
            (function () {
                var box = document.getElementById('pointTip');

                function moveLeft() {
                    animate(box, {"right": 0});
                }

                function moveRight() {
                    animate(box, {"right": "-177"});
                }

                box.onmouseenter = moveLeft;
                box.onmouseleave = moveRight;

            })();

        })();
    })();
    /**
     *  小导航 small_header
     */
    (function () {
        var mainBodyData = ['运单追踪', '我要寄件', '运费时效查询', '服务网点查询', '收寄范围查询', '在线客服'];
        //添加固定的元素到指定位置
        $('#small_header').append('<ul class="sh_content w clearfix">\n' +
            '            <li>\n' +
            '                <a class="ax" href="javascript:void(0)">\n' +
            '                    ' + mainBodyData[0] + '\n' +
            '                </a>\n' +
            '                <div id="search">\n' +
            '                    <div class="billNum clearfix">\n' +
            '                        <input type="text" placeholder="您可以输入订单号进行查询">\n' +
            '                        <a class="sdd" href="javascript:void(0)"></a>\n' +
            '                    </div>\n' +
            '                    <div class="phoneNum clearfix">\n' +
            '                        <input type="text" placeholder="或您可以输入手机号进行查询">\n' +
            '                        <a class="sdd" href="javascript:void(0)"></a>\n' +
            '                    </div>\n' +
            '                    <p class="btn clearfix">马上查单</p>\n' +
            '                </div>\n' +
            '            </li></ul>');
        //添加动态元素到固定的元素中
        for (var i = 1; i < mainBodyData.length; i++) {
            $('#small_header .sh_content').append('<li>\n' +
                '                <a class="ax" href="javascript:void(0)">\n' +
                '                    ' + mainBodyData[i] + '\n' +
                '                </a>\n' +
                '            </li>');
        }//end for

        //获取a
        var aList = document.getElementById('mainBody').getElementsByClassName('ax');

        for (var j = 0; j < aList.length; j++) {
            $(aList[j]).css('background-position-y', (j * -38) + 'px');
        }

        $('#small_header .sh_content li').mouseenter(function () {
            $(this).css('backgroundColor', '#fff').siblings().css('backgroundColor', '#dc1e32');

            $(this).find('a').not('.sdd').css({
                'color': '#dc1e32',
                'background-image': 'url("images/smallHeader-icon-banner.png")'
            });

            // var urlStr = $(this).find('a').css('background');
            // urlStr.replace(/smallHeade-icon/g ,'smallHeader-icon-banner');

            $(this).siblings().find('a').not('.sdd').css({
                'color': '#fff',
                'background-image': 'url("images/smallHeade-icon.png")'
            });
        });

        $('#small_header .sh_content li').mouseleave(function () {
            $(this).find('a').not('.sdd').css({
                'color': '#fff',
                'background-image': 'url("images/smallHeade-icon.png")'
            });

            $(this).css('backgroundColor', '#dc1e32');
        });
    })();
    /**
     *  业务介绍  business_description
     */
    (function () {
        //nav event
        (function () {
            function fClick() {
                $(this).find('a').css({'color':'#d92437','font-weight':'700'});
                $(this).css('border-bottom','2px solid #d92437');
                $(this).find('div').show();

                $(this).siblings().find('a').css({'color':'#333','font-weight':'400'});
                $(this).siblings().css('border-bottom','2px solid #949494');
                $(this).siblings().find('div').hide();
            }
            $('#content .navC ul:eq(0) li').bind('click',fClick);
        })();
        //small_carousel 轮播图实现
        (function () {
            function small_carouselPlay(mainC) {
                //获取页面元素
                var imgWidth = $(mainC+ ' '+'.bigBox .moveBox li:eq(0)').width();
                var ulObj = document.getElementById('mainC').getElementsByClassName('bigBox')[0].getElementsByTagName('ul')[0];
                var liObjs = ulObj.getElementsByTagName('li');
                var olObj = document.getElementById('mainC').getElementsByClassName('dotS')[0];



                var pic = 0;
                var newLi = ulObj.getElementsByTagName('li')[0].cloneNode(true);
                newLi.setAttribute('index','2');
                ulObj.appendChild(newLi);
                //图片的自动播放
                var timer = setInterval(f1, 2500);
                ulObj.onmouseenter = function () {
                    clearInterval(timer);
                };
                ulObj.onmouseleave = function () {
                    timer = setInterval(f1, 2500);
                };


                for (var j = 0; j < olObj.children.length; j++) {
                    olObj.children[j].onclick = function () {
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        //设置当前的样式
                        this.className = 'currentDot';
                        animate(ulObj, this.getAttribute('index') * -imgWidth);
                    };
                }

                function f1() {
                    if (pic == liObjs.length - 1) {
                        pic = -1;
                        ulObj.style.left = '0px';
                    }
                    pic++;
                    animate(ulObj, -pic * imgWidth);

                    if (pic == 2) {
                        //干掉所有的class属性
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        olObj.children[0].className = 'currentDot';
                    } else {
                        //干掉所有的class属性
                        for (var i = 0; i < olObj.children.length; i++) {
                            olObj.children[i].removeAttribute('class');
                        }
                        //设置当前的样式
                        olObj.children[pic].className = 'currentDot';
                    }

                }

                //封装的动画函数
                function animate(element, target) {
                    clearInterval(element.timeId);
                    //定时器的id值存储到对象的一个属性中
                    element.timeId = setInterval(function () {
                        //获取元素的当前的位置,数字类型
                        var current = element.offsetLeft;
                        //每次移动的距离
                        var step = 10;
                        step = current < target ? step : -step;
                        //当前移动到位置
                        current += step;
                        if (Math.abs(current - target) > Math.abs(step)) {
                            element.style.left = current + "px";
                        } else {
                            //清理定时器
                            clearInterval(element.timeId);
                            //直接到达目标
                            element.style.left = target + "px";
                        }
                    }, 2);
                }
            };
            small_carouselPlay('#mainC');

            // var navD = $('#mainC').clone(true);
            // navD.attr('id','navD');
            // $('#content').append(navD);
            // navD.hide();
            // /**
            //  * p span img 都需要换
            //  */
            //
            //
            //
            //
            // $('#content .navC li:eq(1)').click(function () {
            //     $('#mainC').hide();
            //     $('#mainD').show();
            //     $('#mainE').hide();
            // });
            // $('#content .navC li:eq(2)').click(function () {
            //     $('#mainC').hide();
            //     $('#mainD').hide();
            //     $('#mainE').show();
            // });
        })();





    })();
    /**
     *  成功案例 successful_case
     */
    (function () {
        //模拟数据
        var data = ['3C电子行业', '医疗行业', '生鲜行业', '快消行业'];
        var yNumImg = ['-118px', '-177px', '-54px', '10px'];
        //创建动态元素加入到固定的元素中
        (function () {
            $('#successful_case').append('<div class="w">\n' +
                '            <div class="title">\n' +
                '                <h1>成功案例</h1>\n' +
                '                <h5>每一时刻，都有无数的客户托付与期待被成功交付，顺丰与前瞻者同行，与成就者共成就 <span><a href="javascript:void(0)">查看全部</a>></span></h5>\n' +
                '            </div>\n' +
                '            <div class="caseList clearfix"></div>\n' +
                '        </div>');

            var bigBox = document.getElementById('successful_case').getElementsByClassName('caseList')[0];

            var ulObj = document.createElement('ul');
            ulObj.setAttribute('class', 'clearfix');

            for (var i = 0; i < data.length; i++) {

                var liObj = document.createElement('li');
                var iObj = document.createElement('i');
                iObj.style.backgroundPositionY = yNumImg[i];
                var sObj = document.createElement('s');
                sObj.innerText = data[i];
                liObj.appendChild(iObj);
                liObj.appendChild(sObj);
                ulObj.appendChild(liObj);
            }
            bigBox.appendChild(ulObj);
        })();
        //mouseover事件
        (function () {
            var ulBox = document.getElementById('successful_case').getElementsByClassName('caseList')[0].children[0];
            var liList = ulBox.getElementsByTagName('li');


            for (var i = 0; i < data.length; i++) {
                liList[i].onmouseenter = function () {
                    this.getElementsByTagName('i')[0].style.backgroundImage = 'url("images/white-t-img.png")';
                    this.getElementsByTagName('s')[0].style.color = '#fff';
                };
                liList[i].onmouseleave = function () {
                    this.getElementsByTagName('i')[0].style.backgroundImage = 'url("images/red-t-img.png")';
                    this.getElementsByTagName('s')[0].style.color = '#dc1e32';
                };
            }
        })();
    })();
});