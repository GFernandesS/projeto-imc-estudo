const btnAdicionar = document.getElementById("sincronizar-paciente");

btnAdicionar.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        let pacientes = document.querySelectorAll(".paciente");
        let tdLastName = pacientes[pacientes.length - 1].querySelector(".info-nome").textContent;

        if(this.status == 200){
            const JSONPacientes = JSON.parse(this.responseText);
            if(JSONPacientes[JSONPacientes.length - 1].nome != tdLastName)
            for(let objectPaciente in JSONPacientes){
                JSONPacientes[objectPaciente].classificacao = null;
                adicionaPaciente(JSONPacientes[objectPaciente])
            }
    }
    else{
        window.alert(`Houve um erro na requisição com o servidor. Status Code: ${this.status}`);
    }
    })


    xhr.send();
})
