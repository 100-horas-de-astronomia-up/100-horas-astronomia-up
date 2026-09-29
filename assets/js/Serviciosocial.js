
document.addEventListener('DOMContentLoaded', () => {
    renderCabinet();

    const canvas = document.getElementById('gravity-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const orbitsCount = 6;
    let offsetX = 0;

    // Partículas que viajan en las órbitas horizontales
    const particles = Array.from({ length: 28 }, () => ({
        orbitIndex: Math.floor(Math.random() * orbitsCount),
        progress: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
        size: 1.5 + Math.random() * 2
    }));

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadiusY = height * 0.35; // Altura máxima de la elipse
        const maxRadiusX = width * 0.65;  // Ancho horizontal plano

        // Dibujar Órbitas Horizontales (Sin inclinación)
        for (let i = 1; i <= orbitsCount; i++) {
            const radiusX = (maxRadiusX / orbitsCount) * i;
            const radiusY = (maxRadiusY / orbitsCount) * i * 0.3; // Aplastadas horizontalmente

            ctx.beginPath();
            ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 + i * 0.03})`;
            ctx.lineWidth = 1.2;
            ctx.setLineDash([10, 14]); // Línea punteada
            ctx.stroke();
        }

        // Partículas viajando en trayectorias horizontales
        particles.forEach(p => {
            p.progress += p.speed;
            const i = p.orbitIndex + 1;
            const radiusX = (maxRadiusX / orbitsCount) * i;
            const radiusY = (maxRadiusY / orbitsCount) * i * 0.3;

            // Posición exacta en elipse plana
            const x = centerX + radiusX * Math.cos(p.progress);
            const y = centerY + radiusY * Math.sin(p.progress);

            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.shadowColor = '#38bdf8';
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
});

// ==========================================
// 2. EXPEDIENTES DE LOS 10 ESTUDIANTES
// ==========================================
const servicioSocialData = [
    {
        id: "EXP-001",
        estudiante: "Victor Bernal",
        rol: "Desarrollo Web & Plataforma Digital",
        horas: "100 Horas",
        proyecto: "Diseño y Programación del Sitio Oficial",
        resumen: "Co-implementación de la arquitectura 3D, desarrollo de componentes de interfaz y optimización del diseño responsivo para la plataforma.",
        detalles: "Victor colaboró activamente en la programación frontend, participando en la integración de modelos 3D y en la maquetación de la interfaz para garantizar la fluidez de la plataforma.",
        evidencias:{
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-002",
        estudiante: "Marco Gamboa",
        rol: "Desarrollo Web & Plataforma Digital",
        horas: "100 Horas",
        proyecto: "Diseño y Programación del Sitio Oficial",
        resumen: "Co-desarrollo frontend para la estabilidad de la plataforma web y refinamiento de secciones",
        detalles: "Marco colaboró activamente en la maquetación y ajuste de detalles en diversas secciones del sitio web, enfocándose en la estabilidad y optimización de la plataforma.",
        evidencias:{
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-003",
        estudiante: "Iker Madrid",
        rol: "Desarrollo Web & Plataforma Digital",
        horas: "100 Horas",
        proyecto: "Diseño y Arquitectura del Sitio Oficial",
        resumen: "Líder técnico del desarrollo web. Implementación de arquitectura interactiva 3D, responsive design y gestión de componentes para el evento.",
        detalles: "Iker coordinó la arquitectura general e implementó la mayor parte del código base de la plataforma web de las '100 Horas de Astronomía', optimizando el rendimiento, la interactividad 3D y la adaptabilidad en dispositivos móviles.",
       evidencias:{
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-004",
        estudiante: "Yedida Aboulafia",
        rol: "Coordinación de la Publicidad ",
        horas: "100 Horas",
        proyecto: "Estrategia de Publicidad y Difusión",
        resumen: "Coordinación de la estrategia publicitaria, gestión de contenidos y difusión en medios para la promoción del evento.",
        detalles: "Yedida lideró el diseño y la ejecución de las campañas publicitarias, gestionando la difusión en plataformas digitales para maximizar el alcance y la asistencia al evento.",
        evidencias:{
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-005",
        estudiante: "Carla Fawcet",
        rol: "Gestión de Redes y Prensa",
        horas: "100 Horas",
        proyecto: "Difusión Institucional y Medios",
        resumen: "Creación de contenido visual, diseño de afiches promocionales y cobertura fotográfica de las conferencias.",
        detalles: "Carla gestionó el material multimedia difundido antes y durante el evento, aumentando el alcance del evento en la comunidad universitaria.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-006",
        estudiante: "Naddia Mclean",
        rol: "Registro y Atención a Delegaciones",
        horas: "100 Horas",
        proyecto: "Acreditación y Protocolo",
        resumen: "Gestión de mesa de entrada, entrega de certificados y atención a conferencistas invitados.",
        detalles: "Naddia lideró la recepción de asistentes e invitados internacionales, coordinando los horarios y listas de asistencia de cada bloque.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-007",
        estudiante: "Gabriel Emiliani",
        rol: "Soporte Logístico e Infraestructura",
        horas: "100 Horas",
        proyecto: "Montaje de Exposición y Auditorios",
        resumen: "Acondicionamiento de auditorios, control de aforo y asistencia logística del personal de la Facultad de Ciencias.",
        detalles: "Gabriel participó activamente en el armado técnico y distribución de espacios físicos para garantizar la seguridad y orden en las actividades.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-008",
        estudiante: "Oliver Lira",
        rol: "Telescopía y Óptica Interactiva",
        horas: "100 Horas",
        proyecto: "Alineación Óptica y Exposición",
        resumen: "Mantenimiento y calibración previa de equipos ópticos e interacción guiada con visitantes.",
        detalles: "Oliver estuvo a cargo del ensamblaje y preparación de los instrumentos ópticos utilizados durante los talleres solares y nocturnos.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-009",
        estudiante: "Javier Lopez",
        rol: "Soporte de Moderación de Preguntas",
        horas: "100 Horas",
        proyecto: "Interacción en Conferencias Magisteriales",
        resumen: "Moderación de preguntas del público en sesiones híbridas y apoyo en la agenda temática.",
        detalles: "Javier facilitó el espacio de preguntas y respuestas al finalizar cada ponencia, canalizando las inquietudes tanto presenciales como virtuales.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    },
    {
        id: "EXP-010",
        estudiante: "Orlando Lopez",
        rol: "Evaluación y Control de Calidad",
        horas: "100 Horas",
        proyecto: "Sondeos de Impacto y Estadísticas",
        resumen: "Recopilación de datos de satisfacción del evento y apoyo en el cierre operativo.",
        detalles: "Orlando administró las encuestas de evaluación del evento para medir el impacto de las jornadas astronómicas en la comunidad.",
        evidencias: {
      fotos: ["evidencias/victor_1.jpg", "evidencias/victor_2.jpg"],
      videos: ["evidencias/victor_demo.mp4"],
      pdfs: ["evidencias/victor_informe.pdf"],
      ppts: ["https://docs.google.com/presentation/d/e/.../embed"]
    }
    }
];

// ==========================================
// 3. RENDERIZADO DEL ARCHIVADOR
// ==========================================
function renderCabinet() {
    const cabinet = document.getElementById("cabinet-grid");
    if (!cabinet) return;

    cabinet.innerHTML = servicioSocialData.map(data => `
        <div class="folder-card" onclick="openFileModal('${data.id}')">
            <span class="folder-tab-label">${data.id}</span>
            <span class="folder-badge">${data.horas}</span>
            
            <h3 class="student-name">
                <i class="fa-regular fa-folder-open"></i> ${data.estudiante}
            </h3>
            <span class="student-role">${data.rol}</span>
            
            <div class="folder-divider"></div>
            
            <h4 class="project-title">${data.proyecto}</h4>
            <p class="project-desc">${data.resumen}</p>
            
            <button class="btn-open-folder" type="button">
                <i class="fa-solid fa-file-lines"></i> Abrir Expediente
            </button>
        </div>
    `).join('');
}

// ==========================================
// 4. FUNCIONES DEL MODAL DE EXPEDIENTE
// ==========================================
function openFileModal(id) {
    const data = servicioSocialData.find(s => s.id === id);
    if (!data) return;

    // 1. Obtener las listas con fallback por si no existen
    const fotos = data.evidencias?.fotos || [];
    const videos = data.evidencias?.videos || [];
    const pdfs = data.evidencias?.pdfs || [];
    const ppts = data.evidencias?.ppts || [];

    // 2. Generar el HTML para las fotos
    let evidenciasHTML = '';

    if (fotos.length > 0) {
        evidenciasHTML += `
            <p style="color: #38bdf8; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px;">Galería de Fotos:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; margin-bottom: 15px;">
                ${fotos.map(foto => `
                    <img src="${foto}" alt="Evidencia de ${data.estudiante}" 
                         style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(56,189,248,0.3);"
                         onerror="this.src='https://via.placeholder.com/150/0f172a/38bdf8?text=Evidencia'">
                `).join('')}
            </div>
        `;
    }

    // 3. Generar el HTML para los videos
    if (videos.length > 0) {
        evidenciasHTML += `
            <p style="color: #38bdf8; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px; margin-top: 10px;">Videos Registrados:</p>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px;">
                ${videos.map(video => `
                    <video controls src="${video}" style="width: 100%; border-radius: 8px; border: 1px solid rgba(56,189,248,0.3); background: #000;"></video>
                `).join('')}
            </div>
        `;
    }

    // 4. Generar el HTML para Documentos PDF
    if (pdfs.length > 0) {
        evidenciasHTML += `
            <p style="color: #38bdf8; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px; margin-top: 10px;">Documentos PDF:</p>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px;">
                ${pdfs.map(pdf => `
                    <div style="border: 1px solid rgba(56,189,248,0.3); border-radius: 8px; overflow: hidden; padding: 8px; background: rgba(15, 23, 42, 0.6);">
                        <iframe src="${pdf}" style="width: 100%; height: 260px; border: none; border-radius: 6px;"></iframe>
                        <a href="${pdf}" target="_blank" style="display: inline-block; color: #38bdf8; font-size: 0.85rem; margin-top: 6px; text-decoration: none;">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir PDF a pantalla completa
                        </a>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 5. Generar el HTML para Presentaciones
    if (ppts.length > 0) {
        evidenciasHTML += `
            <p style="color: #38bdf8; font-size: 0.85rem; font-weight: bold; margin-bottom: 8px; margin-top: 10px;">Presentaciones:</p>
            <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 15px;">
                ${ppts.map(ppt => `
                    <div style="border: 1px solid rgba(56,189,248,0.3); border-radius: 8px; overflow: hidden; padding: 8px; background: rgba(15, 23, 42, 0.6);">
                        <iframe src="${ppt}" style="width: 100%; height: 260px; border: none; border-radius: 6px;"></iframe>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Si no hay ninguna evidencia cargada
    if (fotos.length === 0 && videos.length === 0 && pdfs.length === 0 && ppts.length === 0) {
        evidenciasHTML = `<p style="color: #94a3b8; font-size: 0.9rem;">No hay archivos de evidencia adjuntos para este estudiante.</p>`;
    }

    // 6. Inyectar todo en el modal
    const modalBody = document.getElementById("file-modal-body");
    const modal = document.getElementById("file-modal");

    modalBody.innerHTML = `
        <div style="border-bottom: 2px solid rgba(56, 189, 248, 0.4); padding-bottom: 12px; margin-bottom: 20px;">
            <span style="color: #38bdf8; font-size: 0.85rem; font-weight: bold; text-transform: uppercase;">Acreditación Oficial • ${data.id}</span>
            <h2 style="color: #fff; font-size: 1.8rem; margin-top: 4px;">${data.estudiante}</h2>
            <p style="color: #94a3b8; font-size: 0.95rem;">${data.rol}</p>
        </div>

        <div style="margin-bottom: 20px;">
            <p style="color: #e2e8f0; margin-bottom: 6px;"><strong>Proyecto:</strong> ${data.proyecto}</p>
            <p style="color: #4ade80; margin-bottom: 15px;"><strong>Horas Validadas:</strong> ${data.horas}</p>
            
            <h4 style="color: #38bdf8; margin-bottom: 8px;">Descripción del Aporte:</h4>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6;">${data.detalles}</p>
        </div>

        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
            <h4 style="color: #fff; margin-bottom: 12px;"><i class="fa-solid fa-paperclip"></i> Evidencias Registradas</h4>
            ${evidenciasHTML}
        </div>
    `;

    modal.style.display = "flex";
}

function closeFileModal() {
    const modal = document.getElementById("file-modal");
    if (modal) modal.style.display = "none";
}
