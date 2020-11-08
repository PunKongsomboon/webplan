$(document).ready(function () {
    // $(".sortable").sortable();
    // $(".sortable").disableSelection();

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

    $("#btnSave").click(function(){
        window.history.back();
    });

    $("#btnback").click(function(){
        window.history.back();
    });


});