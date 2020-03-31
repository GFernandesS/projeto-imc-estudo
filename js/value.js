var pacientes = Array.from(document.querySelectorAll(".paciente"));
var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();
    let novoPaciente =  document.querySelector("#form-adiciona");

    let linhaPaciente = document.createElement("tr");
    linhaPaciente.classList.add("paciente");
    document.querySelector("#tabela-pacientes").appendChild(linhaPaciente);

    adicionaPaciente(novoPaciente, linhaPaciente);
    novoPaciente.reset();
});


function calculaImc(peso = 0, altura = 0){
    if(!validaDados(altura, peso)){
        window.alert("Informações inválidas foram inseridas");
        return 0;
    }
    console.log(altura, peso)
    return ((peso/(altura**2)).toFixed(2));
}

function classificaImc(imc = 18.5){
    let tipoImc;
    let background;
    if(imc < 18.5){
        tipoImc = "Abaixo do Peso";
        background = "paciente-problema"
    }
    else if(imc >= 18.5 && imc <= 24.9){
        tipoImc = "Peso Normal";
    }
    else if(imc >= 25 && imc <= 29.9){
        tipoImc = "Sobrepeso";
    }
    else if(imc >= 30 && imc <= 39.9){
        tipoImc = "Obesidade";
        background = "paciente-problema"
    }
    else{
        tipoImc = "Obesidade Mórbida";
        background = "paciente-problema";
    }
    return{
        tipoImc,
        background
    }
}

function exibeImc(){
    pacientes.forEach(paciente => {
        let peso = Number(paciente.querySelector(".info-peso").textContent);
        let altura = Number(paciente.querySelector(".info-altura").textContent);
        let imc = calculaImc(peso, altura);
        paciente.querySelector(".info-imc").textContent = imc;
        let imcClassificado = classificaImc(imc);
        paciente.querySelector(".info-classificacao").textContent = imcClassificado.tipoImc;
        paciente.classList.add(imcClassificado.background);
    })
}

function adicionaPaciente(novoPaciente, linhaPaciente){
    objectNovoPaciente = {
        nome: novoPaciente.nome.value,
        peso: novoPaciente.peso.value,
        altura: novoPaciente.altura.value,
        gordura: novoPaciente.gordura.value,
        imc: undefined,
        classificacao: undefined
    };
    if(validaDados(objectNovoPaciente.altura, objectNovoPaciente.peso)){
       for(let atr in objectNovoPaciente){
            montaColuna(`info-${atr}`, objectNovoPaciente[atr], linhaPaciente);
       }
        pacientes = Array.from(document.querySelectorAll(".paciente"));
        exibeImc();
    }
}


function montaColuna(classe, conteudo, linhaPaciente){
    console.log("Função: " + conteudo)
    let td = document.createElement("td");
    td.setAttribute("class", classe);
    if(typeof conteudo != "undefined"){
        td.textContent = conteudo;
    }

    linhaPaciente.appendChild(td);
}

var validaDados = (altura, peso) => {
    if(peso > 200 || peso <= 0 ||  altura > 2.40 || altura <= 0){
        let tagErro = document.querySelector(".erroForm");
        tagErro.innerHTML =  exibeMensagemErroPaciente()
        return false;
    }
    return true;
}

var exibeMensagemErroPaciente = () => {
   return "Não pode inserir dados inválidos para um paciente";
    
}



exibeImc();

