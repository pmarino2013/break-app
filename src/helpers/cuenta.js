// Establecer la fecha de finalización de la cuenta regresiva
var endDate = new Date("2023-12-31 23:59:59").getTime();

// Actualizar la cuenta regresiva cada segundo
var countdown = setInterval(function () {
  // Obtener la fecha y hora actual
  var now = new Date().getTime();

  // Calcular la diferencia entre la fecha de finalización y la fecha actual
  var distance = endDate - now;

  // Calcular los días, horas, minutos y segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Mostrar el tiempo restante en el formato deseado
  console.log(
    "Tiempo restante: " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s"
  );

  // Si la cuenta regresiva ha terminado, mostrar un mensaje
  if (distance < 0) {
    clearInterval(countdown);
    console.log("¡La cuenta regresiva ha terminado!");
  }
}, 1000);
