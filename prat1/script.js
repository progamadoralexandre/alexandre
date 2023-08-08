addEventListener('load',ver)
function ver() {
   var mauro = new Date()
   var mauro1 = mauro.getUTCHours()
   var mauro2 = document.querySelector('#mensagem')
   var mauro3 = document.querySelector('#imagem')
   var corpo = document.body
   mauro2.innerHTML = `Neste momento são ${mauro1} hora...`
   if(mauro1 < 12){
    mauro3.src = '../img/manha.png'
    corpo.style.background = '#e2cd9f'
   }else if(mauro1 >= 12 && mauro1 < 18){
    mauro3.src = '../img/tarde.png'
    corpo.style.background = '#b9846f'
   }else{
    mauro3.src = '../img/noite.png'
    //document.body.style.background = '#515154' ===> umas das maneiras de mudar a cor do fundo com javascript
    corpo.style.background = '#515154'
   }
}
    