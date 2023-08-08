    /*function contar(){
        var $ini = document.getElementById('txti')
        var _fim = document.getElementById('txtf')
        var passo = document.getElementById('txtp')
        var resul = document.getElementById('res')
        if($ini.value.length == 0 || _fim.value.length == 0 || passo.value.length == 0){
            alert('Faltam dados ,escreve porfavor...')
            resul.innerHTML += `Imposivel contar...`
        }else{
            resul.innerHTML = `Contando: <br>`
            var i = Number($ini.value)
            var f = Number(_fim.value)
            var p = Number(passo.value)
            if(p<=0){
                alert('passo invalido,considerando passo como 1')
                p = 1
            }
            //contagem crescente
            if(i < f){
                for(var s = i; s <= f; s+=p){
                    resul.innerHTML += ` ${s} \u{1F603}`
                }//contagem regressiva
            }else{
                for(var s = i; s>=f; s -= p){
                    resul.innerHTML += ` ${s} \u{1F603}`
                }
            }
        }resul.innerHTML += ` \u{1F3C1} `
    }*/


    //=======================================
    