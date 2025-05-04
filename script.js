const dataInicial = new Date("2025-04-06T00:00:00");
const contador = document.getElementById("contador");

function atualizarContador() {
  const agora = new Date();
  const diffMs = agora - dataInicial;

  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);

  
  contador.textContent = `${dias} dias, ${horas} horas e ${minutos} minutos`;


}

atualizarContador();
setInterval(atualizarContador, 60000); // Atualiza a cada minuto