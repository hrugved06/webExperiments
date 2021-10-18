$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.keyCode == 'S'.charCodeAt(0) && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    alert ("Code Editor Disabled");
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
    alert ("Page save Prohibited");
    return false;
  }
  if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) {
    alert ("You pressed the Ctrl + A key!");
    return false;
 }
}

document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Experience 🔆 Hrugved Kolhe";
        $("#favicon").attr("href","tryexp.png");
    }
    else {
        document.title = "Hrugved is calling you back!";
        $("#favicon").attr("href","sticker2.png");
    }
});

var options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: 'unset'
    left: 'unset', // default: '32px'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓' // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();