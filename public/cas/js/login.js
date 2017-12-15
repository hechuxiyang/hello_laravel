var lognames = [
    {"href": 'javascript:;', "src": "./cas/img/banner1.jpg"},
    {"href": 'javascript:;', "src": "./cas/img/banner2.jpg"},
    {"href": 'javascript:;', "src": "./cas/img/banner3.jpg"}
]
function logbanner() {
    var Html = "";
    $.each(lognames, function (a, k) {
        Html += "<li><a target='_blank' href=" + k.href + "><img alt='' src=" + k.src + " />"
    })
    $(".login .content .log-banner .banner-pic ul").html(Html);
}
~function () {
    logbanner();
}();

/*修改表单边框问题2016、09、19*/

$("#username").on("blur", function () {
    $(this).css("border-bottom-color", "transparent");
})
$("#username").on("focus", function () {
    $(this).css("border-bottom-color", "#fe762d");
})
//轮播效果
~function () {
    var bannerlength = lognames.length;
    for (var i = 0; i < bannerlength; i++) {
        $oli = $("<li></li>");
        $(".log-banner .banner-tab ul").append($oli);
    }
    var $tabLi = $(".banner-tab ul li");
    var $picLi = $(".log-banner .banner-pic ul li");
    var index = 0;
    var $banner = $(".log-banner");
    $tabLi.eq(0).addClass("on");
    $picLi.eq(0).show().siblings().hide();
    auto();
    $banner.hover(function () {
        clearInterval(timer);
    }, function () {
        auto();
    });
    function auto() {
        timer = setInterval(function () {
            index++;
            index %= $tabLi.length;
            fn();
        }, 2000);
    }

    $tabLi.on("click", function () {
        index = $(this).index();
        fn();
    })
    function fn() {
        $tabLi.eq(index).addClass('on').siblings().removeClass('on');
        $picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
    }
}();
// //条款
// ~function(){
//     var $clause = $(".clause");
//     var $subcluase =$(".reg-cluase");
//     var $shade =$(".seg-shade");
//     var $regca = $(".reg-clu-agree");//我已同意条款登录
//     var $disagree = $(".reg-clu-disagree")//不同意
//     $clause.on("click",function(){
//       $subcluase.fadeIn();
//       $shade.show();
//     })
//     $clause.click(function(event){
//            event.stopPropagation();
//       });
//       function shadehide(){
//         $subcluase.fadeOut();
//         $shade.hide();
//       }
//       $shade.on("click",function(){
//             shadehide();
//       })
//       $(".log-agr").attr("checked","true");
//       $(".seg-chek").attr("checked","true");
//       $regca.on("click",function(){
// 		shadehide();
// 		$(".log-agr").prop("checked",true);;
// 		$(".seg-chek").prop("checked",true);;
//       })
//       $disagree.on("click",function(){
// 		shadehide();
// 		$(".log-agr").attr("checked",false);
// 		$(".seg-chek").attr("checked",false);
//       })
// }()
//登录输入框
/*$('.log-btn').on('keyup',function(){
 if(!($("#userlogin").val()&&$("#userpassword").val())){
 $(".log-right .log-btn").attr("disabled",'true').removeClass("log-btn-on");
 }else{
 $(".log-right .log-btn").removeAttr("disabled").addClass("log-btn-on");
 }
 if(!($("#segemail").val()&&$("#segpass").val()&&$("#segconpass").val()&&$("#segprov").val()&&$("#segpass").val()==$("#segconpass").val())){
 $(".seg-right .seg-btn").attr("disabled",'true').removeClass("seg-btn-on");
 }else{
 $(".seg-right .seg-btn").removeAttr("disabled").addClass("seg-btn-on");
 }
 })*/
