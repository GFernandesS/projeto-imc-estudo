const campoFiltro = document.querySelector(".campo-busca");




campoFiltro.addEventListener("input", function(){
    const pacientes = Array.from(document.querySelectorAll(".paciente"));
    pacientes.forEach((paciente) => {
        let tdNome = paciente.querySelector(".info-nome");
        let regExp = new RegExp(this.value, "i");
            if(!regExp.test(tdNome.textContent)){
                paciente.classList.add("invisivel");
            }
            else{
                paciente.classList.remove("invisivel");
            }
        
    })
})