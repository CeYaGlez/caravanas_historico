/* ============================================================
   HISTÓRICO · lógica aislada (namespace hist_)
   ============================================================ */
(function () {
  "use strict";

  const hist_fmtNum = (n) => Number(n).toLocaleString("es-MX");
  const hist_norm   = (s) => (s || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().trim();

  const HIST_K2N = {
    ixt:"Ixtapan de la Sal", coa:"Coatepec Harinas", tex:"Texcaltitlán",
    sul:"Sultepec", tem:"Temascaltepec", tnc:"Tenancingo", tla:"Tlatlaya",
    ama:"Amatepec", otu:"Otumba", nop:"Nopaltepec", axa:"Axapusco",
    teo:"Teotihuacán", tec:"Tecamac", chi:"Chiautla", tez:"Tezoyuca",
    nau:"Naucalpan", tep:"Tepotzotlán", oco:"Ocoyoacac",
    atz:"Atizapán", xon:"Xonacatlán", atzz:"Atizapán de Zaragoza"
  };
  const HIST_ALIAS = {
    "atizapan (santa cruz)":"Atizapán",
    "santa cruz atizapan":"Atizapán",
    "atizapan":"Atizapán",
    "santo tomas":"Santo Tomás de los Plátanos",
    "san simon de guerrero":"San Simon de Guerrero",
    "atlacomulco de ruiz castaneda":"Atlacomulco",
    "coacalco de berriozabal":"Coacalco",
    "ecatepec de morelos":"Ecatepec",
    "tlalnepantla de baz":"Tlalnepantla",
    "valle de chalco solidaridad":"Valle de Chalco",
    "soyaniquilpan de juarez":"Soyaniquilpan"
  };

  function hist_buscarMunicipio(nombre) {
    if (!nombre) return null;
    if (HISTORICO_MUNICIPIOS[nombre]) return nombre;
    const n = hist_norm(nombre);
    if (HIST_ALIAS[n] && HISTORICO_MUNICIPIOS[HIST_ALIAS[n]]) return HIST_ALIAS[n];
    const keys = Object.keys(HISTORICO_MUNICIPIOS);
    for (const k of keys) if (hist_norm(k) === n) return k;
    for (const k of keys) if (HIST_ALIAS[hist_norm(k)] === n) return HIST_ALIAS[hist_norm(k)];
    const first = n.split(/\s+de\s+|\s+\(/)[0].trim();
    for (const k of keys) if (hist_norm(k) === first) return k;
    for (const k of keys) {
      const kn = hist_norm(k);
      if (kn.startsWith(n + " ") || n.startsWith(kn + " ")) return k;
    }
    return null;
  }

  function hist_resolverDesdeNodo(nodo) {
    if (!nodo || !nodo.dataset) return null;
    if (nodo.dataset.n) return hist_buscarMunicipio(nodo.dataset.n);
    if (nodo.dataset.k) {
      const k = nodo.dataset.k;
      return hist_buscarMunicipio(HIST_K2N[k] || k);
    }
    return null;
  }

  function hist_injectUI() {
    if (document.getElementById("hist-modal")) return;

    const fb = document.querySelector(".fb");
    if (fb && !document.getElementById("hist-search")) {
      const wrap = document.createElement("div");
      wrap.className = "hist-fb";
      wrap.innerHTML =
        '<label for="hist-search">Histórico 2024-2026</label>' +
        '<div class="hist-fb-row">' +
          '<div class="hist-input-wrap">' +
            '<input type="text" id="hist-search" list="hist-municipios" ' +
                   'placeholder="Buscar municipio…" autocomplete="off" />' +
            '<button type="button" id="hist-clear-btn" class="hist-clear-btn" aria-label="Limpiar búsqueda">×</button>' +
          '</div>' +
          '<datalist id="hist-municipios"></datalist>' +
          '<button id="hist-ver-btn" class="bt" type="button">Ver</button>' +
        '</div>';
      const sp = fb.querySelector(".sp");
      if (sp) fb.insertBefore(wrap, sp); else fb.appendChild(wrap);
    }

    const modal = document.createElement("div");
    modal.id = "hist-modal";
    modal.className = "hist-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-labelledby", "hist-modal-title");
    modal.innerHTML =
      '<div class="hist-modal-overlay" data-hist-close></div>' +
      '<div class="hist-modal-card">' +
        '<button class="hist-modal-close" type="button" data-hist-close aria-label="Cerrar">×</button>' +
        '<header class="hist-modal-head">' +
          '<span class="hist-badge">Histórico 2024-2026</span>' +
          '<h2 id="hist-modal-title">—</h2>' +
          '<p id="hist-modal-sub" class="hist-sub"></p>' +
        '</header>' +
        '<section class="hist-kpis">' +
          '<div class="hist-kpi hist-kpi-visitas"><span class="hist-kpi-lbl">Total de visitas</span>' +
          '<strong id="hist-kpi-total" style="font-size:38px; color:var(--gu);">0</strong><small>Veces que fuimos</small></div>' +
          '<div class="hist-kpi hist-kpi-tramites"><span class="hist-kpi-lbl">Trámites</span>' +
            '<strong id="hist-kpi-tramites">0</strong><small>acumulado</small></div>' +
          '<div class="hist-kpi hist-kpi-personas"><span class="hist-kpi-lbl">Personas</span>' +
            '<strong id="hist-kpi-personas">0</strong><small>atendidas</small></div>' +
        '</section>' +
        '<section class="hist-years"><h3>Visitas por año</h3>' +
          '<div class="hist-year-grid">' +
            '<div class="hist-year"><span>2024</span><strong id="hist-y24">0</strong></div>' +
            '<div class="hist-year"><span>2025</span><strong id="hist-y25">0</strong></div>' +
            '<div class="hist-year"><span>2026</span><strong id="hist-y26">0</strong></div>' +
          '</div>' +
        '</section>' +
        '<p id="hist-modal-note" class="hist-note" hidden></p>' +
      '</div>';
    document.body.appendChild(modal);

    const dl = document.getElementById("hist-municipios");
    if (dl && dl.children.length === 0) {
      Object.keys(HISTORICO_MUNICIPIOS)
        .sort((a, b) => a.localeCompare(b, "es"))
        .forEach(function (m) {
          const opt = document.createElement("option");
          opt.value = m;
          dl.appendChild(opt);
        });
      const totalOpt = document.createElement("option");
      totalOpt.value = "— TOTAL ESTATAL —";
      dl.appendChild(totalOpt);
    }

    const input = document.getElementById("hist-search");
    const btn   = document.getElementById("hist-ver-btn");
    const clearBtn = document.getElementById("hist-clear-btn");

    // Lógica del tachecito
    if (input && clearBtn) {
      // Mostrar el tache solo si hay texto
      input.addEventListener("input", function() {
        if (input.value.length > 0) {
          clearBtn.classList.add("visible");
        } else {
          clearBtn.classList.remove("visible");
        }
      });

      // Borrar el texto al dar clic en el tache
      clearBtn.addEventListener("click", function() {
        input.value = "";
        clearBtn.classList.remove("visible");
        input.focus(); // Devuelve el cursor al input
      });
    }

    function hist_intentarAbrirDesdeInput() {
      const val = (input.value || "").trim();
      if (!val) return;
      if (val === "— TOTAL ESTATAL —") { hist_abrirModalTotal(); return; }
      const m = hist_buscarMunicipio(val);
      if (m) hist_abrirModal(m);
      else hist_abrirModalTotal();
    }
    input.addEventListener("change", hist_intentarAbrirDesdeInput);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") { e.preventDefault(); hist_intentarAbrirDesdeInput(); }
    });
    btn.addEventListener("click", hist_intentarAbrirDesdeInput);

    modal.addEventListener("click", function (e) {
      if (e.target.closest("[data-hist-close]")) hist_cerrarModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("open")) hist_cerrarModal();
    });
  }

  function hist_abrirModal(nombre) {
    const key = hist_buscarMunicipio(nombre);
    if (!key) { hist_abrirModalTotal(); return; }
    const d = HISTORICO_MUNICIPIOS[key];
    hist_renderModal(key, d, false);
  }

  function hist_abrirModalTotal() {
    hist_renderModal(
      "TOTAL ESTATAL",
      { v24: HISTORICO_TOTAL.v24, v25: HISTORICO_TOTAL.v25, v26: HISTORICO_TOTAL.v26,
        tot: HISTORICO_TOTAL.tot, tra: HISTORICO_TOTAL.tra, per: HISTORICO_TOTAL.per },
      true
    );
  }

  function hist_renderModal(nombre, d, esTotal) {
    const modal = document.getElementById("hist-modal");
    if (!modal) return;
    
    document.getElementById("hist-modal-title").textContent = nombre;
    document.getElementById("hist-modal-sub").textContent = esTotal
      ? "Sumatoria de los 125 municipios"
      : "Caravanas Itinerantes por la Justicia Social · Estado de México";

    // Hacemos que el total de visitas sea el protagonista
    const totalEl = document.getElementById("hist-kpi-total");
    totalEl.textContent = d.tot;
    totalEl.style.fontSize = "38px"; // Número más grande
    totalEl.style.color = "var(--gu)"; // Color guinda

    document.getElementById("hist-kpi-tramites").textContent = hist_fmtNum(d.tra);
    document.getElementById("hist-kpi-personas").textContent = hist_fmtNum(d.per);
    
    document.getElementById("hist-y24").textContent = hist_fmtNum(d.v24);
    document.getElementById("hist-y25").textContent = hist_fmtNum(d.v25);
    document.getElementById("hist-y26").textContent = hist_fmtNum(d.v26);

    // Ocultamos la nota permanentemente
    const noteEl = document.getElementById("hist-modal-note");
    noteEl.hidden = true;
    noteEl.textContent = "";

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function hist_cerrarModal() {
    const modal = document.getElementById("hist-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function hist_hookMapa() {
    const map = document.getElementById("map");
    if (!map) return;
    map.addEventListener("click", function (e) {
      const p = e.target.closest("path, g.cv");
      if (!p) return;
      const nombre = hist_resolverDesdeNodo(p);
      if (nombre) hist_abrirModal(nombre);
      else if (p.dataset && p.dataset.n) hist_abrirModalTotal();
    });
  }

  window.hist_abrirModal     = hist_abrirModal;
  window.hist_cerrarModal    = hist_cerrarModal;
  window.hist_abrirModalTotal= hist_abrirModalTotal;
  window.hist_buscarMunicipio= hist_buscarMunicipio;
  window.hist_fmtNum         = hist_fmtNum;

  function hist_init() {
    if (typeof HISTORICO_MUNICIPIOS === "undefined") {
      console.warn("[histórico] Falta cargar historico_data.js");
      return;
    }
    hist_injectUI();
    hist_hookMapa();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", hist_init);
  } else {
    hist_init();
  }
})();