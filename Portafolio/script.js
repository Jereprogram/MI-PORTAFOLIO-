document.addEventListener('DOMContentLoaded', function() {
    // Redirección para el Proyecto 1 
    const proyecto1 = document.querySelector('.proyecto.proyecto1');
    proyecto1.addEventListener('click', function() {
      window.open('https://jereprogram.github.io/Proyecto1-Calculadora/', '_blank');
    });
  
    // Redirección para el Proyecto 2 
    const proyecto2 = document.querySelector('.proyecto.proyecto2');
    proyecto2.addEventListener('click', function() {
      window.open('https://jereprogram.github.io/Proyecto2-Generador-de-contrase-as/', '_blank');
    });
  
    // Redirección para el Proyecto 3 
    const proyecto3 = document.querySelector('.proyecto.proyecto3');
    proyecto3.addEventListener('click', function() {
      window.open('https://jereprogram.github.io/Proyecto3-Simulador-de-cuenta-bancaria/', '_blank');
    });
  });
  