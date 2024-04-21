function removerEspacos() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let textoSemEspacos = textoOriginal.replace(/\s/g, "");
    document.getElementById("resultado").innerHTML = textoSemEspacos;
}