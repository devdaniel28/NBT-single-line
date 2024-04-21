function removerEspacos() {
    let textoOriginal = document.getElementById("textoOriginal").value
    let textoSemEspacos = textoOriginal.replace(/\s/g, "")
    document.getElementById("resultado").innerHTML = textoSemEspacos
}

const input = document.getElementById("resutado")

function copybutton() {
  navigator.clipboard.writeText(input.value).then(() => {
    alert('Copied to Clipboard')
  })
}