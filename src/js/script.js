function removerEspacos() {
    let nbtClean = document.getElementById("nbtClean").value
    let nbtSingleLine = nbtClean.replace(/\s/g, "")
    document.getElementById("resultado").innerHTML = nbtSingleLine
} // o que faz a magica aconteçer kk

async function copiarNbt() {
  
  var nbt = document.getElementById("resultado");

  try {
    await navigator.clipboard.writeText(nbt.textContent);
    console.log('Texto copiado para a área de transferência');
    alert("Nbt Copiado!")
  } catch (err) {
    console.error('Erro ao copiar texto: ', err);
  }
}
