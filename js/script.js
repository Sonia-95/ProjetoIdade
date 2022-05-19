function verificar(){
    var data = new Date(); //pegando a data atual
    var ano = data.getFullYear(); //Ano atual
    var formAno = document.getElementById("textoAno");/* Pegando o ID do ano digitado */
    var resultado = document.getElementById("resposta");


    if(formAno.value.length == 0 || Number(formAno.value) > ano || formAno.value == ""){   
        document.getElementById("textoAno").style.border="1px solid red"; /* colocando estilo na borda */
        document.getElementById("aviso").innerHTML = `<p style="color:red"> Preencha com um ano válido! </P>`; /* mensagem de erro! */
    }else{
        document.getElementById("aviso").innerHTML = "";/*Alterando a mensagem de erro */
        document.getElementById("textoAno").style.border="1px solid black";/* Alterando a borda do input */

        var sexo = document.getElementsByName("radioSexo");
        var idade = ano - Number(formAno.value);
        var genero = "";
        var imagem = document.createElement("img"); //criei uma tag img igual quando faz no html <img> é a mesma coisa, só que feito no javascript :)
        imagem.setAttribute("id", "foto"); // Isto é o mesmo que : <img id = "foto">

        /* sexo[0] porque iremos pecorrer a posição dos sexos, quando tem "getelements" no plural indica mais de um elemento. */

        if(sexo[0].checked){    // if aninhado
            if(idade >= 0 && idade < 10){
                genero = "uma criança";
                imagem.setAttribute("src", "img/menino.jpg");
            }else if(idade <= 21){
                genero = "um jovem";
                imagem.setAttribute("src", "img/menino.jpg");
            }else if(idade > 21 && idade <= 59){
                genero = "um homem";
                imagem.setAttribute("src","img/homem30.jpg");
            }else if( idade > 59 && idade <= 100){
                genero = "um idoso";
                imagem.setAttribute("src","img/idoso.jpg");
    
            }else{
                genero = "Não identificado";
            }

        /* AGORA É A CONDIÇÃO FEMININA */

        } else if(sexo[1].checked){
            if(idade >= 0 && idade < 10){
                genero = "uma criança";
                imagem.setAttribute("src", "img/menina.jpg");
            } else if( idade > 10 && idade <= 21){
                genero = "uma jovem";
                imagem.setAttribute("src", "img/jovemM.jpg");
            }else if (idade > 21 && idade <= 59){
                genero = "uma mulher";
                imagem.setAttribute("src","img/mulher18.jpg");
            }else if( idade > 59 && idade <= 100){
                genero = "uma idosa";
                imagem.setAttribute("src","img/idosa.jpg");
            }else{
                genero = "Não identificado";
            }
        }
        resultado.style.textAlign = 'center'; //colocando o texto  da mensagem centralizado

        if(genero == "Não identificado"){
    
            resultado.innerHTML=`Não identificado!`;
            resultado.style.color ="red";
            alert("Ano Inválido!");

        } else{
            resultado.innerHTML=`Detectamos ${genero} com idade de ${idade} ano(s)`;
            resultado.style.color ="black";
            resultado.appendChild(imagem); // chamando a imagem correspondente
        }       
    } //FIM DO ELSE
} // FIM DA FUNCTION


/* Através do DOM busquei o evento do enter quando pressionado  */

document.addEventListener("keypress", function (botao) {
    if(botao.key === 'Enter') { // 3 igual para identificar a igualdade e o tipo de dado
    
        var btn = document.getElementById("button"); //chamando o ID do botão
        btn.click(); //chamando a funçãXo do click do evento Listener
    
    }
  }); 