//登陆
$('input').on('keyup', function () {
    if (!($("#username").val() && $("#password").val())) {
        $(".log-right .log-btn").attr("disabled", 'true').removeClass("log-btn-on");
    } else {
        $(".log-right .log-btn").removeAttr("disabled").addClass("log-btn-on");
    }
    if (!($("#segemail").val() && $("#segpass").val() && $("#segconpass").val() && $("#segprov").val() && $("#segpass").val() == $("#segconpass").val())) {
        $(".seg-right .seg-btn").attr("disabled", 'true').removeClass("seg-btn-on");
    } else {
        $(".seg-right .seg-btn").removeAttr("disabled").addClass("seg-btn-on");
    }
})
function logmarginbottom() {
    $(".log-right .logi").css("margin-bottom", '20px')
}
function prompthide() {
    $(".log-hint").hide();
    $(".log-right .logi").css("margin-bottom", '39px');
}
$(".log-agr").on("blur", function () {
    prompthide();
})
$(".log-btn").on("blur", function () {
    if (Boolean($("#userlogin").val()) || $("#userpassword").val()) {
        prompthide();
    }
})
// $(".log-btn").on('click',function(){
//
//     if($('.log-agr').is(':checked')) {
//         if(denglu()){
//           window.location.href="../index.php";
//         }else{
//          // $(".log-hint").show().text("用户名或密码错误!");
//           logmarginbottom();
//         }
//     }else {
//       // $(".log-hint").show().text("请勾选我已阅读并同意《允睿讯通使用条款》");
//       logmarginbottom();
//     }
// });
//注册页条款未勾选提示
// $(".seg-chek").on("blur",function(){
//     warnhide();
// })
function denglu(usernames, userpass) {
    /*$.ajax(
     {
     url :'...',
     type :'get',
     dataType:'json',
     data:{
     usernames:usernames,
     userpass :userpass
     },
     success:function(result){

     },
     error:function(error){

     }
     })*/
    var usernames = $("#userlogin").val();
    var userpass = $("#userpassword").val();
    if (usernames == 'admin' && userpass == '123456') {
        return true;
    } else {
        return false;
    }
}
//注册密码不一致时提示
function warnhide() {
    $(".seg-hint").hide();
    $(".segi").css("margin-bottom", '57px')
}
~function () {
    $("#segpass").on("keyup blur", function () {
        segpass = $("#segpass").val();
        var pwd_reg = /^[0-9a-zA-Z]{6,16}$/;
        if (!pwd_reg.test(segpass)) {
            console.log("错误")
            $(".seg-hint").show().text("密码必须为6-16的数字和字母组成").addClass("no").removeClass("yes");
        } else {
            warnhide();
        }
    })
    $("#segconpass").on("keyup blur", function () {
        $("#segconpass").css({"border-color": "#ccc", "background-color": "#fff"});
        var segconpass = $("#segconpass").val();
        if (segpass == segconpass || segpass == "" || segconpass == "") {
            $(".seg-hint").hide();
            $(".segi").css("margin-bottom", "57px");
        } else {
            $(".seg-hint").show().text("密码与上面不一致").addClass("no").removeClass("yes");
            $("#segconpass").css({"border": "1px solid #FE762D", "background-color": "#Fff"});
            $(".segi").css("margin-bottom", "20px");
            $("#segpass").on("focus", function () {
                $("#segpass").on("keyup", function () {
                    var kypsegpass = $("#segpass").val();
                    // console.log(kypsegpass)
                    if (kypsegpass == "") {
                        $("#segconpass").css("border-color", "#ccc");
                        $("#segconpass").val("");
                        warnhide();
                    }
                })
            })
        }
//验证密码是否由6-16位数字组成
        $("#segconpass").on("focus", function () {
            $(this).css(
                {
                    "background": "rgba(254,117,45,0.10)",
                    "border": "1px solid #FE762D"
                }
            )
        })
    })
}()

