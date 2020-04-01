var tabelaPaciente = document.querySelector("#tabela-pacientes");

tabelaPaciente.addEventListener("dblclick", function(event){
    event.target.parentNode.remove();
})

/* pacientes.forEach(function(paciente){
    paciente.addEventListener(dblclick, paciente{
        this.remove()
    })
})
*/