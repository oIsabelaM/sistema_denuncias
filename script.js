// Frases de Apoio (Fade suave)
const frases = [
    "Sua segurança é nossa prioridade absoluta.",
    "O anonimato é garantido por criptografia AES-256.",
    "Cada denúncia é o primeiro passo para a justiça.",
    "Este é um ambiente seguro e não rastreável.",
    "Sua identidade não será revelada em nenhuma etapa."
];

let pIdx = 0;
setInterval(() => {
    const txt = document.getElementById('support-msg');
    txt.style.opacity = 0;
    setTimeout(() => {
        pIdx = (pIdx + 1) % frases.length;
        txt.innerText = frases[pIdx];
        txt.style.opacity = 1;
    }, 500);
}, 6000);

// Gerar ID de Sessão Volátil
document.getElementById('session-id').innerText = Math.random().toString(36).substr(2, 10).toUpperCase();

// Seleção de Categoria
function setCat(btn) {
    document.querySelectorAll('.opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const badge = document.getElementById('cat-badge');
    badge.innerText = "Eixo: " + btn.innerText;
    badge.style.color = "var(--mint)";
    badge.style.borderColor = "var(--mint)";

    document.getElementById('formulario-denuncia').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Consulta de Status
function buscarStatus() {
    const input = document.getElementById('proto-search').value;
    if (input.length < 5) {
        alert("Insira um número de protocolo válido.");
        return;
    }
    document.getElementById('status-result').classList.remove('hidden');
    document.getElementById('status-result').scrollIntoView({ behavior: 'smooth' });
}

// Finalização da Denúncia
function enviarDenuncia() {
    const badgeTxt = document.getElementById('cat-badge').innerText;
    if (badgeTxt.includes("Nenhum")) {
        alert("Por favor, selecione uma categoria nos eixos acima.");
        return;
    }

    const protocolo = "SNPC-2026-" + Math.floor(100000 + Math.random() * 900000);
    
    document.querySelector('main').innerHTML = `
        <div style="background: white; padding: 60px; border-radius: 20px; text-align: center; margin-top: 50px; box-shadow: 0 20px 50px rgba(0,0,0,0.1);">
            <i class="fas fa-shield-alt" style="font-size: 5rem; color: #10b981;"></i>
            <h2 style="font-size: 2rem; color: #334155; margin-top: 20px;">Protocolo Gerado com Sucesso</h2>
            <p style="color: #64748b;">Sua denúncia foi enviada para o departamento de triagem sigilosa.</p>
            <div style="background: #f8fafc; padding: 30px; font-size: 2.5rem; font-weight: 900; color: #1e293b; border: 2px solid #e2e8f0; margin: 30px 0; letter-spacing: 3px;">
                ${protocolo}
            </div>
            <p style="color: #ef4444; font-weight: bold;"><i class="fas fa-exclamation-triangle"></i> Atenção: Anote seu código agora. Por questões de anonimato, este código não será enviado por e-mail e não poderá ser recuperado.</p>
            <button onclick="location.reload()" style="margin-top: 30px; background: #334155; color: white; border: none; padding: 15px 40px; border-radius: 8px; cursor: pointer; font-weight: bold;">Sair com Segurança</button>
        </div>
    `;
    window.scrollTo(0,0);
}

// Mostrar nomes de arquivos selecionados
document.getElementById('file-input').addEventListener('change', function() {
    const list = document.getElementById('file-names');
    list.innerHTML = "";
    for (let f of this.files) {
        list.innerHTML += `<div style="font-size:0.8rem; color:#10b981">📎 ${f.name}</div>`;
    }
});
