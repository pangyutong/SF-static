$(function () {
    /**
     * 页面元素的动态创建
     */
    (function () {
        $('#footer #center').append('<ul class="fcontainer w"></ul>');

        //创建元素的数量
        var length = 10;
        for (var i = 0; i < length; i++) {
            $('#footer #center .fcontainer').append(' <li class="list' + (i + 1) + '"><a href="javascript:void(0)" target="_blank"></a></li>');
        }
        //选出所有的li 更改 -140为一个单位 走 x
        var liObj = $('#footer #center .fcontainer li').get();
        for (var j = 0; j < 6; j++) {
            liObj[j].style.backgroundPositionX = (j * -135) + 'px';
        }
        for (var j = 6; j < 10; j++) {
            liObj[j].style.backgroundPositionX = (j * -130) + 'px';
        }
    })();
});