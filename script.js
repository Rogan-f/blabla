document.addEventListener('DOMContentLoaded', function() {
    const mostrarFloresBtn = document.getElementById('mostrarFloresBtn');
    const floresContainer = document.querySelector('.flores');
  
    mostrarFloresBtn.addEventListener('click', function() {
      
      floresContainer.classList.add('mostrar');
    });
  });
  