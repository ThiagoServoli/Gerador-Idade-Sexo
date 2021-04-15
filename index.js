var btn = document.getElementById('btn')
btn.addEventListener('click', gerador)

function gerador (){
    
    var data = new Date();
    var ano = data.getFullYear();

    var idade = document.getElementById('ano');
    var res = document.getElementById('res');

    var idadeConvertida = Number(idade.value)

    if( idadeConvertida <= 0 || idadeConvertida > ano ){
        window.alert('[ERRO] Verifique com  atenção os dados digitados e tente novamente.')
    }
    else {
        var genero = ''
        var sexo = document.getElementsByName('fsex');
        var calc = ano - Number(idade.value)
        var img = document.createElement('img')
        var rip = document.getElementById('rip')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            genero = 'Homem'
            if(calc >= 0 && calc < 3){
                //Bebe
                img.setAttribute('src', 'bebe menino.jpg')
            }else if(calc >= 3 && calc < 12){
                //Criança
                img.setAttribute('src', 'criança menino.jpg')
            }else if (calc >= 12 && calc < 18){
                //Adolescente
                img.setAttribute('src', 'jovem menino.jpg')
            }else if (calc >= 18 && calc < 60){
                //Adulto
                img.setAttribute('src', 'homem adulto.jpg')
            }else if (calc >= 60 && calc < 150){
                //Idoso
                img.setAttribute('src', 'homem idoso.jpg')
            }else if (calc >= 150 && calc < 5000){
                //morto
                img.setAttribute('src', 'morto.jpg')
                rip.innerHTML = 'RIP'
                rip.style.textAlign = 'center'
            }
            
        }else if (sexo[1].checked){
            genero = 'Mulher'  
            if(calc >= 0 && calc < 3){
                //Bebe
                img.setAttribute('src', 'bebe menina.jpg')
            }else if(calc >= 3 && calc < 12){
                //Criança
                img.setAttribute('src', 'criança menina.jpg')
            }else if (calc >= 12 && calc < 19){
                //Adolescente
                img.setAttribute('src', 'mulher jovem.jpg')
            }else if (calc >= 18 && calc < 60){
                //Adulto
                img.setAttribute('src', 'mulher adulta.jpg')
            }else if (calc >= 60 && calc < 150){
                //Idoso
                img.setAttribute('src', 'mulher idosa.jpg')
            }else if (calc >= 150 && calc < 5000){
                //morto
                img.setAttribute('src', 'morto.jpg')
                rip.innerHTML = 'RIP'
                rip.style.textAlign = 'center'
            }         
        } 
        
        res.style.textAlign = 'center'
        img.style.width = '300px'; 
    
        img.style.height = '300px';
        res.innerHTML = `Detectamos ${genero} com ${calc} anos de idade`;
        res.appendChild(img)
 
    }
}




