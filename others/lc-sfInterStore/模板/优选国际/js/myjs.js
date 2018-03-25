$(function () {
    $('#mySelect').mouseover(function () {
        $('#youxuan').show();
        $(this).addClass('select');
    })
    $('#mySelect').mouseout(function () {
        $('#youxuan').hide();
        $(this).removeClass('select');
    })
    $('#move').mouseover(function () {
        $('#move').children(1).children(0).show();

    })
    $('#move').mouseout(function () {
        $('#move').children(1).children(0).hide();
    })


    $('#myHelp').mouseover(function () {
        $('.help').show();
        $(this).addClass('select');

    })
    $('#myHelp').mouseout(function () {
        $('.help').hide();
        $(this).removeClass('select');
    })


    $('#myInternet').mouseover(function () {
        $('.dd').show();
        $(this).addClass('select');
    })
    $('#myInternet').mouseout(function () {
        $('.dd').hide();
        $(this).removeClass('select')
    })

    $('#weixin').mouseover(function () {
        $('.sf-weixin').show();
    })
    $('#weixin').mouseout(function () {
        $('.sf-weixin').hide();
    })


    // 城市切换

    var cityPd = true;
    $('.pshort').click(function () {
        if (cityPd) {
            $('.city').css('display', 'block');
            cityPd = false;
            $('.city-middle li a').click(function () {
                $('.city_title1').text($(this).text());
                return false;
            });
        }
        else {
            $('.city').css('display', 'none');
            cityPd = true;
        }
    });
})