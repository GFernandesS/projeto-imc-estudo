
var pacientes = [];

function calculaImc(peso, altura){
    return parseInt(peso/(altura**2));
}

function exibeImc(pacientes){
    for(let n = 0; n<= 4; n++){
        pacientes.push(document.querySelector(".paciente" + String(n)));
        let peso = Number(pacientes[n].querySelector(".info-peso").textContent);;
        let altura = Number(pacientes[n].querySelector(".info-altura").textContent);
        pacientes[n].querySelector(".info-imc").textContent = calculaImc(peso, altura);
    }
}

exibeImc(pacientes)