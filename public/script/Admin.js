$(document).ready(function () {
    const normalTypeplace = [
        {
            "idplace": "011",
            "nameplace": "สิงห์ปาร์ค",
            "infoplace": "เป็นไร่ของบริษัทบุญรอดบริวเวอรี่ จำกัด ผู้ผลิตเบียร์สิงห์, ลีโอ ไร่บุญรอด ที่นี่เป็นสถานที่ท่องเที่ยวเชิงเกษตร บนพื้นที่นับพันไร่ ในบรรยากาศโอบล้อมด้วยภูเขา และ ธรรมชาติ ที่เพิ่งจะเปิดให้เข้าชมเมื่อไม่กี่ปีที่ผ่านมา",
            "timeplace": "8AM–6PM",
            "priceplace": "100"
        }
    ];

    const template = [
        {
            "idplace": "021",
            "nameplace": "วัดร่องขุ่น",
            "infoplace": "ออกแบบและก่อสร้างโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ ซึ่งปรารถนาจะสร้างวัดให้เหมือนเมืองสวรรค์ที่มนุษย์สัมผัสได้ เริ่มสร้างตั้งแต่ พ.ศ.2540 จากเดิมมีเนื้อที่3 ไร่",
            "timeplace": "8AM–5PM",
            "priceplace": "0"
        },
        {
            "idplace": "022",
            "nameplace": "วัดร่องเสือเต้น",
            "infoplace": "วัดร่องเสือเต้น ตั้งอยู่หมู่บ้านร่องเสือเต้น ต.ริมกก อ.เมือง จ.เชียงราย โดยตั้งอยู่ริมแม่น้ำกก ฝั่งด้านซ้ายทางทิศตะวันออกของเทศบาลนครเมืองเชียงราย ไม่ไกลจากตัวเมืองเชียงรายมากนัก ในอดีตสถานที่แห่งนี้เคยเป็นที่ตั้งของวัดร้าง เมื่อ 80-100 ปีก่อน",
            "timeplace": "7AM–8PM",
            "priceplace": "0"
        },
        {
            "idplace": "023",
            "nameplace": "วัดห้วยปลากั้ง",
            "infoplace": "เริ่มก่อตั้งขึ้นในปี พ.ศ.2544 โดยคณะศรัทธาวัดห้วยปลากั้งเริ่มกันก่อตั้งเป็นสำนักสงฆ์ จนกระทั่งวันที่ 19 พฤศจิกายน 2548 ได้มีพระอาจารย์พบโชค ติสฺสวํโสได้เดินทางมาปฏิบัติธรรมและเริ่มมีการก่อตั้งศาสนวัตถุ เริ่มตั้งแต่กุฏิสงฆ์ ศาลาการเปรียญ หอฉัน เจดีย์และเมื่อวันที่ 24 กรกฎาคม 2552 ทางสำนักงานพุทธศาสนาแห่งชาติ ได้มีประกาศแต่งตั้งให้เป็นวัดโดยชื่อว่า วัดห้วยปลากั้ง โดยมีพระอธิการพบโชค ติสฺสวํโส เป็นเจ้าอาวาสรูปแรก ปัจจุบันวัดห้วยปลากั้งเป็นวัดที่มีศรัทธาจากต่างจังหวัด ต่างประเทศ เข้ามากราบไหว้นมัสการ และปฏิบัติธรรมเป็นจำนวนมาก ถือเป็นจุดกำเนิดพุทธศาสนาในเชียงรายแห่งหนึ่งที่สำคัญ ภายในวัดยังมีพระมหาพบโชคธรรมเจดีย์ 9 ชั้น ภายในมีพระโพธิสัตว์เจ้าแม่กวนอิมจำลองแกะสลักจากไม้หอม และแต่ละชั้นจะมีพระพุทธรูปประจำชั้นประดิษฐานอยู่",
            "timeplace": "7AM–9:30PM",
            "priceplace": "0"
        }
    ];

    const Entertainment = [
        {
            "idplace": "031",
            "nameplace": "วังหลัง",
            "infoplace": "ร้านเหล้า",
            "timeplace": "6PM-12PM",
            "priceplace": "0"
        },
        {
            "idplace": "032",
            "nameplace": "เยิ้ม",
            "infoplace": "ร้านเหล้า",
            "timeplace": "6PM-12PM",
            "priceplace": "0"
        },
        {
            "idplace": "033",
            "nameplace": "พาคลับ",
            "infoplace": "ร้านเหล้า",
            "timeplace": "9PM–2AM",
            "priceplace": "0"
        },
    ]

    const natural = [
        {
            "idplace": "041",
            "nameplace": "ถ้ำหลวง-ขุนน้ำนางนอน",
            "infoplace": "วนอุทยาน ถ้ำหลวง-ขุนน้ำนางนอน ตั้งอยู่ที่ตำบลโป่งผา อำเภอแม่สาย จังหวัดเชียงราย อยู่ในเขตป่าสงวนแห่งชาติป่าดอยนางนอน มีเนื้อที่ประมาณ 5,000 ไร่ มีพื้นที่สำหรับบริการนักท่องท่องอยู่ 2 แห่ง",
            "timeplace": "24hours",
            "priceplace": "0"
        },
        {
            "idplace": "042",
            "nameplace": "ไร่ชาฉุยฟง",
            "infoplace": "ไร่ชาฉุยฟง แหล่งเพาะปลูกใบชาชื่อดัง ที่เปิดให้นักท่องเที่ยวได้เข้ามาสัมผัสกับบรรยากาศของไร่ชาได้อย่างใกล้ชิด อีกทั้งยังมีร้านคาเฟ่บริเวณด้านบนให้นักท่องเที่ยวได้มานั่งจิบชา",
            "timeplace": "8:30AM–5:30PM",
            "priceplace": "0"
        }
    ]


    // car
    const bus = [
        {
            "idBus": "011",
            "nameBus": "รถสองแถว",
            "priceBus": "20",
            "pointStart": "มฟล",
            "pointEnd": "แม่สาย",

        },
        {
            "idBus": "012",
            "nameBus": "รถสองแถว",
            "priceBus": "20",
            "pointStart": "มฟล",
            "pointEnd": "แม่สาย",

        }
    ]

    const taxi = [
        {
            "idBus": "021",
            "nameBus": "รถแท็กซี่",
            "priceBus": "500",
            "pointStart": "มฟล",
            "pointEnd": "แม่สาย",
        }
    ]

    var car = $.merge($.merge([], bus), taxi);
    var place = $.merge($.merge($.merge($.merge([], normalTypeplace), template), Entertainment), natural);
    console.log(car);
    console.log(place);


    // table.clear();
    // table = $("#myTable").dataTable().fnDestroy();
    // $('#myTable').empty();
    var table = $('#myTable').DataTable({
        data: car,
        columns: [
            { data: "idBus", title: "รหัส" },
            { data: "nameBus", title: "ชื่อรถ" },
            { data: "priceBus", title: "ราคา" },
            { data: "pointStart", title: "จุดเริ่มต้น" },
            { data: "pointEnd", title: "จุดปลายทาง" },
            { title: "Action", orderable: false, defaultContent: "<a class='btn'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }

        ]
    })

    $("#menushowplace").css("display", "none");
    // $("#menuTable").html("<a class='nav-link px-3' style='cursor: pointer;' id='menuallcar'>ทั้งหมด</a><a class='nav-link px-3' id='menubus' style='border-left: 1px solid #666666; cursor: pointer;'>รถประจำทาง</a><a class='nav-link px-3' id='menutaxi' style='border-left: 1px solid #666666; cursor: pointer;'>รถรับจ้าง</a>");

    $("#menuallcar").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: car,
            columns: [
                { data: "idBus", title: "รหัส" },
                { data: "nameBus", title: "ชื่อรถ" },
                { data: "priceBus", title: "ราคา" },
                { data: "pointStart", title: "จุดเริ่มต้น" },
                { data: "pointEnd", title: "จุดปลายทาง" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        })
    });
    $("#menubus").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: bus,
            columns: [
                { data: "idBus", title: "รหัส" },
                { data: "nameBus", title: "ชื่อรถ" },
                { data: "priceBus", title: "ราคา" },
                { data: "pointStart", title: "จุดเริ่มต้น" },
                { data: "pointEnd", title: "จุดปลายทาง" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        })
    });

    $("#menutaxi").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: taxi,
            columns: [
                { data: "idBus", title: "รหัส" },
                { data: "nameBus", title: "ชื่อรถ" },
                { data: "priceBus", title: "ราคา" },
                { data: "pointStart", title: "จุดเริ่มต้น" },
                { data: "pointEnd", title: "จุดปลายทาง" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        })
    });

    $("#menuallplace").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: place,
            columns: [
                { data: "idplace", title: "รหัส" },
                { data: "nameplace", title: "ชื่อสถานที่" },
                { data: "infoplace", title: "ข้อมูลสถานที่" },
                { data: "timeplace", title: "เวลาทำการ" },
                { data: "priceplace", title: "ราคาเข้าชม" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        });
    });

    $("#menunormal").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: normalTypeplace,
            columns: [
                { data: "idplace", title: "รหัส" },
                { data: "nameplace", title: "ชื่อสถานที่" },
                { data: "infoplace", title: "ข้อมูลสถานที่" },
                { data: "timeplace", title: "เวลาทำการ" },
                { data: "priceplace", title: "ราคาเข้าชม" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        });
    });
    
    $("#menutem").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: template,
            columns: [
                { data: "idplace", title: "รหัส" },
                { data: "nameplace", title: "ชื่อสถานที่" },
                { data: "infoplace", title: "ข้อมูลสถานที่" },
                { data: "timeplace", title: "เวลาทำการ" },
                { data: "priceplace", title: "ราคาเข้าชม" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        });
    });

    $("#menuen").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: Entertainment,
            columns: [
                { data: "idplace", title: "รหัส" },
                { data: "nameplace", title: "ชื่อสถานที่" },
                { data: "infoplace", title: "ข้อมูลสถานที่" },
                { data: "timeplace", title: "เวลาทำการ" },
                { data: "priceplace", title: "ราคาเข้าชม" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        });
    });

    $("#menunat").click(function () {
        table.clear();
        table = $("#myTable").dataTable().fnDestroy();
        $('#myTable').empty();
        table = $('#myTable').DataTable({
            data: natural,
            columns: [
                { data: "idplace", title: "รหัส" },
                { data: "nameplace", title: "ชื่อสถานที่" },
                { data: "infoplace", title: "ข้อมูลสถานที่" },
                { data: "timeplace", title: "เวลาทำการ" },
                { data: "priceplace", title: "ราคาเข้าชม" },
                { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
            ]
        });
    });


    $("#btnAdd").click(function () {
        let dropdown = $("#dropdownMenu").val();
        if(dropdown == 1){
            $("#modelcar").modal("show");
        }

        // let test1 = "test";
        // let test2 = "test";
        // let test3 = "test";
        // let test4 = "test";
        // example.unshift({ "engine": test1, "browser": test2, "platform": test3, "version": test4 });
        // table.clear();
        // // table.destroy();
        // // table.empty();
        // table = $("#myTable").dataTable().fnDestroy();
        // $('#myTable').empty();
        // table = $('#myTable').DataTable({
        //     data: "",
        //     columns: [
        //         { title: "ชื่อรถ" },
        //         { title: "ราคา" },
        //         { title: "จุดเริ่มต้น" },
        //         { title: "จุดปลายทาง" },

        //     ]
        // })
        // table.row.add({"engine": test1 , "browser": test2 , "platform" : test3 , "version": test4}).draw();
    });

    $("#dropdownMenu").change(function () {
        let dropdown = $(this).val();
        if (dropdown == 1) {
            $("#menushowplace").css("display", "none");
            $("#menushowcar").css("display", "");
            // $("#menuTable").html("<a class='nav-link px-3' style='cursor: pointer;' id='menuallcar'>ทั้งหมด</a><a class='nav-link px-3' id='menubus' style='border-left: 1px solid #666666; cursor: pointer;'>รถประจำทาง</a><a class='nav-link px-3' id='menutaxi' style='border-left: 1px solid #666666; cursor: pointer;'>รถรับจ้าง</a>");
            table.clear();
            table = $("#myTable").dataTable().fnDestroy();
            $('#myTable').empty();
            table = $('#myTable').DataTable({
                data: car,
                columns: [
                    { data: "idBus", title: "รหัส" },
                    { data: "nameBus", title: "ชื่อรถ" },
                    { data: "priceBus", title: "ราคา" },
                    { data: "pointStart", title: "จุดเริ่มต้น" },
                    { data: "pointEnd", title: "จุดปลายทาง" },
                    { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
                ]
            })

        } else if (dropdown == 2) {
            $("#menushowplace").css("display", "");
            $("#menushowcar").css("display", "none");
            // $("#menuTable").html("<a class='nav-link px-3' style='cursor: pointer;'>ทั้งหมด</a><a class='nav-link px-3' style='border-left: 1px solid #666666; cursor: pointer;'>ทั่วไป</a><a class='nav-link px-3' style='border-left: 1px solid #666666; cursor: pointer;'>วัด</a><a class='nav-link px-3' style='border-left: 1px solid #666666; cursor: pointer;'>สถานที่บันเทิง</a><a class='nav-link px-3' style='border-left: 1px solid #666666; cursor: pointer;'>ที่ท่องเที่ยวธรรมชาติ</a>");
            table.clear();
            table = $("#myTable").dataTable().fnDestroy();
            $('#myTable').empty();
            table = $('#myTable').DataTable({
                data: place,
                columns: [
                    { data: "idplace", title: "รหัส" },
                    { data: "nameplace", title: "ชื่อสถานที่" },
                    { data: "infoplace", title: "ข้อมูลสถานที่" },
                    { data: "timeplace", title: "เวลาทำการ" },
                    { data: "priceplace", title: "ราคาเข้าชม" },
                    { title: "Action", orderable: false, defaultContent: "<a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-pen' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z'/></svg></a><a class='btn mx-auto'><svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-trash' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg></button>" }
                ]
            });

        }
    });

    $("#Adminlogout").click(function () {
        window.location.replace("index.html");
    });


});