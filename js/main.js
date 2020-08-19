$(function(){
    var abtns = $(".index-r .circle a");
    var swiperList = $(".index-r .swiper-list");
    var lis = swiperList.find("li");
    var  prev = $(".swiper-button-prev");
    var  next = $(".swiper-button-next");


    var inow = 0;  //记录当前显示图片的下标
    abtns.click(function(){
        inow = $(this).index(); 
        tab();
    })

    $(".index-r").mouseenter(function(){
       clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(function(){
           inow++;
           tab();
    },2000)
    })
    var timer = setInterval(function(){
           inow++;
           tab();

    },2000)

    $(prev).click(function(){
        inow--;
        if (inow == -1) {inow=4;}
        tab();
    })
    
    $(next).click(function(){
        inow++;
        if (inow == 5) {inow=0;}
        tab();
    })
    //轮播
    function tab(){
        abtns.eq(inow).css({"background-color":"rgba(255, 255, 255, .3)",
                              "border-color": "rgba(0, 0, 0, .4)"
                         })
               .siblings().css({"background-color":"rgba(0,0,0,0.4)",
                                 "border-color": "rgba(255, 255, 255, .3)"
                               });
   
        $(swiperList).animate({
            left: inow * (-1226)
        },500,function(){
            if(inow == abtns.length){
               inow = 0;
               swiperList.css("left",0);
           }
        })
    }

    // 顶部下载 的鼠标进入显示  鼠标离开隐藏
    var download = $(".top-left .download");
    var downBox = $(".top-left .down-box");
    slide(download,downBox);

    /* 购物车 的鼠标进入显示  鼠标离开隐藏*/
    var shopCar = $(".top-right .shop-car");
    var carDownbox = $(".top-right  .car-downbox");
    slide(shopCar,carDownbox);

     /*导航 鼠标进入显示 鼠标移出隐藏*/
    var  menuItem = $(".header-menu .menu-item");
    var  menuDown = $(".header-menu .menu-down");
    slide(menuItem,menuDown);


    // 鼠标移入显示  移出隐藏函数
    function slide(node1,node2){
        $(node1).mouseenter(function(){
            $(node2).stop().slideDown("2000");
        }).mouseleave(function(){
            $(node2).stop().slideUp("2000");
        })
    }
 

    /*搜索输入框 获取焦点显示  失去焦点 隐藏*/
    $(".header-search input").focus(function(){
        $(".header-search .hot").show();
        $(".header-search").addClass("active");
    }).blur(function(){
        $(".header-search .hot").hide();
        $(".header-search").removeClass("active");
    })




})


