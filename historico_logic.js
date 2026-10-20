/* ============================================================
   HISTÓRICO · lógica aislada (namespace hist_)
   ============================================================ */
(function () {
  "use strict";

  const hist_fmtNum = (n) => Number(n).toLocaleString("es-MX");
  const hist_norm   = (s) => (s || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().trim();
  const hist_formatFecha = (str) => {
    if (!str) return "—";
    let s = str.toLowerCase().trim().replace(/[()]/g, "");
    
    const m = {
      "enero": "Ene", "ene": "Ene", "febrero": "Feb", "feb": "Feb", "marzo": "Mar", "mar": "Mar",
      "abril": "Abr", "abr": "Abr", "mayo": "May", "may": "May", "junio": "Jun", "jun": "Jun",
      "julio": "Jul", "jul": "Jul", "agosto": "Ago", "ago": "Ago", "septiembre": "Sep", "sep": "Sep", "setiembre": "Sep", "sept": "Sep",
      "octubre": "Oct", "oct": "Oct", "noviembre": "Nov", "nov": "Nov", "diciembre": "Dic", "dic": "Dic"
    };

    for (const [key, val] of Object.entries(m)) {
      s = s.replace(new RegExp(`\\b${key}\\b`, 'g'), val);
    }

    s = s.replace(/\bde\b/g, "")
         .replace(/\bal\b/g, "-")
         .replace(/\by\b/g, "-")
         .replace(/\/+/g, "")
         .replace(/\s+/g, " ")
         .trim();

    if (s.includes("-")) {
      let parts = s.split("-").map(p => p.trim()).filter(p => p);
      if (parts.length === 2) {
        const hasMonth1 = Object.values(m).some(mon => parts[0].includes(mon));
        const hasMonth2 = Object.values(m).some(mon => parts[1].includes(mon));
        if (hasMonth1 && !hasMonth2) {
          const month1 = Object.values(m).find(mon => parts[0].includes(mon));
          parts[1] = parts[1] + " " + month1;
        } else if (!hasMonth1 && hasMonth2) {
          const month2 = Object.values(m).find(mon => parts[1].includes(mon));
          parts[0] = parts[0] + " " + month2;
        }
      }
      s = parts.join(" - ");
    }

    s = s.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    
    if (s === "Feb") s = "Febrero";
    if (s === "Ene") s = "Enero";
    if (s === "Mar") s = "Marzo";
    if (s === "Abr") s = "Abril";
    if (s === "May") s = "Mayo";
    if (s === "Jun") s = "Junio";
    if (s === "Jul") s = "Julio";
    if (s === "Ago") s = "Agosto";
    if (s === "Sep") s = "Septiembre";
    if (s === "Oct") s = "Octubre";
    if (s === "Nov") s = "Noviembre";
    if (s === "Dic") s = "Diciembre";
    
    return s;
  };

  // en historico_logic.js
  const HIST_K2N = {
    // ── Octubre (21) ──
    ixt:  "Ixtapan de la Sal",
    coa:  "Coatepec Harinas",
    tex:  "Texcaltitlán",
    sul:  "Sultepec",
    tem:  "Temascaltepec",
    tnc:  "Tenancingo",
    tla:  "Tlatlaya",
    ama:  "Amatepec",
    otu:  "Otumba",
    nop:  "Nopaltepec",
    axa:  "Axapusco",
    teo:  "Teotihuacán",
    tec:  "Tecámac",                // ⬆ antes "Tecamac"
    chi:  "Chiautla",
    tez:  "Tezoyuca",
    nau:  "Naucalpan de Juárez",    // ⬆ antes "Naucalpan"
    tep:  "Tepotzotlán",
    oco:  "Ocoyoacac",
    atz:  "Atizapán (Santa Cruz)",  // ⬆ antes "Atizapán"
    xon:  "Xonacatlán",
    atzz: "Atizapán de Zaragoza",
    // ── Noviembre (14) ──
    vlla: "Villa de Allende",
    amnc: "Amanalco de Becerra",
    vlb:  "Valle de Bravo",
    dng:  "Donato Guerra",
    zmp:  "Zumpango",
    cut:  "Cuautitlán",             // ⬆ antes "Cuautitlán México"
    tly:  "Teoloyucan",
    hyp:  "Hueypoxtla",
    cyp:  "Coyotepec",
    lrm:  "Lerma",
    tml:  "Timilpan",
    mrl:  "Morelos",
    elo:  "El Oro",
    atc:  "Atlacomulco",
    // ── Diciembre (10) ──
    znc:  "Zinacantepec",
    tlc:  "Toluca",
    clm:  "Calimaya",
    nzc:  "Nezahualcóyotl",
    chm:  "Chimalhuacán",
    tlm:  "Tlalmanalco",
    ecg:  "Ecatzingo",
    vdc:  "Villa del Carbón",
    cph:  "Capulhuac",
    jqp:  "Jiquipilco"
  };
    //
  const HIST_ALIAS = {
    // ── Ambiguos: data-n del mapa puede venir en corto ──
    "atizapan":              "Atizapán (Santa Cruz)",   // ← CRÍTICO: sin esto, el prefix matchea "Atizapán de Zaragoza"
    "santa cruz atizapan":   "Atizapán (Santa Cruz)",
    "amanalco":              "Amanalco de Becerra",
    "tianguistenco":         "Santiago Tianguistenco",
    "santo tomas":           "Santo Tomás de los Plátanos",
    "cuautitlan mexico":     "Cuautitlán",
    // ── Cortos del "Resumen por municipio" del Excel viejo ──
    "naucalpan":             "Naucalpan de Juárez",
    "ecatepec":              "Ecatepec de Morelos",
    "tlalnepantla":          "Tlalnepantla de Baz",
    "coacalco":              "Coacalco de Berriozábal",
    "valle de chalco":       "Valle de Chalco Solidaridad",
    "acambay":               "Acambay de Ruíz Castañeda",
    "soyaniquilpan":         "Soyaniquilpan de Juárez",
    // ── Variantes sin acento / con punto que llegan de informes viejos ──
    "nicolas romero":        "Nicolás Romero",
    "san simon de guerrero": "San Simón de Guerrero",
    "tecamac":               "Tecámac",
    "zumpahuacan":           "Zumpahuacán",
    "sultepec.":             "Sultepec",
    "tultepec.":             "Tultepec",
    "papalotla.":            "Papalotla",
    "jocotitlan.":           "Jocotitlán",
    "cuautitlan izcalli.":   "Cuautitlán Izcalli",
    "huhuetoca":             "Huehuetoca",
    "atlacomulco de ruiz castaneda": "Atlacomulco"
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

  //

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
            '<input type="text" id="hist-search" list="hist-municipios" placeholder="Buscar municipio…" autocomplete="off" />' +
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
        
        // NUEVAS PESTAÑAS
        '<div class="hist-tabs">' +
          '<button class="hist-tab active" data-tab="resumen">📊 Resumen Anual</button>' +
          '<button class="hist-tab" data-tab="visitas">📅 Desglose por Visita</button>' +
        '</div>' +

        // CONTENIDO: RESUMEN ANUAL
        '<div id="tab-resumen" class="hist-tab-content active">' +
          '<section class="hist-years"><h3>Visitas por año</h3>' +
            '<div class="hist-year-grid">' +
              '<div class="hist-year"><span>2024</span><strong id="hist-y24">0</strong></div>' +
              '<div class="hist-year"><span>2025</span><strong id="hist-y25">0</strong></div>' +
              '<div class="hist-year"><span>2026</span><strong id="hist-y26">0</strong></div>' +
            '</div>' +
          '</section>' +
          '<section class="hist-years" id="hist-chart-wrap" style="margin-top: 20px;">' +
            '<h3>Personas: Dentro vs Fuera de Explanada</h3>' +
            '<div id="hist-chart-msg" style="display:none; font-size:13px; color:var(--mu); padding: 10px 0; line-height: 1.4;"></div>' +
            '<div id="hist-chart-content">' +
              '<div id="hist-chart" class="hist-chart-row"></div>' +
              '<div class="hist-chart-legend" id="hist-chart-legend">' +
                '<span><i style="background:#8A1538"></i> Dentro</span>' +
                '<span><i style="background:#B8860B"></i> Fuera</span>' +
              '</div>' +
            '</div>' +
          '</section>' +
        '</div>' +

        // CONTENIDO: DESGLOSE POR VISITA
        '<div id="tab-visitas" class="hist-tab-content">' +
          '<p style="font-size:12px; color:var(--mu); margin-bottom: 10px;">Haz clic en el botón de abajo para guardar esta información como PDF.</p>' +
          '<div class="hist-table-container" style="max-height: 300px; overflow-y: auto; overflow-x: auto;">' +
            '<table class="hist-visit-table">' +
              '<thead><tr><th>Año</th><th>Fecha</th><th>Sede</th><th>Tipo</th><th>Trámites</th><th>Personas</th></tr></thead>' +
              '<tbody id="hist-visits-body"></tbody>' +
            '</table>' +
          '</div>' +
          '<button class="hist-print-btn" id="hist-pdf-btn">🖨️ Descargar / Imprimir PDF</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    // Lógica de las Pestañas
    modal.querySelectorAll('.hist-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        modal.querySelectorAll('.hist-tab').forEach(t => t.classList.remove('active'));
        modal.querySelectorAll('.hist-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        modal.querySelector(`#tab-${tab.dataset.tab}`).classList.add('active');
      });
    });
    // Lógica para imprimir el Modal con iframe (evita bloqueo de ventana)
    const pdfBtn = modal.querySelector("#hist-pdf-btn");
    if (pdfBtn) {
      pdfBtn.addEventListener("click", () => {
        const card = modal.querySelector(".hist-modal-card");
        if (!card) return;

        const clone = card.cloneNode(true);
        clone.querySelectorAll(".hist-modal-close, .hist-tabs, .hist-print-btn").forEach(el => el.remove());

        // Mostramos ambas pestañas para que salgan en el PDF
        clone.querySelectorAll(".hist-tab-content").forEach(el => {
          el.style.display = "block";
          // el.style.marginBottom = "30px";
        });

        let styles = "";
        document.querySelectorAll("style, link[rel='stylesheet']").forEach(el => styles += el.outerHTML);

        // Generamos el HTML de impresión con estilos forzados para las gráficas
        const html = `
          <html>
            <head>
              <title>Histórico - ${document.getElementById("hist-modal-title").textContent}</title>
              ${styles}
              <style>
                @page { size: portrait; margin: 10mm; }
                body { background: white !important; padding: 0; margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-family: Gotham, Montserrat, system-ui, sans-serif; font-size: 12px; }
                .hist-modal-card { box-shadow: none !important; border: none !important; margin: 0 !important; max-width: 100% !important; padding: 0 !important; }
                .hist-tab-content { display: block !important; page-break-after: auto !important; page-break-inside: avoid !important; margin-bottom: 10px !important; }
                
                /* Reducir tamaño de encabezados y KPIs */
                .hist-modal-head { margin-bottom: 10px !important; }
                .hist-modal-head h2 { font-size: 18px !important; margin: 0 !important; }
                .hist-sub { font-size: 11px !important; margin: 0 !important; }
                .hist-badge { font-size: 10px !important; padding: 2px 8px !important; margin-bottom: 4px !important; }
                
                .hist-kpis { display: grid !important; grid-template-columns: repeat(3, 1fr) !important; gap: 8px !important; margin: 0 0 10px 0 !important; }
                .hist-kpi { padding: 8px 10px !important; border-radius: 8px !important; }
                .hist-kpi-lbl { font-size: 9px !important; }
                .hist-kpi strong { font-size: 16px !important; }
                .hist-kpi strong#hist-kpi-total { font-size: 22px !important; }
                .hist-kpi small { font-size: 9px !important; }
                
                .hist-years { margin-top: 10px !important; }
                .hist-years h3 { font-size: 11px !important; margin-bottom: 4px !important; }
                .hist-year-grid { gap: 6px !important; }
                .hist-year { padding: 6px !important; border-radius: 6px !important; }
                .hist-year span { font-size: 10px !important; }
                .hist-year strong { font-size: 18px !important; }
                
                /* Gráficas más pequeñas para que quepan */
                .hist-chart-row { height: 80px !important; margin-bottom: 5px !important; padding-bottom: 5px !important; gap: 10px !important; page-break-inside: avoid !important; border-bottom: 1px solid #ccc !important; display: flex !important; align-items: flex-end !important; }
                .hist-chart-year { flex: 1 !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: flex-end !important; height: 100% !important; }
                .hist-chart-bars { display: flex !important; gap: 4px !important; align-items: flex-end !important; height: 100% !important; width: 100% !important; justify-content: center !important; }
                .hist-bar { width: 15px !important; border-radius: 4px 4px 0 0 !important; min-height: 2px !important; print-color-adjust: exact !important; -webkit-print-color-adjust: exact !important; }
                .hist-bar.dentro { background: #8A1538 !important; }
                .hist-bar.fuera { background: #B8860B !important; }
                .hist-chart-label { font-size: 10px !important; margin-top: 4px !important; }
                .hist-chart-legend { font-size: 10px !important; margin-top: 4px !important; }
                
                /* Quitar el scroll de la tabla para que se imprima completa */
                .hist-table-container { max-height: none !important; overflow: visible !important; }
                .hist-visit-table { font-size: 11px !important; margin-top: 5px !important; }
                .hist-visit-table th, .hist-visit-table td { padding: 4px 6px !important; }
                .hist-badge-d, .hist-badge-f { padding: 1px 4px !important; font-size: 9px !important; }
              </style>
            </head>
            <body>${clone.outerHTML}</body>
          </html>
        `;

        // Función auxiliar para imprimir usando iframe invisible
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        document.body.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
        iframe.contentWindow.focus();
        
        // Esperamos un poco para que carguen los estilos y mandamos a imprimir
        setTimeout(() => {
          iframe.contentWindow.focus();
          iframe.contentWindow.print();

          // Eliminar el iframe cuando el usuario cierre el diálogo de impresión
          const cleanup = () => { try { iframe.remove(); } catch(e){} };
          iframe.contentWindow.onafterprint = cleanup;
          setTimeout(cleanup, 60000); // fallback por si onafterprint no dispara
        }, 500);

      });
    }

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

    if (input && clearBtn) {
      input.addEventListener("input", function() {
        if (input.value.length > 0) clearBtn.classList.add("visible");
        else clearBtn.classList.remove("visible");
      });
      clearBtn.addEventListener("click", function() {
        input.value = "";
        clearBtn.classList.remove("visible");
        input.focus();
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
  //

  let hist_focusPrevio = null;

  function hist_abrirModal(nombre) {
    hist_focusPrevio = document.activeElement;
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

  //
  function hist_renderModal(nombre, d, esTotal) {
    const modal = document.getElementById("hist-modal");
    if (!modal) return;
    
    document.getElementById("hist-modal-title").textContent = nombre;
    document.getElementById("hist-modal-sub").textContent = esTotal
      ? "Sumatoria de los 125 municipios"
      : "Caravanas Itinerantes por la Justicia Social · Estado de México";

    document.getElementById("hist-kpi-total").textContent = d.tot;
    document.getElementById("hist-kpi-tramites").textContent = hist_fmtNum(d.tra);
    document.getElementById("hist-kpi-personas").textContent = hist_fmtNum(d.per);
    
    document.getElementById("hist-y24").textContent = hist_fmtNum(d.v24);
    document.getElementById("hist-y25").textContent = hist_fmtNum(d.v25);
    document.getElementById("hist-y26").textContent = hist_fmtNum(d.v26);

    // Resetear pestañas al abrir
    modal.querySelectorAll('.hist-tab').forEach(t => t.classList.remove('active'));
    modal.querySelectorAll('.hist-tab-content').forEach(c => c.classList.remove('active'));
    modal.querySelector('[data-tab="resumen"]').classList.add('active');
    modal.querySelector('#tab-resumen').classList.add('active');

    // --- LÓGICA DE VISITAS Y DESGLOSE ---
    const visitasReales = (typeof HISTORICO_VISITAS !== 'undefined') ? HISTORICO_VISITAS[nombre] : null;
    const chartMsg = document.getElementById("hist-chart-msg");
    const chartContent = document.getElementById("hist-chart-content");
    const tbody = document.getElementById("hist-visits-body");

    if (esTotal || !visitasReales) {
      // Si no hay desglose o es el total estatal
      chartMsg.style.display = "block";
      chartContent.style.display = "none";
      chartMsg.textContent = esTotal 
        ? "El total estatal agrupa a todos los municipios. Selecciona un municipio específico para ver el desglose por visita." 
        : "Este municipio registró el 100% de sus visitas dentro de la Explanada.";

      if (esTotal) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--mu);">Selecciona un municipio específico para ver el desglose.</td></tr>`;
      } else {
        // Fallback visual para municipios sin desglose (asumiendo 100% dentro)
        tbody.innerHTML = `
          <tr><td>2024</td><td>—</td><td>Explanada</td><td><span class="hist-badge-d">Dentro</span></td><td>${hist_fmtNum(d.tra ? Math.round(d.tra*0.25) : 0)}*</td><td>${hist_fmtNum(d.v24 > 0 ? Math.round(d.per / d.tot * d.v24) : 0)}*</td></tr>
          <tr><td>2025</td><td>—</td><td>Explanada</td><td><span class="hist-badge-d">Dentro</span></td><td>${hist_fmtNum(d.tra ? Math.round(d.tra*0.5) : 0)}*</td><td>${hist_fmtNum(d.v25 > 0 ? Math.round(d.per / d.tot * d.v25) : 0)}*</td></tr>
          <tr><td>2026</td><td>—</td><td>Explanada</td><td><span class="hist-badge-d">Dentro</span></td><td>${hist_fmtNum(d.tra ? Math.round(d.tra*0.25) : 0)}*</td><td>${hist_fmtNum(d.v26 > 0 ? Math.round(d.per / d.tot * d.v26) : 0)}*</td></tr>
        `;
      }
    } else {
      // Hay desglose manual (Municipios con visitas "Fuera")
      chartMsg.style.display = "none";
      chartContent.style.display = "block";
      
      let maxP = 1;
      visitasReales.forEach(v => { if (v.personas > maxP) maxP = v.personas; });
      
      let chartHtml = "";
      [2024, 2025, 2026].forEach(anio => {
        const visits = visitasReales.filter(v => v.año === anio);
        const pDentro = visits.filter(v => v.dentro).reduce((s, v) => s + (v.personas || 0), 0);
        const pFuera = visits.filter(v => !v.dentro).reduce((s, v) => s + (v.personas || 0), 0);
        
        const hDentro = (pDentro / maxP) * 100;
        const hFuera = (pFuera / maxP) * 100;
        
        chartHtml += `
          <div class="hist-chart-year">
            <div class="hist-chart-bars">
              <div class="hist-bar dentro" style="height:${hDentro}%" title="Dentro: ${pDentro}"></div>
              <div class="hist-bar fuera" style="height:${hFuera}%" title="Fuera: ${pFuera}"></div>
            </div>
            <div class="hist-chart-label">${anio}</div>
          </div>
        `;
      });
      
      const contenedorGrafica = document.getElementById("hist-chart");
      if (contenedorGrafica) contenedorGrafica.innerHTML = chartHtml;
      
      tbody.innerHTML = visitasReales.map(v => `
        <tr>
          <td>${v.año}</td>
          <td>${hist_formatFecha(v.fecha)}</td>   <!-- <--- AQUÍ -->
          <td>${v.sede}</td>
          <td>${v.dentro ? '<span class="hist-badge-d">Dentro</span>' : '<span class="hist-badge-f">Fuera</span>'}</td>
          <td>${v.tramites !== undefined ? hist_fmtNum(v.tramites) : '-'}</td>
          <td>${v.personas !== undefined ? hist_fmtNum(v.personas) : '-'}</td>
        </tr>
      `).join('');
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  //

  function hist_cerrarModal() {
  const modal = document.getElementById("hist-modal");
  if (!modal) return;

  // 1º saca el foco ANTES de tocar clases / aria
  if (document.activeElement && modal.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  // 2º cierra visualmente
  modal.classList.remove("open");

  // 3º ahora sí oculta a lectores de pantalla
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