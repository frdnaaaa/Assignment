/*let name = prompt("Enter your name: ");
alert("Happy Birthday, Dear " + name + "!");*/

function candles() {
    document.getElementById("img1").src = "birthdaycake.gif";
    document.getElementById("birthdaysong").play();
}

function wish() {
    alert("Close your eyes and make a wish!")
    document.getElementById("makeawish").style.display = "block";
    document.getElementById("makeawish").play();
}

function send() {
    var phoneNumber = document.getElementById("number").value;
    /*var urlToSend = ""; 
    var encodedURL = encodeURIComponent(urlToSend);
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodedURL;*/
    window.location.href = whatsappLink;
}