

var qrcode = new QRCode(document.getElementById("qrcode"), {
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});


const chaveFixa  = new Uint8Array([0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef, 0xfe, 0xdc, 0xba, 0x98, 0x76, 0x54, 0x32, 0x10]);
userName = "Felipe"
UUID = "difjsdilf"


function genKeyCode() {
    AccessCode = {
        "date": Date.now(),
        "uname": userName,
        "UUID": UUID
    }
    qrcode.makeCode(JSON.stringify(AccessCode))
}

function repeatEvery(func, interval) {
    // Check current time and calculate the delay until next interval
    var now = new Date(),
        delay = interval - now % interval;

    function start() {
        // Execute function now...
        func();
        // ... and every interval
        setInterval(func, interval);
    }

    // Delay execution until it's an even interval
    setTimeout(start, delay);
}
genKeyCode()
repeatEvery(genKeyCode, 60000); //atualizar a cada minuto