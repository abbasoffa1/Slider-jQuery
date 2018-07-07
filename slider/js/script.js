var ButunLiler = $(".slider ul li").length;
var liWidth = 900;
var opsimWidth = liWidth * ButunLiler;
var liDeger = 0;
$(".slider ul").css({
    width: opsimWidth + "px"
})

$(".sliderButton .sonra").click(function () {
    if (liDeger < ButunLiler - 1) {
        liDeger++
        yeniWidth = liWidth * liDeger;
        $(".slider ul").animate({
            marginLeft: "-" + yeniWidth + "px"
        }, 500)
    } else {
        liDeger = 0;
        $(".slider ul").animate({
            marginLeft: "0"
        }, 500)
    }
    return false;
})
$(".sliderButton .evvel").click(function () {
    if (liDeger > 0) {
        liDeger--
        yeniWidth = liWidth * liDeger;
        $(".slider ul").animate({
            marginLeft: "-" + yeniWidth + "px"
        }, 500)
    } else {
        liDeger =ButunLiler;
    }
    return false;
})