// BASE DE DATOS DE ACTIVIDADES Y CONFERENCIAS
const listaActividades = [
  {
    id: "acto-inaugural",
    titulo: "Acto inaugural de las 100 Horas de Astronomía",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "8:30 a.m. – 8:55 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Autoridades e invitados",
    bioExpositor: "Acto de apertura del evento.",
    descripcion: "Ceremonia inaugural de las 100 Horas de Astronomía.",
    estado: "upcoming",
    portada: "assets/img/logos/100-horas-astronomia.png",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "kenia-rodriguez",
    titulo: "Trayectoria de las 100 Horas de Astronomía en Panamá",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "9:00 a.m. – 9:25 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Mgtr. Kenia Rodríguez",
    bioExpositor: "Conferencista de la Universidad de Panamá.",
    descripcion: "Conferencia sobre el desarrollo y alcance de las 100 Horas de Astronomía en Panamá.",
    estado: "upcoming",
    portada: "assets/img/personas/Profesora Kenia Rodríguez.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "ramiro-villareal",
    titulo: "Cerca del Horizonte de Eventos de un Agujero Negro de Schwarzschild",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "9:30 a.m. – 9:55 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Mgtr. Ramiro Villareal",
    bioExpositor: "Conferencista de la Universidad de Panamá.",
    descripcion: "Conferencia sobre física gravitacional y agujeros negros.",
    estado: "upcoming",
    portada: "assets/img/personas/Profesor Ramiro Villareal.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "luis-marin",
    titulo: "Gaia como laboratorio computacional: datos, algoritmos y poblaciones estelares",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "10:00 a.m. – 10:25 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Mgtr. Luis Marín",
    bioExpositor: "Conferencista de la Universidad de Panamá.",
    descripcion: "Uso de catálogos astronómicos y herramientas computacionales para estudiar poblaciones estelares.",
    estado: "upcoming",
    portada: "assets/img/personas/Luis Marin.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "reina-rodriguez",
    titulo: "Clasificación Morfológica de Galaxias",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "10:30 a.m. – 10:55 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Lic. Reina Beatriz Rodríguez Rodríguez",
    bioExpositor: "Conferencista de la Universidad Tecnológica de Panamá.",
    descripcion: "Presentación sobre clasificación morfológica y análisis de galaxias.",
    estado: "upcoming",
    portada: "assets/img/personas/Reina Rodríguez.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "manuel-chacon",
    titulo: "Galaxias barradas: explorando su evolución a través del tiempo cósmico",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "11:30 a.m. – 11:55 a.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Dr. Manuel Alejandro Chacón",
    bioExpositor: "Conferencista de la Universidad Tecnológica de Panamá.",
    descripcion: "Conferencia sobre galaxias barradas y evolución galáctica.",
    estado: "upcoming",
    portada: "assets/img/personas/Manuel Alejandro.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "pablo-weigandt",
    titulo: "OAB: Tu Ventana al Cosmos",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "12:00 p.m. – 12:25 p.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Dr. Pablo Martín Weigandt Beckmann",
    bioExpositor: "Conferencista invitado.",
    descripcion: "Conferencia sobre divulgación y observación astronómica.",
    estado: "upcoming",
    portada: "assets/img/personas/Dr. Pablo Martín Weigandt Beckmann.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "carlos-fernandez",
    titulo: "Un Ingeniero en la Astronomía",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "1:30 p.m. – 1:55 p.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "MSc. Carlos Fernández",
    bioExpositor: "Conferencista invitado.",
    descripcion: "Conferencia sobre las aplicaciones de la ingeniería en la astronomía.",
    estado: "upcoming",
    portada: "assets/img/personas/Carlos Fernández.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "daniel-sega",
    titulo: "Ondas y Anillos Planetarios: La Onda Vertical en el Borde del Anillo A",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "2:00 p.m. – 2:25 p.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Dr. Daniel Sega",
    bioExpositor: "Conferencista invitado.",
    descripcion: "Conferencia sobre ondas y estructuras en los anillos planetarios.",
    estado: "upcoming",
    portada: "assets/img/personas/Dr. Daniel Sega.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  },
  {
    id: "rodney-delgado",
    titulo: "Galaxias y evolución cósmica: cómo reconstruimos la historia del Universo",
    fecha: "Jueves 1 de octubre de 2026",
    horario: "3:30 p.m. – 3:55 p.m.",
    modalidad: "Presencial · Auditorio Bernardo Lombardo",
    expositor: "Dr. Rodney Delgado-Serrano",
    bioExpositor: "Conferencista invitado.",
    descripcion: "Conferencia sobre evolución de galaxias e historia cósmica.",
    estado: "upcoming",
    portada: "assets/img/personas/Dr Rodney Delgado.jpeg",
    evidencias: { asistentes: null, resumen: "", fotos: [], videoUrl: "" }
  }
];

// Cargar tarjetas al iniciar
document.addEventListener("DOMContentLoaded", () => {
  renderActivities(listaActividades);
});

// Renderizar tarjetas en la grilla
function renderActivities(actividades) {
  const container = document.getElementById("activities-container");
  container.innerHTML = "";

  if (actividades.length === 0) {
    container.innerHTML = `
      <div class="empty-state-card bento-card">
        <span class="empty-icon" aria-hidden="true">🪐</span>
        <h3>¡El evento está por comenzar!</h3>
        <p>Las evidencias, listas de asistencia, fotografías y grabaciones de cada conferencia se irán publicando aquí al finalizar cada jornada del evento.</p>
        <span class="stay-tuned-badge">🚀 ¡Mantente atento a las actualizaciones!</span>
      </div>
    `;
    return;
  }

  actividades.forEach((act) => {
    const isCompleted = act.estado === "completed";
    const badgeText = isCompleted ? "Concluida" : "Próximamente";
    const badgeClass = isCompleted ? "completed" : "upcoming";

    const card = document.createElement("div");
    card.className = "activity-card";
    card.innerHTML = `
      <img src="${act.portada}" alt="${act.titulo}" class="card-banner" loading="lazy" onerror="this.onerror=null;this.src='assets/img/logos/100-horas-astronomia.png'">
      <div class="card-content">
        <span class="status-badge ${badgeClass}">${badgeText}</span>
        <h3>${act.titulo}</h3>
        <p><strong>Fecha:</strong> ${act.fecha}</p>
        <p><strong>Expositor:</strong> ${act.expositor}</p>
        <button class="btn-detail" onclick="openModal('${act.id}')">
          ${isCompleted ? "📸 Ver Evidencias y Video" : "ℹ️ Ver Información"}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filtrar por estado
function filterActivities(status, button) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  (button || document.querySelector(`.filter-btn[onclick*="${status}"]`))?.classList.add("active");

  if (status === "all") {
    renderActivities(listaActividades);
  } else {
    const filtradas = listaActividades.filter(a => a.estado === status);
    renderActivities(filtradas);
  }
}

// Abrir modal flotante
function openModal(id) {
  const act = listaActividades.find(a => a.id === id);
  if (!act) return;

  const modalBody = document.getElementById("modal-body");
  const isCompleted = act.estado === "completed";

  modalBody.innerHTML = `
    <h2>${act.titulo}</h2>
    <p style="color: #38bdf8;"><strong>Fecha y Hora:</strong> ${act.fecha} | ${act.horario}</p>
    <p><strong>Modalidad:</strong> ${act.modalidad}</p>
    <hr style="margin: 15px 0; border-color: rgba(255,255,255,0.1);">
    
    <h3>Expositor / Responsable</h3>
    <p><strong>${act.expositor}</strong></p>
    <p><em>${act.bioExpositor}</em></p>
    
    <h3 style="margin-top:15px;">Descripción</h3>
    <p>${act.descripcion}</p>

    ${isCompleted ? `
      <hr style="margin: 20px 0; border-color: rgba(255,255,255,0.1);">
      <h3 style="color: #4ade80;">Evidencias de la Actividad</h3>
      <p><strong>Asistentes:</strong> ~${act.evidencias.asistentes} participantes</p>
      <p><strong>Reseña:</strong> ${act.evidencias.resumen}</p>

      ${act.evidencias.videoUrl ? `
        <h4 style="margin-top:15px;">Grabación de la Conferencia:</h4>
        <div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:10px; margin-top:10px;">
          <iframe src="${act.evidencias.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
        </div>
      ` : ''}
      
      ${act.evidencias.fotos.length > 0 ? `
        <h4 style="margin-top:15px;">Galería de Fotos:</h4>
        <div class="gallery-grid">
          ${act.evidencias.fotos.map(f => `<img src="${f}" alt="Evidencia">`).join('')}
        </div>
      ` : ''}
    ` : `
      <hr style="margin: 20px 0; border-color: rgba(255,255,255,0.1);">
      <p style="color: #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; border-radius: 8px;">
        📌 <em>Conferencia próxima. Tan pronto se realice, publicaremos aquí las fotos, lista de asistencia y el video grabado.</em>
      </p>
    `}
  `;

  document.getElementById("activity-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("activity-modal").style.display = "none";
}

const canvas = document.getElementById('bg-canvas') || createBgCanvas();
const ctx = canvas.getContext('2d');

let width, height;
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

// Si el canvas no está en el HTML, lo crea dinámicamente al fondo
function createBgCanvas() {
    const c = document.createElement('canvas');
    c.id = 'bg-canvas';
    c.style.position = 'fixed';
    c.style.top = '0';
    c.style.left = '0';
    c.style.width = '100vw';
    c.style.height = '100vh';
    c.style.zIndex = '-1'; // Detrás de todo
    c.style.pointerEvents = 'none';
    document.body.prepend(c);
    return c;
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
    // Parallax suave al mover el mouse
    mouseX = (e.clientX - width / 2) * 0.05;
    mouseY = (e.clientY - height / 2) * 0.05;
});

resizeCanvas();

// Generar Estrellas / Polvo Estelar
const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2,
    alpha: Math.random(),
    speed: Math.random() * 0.02 + 0.005
}));

// DIBUJAR RESPLANDOR DEL PLANETA (El "Shader" en Canvas 2D)
function drawPlanetHorizon() {
    // Limpia el canvas con el fondo oscuro base
    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, width, height);

    // 1. LUZ PRINCIPAL EN EL HORIZONTE (Curvatura de Planeta)
    const centerX = width / 2 + mouseX;
    const centerY = height + 150 + mouseY; // El planeta está justo abajo
    const radius = Math.max(width, height) * 0.8;

    const planetGlow = ctx.createRadialGradient(
        centerX, centerY, 50,         // Núcleo de luz
        centerX, centerY, radius      // Dispersión atmosférica
    );

    // Paleta Neón Espacial (Cian -> Púrpura -> Azul Profundo)
    planetGlow.addColorStop(0, 'rgba(56, 189, 248, 0.45)');  // Azul celeste brillante (Atmósfera)
    planetGlow.addColorStop(0.25, 'rgba(99, 102, 241, 0.25)'); // Púrpura cósmico
    planetGlow.addColorStop(0.5, 'rgba(15, 23, 42, 0.15)');   // Transición suave
    planetGlow.addColorStop(1, 'rgba(3, 7, 18, 0)');          // Espacio profundo

    ctx.fillStyle = planetGlow;
    ctx.fillRect(0, 0, width, height);

    // 2. DIBUJAR ESTRELLAS CON DESTELLO
    stars.forEach(star => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function animate() {
    drawPlanetHorizon();
    requestAnimationFrame(animate);
}

animate();
