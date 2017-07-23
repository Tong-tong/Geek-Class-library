//jQuery插件===>分页

var options = {
    "id": "page", //显示页码的元素
    // "data":datas,//显示数据
    "maxshowpageitem": 7, //最多显示的页码个数
    "pagelistcount": 6, //每页显示数据个数
    "callBack": function(result) {
        var cHtml = "";
        for (var i = 0; i < result.length; i++) {
            cHtml += "<li>" + result[i].name + "</li>"; //处理数据
        }
        // $("#demoContent").html(cHtml);//将数据增加到页面中
    }
};
//page.init(datas.length, 1, options);


$(function() {
    $(".list").hide();
    $(".square").show();
    $(".square_content_2").hide();


    //返回顶部===>scroll:滚动条事件

    $(window).scroll(function() {
        var top = $("#toptop");
        var t = $(this).scrollTop();
        if (t > 150) {
            $("#toptop").stop().fadeIn();
        } else {
            $("#toptop").stop().fadeOut();
        }

    });

    $("#toptop").click(function() {
        $("body , html").animate({ scrollTop: 0 }, 300);
    }); //IE,火狐不支持body元素滚动，需要添加html；-webkit都是支持body的



    //顶部导航条===>职业学院
    $(".zhiyexueyuan").hover(function() {
        $(this).children(".zhiye-list").show();
        $(".zhiyexueyuan").height(65);

    }, function() {
        $(this).children(".zhiye-list").hide();
    });


    //顶部导航条===>会员课程
    $(".vip-kecheng").hover(function() {
        $(this).children(".vip").show();
        $(".vip-kecheng").height(65);
    }, function() {
        $(this).children(".vip").hide();
    });


    //顶部导航条===>极客社区
    $(".jike-home").hover(function() {
        $(this).children(".home").show();
        $(".jike-home").height(65);
    }, function() {
        $(this).children(".home").hide();
    });

    $(".sousuo").on("click", function() {

        $(".searchbox").addClass("scale");
    });

    $("#close-btn").click(function() {
        $(".searchbox").removeClass("scale");
    })


    $("#web_search").focus(function() {
        $(this).css({ outline: "none" }); //取消input元素获取焦点时的蓝色边框
    });


    // 左侧导航===>课程库
    // 

    $(".course_ul").hover(function() {
        $(".open_course").show();
       
    }, function() {
        $(".open_course").hide();
    });


    // 左侧导航===>移动开发
    $(".course_li_1").hover(function() {
        $(".mobile_Development").show();
         
        $(this).addClass("add_class");

    }, function() {
        $(this).removeClass();
        $(".mobile_Development").hide();
    });


    // 左侧导航===>前端开发
    $(".course_li_2").hover(function() {
        $(this).addClass("add_class");
        $(".FE_Development").show();
    }, function() {
        $(this).removeClass();
        $(".FE_Development").hide();
    });


    // 左侧导航===>后端开发
    $(".course_li_3").hover(function() {
        $(this).addClass("add_class");
        $(".back_Development").show();
    }, function() {
        $(this).removeClass();
        $(".back_Development").hide();
    });


    // 左侧导航===>基础知识
    $(".course_li_4").hover(function() {
        $(this).addClass("add_class");
        $(".basic_Knowledge").show();
    }, function() {
        $(this).removeClass();
        $(".basic_Knowledge").hide();
    });


    // 左侧导航===>云计算&互联网

    $(".course_li_5").hover(function() {
        $(this).addClass("add_class");
        $(".big_Data").show();
    }, function() {
        $(this).removeClass();
        $(".big_Data").hide();
    });


    // 左侧导航===>智能硬件
    $(".course_li_6").hover(function() {
        $(this).addClass("add_class");
        $(".Internet_Of_Things").show();
    }, function() {
        $(this).removeClass();
        $(".Internet_Of_Things").hide();
    });


    // 左侧导航===>数据库
    $(".course_li_7").hover(function() {
        $(this).addClass("add_class");
        $(".dataBase").show();
    }, function() {
        $(this).removeClass();
        $(".dataBase").hide();
    });


    // 左侧导航===>认证考试
    $(this).addClass("add_class");
    $(".course_li_8").hover(function() {
        $(this).addClass("add_class");
        $(".test").show();
    }, function() {
        $(this).removeClass();
        $(".test").hide();
    });


    // 左侧导航===>企业IT
    $(".course_li_9").hover(function() {
        $(this).addClass("add_class");
        $(".IT").show();
    }, function() {
        $(this).removeClass();
        $(".IT").hide();
    });


    // 左侧导航===>设计&产品&测试
    $(".course_li_10").hover(function() {
        $(this).addClass("add_class");
        $(".product").show();
    }, function() {
        $(this).removeClass();
        $(".product").hide();
    });


    $(".course_p2").hover(function() {
        $(this).css({ "color": "green", "background": "#f5f5f5" });
    }, function() {
        $(this).css({ "color": "gray", "background": "white" });
    });




    //article 右侧顶部导航条
    $(".nav_top_li").hover(function() {
        $(this).children(".expand_ul").show();
    }, function() {
        $(this).children(".expand_ul").hide();
    });



    // 课程列表===>横向排列
    $(".main_content li").hover(function() {
        $(this).children(".i_1").attr("src", "./jike-img/courseEnd/1.png");
        $(this).children().children(".square_content_2").slideDown("fast");
        $(this).children().children(".square_time").hide();
    }, function() {
        $(this).children(".i_1").attr("src", "./jike-img/course/1.png");
        $(this).children().children(".square_content_2").slideUp();

    });


    $(".main_content li").hover(function() {
        $(this).children(".i_2").attr("src", "./jike-img/courseEnd/2.png");
    }, function() {
        $(this).children(".i_2").attr("src", "./jike-img/course/2.png");
    });

    $(".main_content li").hover(function() {
        $(this).children(".i_3").attr("src", "./jike-img/courseEnd/3.png");
    }, function() {
        $(this).children(".i_3").attr("src", "./jike-img/course/3.png");
    });

    $(".main_content li").hover(function() {
        $(this).children(".i_4").attr("src", "./jike-img/courseEnd/4.png");
    }, function() {
        $(this).children(".i_4").attr("src", "./jike-img/course/4.png");
    });


    $(".main_content li").hover(function() {
        $(this).children(".i_5").attr("src", "./jike-img/courseEnd/5.png");
    }, function() {
        $(this).children(".i_5").attr("src", "./jike-img/course/5.png");
    });

    $(".main_content li").hover(function() {
        $(this).children(".i_6").attr("src", "./jike-img/courseEnd/6.png");
    }, function() {
        $(this).children(".i_6").attr("src", "./jike-img/course/6.png");
    });

    $(".main_content li").hover(function() {
        $(this).children(".i_7").attr("src", "./jike-img/courseEnd/7.png");
    }, function() {
        $(this).children(".i_7").attr("src", "./jike-img/course/7.png");
    });



    // 切换内容格式
    $(".pic_1").click(function() {

        $(".square").show();
        $(".list").hide();
    });
    $(".pic_2").click(function() {
        $(".list").show();
        $(".square").hide();
    });



    // $(".pic_1").click(function() {

    //   $(".main_content ul").addClass(".square");
    // });
    // $(".pic_2").click(function() {
    // $(".main_content ul").addClass(".list");
    // });
});
