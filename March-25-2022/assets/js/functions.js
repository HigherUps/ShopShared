if(sessionStorage.getItem("banner") === "true") {
    document.getElementById("ZzNmm").style.display = "none";
}else {
    console.log('1')
}
var queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
function isInc() {
    const isValid = urlParams.get('increaseCost');
    if (isValid == "yes") {
        document.getElementById("lbPr").innerText = "Price $15.00";
        document.getElementById("lowr").innerText = " $60 (Discount)";
        document.getElementById("abPr").innerText = "Price $12.00";
        document.getElementById("acPr").innerText = "Price $35.00";
    }
}
isInc();
window.onscroll = function() {timeScroll()};
function timeScroll() {
    var time = document.getElementById("timey");
    if (document.body.scrollTop > 340 || document.documentElement.scrollTop > 340) {
        time.style.position = "fixed";
        time.style.top = "10px";
    }else {
        time.style.position = "absolute";
        time.style.top = "350px";
    }
}
// window.onscroll = function() {scrollCheck(), otherScrollCheck()};
// function scrollCheck() {
//     var time = document.getElementById("timey");
//     if(document.body.scrollTop > 95 || document.documentElement.scrollTop > 95  ) {
//         time.classList.add("scrollUp");
//         time.style.position = "float";
//     }else {
//         time.classList.remove("scrollUp");
//     }
// }
// function otherScrollCheck() {
//     var header = document.getElementById("hdrTxt");
//     if(document.body.scrollTop > 203 || document.documentElement.scrollTop > 203 ) {
//         header.classList.add("headerScroll");
//     }else {
//         header.classList.remove("headerScroll");
//     }
// }
function startTime() {
    const today = new Date();
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hrs = checkTime(hrs);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById('hrs').innerHTML =  hrs + ":" + min + ":" + sec;
    setTimeout(startTime, 1000);
}  
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}
startTime();
let pvlvm = 0;
document.addEventListener("click", sdsd);
document.getElementById("cwcyW").addEventListener("click", musicOff);
document.getElementById("YyfJm").addEventListener("click", musicOn);
var secCounter = 0;
var x = setInterval(musCounter, 1000);
function musCounter() {
    secCounter++;
    var secSound = document.getElementById("secSound");
    if(secCounter > 67) {
        secSound.play();
        clearInterval(x);
    }
}
function beans() {
    // console.log('%c TheHigherUps Classified 2022', 'color:red; font-size: 30px; background-color: white;');
    // console.log('%c WARNING!', 'background-color: #cc3300; color: white; padding-right: 25px; font-size: 50px;');
    // console.log('%c Pasting or Entering Anything Into The Console May Put Your Account At Risk', 'color: white; background-color: #cc3300; font-size: 20px;');
    console.log("%c TheHigherUps ", 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); padding-bottom: 15px');
    console.log("%c Classified ", 'font-weight: bold; font-size: 30px;color: gray; text-shadow: 3px 3px 0 rgb(37,37,37) , 6px 6px 0 rgb(53,53,53) , 9px 9px 0 rgb(69,69,69) , 12px 12px 0 rgb(85,85,85) , 15px 15px 0 rgb(101,101,101) , 18px 18px 0 rgb(117,117,117) , 21px 21px 0 rgb(133,133,133); padding-bottom: 15px; margin-left: 100px');
}
function musicOn() {
    audio = document.getElementById("auii");
    buttonOff = document.getElementById("cwcyW");
    buttonOn = document.getElementById("YyfJm");
    buttonOn.style.display = "none";
    buttonOff.style.display = "grid";
    audio.muted = false;
    document.cookie = "musicStatus = on"
}
function musicOff() {
    audio = document.getElementById("auii");
    buttonOff = document.getElementById("cwcyW");
    buttonOn = document.getElementById("YyfJm");
    buttonOn.style.display = "grid";
    buttonOff.style.display = "none";
    audio.muted = true;
    document.cookie = "musicStatus = off"
}
// function CCMoJ() {
//     var aud = document.getElementById("auii");
//     var btn = document.getElementById("jyFfS");
//     aud.pause();
//     btn.remove();
// }
function sdsd() {
    var btn = document.querySelector("div.EaLpb");
    var aud = document.getElementById("auii");
    btn.style.display = "grid";
    aud.play();
}
function cdNl() {
    document.getElementById("ZzNmm").style.display = "none";
    sessionStorage.setItem("banner", "true");
}
function uiTx() {
    window.location = '/account.html';
}
function KtYs() {
    pvlvm++
    if (pvlvm >= 7) {
        window.location = "/checkout.html"
    }
}
function Hknt() {
    window.location = 'you_suck_you_fucking_whore_ass_bitch_suck_my_fat_dick'
}
function ayZu() {
    var el = document.getElementById("ZILb").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    var adsDisplay = document.querySelector("ins.adsbygoogle")
    if(el == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
function vKacI() {
    var bb = document.getElementById("bmPpJ").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    if(bb == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
function plgSG() {
    var bb = document.getElementById("xgGWr").value;
    var audio = new Audio("/assets/sounds/buzzer.mp3");
    if(bb == '') {
        console.log("ErrCode-InputZILb Value equals none");
        alert("You must enter text before submitting");
    }else {
        $('#woah').delay(100).show(10);
        $('.adsbygoogle').delay(100).hide(10);
        audio.play(); 
        $('#woah').delay(1000).hide(10);
        $('.adsbygoogle').delay(1000).show(10);
    } 
}
// Redirection to Products
function raYk() {
    window.location = '/lethal-beans';
}
function ilAu() {
    const incCost = urlParams.get('increaseCost');
    if(incCost === "yes") {
        window.location = '/assault-beans-cbe/?increaseCost=yes'
    }else {
        window.location = '/assault-beans-cbe'
    }
}
function gdFt() {
    const incCost = urlParams.get('increaseCost');
    if(incCost === "yes") {
        window.location = '/assault-beans/?increaseCost=yes'
    }else {
        window.location = '/assault-beans'
    }
}
function dsFK() {
    window.location = '/assault-bench';
}
function toShop() {
    window.location = 'https://www.thehigherups.org/products/assault-bench/order-assault-bench';
}

