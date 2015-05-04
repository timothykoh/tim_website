var scrollPosMap = {};


$(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    var key = window.location.hash;
    scrollPosMap[key] = scrollTop;
    handleScrollEffects(scrollTop);
});

function handleScrollEffects(scrollTop){
    // darken filter
    var opacity = Math.min(scrollTop/500, 0.6);
    $(".dark-filter").css("opacity", opacity);

    // shift cover up to achieve parallax scroll effect
    $(".page.selected .page-cover").css("transform", "translate3d(0px,-" + scrollTop/8 + "px,0px)");
}

function handlePageHash(){
    $(".page").removeClass("selected");
    $(".page-selector-box a").removeClass("selected");
    var scrollPos = 0;
    if (window.location.hash === "#home") {
        $(".home-page").addClass("selected");
        $(".home-selector").addClass("selected");
        if (scrollPosMap["#home"] !== undefined){
            scrollPos = scrollPosMap["#home"];
        }
    } else if (window.location.hash === "#projects"){
        $(".projects-page").addClass("selected");
        $(".projects-selector").addClass("selected");
        if (scrollPosMap["#projects"] !== undefined){
            scrollPos = scrollPosMap["#projects"];
        }
    } else{
        window.location.hash = "#home";
        return;
    }
    $(window).scrollTop(scrollPos);
}

$(window).load(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Note that this version of the website isn't optimized for mobile. " + 
              "Feel free to navigate, but you should access it on a desktop for the optimal experience.");
    }
    handlePageHash();
});

window.onhashchange = function(){
    handlePageHash();
    handleScrollEffects(); 
}
