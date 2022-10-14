
console.log("Called");

function downloadFile(uri, name) {
    // To avoid using javascript download that first open, we use html download
    uri = "./files/";
    // name = "sample.pdf";
    name = "putty.exe";
    var link = document.createElement("a"); // create an a link
    link.download = name; // add the download attribute
    link.href = uri; // add the href attribute
    link.click(); // click the link to start the download process
}

$("#download").click(function () {
    let timerInterval;
    var timeleft = 4000; // set timer in milliseconds
    document.getElementById("download").style.display = "none"; // hide the download button

    Swal.fire({
        title: '<h1> Getting files ready...</h1>',
        html:
            '<p>The download starts in <strong></strong> seconds</p>.<br/><br/>',
        timer: timeleft,
        showConfirmButton: false,
        didOpen: () => {
            const content = Swal.getHtmlContainer()
            const $ = content.querySelector.bind(content)

            //Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getHtmlContainer().querySelector('strong')
                    .textContent = (Swal.getTimerLeft() / 1000)
                        .toFixed(0)
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval); // close counter
            document.getElementById("files_ready").style.display = "block"; // display the files ready div
            downloadFile();
        }
    })

});