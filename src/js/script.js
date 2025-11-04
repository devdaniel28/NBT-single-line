function removerEspacos() {
    let nbtClean = document.getElementById("nbtClean").value
    let nbtSingleLine = nbtClean.replace(/\s/g, "")
    document.getElementById("resultado").innerText = nbtSingleLine
}

//* Função de Ctrl + C
async function copiarNbt() {
  let nbt = document.getElementById("resultado")
  try {
    await navigator.clipboard.writeText(nbt.textContent)
    console.log('Texto copiado para a área de transferência')
    nbt.innerText = 'Nbt Copiado!'
  } catch (err) {
    console.error(err)
  }
}
