const textToType = "./OPSEC_PROTOCOL.sh";
const typingElement = document.getElementById('typing-effect');
const el = document.getElementById('glitch-name');
let i = 0;

function typeWriter() {
  if (i < textToType.length) {
    typingElement.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Velocidade de digitação
  }
}

function triggerGlitch() {
  // Gera valores aleatórios para o efeito
  const shift = Math.random() * 10 - 5; // Deslocamento entre -5px e 5px
  const topCut = Math.random() * 100;
  const bottomCut = Math.random() * 100;

  // Aplica os valores nas variáveis CSS
  el.style.setProperty('--gap-horizontal', `${shift}px`);
  el.style.setProperty('--clip-top', `inset(${topCut}% 0 0 0)`);
  el.style.setProperty('--clip-bottom', `inset(0 0 ${bottomCut}% 0)`);

  // Define um tempo aleatório para o próximo "frame" do glitch (rápido)
  // e um tempo longo para o texto ficar "limpo"
  const isHeavyGlitch = Math.random() > 0.9;
  const nextTick = isHeavyGlitch ? Math.random() * 100 : Math.random() * 3000 + 1000;

  setTimeout(() => {
    // Reset temporário para o texto não ficar torto o tempo todo
    if (!isHeavyGlitch) {
        el.style.setProperty('--gap-horizontal', `0px`);
        el.style.setProperty('--clip-top', `inset(0 0 0 0)`);
        el.style.setProperty('--clip-bottom', `inset(0 0 0 0)`);
    }
    triggerGlitch();
  }, nextTick);
}


// Inicia quando a página carrega
window.onload = typeWriter;

// Inicia o ciclo
triggerGlitch();
