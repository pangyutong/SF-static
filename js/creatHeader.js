$(function () {
    /**
     *  header 页面元素创建
     */
    (function () {
        $('#header .topheader').append('<ul></ul><ul></ul>');
        var ulDataList = [['首页', '物流', '金融', '商业', '成功案例', '服务支持', '顺丰控股投资者关系', '关于我们'], ['会员登录', '会员注册', '返回旧版网站']];
        var ulFirstObj = $('#header').find('ul').eq(0);
        var ulSecondObj = $('#header').find('ul').eq(1);
        ulFirstObj.addClass('topLeft clearfix fl');
        ulSecondObj.addClass('topRight clearfix fr');

        for (var i = 0; i < ulDataList[0].length; i++) {
            if (i == 2) {
                ulFirstObj.append('<li class="topli"><a href="others/ws-JR/domo.html" class="topa nolink">' + ulDataList[0][i] + '</a><div class="inx dropdown' + i + '"></div></li>');
                continue;
            }

            if (i == 7) {
                ulFirstObj.append('<li class="topli"><a href="others/wxb-about/index.html" class="topa nolink">' + ulDataList[0][i] + '</a><div class="inx dropdown' + i + '"></div></li>');
                continue;
            }
            ulFirstObj.append('<li class="topli"><a href="javascript:void(0)" class="topa nolink">' + ulDataList[0][i] + '</a><div class="inx dropdown' + i + '"></div></li>');

        }
        ulSecondObj.append('<li class="topli">\n' +
            '                <span class="join_ico"></span>\n' +
            '                <a href="others/hz-sfQGZQ/login_in/login.html">' + ulDataList[1][0] + '</a>\n' +
            '                <span class="line">|</span>\n' +
            '                <a href="others/hz-sfQGZQ/login_in/register.html">' + ulDataList[1][1] + '</a>\n' +
            '            </li>\n' +
            '            <li class="topli">\n' +
            '                <span class="return_icon"></span>\n' +
            '                <a href="javascript:void(0)">' + ulDataList[1][2] + '</a>\n' +
            '            </li>\n' +
            '            <li class="topli">\n' +
            '                <a class="cn_ico" href="javascript:void(0)"></a>\n' +
            '                <div class="dropdown akInx"></div>\n' +
            '            </li>');


        //添加a标签到下拉菜单中
        var dropDown = ulFirstObj.children()[3].getElementsByClassName('dropdown3')[0];

        $(dropDown).append('<s id="akF01"></s>');
        $(dropDown).append('<a href="others/hz-sfQGZQ/qiye.html">顺丰优选网上商城</a><br>');

        $(dropDown).append('<s id="akF02"></s>');
        $(dropDown).append('<a href="others/lc-sfInterStore/index.html">顺丰优选门店</a>');
    })();

    /**
     * header event
     *
     */
    (function () {
        //默认第一个选中
        $('.topheader .topLeft .topli>a').eq(0).css({'border-bottom': '3px solid #d92437', 'color': '#d92437'});
        //鼠标经过选中 出现dropdown

        $('.topheader .topLeft .topli>a').mouseenter(function () {


            $(this).css({'border-bottom': '3px solid #d92437', 'color': '#d92437'});


            //设置dropdown鼠标经过出现
            $(this).parents().find('.inx').css('display', 'block');
            $(this).parents().siblings().find('.inx').css('display', 'none');
        });
        $('.topheader .topLeft .topli').not('.topheader .topLeft .topli:eq(0)').mouseleave(function () {


            $(this).find('.inx').css('display', 'none');
            $(this).find('a').css({'border-bottom': 0, 'color': '#333'});
        });


        $('#header .topheader .topRight .topli a').mouseenter(function () {
            $(this).css('color', '#d92437');
        });
        $('#header .topheader .topRight .topli a').mouseleave(function () {
            $(this).css('color', '#333');
        });
        var bols = true;
        $('.topheader .topRight  .topli:last-child').click(function () {

            if (bols) {
                $(this).find('.akInx').show();

                bols = false;

            } else {
                $(this).find('.akInx').hide();

                bols = true;
            }

        });
    })();


});