/* function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
console.log("%c TheHigherUps ", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); padding-bottom: 15px');
console.log("%c Classified ", 'font-weight: bold; font-size: 30px;color: gray; text-shadow: 3px 3px 0 rgb(37,37,37) , 6px 6px 0 rgb(53,53,53) , 9px 9px 0 rgb(69,69,69) , 12px 12px 0 rgb(85,85,85) , 15px 15px 0 rgb(101,101,101) , 18px 18px 0 rgb(117,117,117) , 21px 21px 0 rgb(133,133,133); padding-bottom: 15px; margin-left: 100px');
var number = randomNumber(20);
if(number === 5) {
    console.log("%c You Have Made Him Mad", "background: red; font-size: 30px; padding: 5px;")
    let theImage = document.getElementById("sadImage");
    theImage.src = "/assets/images/checkout.png"
}
*/

// function setCookie(username, value, expiry) {
//     const date = new Date();
//     date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
//     var expires = "expires="+date.toUTCString();
//     document.cookie = username + "=" + value + ";" + expires + ";path=/";
// }
// function getCookie(username) {
//     let name = username + "=";
//     let spli = document.cookie.split(";");
//     for(var j = 0; j < spli.length; j++) {
//         let char = spli[j];
//         while (char.charAt(0) == ' ') {
//             char = char.substring(1);
//         }
//         if (char.indexOf(name) == 0 ) {
//             return char.substring(name.length, char.length);
//         }
//     }
//     return "";
// }
// function checkCookie() {
//     var paley = getCookie("PaleyDead");
//     if (paley == "Yes") {
//         document.getElementById("text").innerText = "paley is dead"
//         document.getElementById("btn").disabled = true;
//         document.getElementById("btn").innerText = "She is long gone"
//     }
// }
// checkCookie();

function createCookie() {

}



function isMargiottaDead(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    if(x === 1) {
        document.getElementById("text").innerHTML = "yes";
    }else {
        document.getElementById("text").innerHTML = "no";
    }
}
function isPaley() {
    isMargiottaDead(1,2);
    document.cookie = "PaleyDead=Yes; expires=Mon, 14 Mar 2022 16:45:00 UTC";
}
setInterval(addDate, 1);
function addDate() {
    var date = new Date().toLocaleTimeString();
    document.getElementById("text").innerText = date;
}
addDate();
