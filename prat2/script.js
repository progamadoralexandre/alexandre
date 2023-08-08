    //addEventListener('click',verificar)
    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var xano = document.getElementById('txtano')
        var fano = Number(xano.value)
        var res = document.getElementById('res')
        var idade = ano - fano
        if(fano.length == 0 || fano > ano){
            alert('Verifique os dados e tente novamente!!...porfavor')
        }else{
            var sexo = document.getElementsByName('radsex')
            var imagens = document.createElement('img')
            var gema = ''
            if(sexo[0].checked){
                gema = 'homem'
                if(idade >= 0 && idade < 12){
                    //criança
                    imagens.setAttribute('src', 'homc.png')
                }else if(idade >= 12 && idade < 18){
                    //jovem
                    imagens.setAttribute('src', 'homj.png')
                }
            }else if(sexo[1].checked){
                gema = 'mulher'
                if(idade >= 0 || idade < 12){
                    imagens.setAttribute('src', 'femc.png')
                }else if(idade >= 12 || idade < 18){
                    imagens.setAttribute('src', 'femj.png')
                }
            }
            res.innerHTML = `Detetamos ${gema} com ${idade} anos`
            res.appendChild(imagens)
        }
    }