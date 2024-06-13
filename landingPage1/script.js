// Criando arrays para guardar cadastros
let arrNomes = [];
let arrEmails = [];
let arrSenhas = [];

// Salvando elementos HTML em variáveis
let BotaoCadastro = document.getElementById("botaoCadastro");
let BotaoLogin = document.getElementById("botaoLogin");
let FormCadastro = document.getElementById("formularioCadastro");
let FormLogin = document.getElementById("formularioLogin");
let ListaInicio = document.getElementById("listaInicio");
let ListaShop = document.getElementById("listaShop");
let BotaoInicio = document.getElementById("botaoInicio");
let BotaoShop = document.getElementById("botaoShop");
let timeoutHideMenu;

// Exibindo formulário de cadastro/login ao clicar nos respectivos botões
BotaoCadastro.addEventListener('click', function () {
    FormCadastro.style.display = "block";
    FormLogin.style.display = "none";
});

BotaoLogin.addEventListener('click', function () {
    FormCadastro.style.display = "none";
    FormLogin.style.display = "block";
});

// Salvando cadastro

document.getElementById("confirmarCadastro").addEventListener('click', function () {
    let nome = document.getElementById("usernameCadastro").value;
    let email = document.getElementById("emailCadastro").value;
    let senha = document.getElementById("senhaCadastro").value;
    if (document.getElementById("senhaCadastro").value.length < 8) {    // verificando formato de senha inserido
        alert("Senha inválida (min. 8 dígitos)")
        document.getElementById("senhaCadastro").value = '';
    } else {
        arrNomes.push(nome);
        arrEmails.push(email);
        arrSenhas.push(senha);

        document.getElementById("usernameCadastro").value = '';
        document.getElementById("emailCadastro").value = '';        // limpando as caixas de texto
        document.getElementById("senhaCadastro").value = '';
    }
});

// Confirmando login

document.getElementById("confirmarLogin").addEventListener('click', function () {

    for (let i = 0; i <= arrNomes.length; i++) {    // iterando o array de login
        if (document.getElementById("emailLogin").value == arrEmails[i] && document.getElementById("senhaLogin").value == arrSenhas[i]) {
            alert("Login bem sucedido");        // verificando o login (email/senha)

            document.getElementById("emailLogin").value = '';
            document.getElementById("senhaLogin").value = '';
            break;

        } else {
            alert("Endereço de Email ou Senha incorretos");
            document.getElementById("emailLogin").value = '';
            document.getElementById("senhaLogin").value = '';
        }
    }
});

// Exibindo o menu "Início" ao passar o mouse sob o botão "Início" ou mantê-lo sob o menu"

BotaoInicio.addEventListener('mouseenter', function () {
    clearTimeout(timeoutHideMenu);
    ListaInicio.style.display = "list-item";
        ListaInicio.style.opacity = 1;
});

ListaInicio.addEventListener('mouseenter', function () {
    clearTimeout(timeoutHideMenu);
    
    ListaInicio.style.display = "list-item";
        ListaInicio.style.opacity = 1;
        
    timeoutHideMenu = setTimeout(function() {
        ListaShop.style.opacity = 0;        // escondedo o menu "Shop"
        ListaShop.style.display = "none";
    }, 800);
});

// Escondendo o menu ao retirar o mouse

BotaoInicio.addEventListener('mouseleave', function () {
    ListaInicio.style.opacity = 0;
    timeoutHideMenu = setTimeout(function() {
        ListaInicio.style.display = "none";
    }, 550);
});
ListaInicio.addEventListener('mouseleave', function () {
    ListaInicio.style.opacity = 0;
    timeoutHideMenu = setTimeout(function() {
        ListaInicio.style.display = "none";
    }, 550);
});


// Exibindo o menu "Shop" ao passar o mouse sob o botão "Shop" ou mantê-lo sob o menu"

BotaoShop.addEventListener('mouseenter', function () {
    clearTimeout(timeoutHideMenu);
        ListaShop.style.display = "list-item";
        ListaShop.style.opacity = 1;
    });

ListaShop.addEventListener('mouseenter', function () {
    clearTimeout(timeoutHideMenu);

    ListaShop.style.display = "list-item";
        ListaShop.style.opacity = 1;
        
    timeoutHideMenu = setTimeout(function() {
        ListaInicio.style.opacity = 0;
        ListaInicio.style.display = "none";
    }, 800);
});

// Escondendo o menu ao retirar o mouse

BotaoShop.addEventListener('mouseleave', function () {
    ListaShop.style.opacity = 0;
    timeoutHideMenu = setTimeout(function() {
        ListaShop.style.display = "none";
    }, 550);
});

ListaShop.addEventListener('mouseleave', function () {
    ListaShop.style.opacity = 0;
    timeoutHideMenu = setTimeout(function() { 
        ListaShop.style.display = "none";
    }, 550);
});