var tabelaPaciente = document.querySelector("#tabela-pacientes");

tabelaPaciente.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 400);
})

/* pacientes.forEach(function(paciente){
    paciente.addEventListener(dblclick, paciente{
        this.remove()
    })
})
*/