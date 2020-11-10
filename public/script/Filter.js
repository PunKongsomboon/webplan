
$(document).ready(function () {
  var weathercheck;
  var cardper = 0;
  var cardgroup = 0;
  var cardfamily = 0;
  var numberPer = 1;
  var checkfam = 0;
  // var screen = $(window).height();
  // console.log(screen);
  // $('.carousel').height(screen);

  // if(screen > 1000){
  //   var areaFilter = $(".filter").height();
  //   console.log(areaFilter);
  //   //$('.filter').css("background-color" , "red");
  // }


  // carousel
  $('.carousel').carousel({
    interval: false,
    wrap: false
  });

  // select date
  $('#sandbox-container').datepicker({
    format: "dd/DD/mm/yyyy",
    startDate: "-Infinity",
    startView: 0,
    viewMode: "years",
    minViewMode: "days",
    minViewMode: "days",
    multidate: true,
    multidateSeparator: " - ",
    autoClose: true,
    defaultViewDate: "today",
  }).on("changeDate", function (event) {
    var dates = event.dates, elem = $('#sandbox-container');
    if (elem.data("selecteddates") == dates.join(",")) return; //To prevernt recursive call, that lead to lead the maximum stack in the browser. 
    if (dates.length > 2) dates = dates.splice(dates.length - 1);
    dates.sort(function (a, b) { return new Date(a).getTime() - new Date(b).getTime() });
    elem.data("selecteddates", dates.join(",")).datepicker('setDates', dates);
  });
  $("#btndate").click(function () {
    var btndate = $("#date").val();
    $("#outputdate").text(btndate);
    $("#txtdate").text(btndate);
  });


  // change picture
  weathercheck = $("#weather").val();
  console.log(weathercheck);
  if (weathercheck == "winter") {
    $("#selecttemp").prop("src", "../public/image/01.jpg");
  }
  else if (weathercheck == "summer") {
    $("#selecttemp").prop("src", "../public/image/02.jpg");
  }
  else if (weathercheck == "Rainly") {
    $("#selecttemp").prop("src", "../public/image/03.jpg");
  }
  $("#weather").change(function () {
    weathercheck = $(this).val();
    if (weathercheck == "winter") {
      $("#picturetemp").prop("src", "../public/image/01.jpg");
      $("#selecttemp").prop("src", "../public/image/01.jpg");
    }
    else if (weathercheck == "summer") {
      $("#picturetemp").prop("src", "../public/image/02.jpg");
      $("#selecttemp").prop("src", "../public/image/02.jpg");
    }
    else if (weathercheck == "Rainly") {
      $("#picturetemp").prop("src", "../public/image/03.jpg");
      $("#selecttemp").prop("src",  "../public/image/03.jpg");
    }
  });

  //card
  // group
  $("#frontGroupCard").click(function () {
    numberPer = 1;
    $("#txtconcludeType").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน " + numberPer + " คน");
    $("#txttypeTravel").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน " + numberPer +" คน");
    var $rotbackPerson = $("#btnbackPersonCard").closest('.card-container');
    console.log($rotbackPerson);
    if ($rotbackPerson.hasClass('hover')) {
      $rotbackPerson.removeClass('hover');
    }
    if (cardper == 0) {
      $("body").toggleClass("PersonCard_");
      cardper = 1;
    }
    if (cardfamily == 0) {
      $("body").toggleClass("famCard");
      cardfamily = 1;
    }

  });
  $("#backGroupCard").click(function () {
    numberPer = 1;
    $("#txtconcludeType").text("การเดินทาง : ยังไม่ได้เลือก");
    $("#txttypeTravel").text("การเดินทาง : ยังไม่ได้เลือก");
    if (cardper == 1) {
      $("body").toggleClass("PersonCard_");
      cardper = 0;
    }
    if (cardgroup == 0) {
      $("body").toggleClass("GroupCard_");
      cardgroup = 1;
    }
    if (cardgroup == 1) {
      $("body").toggleClass("GroupCard_");
      cardgroup = 0;
    }
    if (cardfamily == 1) {
      $("body").toggleClass("famCard");
      cardfamily = 0;
    }

  });

  $("#btnPlus").click(function () {
    numberPer++;
    $("#txtconcludeType").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน" + numberPer + " คน");
    $("#countNumofgroup").text(numberPer);
    $("#txttypeTravel").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน " + numberPer +" คน");
  });

  $("#btnMinus").click(function () {
    if (numberPer < 1) {
      numberPer = 1;
    } else if (numberPer > 1) {
      numberPer--;
    }
    $("#txtconcludeType").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน " + numberPer +" คน");
    $("#countNumofgroup").text(numberPer);
    $("#txttypeTravel").text("การเดินทาง : เดินทางไปกับกลุ่มเพื่อนอีกจำนวน " + numberPer +" คน");
  });

  // person
  $("#btnfrontPersonCard").click(function () {
    numberPer = 1;
    $("#txtconcludeType").text("การเดินทาง : ยังไม่ได้เลือก");
    var $rotbackGroup = $("#backGroupCard").closest('.card-container');
    console.log($rotbackGroup);
    if ($rotbackGroup.hasClass('hover')) {
      $rotbackGroup.removeClass('hover');
    }
    if (cardgroup == 0) {
      $("body").toggleClass("GroupCard_");
      cardgroup = 1;
    }
    if (cardfamily == 0) {
      $("body").toggleClass("famCard");
      cardfamily = 1;
    }

  });
  $("#btnbackPersonCard").click(function () {
    numberPer = 1;
    $("#txtconcludeType").text("การเดินทาง : ยังไม่ได้เลือก");
    if (cardgroup == 1) {
      $("body").toggleClass("GroupCard_");
      cardgroup = 0;
    }
    if (cardper == 0) {
      $("body").toggleClass("PersonCard_");
      cardper = 1;
    }
    if (cardper == 1) {
      $("body").toggleClass("PersonCard_");
      cardper = 0;
    }
    if (cardfamily == 1) {
      $("body").toggleClass("famCard");
      cardfamily = 0;
    }
  });

  $("#btnPerson18-25").click(function () {
    $("#txtconcludeType").text("การเดินทาง : ช่วงอายุ 18-25 เดินทางปลอดภัยนะ");
    $("#txttypeTravel").text("การเดินทาง : เดินทางคนเดียว");
  });

  $("#btnPerson26-30").click(function () {
    $("#txtconcludeType").text("การเดินทาง : ช่วงอายุ 26-30 เดินทางปลอดภัยนะ");
    $("#txttypeTravel").text("การเดินทาง : เดินทางคนเดียว");
  });

  $("#btnPerson31-60").click(function () {
    $("#txtconcludeType").text("การเดินทาง : ช่วงอายุ 31-60 เดินทางปลอดภัยนะ");
    $("#txttypeTravel").text("การเดินทาง : เดินทางคนเดียว");
  });



  // family
  $("#frontFamilyCard").click(function () {
    $("body").toggleClass("GroupCard_");
    $("body").toggleClass("PersonCard_");
    numberPer = 1;
    var $rotbackGroup = $("#backGroupCard").closest('.card-container');
    // console.log($rotbackGroup);
    if ($rotbackGroup.hasClass('hover')) {
      $rotbackGroup.removeClass('hover');
    }
    var $rotbackPerson = $("#btnbackPersonCard").closest('.card-container');
    // console.log($rotbackPerson);
    if ($rotbackPerson.hasClass('hover')) {
      $rotbackPerson.removeClass('hover');
    }

    if(checkfam == 0){
      $("#txtconcludeType").text("การเดินทาง : เดินทางไปกับครอบครัว ขอให้สนุกนะ");
      $("#txttypeTravel").text("การเดินทาง : เดินทางไปกับครอบครัว");
      checkfam =1;
    }else if(checkfam == 1){
      $("#txtconcludeType").text("การเดินทาง : ยังไม่ได้เลือก");
      $("#txttypeTravel").text("การเดินทาง : ยังไม่ได้เลือก");
      checkfam =0;
    }
    
    // if (cardgroup == 0) {
    //   $("body").toggleClass("GroupCard_");
    //   cardgroup = 1;
    // }

    // if (cardper == 0) {
    //   $("body").toggleClass("PersonCard_");
    //   cardper = 1;
    // }


  });

  //input money
  $("#inmoney").keyup(function(){
    $("#txtmoney").text("ใช้เงิน " + $("#inmoney").val() + " Baht");
  });

  // btn create plan
  $("#btnCreateplan").click(function(){
    window.location.replace("viewplan.html");
  });

})

function rotateCard(btn) {
  var $card = $(btn).closest('.card-container');
  console.log($card);
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}


