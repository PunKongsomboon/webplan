$(document).ready(function () {
    // $(".sortable").sortable();
    // $(".sortable").disableSelection();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background", "#578097");
            $(".navbar").style
        }
        else if (scroll < 100) {
            $(".navbar").css("background", "none");

        }
    })

    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();

    $("#test").click(function () {
        var itemOrder = $('#sortable1').sortable("toArray");
        for (var i = 0; i < itemOrder.length; i++) {
            console.log("Position: " + i + " ID: " + itemOrder[i]);
        }
    });

    $("#sortable1").sortable({
        update: function () {
            var order = $(this).sortable('toArray').toString();


        }
    });

    $("#btnSave").click(function () {
        window.history.back();
    });

    $("#btnback").click(function () {
        window.history.back();
    });


});