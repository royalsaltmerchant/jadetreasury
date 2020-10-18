function articles() {
   var articlesDropdown = document.getElementById('dropdown');
   if(articlesDropdown.style.display === '') {
      articlesDropdown.style.display = 'block'
   } else {
      articlesDropdown.style.display = ''
   }
}
function outsideClick() {
   var articlesDropdown = document.getElementById('dropdown');
   if(articlesDropdown.style.display === 'block') {
      articlesDropdown.style.display = ''
   }
}