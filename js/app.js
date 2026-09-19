// ============================================================
//  APP - Router simple con hash (#/ y #/mascota/<id>)
// ============================================================

const app = document.getElementById("app");
const btnBack = document.getElementById("btnBack");

// Imagen de respaldo si la foto no existe todavía
const PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
       <rect width="200" height="200" fill="#f1e7d8"/>
       <text x="100" y="112" font-size="70" text-anchor="middle">🐾</text>
     </svg>`
  );

function imgTag(src, alt, cls = "") {
  return `<img src="${src}" alt="${alt}" class="${cls}" loading="lazy"
              onerror="this.onerror=null;this.src='${PLACEHOLDER}';this.classList.add('img--placeholder')">`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// ---------------- Vistas ----------------

function renderHome() {
  btnBack.hidden = true;
  document.title = "Mascotas Malmaceda";

  app.innerHTML = `
    <section class="hero">
      <h1>Nuestras mascotas</h1>
      <p>Toca una tarjeta para ver su información y cómo contactarnos.</p>
    </section>

    <section class="grid">
      ${MASCOTAS.map(
        (m) => `
        <a href="#/mascota/${m.id}" class="card" aria-label="Ver perfil de ${escapeHtml(m.nombre)}">
          <div class="card__photo">
            ${imgTag(m.foto, `Foto de ${escapeHtml(m.nombre)}`)}
          </div>
          <div class="card__body">
            <h2 class="card__name">${escapeHtml(m.nombre)}</h2>
            <p class="card__meta">${escapeHtml(m.raza)} · ${escapeHtml(m.edad)}</p>
            <span class="card__cta">Ver perfil →</span>
          </div>
        </a>`
      ).join("")}
    </section>
  `;
}

function renderDetalle(id) {
  const m = MASCOTAS.find((x) => x.id === id);
  if (!m) return renderNotFound();

  btnBack.hidden = false;
  document.title = `${m.nombre} · Mascotas Malmaceda`;

  const datos = [
    ["Especie", m.especie],
    ["Raza", m.raza],
    ["Sexo", m.sexo],
    ["Edad", m.edad],
    ["Color", m.color],
    ["Tamaño", m.tamano],
    ["Peso", m.peso],
    ["Esterilizada", m.esterilizada ? "Sí" : "No"],
    ["Microchip", m.chip],
    ["Cumpleaños", m.cumpleanos]
  ];

  const mapEmbed = `https://maps.google.com/maps?q=${HOGAR.lat},${HOGAR.lng}&z=16&output=embed`;

  app.innerHTML = `
    <section class="profile">
      <div class="profile__photo">
        ${imgTag(m.foto, `Foto de ${escapeHtml(m.nombre)}`)}
      </div>
      <div class="profile__info">
        <span class="badge">${escapeHtml(m.especie)} · ${escapeHtml(m.sexo)}</span>
        <h1>${escapeHtml(m.nombre)}</h1>
        <p class="profile__desc">${escapeHtml(m.personalidad)}</p>
        <div class="profile__actions">
          ${DUENOS.map(
            (d) => `
            <a class="btn btn--whatsapp" target="_blank" rel="noopener"
               href="https://wa.me/${d.whatsapp}?text=${encodeURIComponent(`Hola, encontré a ${m.nombre}`)}">
               💬 WhatsApp ${escapeHtml(d.nombre.split(" ")[0])}
            </a>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Datos de ${escapeHtml(m.nombre)}</h2>
      <dl class="datos">
        ${datos
          .map(
            ([k, v]) => `
          <div class="datos__item">
            <dt>${k}</dt>
            <dd>${escapeHtml(v)}</dd>
          </div>`
          )
          .join("")}
      </dl>
      <div class="notas">
        <div class="nota">
          <h3>Señas particulares</h3>
          <p>${escapeHtml(m.senasParticulares)}</p>
        </div>
        <div class="nota">
          <h3>Salud</h3>
          <p>${escapeHtml(m.salud)}</p>
        </div>
        <div class="nota">
          <h3>Alimentación</h3>
          <p>${escapeHtml(m.comida)}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Sus dueños</h2>
      <div class="owners">
        ${DUENOS.map(
          (d) => `
          <article class="owner">
            <div class="owner__photo">${imgTag(d.foto, `Foto de ${escapeHtml(d.nombre)}`)}</div>
            <div class="owner__body">
              <h3>${escapeHtml(d.nombre)}</h3>
              <p class="owner__rel">${escapeHtml(d.relacion)}</p>
              <a class="owner__phone" href="tel:${d.telefono.replace(/\s+/g, "")}">📞 ${escapeHtml(d.telefono)}</a>
            </div>
          </article>`
        ).join("")}
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Su hogar</h2>
      <div class="home">
        <div class="home__info">
          <p class="home__addr">📍 ${escapeHtml(HOGAR.direccion)}</p>
          <p class="home__dist">${escapeHtml(HOGAR.distrito)}</p>
          <p class="home__ref"><strong>Referencia:</strong> ${escapeHtml(HOGAR.referencia)}</p>
          <a class="btn btn--primary" target="_blank" rel="noopener" href="${HOGAR.mapsUrl}">
            🗺️ Abrir en Google Maps
          </a>
        </div>
        <div class="home__map">
          <iframe src="${mapEmbed}" loading="lazy" allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade" title="Mapa del hogar"></iframe>
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section__title">Galería</h2>
      <div class="gallery">
        ${m.fotos.map((f, i) => `
          <figure class="gallery__item">
            ${imgTag(f, `${escapeHtml(m.nombre)} foto ${i + 1}`)}
          </figure>`).join("")}
      </div>
    </section>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderNotFound() {
  btnBack.hidden = false;
  app.innerHTML = `
    <section class="empty">
      <h1>Mascota no encontrada</h1>
      <a href="#/" class="btn btn--primary">Ir al inicio</a>
    </section>`;
}

// ---------------- Router ----------------

function route() {
  const hash = location.hash || "#/";
  const match = hash.match(/^#\/mascota\/([\w-]+)$/);
  if (match) return renderDetalle(match[1]);
  renderHome();
}

btnBack.addEventListener("click", () => {
  location.hash = "#/";
});

window.addEventListener("hashchange", route);
route();
