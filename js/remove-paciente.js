var tabelaPaciente = document.querySelector("#tabela-pacientes");

tabelaPaciente.addEventListener("dblclick", function(event){
    let element = event.target;
    element.parentNode.remove();
})

/* pacientes.forEach(function(paciente){
    paciente.addEventListener(dblclick, paciente{
        this.remove()
    })
})
*/