const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  // atribui os valores às variáveis
  let dateToday = new Date()
  let hr = dateToday.getHours()
  let min = dateToday.getMinutes()
  let sec = dateToday.getSeconds()

  // Adiciona o 0 se for menor que 10
  if (hr < 10) hr = '0' + hr
  if (min < 10) min = '0' + min
  if (sec < 10) sec = '0' + sec

  //altera os valores na DOM
  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = sec
})
