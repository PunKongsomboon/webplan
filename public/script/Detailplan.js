$(document).ready(function(){
    $(".btnHotel").click(function(){
        $("#modalHotel").modal("show");
    });
});



function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
      $card.removeClass('hover');
    } else {
      $card.addClass('hover');
    }
  }