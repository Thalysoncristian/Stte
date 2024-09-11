// Função para adicionar horas a partir da hora atual
function adicionarHoras(horas) {
    let agora = new Date();
    agora.setHours(agora.getHours() + horas);
    return agora.toLocaleString('pt-BR').toUpperCase();
}

// Função para obter a hora atual
function obterHoraAtual() {
    let agora = new Date();
    return agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }).toUpperCase();
}

// Função para gerar o informativo de acionamento
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
    const horaAcionamento = obterHoraAtual();
    const previsaoTec = adicionarHoras(prev_tecnico);
    const sla = adicionarHoras(slaHoras);

    const resultado = `
        INFORMATIVO DE ACIONAMENTO
        ANALISTA NOC: ${analista}
        SUPERVISOR: ${supervisor}
        CN: ${cn}
        ESTAÇÃO: ${estacao}
        ALARME: ${alarme}
        AMI: ${ami}
        INC: ${ral}
        HORA DO ACIONAMENTO: ${horaAcionamento}
        PREVISÃO: ${previsaoTec}
        SLA: ATÉ ${sla}
        TÉCNICO: ${tecnico}
    `;

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('copiarBtn').style.display = 'block';
}

// Função para copiar o informativo gerado
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

// Função para alternar entre modo claro e escuro
function toggleMode() {
    const body = document.body;
    const modeButton = document.getElementById('toggleModeBtn');
    
    // Alterna a classe light-mode
    body.classList.toggle('light-mode');
    
    // Muda o texto do botão conforme o modo atual
    if (body.classList.contains('light-mode')) {
        modeButton.textContent = 'Modo Escuro';
    } else {
        modeButton.textContent = 'Modo Claro';
    }
}
