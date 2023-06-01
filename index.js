function toggleValorMercado() {
    const valorMercadoInput = document.getElementById("valor_mercado");
    const temValorMercadoCheckbox = document.getElementById("tem_valor_mercado");

    valorMercadoInput.disabled = !temValorMercadoCheckbox.checked;
  }

  function gerarTexto() {
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const anoMod = document.getElementById("anoMod").value;
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
    const tem_valor_mercado = document.getElementById("tem_valor_mercado").checked;
    const valor_mercado = document.getElementById("valor_mercado").value;

    let texto = `📍 PAGMOTORS (PORTO ALEGRE)<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>

    ${marca} ${modelo}<br><br>

    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>

    ⏳Ano: ${ano}/${anoMod}<br>
    🎛KM: ${km}<br>
    ⛽ Combustível: ${combustivel}<br>
    🕹Cambio: ${tipo_cambio}<br>
    🛞Pneus: ${status_pneu}<br>
    📄Ipva: ${ipva}<br>
    ⚠ Placa: ${placa}<br>
    🔖Opcionais: ${opcionais}<br>
    📝Avaliação Superficial: ${avaliacao_superficial}<br>
    📎Observação: ${observacoes}<br><br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    📷PARA MAIS FOTOS CLICK NO LINK<br>
    ${link_fotos}<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    📈Valor Fipe: ${valor_fipe}<br>
    📉Investimento: ${custo_investimento}<br>`;

    if (tem_valor_mercado) {
      texto += `🏦Valor de Mercado: ${valor_mercado}<br>`;
    }

    texto += `▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>
    CONTATO PAGMOTORS <br>
    📲 (51)99994-2576`;
    
    document.getElementById("texto").innerHTML = texto;
  }

  function copiarTexto() {
    const texto = document.getElementById("texto").innerText;

    navigator.clipboard.writeText(texto)
      .then(() => alert("Texto copiado com sucesso!"))
      .catch((error) => alert(`Ocorreu um erro ao copiar o texto: ${error}`));
  }

  function visualizarFoto() {
    var fotoInput = document.getElementById("foto");
    var fotoPreview = document.getElementById("foto-preview");

    if (fotoInput.files && fotoInput.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        fotoPreview.src = e.target.result;
      }

      reader.readAsDataURL(fotoInput.files[0]);
    }
  }

  function compartilharWhatsApp() {
    var texto = document.getElementById("texto").value;
    var fotoInput = document.getElementById("foto");
    
    if (fotoInput.files.length > 0) {
      var foto = fotoInput.files[0];
      var formData = new FormData();
      formData.append("texto", texto);
      formData.append("foto", foto);
      
      // Enviar o formData para o servidor ou manipulá-lo de acordo com suas necessidades
      // ...
    } else {
      // Caso nenhum arquivo tenha sido selecionado, enviar apenas o texto
      var textoCodificado = encodeURIComponent(texto);
      var link = "https://api.whatsapp.com/send?text=" + textoCodificado;
      window.open(link);
    }
  }

  function exibirFotoPreview(event) {
    const input = event.target;
    const fotoContainer = document.querySelector(".foto-container");
    const texto = fotoContainer.querySelector("label");
  
    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        fotoContainer.style.backgroundImage = `url('${e.target.result}')`;
        texto.style.display = "none"; // Oculta o texto
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }