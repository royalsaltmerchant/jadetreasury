var scrollBtn = document.getElementById('topscroll')
var progBar = document.getElementById('myBar')
var ProgCon = document.getElementById('progress-container')


window.onscroll = () => {
   scrollFunction()
}

function scrollFunction() {
   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   var scrolled = (winScroll / height) * 100;

   document.getElementById("myBar").style.width = scrolled + "%";
   
   if (winScroll > 20) {
      scrollBtn.style.display = 'block'
   }
   else {
      scrollBtn.style.display = 'none'
   }

   if(winScroll > 200) {
      progBar.style.display = 'block'
      ProgCon.style.display = 'block'
   }
   else {
      progBar.style.display = 'none'
      ProgCon.style.display = 'none'
   }
}

function scrollToTop() {
   document.body.scrollTop = 0 // For Safari
   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}