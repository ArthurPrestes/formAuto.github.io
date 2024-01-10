function toggleValorMercado() {
    const valorMercadoInput = document.getElementById("valor_mercado");
    const temValorMercadoCheckbox = document.getElementById("tem_valor_mercado");

    valorMercadoInput.disabled = !temValorMercadoCheckbox.checked;
  }


  function toggleInput(checkboxId, inputId) {
    var checkbox = document.getElementById(checkboxId);
    var input = document.getElementById(inputId);
    
    if (checkbox.checked) {
      input.disabled = false;
    } else {
      input.disabled = true;
    }
  } 

  function gerarTexto() {
    const marca = document.getElementById("marca").value;
    const check_marca = document.getElementById("check_marca").checked;

    const modelo = document.getElementById("modelo").value;
    const check_modelo = document.getElementById("check_modelo").checked;

    const ano = document.getElementById("ano").value;
    const check_ano = document.getElementById("check_ano").checked;

    const anoMod = document.getElementById("anoMod").value;
    const check_anoMod = document.getElementById("check_anoMod").checked;

    const km = document.getElementById("km").value;
    const check_km = document.getElementById("check_km").checked;

    const combustivel = document.getElementById("combustivel").value;
    const check_combustivel = document.getElementById("check_combustivel").checked;

    const tipo_cambio = document.getElementById("tipo_cambio").value;
    const check_tipo_cambio = document.getElementById("check_tipo_cambio").checked;

    const status_pneu = document.getElementById("status_pneu").value;
    const check_status_pneu = document.getElementById("check_status_pneu").checked;

    const ipva = document.getElementById("ipva").value;
    const check_ipva = document.getElementById("check_ipva").checked;

    const placa = document.getElementById("placa").value;
    const check_placa = document.getElementById("check_placa").checked;

    const opcionais = document.getElementById("opcionais").value;
    const check_opcionais = document.getElementById("check_opcionais").checked;

    const avaliacao_superficial = document.getElementById("avaliacao_superficial").value;
    const check_avaliacao_superficial = document.getElementById("check_avaliacao_superficial").checked;

    const observacoes = document.getElementById("observacoes").value;
    const check_observacoes = document.getElementById("check_observacoes").checked;

    const valor_fipe = document.getElementById("valor_fipe").value;
    const tem_valor_fipe = document.getElementById("tem_valor_fipe").checked;

    const custo_investimento = document.getElementById("custo_investimento").value;
    const tem_valor_invest = document.getElementById("tem_valor_invest").checked;

    const link_fotos = document.getElementById("link_fotos").value;
    const tem_link_fotos = document.getElementById("tem_link_fotos").checked;

    const tem_valor_mercado = document.getElementById("tem_valor_mercado").checked;
    const valor_mercado = document.getElementById("valor_mercado").value;

    const checkContatoPagMotors = document.getElementById("checkContatoPagMotors").checked;

    const checkContatoArthur = document.getElementById("checkContatoArthur").checked;
    
    const checkContatoHenrique = document.getElementById("checkContatoHenrique").checked;
  

    function adicionarParteDecimal(numero) {
      if (/\.\d{2}$/.test(numero)) {
        numero = numero.replace('.', ',');
      } else if (!/\,\d{2}$/.test(numero)) {
        numero += ',00';
      }
      return numero;
    }
    
        
    var fipe = adicionarParteDecimal(valor_fipe);
    var investimento = adicionarParteDecimal(custo_investimento);

    let texto = `📍 *PAGMOTORS (PORTO ALEGRE)*<br>
    ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>`;

    if(check_marca){
      texto += `*${marca} `;
    }

    if(check_modelo){
      texto += `${modelo}*<br><br>
      ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>`;
    }

    if(check_ano & check_anoMod){
      texto += `⏳Ano: ${ano}/${anoMod}<br>`;
    }else if(check_ano){
      texto += `⏳Ano: ${ano}<br>`;
    }else if(check_anoMod){
      texto += `⏳Ano: ${anoMod}<br>`;
    }

    if(check_km){
      texto += `🎛KM: ${km}<br>`;
    }

    
    if(check_combustivel){
      texto += `⛽ Combustível: ${combustivel}<br>`;
    }

    
    if(check_tipo_cambio){
      texto += `🕹Cambio: ${tipo_cambio}<br>`;
    }

    
    if(check_status_pneu){
      texto += `🛞Pneus: ${status_pneu}<br>`;
    }
    
    if(check_ipva){
      texto += `📄Ipva: ${ipva}<br>`;
    }
    
    if(check_placa){
      var quantidade_digitos = placa.toString().length;
      console.log(quantidade_digitos);
      if(placa.toString().length === 7){
        first_placa = placa[0]
        last_placa = placa[6]
        texto +=`⚠ Placa:${first_placa} final ${last_placa}<br>`;
      }else{
        texto +=`⚠ Placa: ${placa}<br>`;
      }
    }

    if(check_opcionais){
      texto +=`🔖Opcionais: ${opcionais}<br>`;
    }

    if(check_avaliacao_superficial){
      texto +=`📝Avaliação Superficial: ${avaliacao_superficial}<br>`;
    }

    if(check_observacoes){
      texto +=`📎Observação: ${observacoes}<br>`
    }
    
    if (tem_link_fotos) {
      texto += 
      `▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br>
      📷PARA MAIS FOTOS CLICK NO LINK<br>
      ${link_fotos}<br>`;
    }
    
    if(tem_valor_fipe){
    texto += 
    `▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br>
    📈Valor Fipe: R$ ${fipe}<br>`;
    }

    if (tem_valor_invest) {
      texto += `📉*Investimento: R$ ${investimento}*<br>`;
    }

    if (tem_valor_mercado) {
      texto += `🏦Valor de Mercado: ${valor_mercado}<br>`;
    }


    if(checkContatoPagMotors || checkContatoArthur || checkContatoHenrique){
      texto += `▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃<br><br>`;

      if (checkContatoPagMotors) {
        texto += `*CONTATO PAGMOTORS* <br>
        📲 *(51)99994-2576* <br>`;
      }
      if (checkContatoArthur) {
        texto += `*NEGOCIADOR: ARTHUR PRESTES* <br>
        📲 *(51)99549-9811* <br>`;
      }
      if (checkContatoHenrique) {
        texto += `*GESTOR: HENRIQUE GABRIEL* <br>
        📲 *(51)98189-7086* <br>`;
      }
    }
    
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
    var texto = document.getElementById("texto").innerText;
    var fotoInput = document.getElementById("foto");

    if (fotoInput.files.length > 0) {
      var foto = fotoInput.files[0];
      var textoCodificado = encodeURIComponent(texto);
      
      // Criar um link para a imagem
      var imagemLink = window.URL.createObjectURL(foto);
      
      // Montar a mensagem com a imagem
      var mensagem = textoCodificado + "%0A" + imagemLink;
      
      // Criar o link para o WhatsApp
      var link = "https://api.whatsapp.com/send?text=" + mensagem;
      window.open(link);

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