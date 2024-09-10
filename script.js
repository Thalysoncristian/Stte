function adicionarHoras(horas) {
    let agora = new Date();
    agora.setHours(agora.getHours() + horas);
    return agora.toLocaleString('pt-BR').toUpperCase();
}

function obterHoraAtual() {
    let agora = new Date();
    return agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }).toUpperCase();
}

function gerarInformativo() {
    const analista = document.getElementById('analista').value.toUpperCase();
    const supervisor = document.getElementById('supervisor').value.toUpperCase();
    const cn = document.getElementById('cn').value;
    const estacao = document.getElementById('estacao').value.toUpperCase();
    const alarme = document.getElementById('alarme').value.toUpperCase();
    const ami = document.getElementById('ami').value.toUpperCase();
    const ral = document.getElementById('ral').value.toUpperCase() || "SEM INC";
    const prev_tecnico = parseInt(document.getElementById('prev_tecnico').value);
    const tecnico = document.getElementById('tecnico').value.toUpperCase();

    const slaHoras = alarme === "AFRET" ? 24 : 4;
    const horaAcionamento = obterHoraAtual(); // Apenas hora
    const previsaoTec = adicionarHoras(prev_tecnico);
    const sla = adicionarHoras(slaHoras);

    const resultado = `
        GERADO COM SUCESSO....
        INFORMATIVO DE ACIONAMENTO
        ANALISTA NOC: ${analista}
        SUPERVISOR DE SOBREAVISO: ${supervisor}
        CN: ${cn}
        ESTAÇÃO: ${estacao}
        ALARME FALHA: ${alarme}
        AMI: ${ami}
        INC: ${ral}
        HORA DO ACIONAMENTO DO TÉCNICO: ${horaAcionamento}
        PREVISÃO DO TÉCNICO: ${previsaoTec}
        SLA: ATÉ ${sla}
        TÉCNICO ACIONADO: ${tecnico}
    `;

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('copiarBtn').style.display = 'block';
}

function copiarTexto() {
    const texto = document.getElementById('resultado').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert("Informações copiadas!");
}
