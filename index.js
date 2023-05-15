function gerarTexto() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const km = document.getElementById("km").value;
    const combustivel = document.getElementById("combustivel").value;
    const tipo_cambio = document.getElementById("tipo_cambio").value;
    const status_pneu = document.getElementById("status_pneu").value;
    const ipva = document.getElementById("ipva").value;
    const placa = document.getElementById("placa").value;
    const opcionais = document.getElementById("opcionais").value;
    const avaliacao_superficial = document.getElementById("avaliacao_superficial").value;
    const observacoes = document.getElementById("observacoes").value;
    const valor_fipe = document.getElementById("valor_fipe").value;
    const custo_investimento = document.getElementById("custo_investimento").value;
    const link_fotos = document.getElementById("link_fotos").value;

    const texto = `📍 PAGMOTORS (PORTO ALEGRE)<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>

    ${marca} ${modelo}<br><br>

    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>

    ⏳Ano: ${ano}<br>
    🎛KM: ${km}<br>
    ⛽ Combustível: ${combustivel}<br>
    🕹Cambio: ${tipo_cambio}<br>
    🛞Pneus: ${status_pneu}<br>
    📄Ipva: ${ipva} - PAGO<br>
    ⚠ Placa: ${placa}<br>
    🔖Opcionais: ${opcionais}<br>
    📝Avaliação Superficial: ${avaliacao_superficial}<br>
    📎Observação: ${observacoes}<br><br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    📷PARA MAIS FOTOS CLICK NO LINK<br>
    ${link_fotos}<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    📈Valor Fipe: ${valor_fipe}<br>
    📉Investimento: ${custo_investimento}<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    CONTATO PAGMOTORS <br>
    📲 (51)99994-2576`;

    document.getElementById("texto").innerHTML = texto;
}

function copiarTexto() {
    const texto = document.getElementById("texto").innerText;

    navigator.clipboard.writeText(texto)
        .then(() => alert("Texto copiado com sucesso!"))
        .catch((error) => alert(`Ocorreu um erro ao copiar o texto: ${error}`));
}
