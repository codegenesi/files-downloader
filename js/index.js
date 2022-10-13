console.log("Called");
$("#download").click(function () { // detect click even of the download button
    var timeleft = 1; // set timer 
    document.getElementById("countdowntimer").textContent = timeleft; // initiate the time
    var timer = document.getElementById("timer");
    timer.style.display = "block"; // display the timer div
    document.getElementById("download").style.display = "none"; // hide the download button
    var downloadTimer = setInterval(function () {
        timeleft--; // countdown
        document.getElementById("countdowntimer").textContent = timeleft; // set time as it reduces
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            timer.style.display = "none"; // hide the timer to display other info
            document.getElementById("files_ready").style.display = "block"; // display the files ready div
            downloadFile();
        }

    }, 1000);

});
function downloadFile(uri, name) {
    // To avoid using javascript download that first open, we use html download
    uri = "./files/";
    name = "sample.pdf";
    var link = document.createElement("a"); // create an a link
    link.download = name; // add the download attribute
    link.href = uri; // add the href attribute
    link.click(); // click the link to start the download process
}