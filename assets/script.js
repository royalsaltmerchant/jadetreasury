// scroll functions
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
      locationDiv.style.display = 'block'
   }
   else {
      progBar.style.display = 'none'
      ProgCon.style.display = 'none'
      locationDiv.style.display = 'none'
   }
}

function scrollToTop() {
   document.body.scrollTop = 0 // For Safari
   document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

//location functions
var string = document.location.href;
var arrayOfStrings = string.toString().split('/');
var myArray = arrayOfStrings[4].toString().split('.');
console.log(arrayOfStrings)
var myLocation = myArray[0]
console.log(myLocation)

var locationDiv = document.getElementById('location')
locationDiv.innerHTML = `Blog --> ${myLocation}`

//show dates
function showDates() {
   const dates = document.getElementById('dates')
   console.log(dates.style.display)
   if(dates.style.display !== 'block') {
      console.log(true)
      dates.style.display = 'block'
   } else {
      dates.style.display = 'none'
   }
}