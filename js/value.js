var pacientes = Array.from(document.querySelectorAll(".paciente"));
var btnAdicionarPaciente = document.querySelector("#adicionar-paciente");

btnAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();
    let novoPaciente =  document.querySelector("#form-adiciona");

    let linhaPaciente = document.createElement("tr");
    linhaPaciente.classList.add("paciente");
    document.querySelector("#tabela-pacientes").appendChild(linhaPaciente);

    adicionaPaciente(novoPaciente, linhaPaciente);
   
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
    let objectNovoPaciente = {
        nome: novoPaciente.nome.value,
        peso: novoPaciente.peso.value,
        altura: novoPaciente.altura.value,
        gordura: novoPaciente.gordura.value
    };
    if(validaDados(objectNovoPaciente.altura, n)){
        let tdNome = document.createElement("td");
        tdNome.setAttribute("class", "info-nome");
        tdNome.textContent = objectNovoPaciente.nome; //Acessa nome a partir do name definido 
        linhaPaciente.appendChild(tdNome);

        let tdPeso = document.createElement("td");
        tdPeso.setAttribute("class", "info-peso");
        tdPeso.textContent = objectNovoPaciente.peso; 
        linhaPaciente.appendChild(tdPeso);

        let tdAltura = document.createElement("td");
        tdAltura.setAttribute("class", "info-altura");
        tdAltura.textContent = objectNovoPaciente.altura;
        linhaPaciente.appendChild(tdAltura);

        let tdGordura = document.createElement("td");
        tdGordura.setAttribute("class", "info-gordura");
        tdGordura.textContent = objectNovoPaciente.gordura;
        linhaPaciente.appendChild(tdGordura);

        let tdImc = document.createElement("td");
        tdImc.setAttribute("class", "info-imc");
        linhaPaciente.appendChild(tdImc);

        let tdClassificacao = document.createElement("td");
        tdClassificacao.setAttribute("class", "info-classificacao");
        linhaPaciente.appendChild(tdClassificacao);

        pacientes = Array.from(document.querySelectorAll(".paciente"));
        exibeImc();
    }
}

var validaDados = (altura, peso) => {
    if(peso > 200 || peso <= 0 ||  altura > 2.40 || altura <= 0){
        window.alert("Não pode inserir dados inválidos para um paciente");
        return false;
    }
    return true;
}



exibeImc();

