/* İsim-Sorma-Eklendi*/
let isim=prompt("Lütfen isminizi giriniz: ");
let info=document.querySelector('#myName')
info.innerHTML=`${isim}`


/* Saat-Eklendi*/
function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#myClock').innerHTML =`${h}:${m}:${s}  `;
    setTimeout(showTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

/* Gün-İsmi-Eklendi */

const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
const d = new Date();
let day = weekday[d.getUTCDay()];
document.getElementById("myDay").innerHTML = day;

