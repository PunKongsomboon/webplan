$(document).ready(function () {
  $(".btnHotel").click(function () {
    $("#modalHotel").modal("show");
  });

  $("#imgHotel1").click(function(){
    $("#txtShowHotel").text("โรงแรม วนาศรม");
    $("#PicHotel").prop("src" , "https://www.mfu.ac.th/fileadmin/media/life-on-campus/mfu-wanasom-01.jpg");
  });
  $("#imgHotel2").click(function(){
    $("#txtShowHotel").text("โรงแรม วนาเวศน์");
    $("#PicHotel").prop("src" , "https://www.mfu.ac.th/fileadmin/_processed_/6/6/csm_Wanaves_1_1a7eec52f5.jpg");
  });
  $("#imgHotel3").click(function(){
    $("#txtShowHotel").text("โรงแรม ดี-พลัส เพลส");
    $("#PicHotel").prop("src" , "https://f.hongpak.in.th/media/rooms/photos/18/1201/113313_1335.jpg");
  });
  $("#imgHotel4").click(function(){
    $("#txtShowHotel").text("โรงแรม เลอ พัทธา");
    $("#PicHotel").prop("src" , "https://cf.bstatic.com/images/hotel/max1024x768/484/48419878.jpg");
  });

  $("#btnCreateplan").click(function(){
    window.location.replace("index.html");
  });

  $("#btnBacktoViewplan").click(function(){
    window.history.back();
  });

  
});
