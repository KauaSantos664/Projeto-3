function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
   
    // tag image
    const img = document.querySelector('#profile img')

    //substituir imagem
    if(html.classList.contains('light')) {

    // light mode
    img.setAttribute('src', './img/RaidenAvatar.png') 
   } else {

   // dark mode
   img.setAttribute('src', './img/avatar.png')
 }

}


