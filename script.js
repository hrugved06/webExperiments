$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

// old Scroll to top
    // $(window).on('scroll load',function(){
    //     $('#menu').removeClass('fa-times');
    //     $('.navbar').removeClass('nav-toggle');

    //     if(window.scrollY>60){
    //         document.querySelector('#scroll-top').classList.add('active');
    //     }else{
    //         document.querySelector('#scroll-top').classList.remove('active');
    //     }
    // });
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
    bottom: '150px', // default: '32px'
    position: 'relative',
    right: '20px', // default: 'unset'
    left: 'unset', // default: '32px'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌗' // default: ''
}

const darkmode = new Darkmode(options);
darkmode.showWidget();


// Progressive scroll to top

$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});