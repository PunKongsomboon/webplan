$(document).ready(function () {
    $("#btnEditplan").click(function () {
        $("#modelEditplan").modal("show");
    });

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

});