# Nbt Single Line

**Link:** https://nbtsingleline.netlify.app

Este projeto consiste em duas funções JavaScript que removem todos os espaços de um Nbt(Json ou Yml) e deixam legivel para o bloco de comando do jogo minecraft

## Funcionalidades

1. **Remover Espaços**: A função `removerEspacos` remove todos os espaços de uma string de texto fornecida por um usuário e exibe o resultado em uma área designada.

2. **Copiar NBT**: A função `copiarNbt` copia o texto processado (sem espaços) para a área de transferência do usuário.

## Código

```javascript
function removerEspacos() {
    let nbtClean = document.getElementById("nbtClean").value;
    let nbtSingleLine = nbtClean.replace(/\s/g, "");
    document.getElementById("resultado").innerHTML = nbtSingleLine;
}

async function copiarNbt() {
    var nbt = document.getElementById("resultado");

    try {
        await navigator.clipboard.writeText(nbt.textContent);
        console.log('Texto copiado para a área de transferência');
        alert("Nbt Copiado!");
    } catch (err) {
        console.error(err);
    }
}
```

**Assinado:** dvcDaniel(eu)
