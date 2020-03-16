var pacientes = Array.from(document.querySelectorAll(".paciente"));

function calculaImc(peso = 0, altura = 0){
    if(peso > 200 || peso < 0 || altura > 2.40 || altura < 0){
        window.alert("Informações inválidas foram inseridas");
        return 0;
    }
    return ((peso/(altura**2)).toFixed(2));
}

function classificaImc(imc = 18.5){
    let tipoImc;
    if(imc < 18.5){
        tipoImc = "Abaixo do Peso";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        tipoImc = "Peso Normal";
    }
    else if(imc >= 25 && imc <= 29.9){
        tipoImc = "Sobrepeso";
    }
    else if(imc >= 30 && imc <= 39.9){
        tipoImc = "Obesidade";
    }
    else{
        tipoImc = "Obesidade Mórbida";
    }
    return tipoImc;
}

function exibeImc(){
    for(let n = 0; n<= pacientes.length; n++){
        let peso = Number(pacientes[n].querySelector(".info-peso").textContent);;
        let altura = Number(pacientes[n].querySelector(".info-altura").textContent);
        let imc = calculaImc(peso, altura);
        pacientes[n].querySelector(".info-imc").textContent = imc;
        pacientes[n].querySelector(".info-classificacao").textContent = classificaImc(imc);
    }
}

exibeImc(pacientes)

