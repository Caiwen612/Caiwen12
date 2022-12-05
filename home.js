$(document).ready(function () {
    $(".vsc").css("display","none");
    $(".chrome").css("display","none");
    $(".cs").css("display","none");
    $(".website").css("display","none");
    $(".css").css("display","none");

    $(".switchTheme").click(function (e) { 
        $("body").css("background","white");
    });

    $(".vscButton").click(function (e) { 
        $(".vsc").toggle();
    });
    $(".chromeButton").click(function (e) { 
        $(".chrome").toggle();
    });
    $(".csButton").click(function (e) { 
        $(".cs").toggle();
    });
    $(".websiteButton").click(function (e) { 
        $(".website").toggle();
    });
    $(".cssButton").click(function (e) { 
        $(".css").toggle();
    });
});