// Muestra una sección y marca el link activo (todo en el mismo HTML)
function mostrar(id, link) {
  // 1) Secciones: activar solo la solicitada
  document.querySelectorAll('main .section-card').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  // 2) Título principal: visible solo en "inicio"
  const title = document.querySelector('.main-title');
  if (title) title.style.display = (id === 'inicio') ? '' : 'none';

  // 3) Menú: marcar link activo (sin afectar Registro/Login)
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  if (link) link.classList.add('active');

  // Evitar salto al tope de la página por el href="#"
  return false;
}

// Opcional: forzar estado inicial al cargar
document.addEventListener('DOMContentLoaded', () => {
  // Si entras directo a index, asegúrate de ver INICIO
  mostrar('inicio', document.querySelector('.nav-links a[onclick*="inicio"]'));
});
