$(document).ready(function () {

    $('#Query',).focus(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.2)');
    });

    $('#Query').blur(function () {
        $(this).css('background-color', '');
    });

    $('#Query').select(function () {
        $(this).css('background-color', '#E7AB9A');
    });


    $('.text',).focus(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.2)');
    });

    $('.text').blur(function () {
        $(this).css('background-color', '');
    });

    $('.text').select(function () {
        $(this).css('background-color', '#E7AB9A');
    });

    // $(".animate").submit(function () {
    //     var a = $(".text").val();
    //     var b = $("#pc").val();
    //     alert("Username:" + a +  "Password:" + b);
    // })

    $(".btn7").click (function (e) {
       e.preventDefault()
        $("#mode").show()
        $("#id01").hide()
        var b = $(".text").val()
        $("#as").append(b)
        var c = $("#pc").val()
        $("#ass").append(c)

    })
    

    $("#out").click (function () {
        $("#mode").hide()
    })

    $('#tt').click(function () {
        $('#id01').show(function () {
            $(this).css('background-color', 'rgba(0, 0, 0, 0.4)')
        })
    })

    $('.btn9').click(function () {
        $('#id01').hide()
    })

    $('.card').mouseenter(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');
    })

    $('.card').mouseleave(function () {
        $(this).css('background-color', '');
    })

    $('.card3').mouseenter(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');
    })

    $('.card3').mouseleave(function () {
        $(this).css('background-color', '');
    })

    $('.card2').mouseenter(function () {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');
    });


    $('.card2').mouseleave(function () {
        $(this).css('background-color', '');
    })

    $('.hourly').click(function () {
        $('.main1').show()
        $('.main').hide()
    })

    $('.week').click(function () {
        $('.main').show()
        $('.main1').hide()
    })

})

