function inserir(){
    let numero = document.getElementById('posicao').value -1;
    let novo = document.getElementById('novo').value;
    document.getElementsByClassName("time")[numero].innerHTML= novo;
}

// Criando a função validar

function validar(){
    //Declarando as váriaveis
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    // Realizando o if e else paraa validar os campos

    if(usuario== "Admin" && senha == "1234") {
        alert (`Seja bem vindo ${usuario}`)
        window.open("dashboard.html")


    }

    else{
        alert("usuario/senha inválidos")

    }
}