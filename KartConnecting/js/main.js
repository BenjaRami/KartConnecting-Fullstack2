// Validación de formulario de registro
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("formRegistro");
  
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const password = document.getElementById("password").value.trim();
      const mensaje = document.getElementById("mensaje");

      // Resetear mensaje
      mensaje.textContent = "";
      mensaje.className = "message";

      // Validar nombre
      if (nombre.length < 3) {
        showError(mensaje, "⚠ El nombre debe tener al menos 3 caracteres.");
        highlightField("nombre", true);
        return;
      } else {
        highlightField("nombre", false);
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(correo)) {
        showError(mensaje, "⚠ Por favor ingresa un correo electrónico válido.");
        highlightField("correo", true);
        return;
      } else {
        highlightField("correo", false);
      }

      // Validar contraseña
      if (password.length < 6) {
        showError(mensaje, "⚠ La contraseña debe tener al menos 6 caracteres.");
        highlightField("password", true);
        return;
      } else {
        highlightField("password", false);
      }

      // Simular registro exitoso
      showSuccess(mensaje, "✅ ¡Registro exitoso! Redirigiendo...");
      
      // Limpiar formulario
      form.reset();
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    });
  }
// Cargar datos dinámicos desde JSON
function loadSampleData(){}
});

// Función para mostrar errores
function showError(element, message) {
  element.textContent = message;
  element.style.color = "#dc3545";
  element.classList.add("error");
}

// Función para mostrar éxito
function showSuccess(element, message) {
  element.textContent = message;
  element.style.color = "#198754";
  element.classList.add("success");
}

// Función para resaltar campos con error
function highlightField(fieldId, isError) {
  const field = document.getElementById(fieldId);
  if (isError) {
    field.style.borderColor = "#dc3545";
    field.style.boxShadow = "0 0 0 3px rgba(220, 53, 69, 0.2)";
  } else {
    field.style.borderColor = "#dee2e6";
    field.style.boxShadow = "none";
  }
}

// Función para cargar datos de ejemplo
function loadSampleData() {
  // Solo ejecutar en la página principal
  if (!document.getElementById("lista-torneos")) return;
  
  // Datos de ejemplo para torneos
  const torneos = [
    { nombre: "Torneo Primavera 2025", fecha: "15 Marzo 2025" },
    { nombre: "Copa Velocidad", fecha: "22 Abril 2025" }
  ];
  
  // Datos de ejemplo para equipos
  const equipos = [
    { nombre: "Equipo Rayo", miembros: 5 },
    { nombre: "Equipo Veloz", miembros: 4 }
  ];
  
  // Datos de ejemplo para jugadores
  const jugadores = [
    { nombre: "Carlos Méndez", puntos: 1200 },
    { nombre: "Ana Rodríguez", puntos: 1150 }
  ];
  
  // Mostrar torneos
  const torneosContainer = document.getElementById("lista-torneos");
  if (torneosContainer) {
    torneosContainer.innerHTML = torneos.map(t => `
      <div class="item-card">
        <h3>${t.nombre}</h3>
        <p>Fecha: ${t.fecha}</p>
      </div>
    `).join('');
  }
  
  // Mostrar equipos
  const equiposContainer = document.getElementById("lista-equipos");
  if (equiposContainer) {
    equiposContainer.innerHTML = equipos.map(e => `
      <div class="item-card">
        <h3>${e.nombre}</h3>
        <p>Miembros: ${e.miembros}</p>
      </div>
    `).join('');
  }
  
  // Mostrar jugadores
  const jugadoresContainer = document.getElementById("lista-jugadores");
  if (jugadoresContainer) {
    jugadoresContainer.innerHTML = jugadores.map(j => `
      <div class="item-card">
        <h3>${j.nombre}</h3>
        <p>Puntos: ${j.puntos}</p>
      </div>
    `).join('');
  }
}