//验证码
$(".seg-verify").on("click", function () {
    ~function () {
        var a = 90;
        var timer = setInterval(function () {
            a--;
            $(".seg-verify").text("重新获取" + a + "s").css("color", 'rgba(0,0,0,0.3)').attr("disabled", "true");
            if (a == 0) {
                clearInterval(timer);
                $(".seg-verify").text("获取验证码").css("color", "#FE762D").removeAttr("disabled");
            }
        }, 1000)
    }();
    //判断后台是否发送出去验证码
    function seghide() {
        $(".seg-popup").fadeOut();
        $(".seg-shade").hide();
    }

    $(".seg-popup").fadeIn();
    $(".seg-shade").show();
    $(".seg-hide").on("click", function () {
        seghide();
    });
    $(".seg-popup").click(function (event) {
        event.stopPropagation();
    });
    $(".seg-shade").on("click", function () {
        seghide();
    });
    //后台判断验证码是否输入正确
    if (true) {
        $(".seg-hint").show().text("验证码正确").addClass("yes").removeClass("no");
        $(".segi").css({
            "margin-bottom": "20px"
        });
    } else {
        $(".seg-hint").show().text("验证码错误").addClass("no").removeClass("yes");
        $(".segi").css("margin-bottom", "20px");
    }
    /*$.ajax(
     {
     url :'...',
     type :'get',
     dataType:'json',
     data:{
     usernames:usernames,
     userpass :userpass
     },
     success:function(result){

     },
     error:function(error){

     }
     })*/
});
//注册成功
$(".seg-btn").on("click", function () {
    //判断是否注册成功
    if ($('.seg-chek').is(':checked')) {
        $(".reg-popup").fadeIn();
        $(".seg-shade").show();
        var regemail = $("#segemail").val();
        var regpass = $("#segpass").val();
        $(".reg-usernames").text(regemail);
        function regpopup() {
            $(".reg-popup").fadeOut();
            $(".seg-shade").hide();
        }

        $(".reg-hide").on("click", function () {
            regpopup();
        });
        $(".reg-popup").click(function (event) {
            event.stopPropagation();
        });
        $(".seg-shade").on("click", function () {
            regpopup();
        });
    } else {
        // $(".seg-hint").show().text("请勾选我已阅读并同意《允睿讯通使用条款》").addClass("no").removeClass("yes");
        $(".segi").css("margin-bottom", "20");
    }

})
function zuce(regemail, regpass) {
    /*$.ajax(
     {
     url :'...',
     type :'get',
     dataType:'json',
     data:{
     usernames:usernames,
     userpass :userpass
     },
     success:function(result){

     },
     error:function(error){

     }
     })*/
}

// 判断浏览器
$(function () {
    (function () {
        var explorer = navigator.userAgent;
        var version;
        if (explorer.indexOf("MSIE") >= 0) {
            version = 'ie';
        }

        if (version == 'ie') {
            // 登录输入
            //用户名
            $('#userlogin').val('邮箱');

            //密码
            $('#userpassword').val('密码').attr('type', 'text');
            $('#userlogin').focus(function () {
                $(this).attr('type', 'password');
                $(this).val('');
            });


            // 注册输入

            $('#segpass').attr('type', 'text');
            $('#segconpass').attr('type', 'text');

            $('#segemail').val('请输入邮箱');
            $('#segpass').val('6-16位数字和字母组成');
            $('#segconpass').val('确认密码');
            $('#segprov').val('输入验证码');
            $('#segemail').focus(function () {

                $(this).val('');
            });
            $('#segpass').focus(function () {
                $(this).attr('type', 'password');
                $(this).val('');
            });
            $('#segconpass').focus(function () {
                $(this).attr('type', 'password');
                $(this).val('');
            });
            $('#segprov').focus(function () {
                $(this).attr('type', 'password');
                $(this).val('');
            });
        }
        /* //firefox
         else if (explorer.indexOf("Firefox") >= 0) {
         alert("Firefox");
         }
         //Chrome
         else if(explorer.indexOf("Chrome") >= 0){
         alert("Chrome");
         }
         //Opera
         else if(explorer.indexOf("Opera") >= 0){
         alert("Opera");
         }
         //Safari
         else if(explorer.indexOf("Safari") >= 0){
         alert("Safari");
         }
         //Netscape
         else if(explorer.indexOf("Netscape")>= 0) {
         alert('Netscape');
         } */
    })()
})

