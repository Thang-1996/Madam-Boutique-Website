$(".show-list").bind("click",function() {
    $(".content-left").css({"display": ""});
    $(".content-left2").css({"display": "none"});
});
$(".show-thumb").bind("click",function() {
    $(".content-left2").css({"display": "block"});
    $(".content-left").css({"display": "none"});
});