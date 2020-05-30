$('#slider').nivoSlider();
$(".menu-items.parent").bind("mouseenter",function(){
    var li = $(this);
    var sub = li.children(".submenu");
    sub.slideDown();
});
$(".menu-items.parent").bind("mouseleave",function(){
    var li = $(this);
    var sub = li.children(".submenu");
    sub.hide();
});
$(".back-to-top").bind("click",function(){ // dung de bat su kien gom 2 tham so (sukien,va ham cua su kien do)
    $("html").animate({   // animate la ham dich chuyen voi scolltop la hieu ung dich chuyen va 200 la thoi gian delay // dung de cuon ca document cua html len
        scrollTop: 0
    },500);

});