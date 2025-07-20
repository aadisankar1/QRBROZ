const baseurl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="; 
const qrimg = document.getElementById("qrimg");
const qrtext = document.getElementById("qrtext");

function genqr(){
    if (qrtext.value.length > 0){
        qrimg.src = baseurl+encodeURIComponent(qrtext.value);
        qrimg.style.visibility = "visible";

    }
}