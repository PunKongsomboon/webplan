
/*//navbar
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background", "#4285F4");
            $(".navbar").style
        }
        else if (scroll < 100) {
            $(".navbar").css("background", "none");

        }
    })
})*/


/*//card
$().ready(function () {
    $('[rel="tooltip"]').tooltip();
});

/*function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        $card.removeClass('hover');
    } else {
        $card.addClass('hover');
    }
}*/


/*let showprofile = document.querySelector('#openProfile');
let loginWrapper = document.querySelector('.login-wrapper');

showprofile.addEventListener('click', function(){
    pro +=1;
    alert(pro);
    loginWrapper.classList.toggle('open');
});
$("#openProfile").click(function(){
    alert("test");
    $('body').toggleClass("openProfile");
    $('#exampleModalCenter').modal('show')
});*/


// hide card area and modal sign in
$().ready(function () {
    var check = 0;
    $("body").toggleClass("visibilitybtn");
    $('.btn').removeClass("active");
    $("#btnslide").click(function () {
        $("body").toggleClass("open");
    });
    $('#openProfile').click(function(){
        $("body").toggleClass("signupsuccess");
        $("body").toggleClass("openlogout");
        $("body").toggleClass("closelogin");
        check = 1;
    });
    $("#logout").click(function(){
        $("body").toggleClass("signupsuccess");
        $("body").toggleClass("openlogout");
        $("body").toggleClass("closelogin");
        check = 0;
    });
    $("#pin").click(function(){
        if(check == 1){
            $("#pin").attr("data-toggle" , "");
            $("#pin").attr("data-target" , "");
            $("#pin").attr("href" , "Filter.html");
        }else {
            $("#pin").attr("href" , "#");
            $("#pin").attr("data-toggle" , "modal");
            $("#pin").attr("data-target" , "#exampleModalCenter");
        }
    });
});



// animation in modal
$(function() {
	$(".btn").click(function() {
	$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});








