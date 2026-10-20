/* ============================================================
   HISTÓRICO MUNICIPIOS · Caravanas por la Justicia Social Edomex
   Informe acumulado al 17-oct-2026 · 377 caravanas
   Claves: v24, v25, v26 = visitas por año; tot = total visitas;
           tra = trámites; per = personas atendidas.
   Claves = nombre COMPLETO del Catálogo (columna A del Excel).
   ============================================================ */
const HISTORICO_MUNICIPIOS = {
  "Acambay de Ruíz Castañeda":   { v24:1, v25:1, v26:1, tot:3, tra: 5207, per:1631 },
  "Acolman":                     { v24:1, v25:1, v26:2, tot:4, tra:15100, per:6791 },
  "Aculco":                      { v24:1, v25:1, v26:1, tot:3, tra: 3170, per:1076 },
  "Almoloya de Alquisiras":      { v24:1, v25:1, v26:1, tot:3, tra: 3070, per: 948 },
  "Almoloya de Juárez":          { v24:0, v25:2, v26:1, tot:3, tra:17545, per:7069 },
  "Almoloya del Río":            { v24:1, v25:1, v26:1, tot:3, tra: 4297, per:1668 },
  "Amanalco de Becerra":         { v24:1, v25:2, v26:1, tot:4, tra: 6860, per:2282 },
  "Amatepec":                    { v24:1, v25:1, v26:1, tot:3, tra: 4008, per:1405 },
  "Amecameca":                   { v24:1, v25:1, v26:1, tot:3, tra:11048, per:4524 },
  "Apaxco":                      { v24:1, v25:2, v26:1, tot:4, tra: 6735, per:2488 },
  "Atenco":                      { v24:1, v25:1, v26:1, tot:3, tra: 8068, per:3412 },
  "Atizapán de Zaragoza":        { v24:1, v25:1, v26:1, tot:3, tra:20127, per:8637 },
  "Atizapán (Santa Cruz)":       { v24:0, v25:2, v26:0, tot:2, tra: 3211, per:1598 },
  "Atlacomulco":                 { v24:1, v25:1, v26:1, tot:3, tra:14471, per:4612 },
  "Atlautla":                    { v24:0, v25:2, v26:1, tot:3, tra: 5798, per:1652 },
  "Axapusco":                    { v24:0, v25:2, v26:2, tot:4, tra: 7598, per:2814 },
  "Ayapango":                    { v24:1, v25:1, v26:1, tot:3, tra: 4000, per:1306 },
  "Calimaya":                    { v24:1, v25:1, v26:1, tot:3, tra: 8253, per:2436 },
  "Capulhuac":                   { v24:1, v25:1, v26:1, tot:3, tra: 3104, per:1144 },
  "Chalco":                      { v24:2, v25:1, v26:1, tot:4, tra:23277, per:10523 },
  "Chapa de Mota":               { v24:0, v25:1, v26:1, tot:2, tra: 2523, per: 721 },
  "Chapultepec":                 { v24:1, v25:1, v26:1, tot:3, tra: 4398, per:1291 },
  "Chiautla":                    { v24:0, v25:1, v26:0, tot:1, tra: 3630, per:1450 },
  "Chicoloapan":                 { v24:0, v25:2, v26:1, tot:3, tra:23222, per:7784 },
  "Chiconcuac":                  { v24:0, v25:2, v26:2, tot:4, tra: 9205, per:2952 },
  "Chimalhuacán":                { v24:1, v25:1, v26:1, tot:3, tra:26727, per:11582 },
  "Coacalco de Berriozábal":     { v24:1, v25:1, v26:1, tot:3, tra:21090, per:7174 },
  "Coatepec Harinas":            { v24:0, v25:2, v26:2, tot:4, tra: 6997, per:2086 },
  "Cocotitlán":                  { v24:1, v25:1, v26:1, tot:3, tra: 4187, per:1633 },
  "Coyotepec":                   { v24:1, v25:1, v26:0, tot:2, tra: 5615, per:2223 },
  "Cuautitlán":                  { v24:1, v25:1, v26:0, tot:2, tra:13444, per:4166 },
  "Cuautitlán Izcalli":          { v24:1, v25:2, v26:1, tot:4, tra:41655, per:14987 },
  "Donato Guerra":               { v24:1, v25:0, v26:1, tot:2, tra: 2389, per: 754 },
  "Ecatepec de Morelos":         { v24:1, v25:2, v26:1, tot:4, tra:56206, per:15691 },
  "Ecatzingo":                   { v24:0, v25:2, v26:1, tot:3, tra: 4059, per:1035 },
  "El Oro":                      { v24:1, v25:0, v26:1, tot:2, tra: 3304, per:1396 },
  "Huehuetoca":                  { v24:1, v25:1, v26:2, tot:4, tra:32140, per:12547 },
  "Hueypoxtla":                  { v24:1, v25:1, v26:0, tot:2, tra: 1947, per: 774 },
  "Huixquilucan":                { v24:0, v25:1, v26:1, tot:2, tra: 6040, per:2298 },
  "Isidro Fabela":               { v24:1, v25:1, v26:1, tot:3, tra: 4915, per:1630 },
  "Ixtapaluca":                  { v24:1, v25:1, v26:1, tot:3, tra:16762, per:6909 },
  "Ixtapan de la Sal":           { v24:1, v25:1, v26:2, tot:4, tra: 9983, per:2289 },
  "Ixtapan del Oro":             { v24:1, v25:1, v26:1, tot:3, tra: 3089, per: 996 },
  "Ixtlahuaca":                  { v24:1, v25:0, v26:1, tot:2, tra: 7344, per:2797 },
  "Jaltenco":                    { v24:1, v25:1, v26:1, tot:3, tra: 8160, per:2970 },
  "Jilotepec":                   { v24:1, v25:1, v26:1, tot:3, tra: 9083, per:2626 },
  "Jilotzingo":                  { v24:0, v25:2, v26:1, tot:3, tra: 1978, per: 654 },
  "Jiquipilco":                  { v24:1, v25:1, v26:1, tot:3, tra: 9896, per:3004 },
  "Jocotitlán":                  { v24:0, v25:1, v26:1, tot:2, tra: 5524, per:2172 },
  "Joquicingo":                  { v24:0, v25:1, v26:1, tot:2, tra: 2218, per: 876 },
  "Juchitepec":                  { v24:0, v25:2, v26:1, tot:3, tra: 8665, per:3072 },
  "La Paz":                      { v24:1, v25:1, v26:1, tot:3, tra:21267, per:9082 },
  "Lerma":                       { v24:0, v25:2, v26:0, tot:2, tra: 7603, per:3015 },
  "Luvianos":                    { v24:0, v25:2, v26:1, tot:3, tra: 2814, per: 637 },
  "Malinalco":                   { v24:2, v25:1, v26:2, tot:5, tra: 6500, per:2042 },
  "Melchor Ocampo":              { v24:0, v25:2, v26:1, tot:3, tra:11310, per:3267 },
  "Metepec":                     { v24:1, v25:1, v26:1, tot:3, tra: 5518, per:2358 },
  "Mexicaltzingo":               { v24:0, v25:2, v26:1, tot:3, tra: 2476, per: 927 },
  "Morelos":                     { v24:1, v25:1, v26:0, tot:2, tra: 2881, per: 652 },
  "Naucalpan de Juárez":         { v24:1, v25:2, v26:2, tot:5, tra:30928, per:11068 },
  "Nextlalpan":                  { v24:0, v25:2, v26:0, tot:2, tra: 9436, per:2602 },
  "Nezahualcóyotl":              { v24:1, v25:2, v26:1, tot:4, tra:54057, per:19376 },
  "Nicolás Romero":              { v24:1, v25:1, v26:1, tot:3, tra:20995, per:7778 },
  "Nopaltepec":                  { v24:0, v25:2, v26:2, tot:4, tra: 4901, per:1840 },
  "Ocoyoacac":                   { v24:0, v25:2, v26:2, tot:4, tra:12002, per:3623 }, // ⬆ Nc.375
  "Ocuilan":                     { v24:1, v25:1, v26:1, tot:3, tra: 3197, per:1158 },
  "Otumba":                      { v24:1, v25:1, v26:2, tot:4, tra: 6567, per:2836 },
  "Otzoloapan":                  { v24:0, v25:1, v26:1, tot:2, tra: 1100, per: 261 },
  "Otzolotepec":                 { v24:1, v25:2, v26:1, tot:4, tra:10754, per:3403 },
  "Ozumba":                      { v24:1, v25:1, v26:1, tot:3, tra: 4079, per:1678 },
  "Papalotla":                   { v24:0, v25:2, v26:1, tot:3, tra: 3878, per:1431 },
  "Polotitlán":                  { v24:0, v25:2, v26:1, tot:3, tra: 2865, per: 784 },
  "Rayón":                       { v24:0, v25:2, v26:1, tot:3, tra: 4144, per:1334 },
  "San Antonio la Isla":         { v24:1, v25:1, v26:1, tot:3, tra: 7614, per:2244 },
  "San Felipe del Progreso":     { v24:1, v25:1, v26:1, tot:3, tra:10967, per:3398 },
  "San José del Rincón":         { v24:0, v25:1, v26:1, tot:2, tra: 5313, per:1991 },
  "San Martín de las Pirámides": { v24:2, v25:1, v26:2, tot:5, tra:11459, per:5457 },
  "San Mateo Atenco":            { v24:0, v25:2, v26:1, tot:3, tra: 8788, per:4386 },
  "San Simón de Guerrero":       { v24:0, v25:2, v26:1, tot:3, tra: 2774, per: 646 },
  "Santiago Tianguistenco":      { v24:0, v25:1, v26:1, tot:2, tra:11231, per:3602 },
  "Santo Tomás de los Plátanos": { v24:1, v25:1, v26:1, tot:3, tra: 2572, per: 687 },
  "Soyaniquilpan de Juárez":     { v24:1, v25:1, v26:1, tot:3, tra: 3038, per:1159 },
  "Sultepec":                    { v24:0, v25:1, v26:2, tot:3, tra: 4675, per:1135 }, // ⬆ Nc.376
  "Tecámac":                     { v24:1, v25:1, v26:1, tot:3, tra:27410, per:10341 },
  "Tejupilco":                   { v24:0, v25:2, v26:1, tot:3, tra: 9769, per:3067 },
  "Temamatla":                   { v24:0, v25:2, v26:1, tot:3, tra: 7129, per:2785 },
  "Temascalapa":                 { v24:0, v25:2, v26:1, tot:3, tra: 7841, per:3046 },
  "Temascalcingo":               { v24:1, v25:1, v26:1, tot:3, tra: 6258, per:1989 },
  "Temascaltepec":               { v24:1, v25:1, v26:2, tot:4, tra: 7153, per:2188 }, // ⬆ Nc.377
  "Temoaya":                     { v24:1, v25:2, v26:1, tot:4, tra:13084, per:3309 },
  "Tenancingo":                  { v24:0, v25:2, v26:0, tot:2, tra: 6175, per:1938 },
  "Tenango del Aire":            { v24:1, v25:1, v26:1, tot:3, tra: 3650, per:1748 },
  "Tenango del Valle":           { v24:1, v25:1, v26:2, tot:4, tra:13282, per:5165 },
  "Teoloyucan":                  { v24:1, v25:1, v26:0, tot:2, tra: 4366, per:1444 },
  "Teotihuacán":                 { v24:1, v25:1, v26:2, tot:4, tra:15545, per:6298 }, // ⬆ Nc.374
  "Tepetlaoxtoc":                { v24:0, v25:2, v26:1, tot:3, tra: 5413, per:2376 },
  "Tepetlixpa":                  { v24:1, v25:1, v26:1, tot:3, tra: 6479, per:2375 },
  "Tepotzotlán":                 { v24:1, v25:1, v26:2, tot:4, tra:23808, per:9003 },
  "Tequixquiac":                 { v24:0, v25:1, v26:1, tot:2, tra: 4828, per:2241 },
  "Texcaltitlán":                { v24:1, v25:1, v26:2, tot:4, tra: 4973, per:2771 },
  "Texcalyacac":                 { v24:0, v25:2, v26:1, tot:3, tra: 2912, per: 869 },
  "Texcoco":                     { v24:1, v25:1, v26:1, tot:3, tra:22107, per:8381 },
  "Tezoyuca":                    { v24:1, v25:1, v26:1, tot:3, tra: 5794, per:1973 },
  "Timilpan":                    { v24:0, v25:2, v26:0, tot:2, tra: 3710, per: 866 },
  "Tlalmanalco":                 { v24:0, v25:2, v26:0, tot:2, tra: 3590, per:1259 },
  "Tlalnepantla de Baz":         { v24:1, v25:1, v26:1, tot:3, tra:24566, per:9123 },
  "Tlatlaya":                    { v24:1, v25:1, v26:1, tot:3, tra: 2885, per: 983 },
  "Toluca":                      { v24:1, v25:1, v26:1, tot:3, tra:15967, per:6509 },
  "Tonanitla":                   { v24:0, v25:2, v26:1, tot:3, tra: 5896, per:2029 },
  "Tonatico":                    { v24:1, v25:1, v26:2, tot:4, tra: 5345, per:1324 },
  "Tultepec":                    { v24:1, v25:1, v26:1, tot:3, tra:14359, per:6660 },
  "Tultitlán":                   { v24:0, v25:2, v26:1, tot:3, tra:21744, per:9910 },
  "Valle de Bravo":              { v24:1, v25:1, v26:1, tot:3, tra: 7065, per:3287 },
  "Valle de Chalco Solidaridad": { v24:1, v25:2, v26:1, tot:4, tra:31138, per:9355 },
  "Villa de Allende":            { v24:1, v25:1, v26:1, tot:3, tra: 5362, per:2102 },
  "Villa del Carbón":            { v24:1, v25:1, v26:0, tot:2, tra: 3549, per:1468 },
  "Villa Guerrero":              { v24:0, v25:2, v26:2, tot:4, tra: 9472, per:2497 },
  "Villa Victoria":              { v24:0, v25:1, v26:0, tot:1, tra: 4345, per:1526 },
  "Xalatlaco":                   { v24:1, v25:1, v26:1, tot:3, tra: 8838, per:3339 },
  "Xonacatlán":                  { v24:1, v25:1, v26:0, tot:2, tra: 3715, per:1482 },
  "Zacazonapan":                 { v24:0, v25:2, v26:1, tot:3, tra: 1602, per: 389 },
  "Zacualpan":                   { v24:0, v25:1, v26:1, tot:2, tra: 3244, per: 830 },
  "Zinacantepec":                { v24:1, v25:1, v26:1, tot:3, tra: 9642, per:3195 },
  "Zumpahuacán":                 { v24:0, v25:1, v26:2, tot:3, tra: 4386, per: 954 },
  "Zumpango":                    { v24:1, v25:1, v26:1, tot:3, tra:10539, per:5406 }
};

/* Totales globales (informe al 17-oct-2026) */
const HISTORICO_TOTAL = {
  v24: 81, v25: 165, v26: 131,
  tot: 377, tra: 1227980, per: 444212
};

/* ============================================================
   DESGLOSE DE VISITAS (Datos del CSV TABLA SEDE)
   ============================================================ */
const HISTORICO_VISITAS = {
  "Acambay de Ruíz Castañeda": [
    { año: 2024, fecha: "feb", sede: "Explanada", dentro: true, tramites: 1133, personas: 464 },
    { año: 2025, fecha: "5 AL 7 DE AGO 2025", sede: "Explanada", dentro: true, tramites: 2584, personas: 650 },
    { año: 2026, fecha: "23 al 25 de junio", sede: "Explanada", dentro: true, tramites: 1490, personas: 517 }
  ],
  "Acolman": [
    { año: 2024, fecha: "feb", sede: "Explanada", dentro: true, tramites: 1765, personas: 948 },
    { año: 2025, fecha: "24 AL 28 DE JUN", sede: "Explanada", dentro: true, tramites: 4863, personas: 1665 },
    { año: 2026, fecha: "24 al 28 de marzo", sede: "casa de cultura", dentro: false, tramites: 4105, personas: 2388 }
  ],
  "Aculco": [
    { año: 2024, fecha: "feb", sede: "Explanada", dentro: true, tramites: 664, personas: 261 },
    { año: 2025, fecha: "8 AL 9 DE AGO", sede: "Explanada", dentro: true, tramites: 1474, personas: 449 }
  ],
  "Almoloya de Alquisiras": [
    { año: 2024, fecha: "feb", sede: "Explanada", dentro: true, tramites: 760, personas: 358 },
    { año: 2025, fecha: "16 AL 17 DE MAYO", sede: "Explanada", dentro: true, tramites: 1708, personas: 365 },
    { año: 2026, fecha: "7 y 8 de abril", sede: "Explanada", dentro: true, tramites: 602, personas: 225 }
  ],
  "Almoloya de Juárez": [
    { año: 2025, fecha: "12 AL 16 DE FEB/", sede: "Explanada", dentro: true, tramites: 13319, personas: 4630 },
    { año: 2026, fecha: "26 al 30 de mayo", sede: "Explanada", dentro: true, tramites: 4226, personas: 2439 }
  ],
  "Almoloya del Río": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 1682, personas: 580 },
    { año: 2025, fecha: "13 AL 14 DE JUN", sede: "Explanada", dentro: true, tramites: 1147, personas: 338 },
    { año: 2026, fecha: "11 al 13 de agosto", sede: "Explanada", dentro: true, tramites: 1468, personas: 750 }
  ],
  "Amanalco de Becerra": [
    { año: 2024, fecha: "7 y 8 de sep", sede: "Explanada", dentro: true, tramites: 1090, personas: 229 },
    { año: 2025, fecha: "19 AL 20 DE AGO 2025", sede: "Explanada", dentro: true, tramites: 2853, personas: 973 },
    { año: 2025, fecha: "04 AL 6 DE DIC 2025", sede: "Explanada", dentro: true, tramites: 1569, personas: 547 },
    { año: 2026, fecha: "16 al 20 de junio", sede: "Explanada", dentro: true, tramites: 1348, personas: 533 }
  ],
  "Amatepec": [
    { año: 2024, fecha: "10 y 11 de agosto", sede: "Explanada", dentro: true, tramites: 1075, personas: 333 },
    { año: 2025, fecha: "3 AL 5 DE JUL", sede: "Explanada", dentro: true, tramites: 1933, personas: 688 },
    { año: 2026, fecha: "16 al 18 de abril", sede: "Explanada", dentro: true, tramites: 1000, personas: 384 }
  ],
  "Amecameca": [
    { año: 2024, fecha: "11 al 15 de dic", sede: "Explanada", dentro: true, tramites: 3915, personas: 1816 },
    { año: 2025, fecha: "15 AL 18 DE JUL", sede: "Explanada", dentro: true, tramites: 5175, personas: 1802 },
    { año: 2026, fecha: "11 al 13 de junio", sede: "Explanada", dentro: true, tramites: 1958, personas: 906 }
  ],
  "Apaxco": [
    { año: 2024, fecha: "28 y 29 de sept", sede: "Explanada", dentro: true, tramites: 988, personas: 367 },
    { año: 2025, fecha: "02 Y 03 DE SEP", sede: "campo la noria", dentro: false, tramites: 2413, personas: 869 },
    { año: 2025, fecha: "02 Y 03 DE DIC", sede: "Explanada", dentro: true, tramites: 1395, personas: 483 },
    { año: 2026, fecha: "28 y 29 de agosto", sede: "Explanada", dentro: true, tramites: 1939, personas: 769 }
  ],
  "Atenco": [
    { año: 2024, fecha: "27 al 29 de nov", sede: "Explanada", dentro: true, tramites: 2871, personas: 1242 },
    { año: 2025, fecha: "6 AL 8 DE NOV", sede: "Explanada", dentro: true, tramites: 2975, personas: 1080 },
    { año: 2026, fecha: "14 y 15 de agosto", sede: "Explanada", dentro: true, tramites: 2222, personas: 1090 }
  ],
  "Atizapán de Zaragoza": [
    { año: 2024, fecha: "13 al 17 de nov", sede: "Explanada", dentro: true, tramites: 7870, personas: 2826 },
    { año: 2025, fecha: "15 AL 16 DE MARZ", sede: "Explanada", dentro: true, tramites: 7398, personas: 3376 },
    { año: 2025, fecha: "30 al 04 de oct", sede: "Explanada", dentro: true, tramites: 2069, personas: 560 },
    { año: 2026, fecha: "24 al 28 de marzo", sede: "Explanada", dentro: true, tramites: 4859, personas: 2435 }
  ],
  "Atizapán (Santa Cruz)": [
    { año: 2025, fecha: "2 AL 3 DE SEP", sede: "Explanada", dentro: true, tramites: 1142, personas: 1038 }
  ],
  "Atlacomulco": [
    { año: 2024, fecha: "9 al 11 de cotubre", sede: "Explanada", dentro: true, tramites: 2557, personas: 1149 },
    { año: 2025, fecha: "19 AL 23 DE AGO", sede: "Explanada", dentro: true, tramites: 6943, personas: 1795 },
    { año: 2026, fecha: "16 al 20 de junio", sede: "Explanada", dentro: true, tramites: 4971, personas: 1668 }
  ],
  "Atlautla": [
    { año: 2025, fecha: "21 AL 23 DE FEB/", sede: "Explanada", dentro: true, tramites: 2378, personas: 833 },
    { año: 2025, fecha: "14 AL 16 DE OCT", sede: "Explanada", dentro: true, tramites: 2688, personas: 473 },
    { año: 2026, fecha: "5 y 6 de junio", sede: "Explanada", dentro: true, tramites: 732, personas: 346 }
  ],
  "Axapusco": [
    { año: 2025, fecha: "5 AL 6 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 1559, personas: 514 },
    { año: 2025, fecha: "11 AL 13 DE SEP", sede: "Explanada", dentro: true, tramites: 1953, personas: 643 },
    { año: 2026, fecha: "7 al 9 de abril", sede: "Explanada", dentro: true, tramites: 2052, personas: 907 },
    { año: 2026, fecha: "8 al 10 de octubre", sede: "Explanada", dentro: true, tramites: 2034, personas: 750 }
  ],
  "Ayapango": [
    { año: 2024, fecha: "18 y 19 de dic", sede: "Explanada", dentro: true, tramites: 1331, personas: 458 },
    { año: 2025, fecha: "11 AL 12 DE JUL", sede: "Explanada", dentro: true, tramites: 1355, personas: 390 },
    { año: 2026, fecha: "16 y 17 de junio", sede: "Explanada", dentro: true, tramites: 1314, personas: 458 }
  ],
  "Calimaya": [
    { año: 2024, fecha: "17 al 19 de julio", sede: "Explanada", dentro: true, tramites: 3342, personas: 1011 },
    { año: 2025, fecha: "4 AL 6 CALIMAYA", sede: "Explanada", dentro: true, tramites: 2313, personas: 526 },
    { año: 2026, fecha: "14 al 18 de julio", sede: "Explanada", dentro: true, tramites: 2598, personas: 899 }
  ],
  "Capulhuac": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 647, personas: 230 },
    { año: 2025, fecha: "9 Y 10 DE SEP", sede: "Explanada", dentro: true, tramites: 1003, personas: 319 },
    { año: 2026, fecha: "28 al 30 de abril", sede: "Explanada", dentro: true, tramites: 1454, personas: 595 }
  ],
  "Chalco": [
    { año: 2024, fecha: "7 al 9 de agosto", sede: "colonias culturas", dentro: false, tramites: 4613, personas: 2341 },
    { año: 2025, fecha: "24 AL 28 DE JUN", sede: "Explanada", dentro: true, tramites: 10247, personas: 4742 },
    { año: 2026, fecha: "30 de junio al 4 de julio", sede: "Explanada", dentro: true, tramites: 8417, personas: 3440 }
  ],
  "Chapa de Mota": [
    { año: 2025, fecha: "10 AL 12 DE JUN", sede: "Explanada", dentro: true, tramites: 1082, personas: 398 },
    { año: 2026, fecha: "9 al 11 julio", sede: "Explanada", dentro: true, tramites: 1441, personas: 323 }
  ],
  "Chapultepec": [
    { año: 2024, fecha: "21 y 22 de sept", sede: "Explanada", dentro: true, tramites: 812, personas: 297 },
    { año: 2025, fecha: "27 AL 28 DE JUN", sede: "Explanada", dentro: true, tramites: 1844, personas: 439 },
    { año: 2026, fecha: "4 al 6 de agosto", sede: "Explanada", dentro: true, tramites: 1742, personas: 555 }
  ],
  "Chiautla": [
    { año: 2025, fecha: "26 AL 28 DE FEB", sede: "Explanada", dentro: true, tramites: 3630, personas: 1450 }
  ],
  "Chicoloapan": [
    { año: 2025, fecha: "12 AL 16 DE FEB/", sede: "Explanada", dentro: true, tramites: 9146, personas: 3383 },
    { año: 2025, fecha: "17 Y 18 DE SEP", sede: "Explanada", dentro: true, tramites: 3487, personas: 907 },
    { año: 2026, fecha: "18 al 22 de agosto", sede: "Explanada", dentro: true, tramites: 10589, personas: 3494 }
  ],
  "Chiconcuac": [
    { año: 2025, fecha: "8 AL 9 DE FEB/", sede: "Explanada", dentro: true, tramites: 1721, personas: 582 },
    { año: 2025, fecha: "19 AL 20 SEP", sede: "Explanada", dentro: true, tramites: 1946, personas: 471 },
    { año: 2026, fecha: "24 al 28 de febrero", sede: "Explanada", dentro: true, tramites: 3438, personas: 1256 },
    { año: 2026, fecha: "17 al 19 de septiembre", sede: "Explanada", dentro: true, tramites: 2100, personas: 643 }
  ],
  "Chimalhuacán": [
    { año: 2024, fecha: "17 al 21 de julio", sede: "Recinto Ferial", dentro: false, tramites: 11283, personas: 4227 },
    { año: 2025, fecha: "17 AL 21 DE JUN", sede: "Explanada", dentro: true, tramites: 10203, personas: 3647 },
    { año: 2026, fecha: "12 al 16 de mayo", sede: "Deportivo Tepalcate", dentro: false, tramites: 5241, personas: 3708 }
  ],
  "Coacalco de Berriozábal": [
    { año: 2024, fecha: "4 al 8 de sept", sede: "Explanada", dentro: true, tramites: 9312, personas: 2809 },
    { año: 2025, fecha: "20 AL 22 DE MAYO", sede: "Explanada", dentro: true, tramites: 5633, personas: 1952 },
    { año: 2026, fecha: "1 al 5 de septiembre", sede: "Explanada", dentro: true, tramites: 6145, personas: 2413 }
  ],
  "Coatepec Harinas": [
    { año: 2025, fecha: "19 AL 20 DE FEB/", sede: "Explanada", dentro: true, tramites: 1779, personas: 769 },
    { año: 2025, fecha: "30 AL 02 DE OCT", sede: "Explanada", dentro: true, tramites: 1772, personas: 406 },
    { año: 2026, fecha: "26 al 28 de marzo", sede: "Explanada", dentro: true, tramites: 1691, personas: 477 },
    { año: 2026, fecha: "6 al 8 de octubre", sede: "Explanada", dentro: true, tramites: 1755, personas: 434 }
  ],
  "Cocotitlán": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 616, personas: 277 },
    { año: 2025, fecha: "30 AL 31 DE JUL", sede: "Explanada", dentro: true, tramites: 2361, personas: 818 }
  ],
  "Coyotepec": [
    { año: 2024, fecha: "19 y 20 de junio", sede: "Explanada", dentro: true, tramites: 1543, personas: 632 },
    { año: 2025, fecha: "14 AL 16 DE AGO", sede: "Explanada", dentro: true, tramites: 4072, personas: 1591 }
  ],
  "Cuautitlán": [
    { año: 2024, fecha: "6 al 10 de nov", sede: "Centro Social y Cultural", dentro: false, tramites: 6884, personas: 1648 },
    { año: 2025, fecha: "27 AL 31 DE ENERO", sede: "Centro Social y Cultural", dentro: false, tramites: 27799, personas: 6327 }
  ],
  "Cuautitlán Izcalli": [
    { año: 2024, fecha: "16 al 20 de octubre", sede: "Explanada", dentro: true, tramites: 5497, personas: 2500 },
    { año: 2025, fecha: "26 AL 30 DE AGO", sede: "Explanada", dentro: true, tramites: 10358, personas: 2518 },
    { año: 2025, fecha: "18 AL 19 DE NOVIEMBRE", sede: "Explanada", dentro: true, tramites: 17441, personas: 6327 },
    { año: 2026, fecha: "22 al 26 de septiembre", sede: "Explanada", dentro: true, tramites: 6972, personas: 2249 }
  ],
  "Donato Guerra": [
    { año: 2024, fecha: "4 al 6 de sept", sede: "Explanada", dentro: true, tramites: 1449, personas: 441 },
    { año: 2026, fecha: "6 al 8 de mayo", sede: "Explanada", dentro: true, tramites: 940, personas: 313 }
  ],
  "Ecatepec de Morelos": [
    { año: 2024, fecha: "21 al 25 de agosto", sede: "Deportivo Emiliano Zapata", dentro: false, tramites: 9441, personas: 2211 },
    { año: 2025, fecha: "12 AL 16 DE MARZ", sede: "Explanada", dentro: true, tramites: 12671, personas: 4223 },
    { año: 2025, fecha: "14 AL 18 OCT", sede: "Central de Abasto", dentro: false, tramites: 10278, personas: 3994 },
    { año: 2026, fecha: "18 al 22 de agosto", sede: "Explanada", dentro: true, tramites: 23816, personas: 5263 }
  ],
  "Ecatzingo": [
    { año: 2025, fecha: "19 AL 20 DE FEB/", sede: "Explanada", dentro: true, tramites: 1735, personas: 452 },
    { año: 2025, fecha: "4 Y 5 DE JUL", sede: "Explanada", dentro: true, tramites: 1275, personas: 182 },
    { año: 2026, fecha: "29 y 30 de mayo", sede: "Explanada", dentro: true, tramites: 1049, personas: 401 }
  ],
  "El Oro": [
    { año: 2024, fecha: "19 y 20 de octubre", sede: "Teatro Juárez", dentro: false, tramites: 1596, personas: 484 },
    { año: 2026, fecha: "3 al 5 de marzo", sede: "Teatro Juárez", dentro: false, tramites: 1708, personas: 912 }
  ],
  "Huehuetoca": [
    { año: 2024, fecha: "2 al 6 de octubre", sede: "Explanada", dentro: true, tramites: 5251, personas: 2757 },
    { año: 2025, fecha: "19 AL 23 DE AGO", sede: "concha acustica", dentro: false, tramites: 14167, personas: 4511 },
    { año: 2026, fecha: "3 al 7 de marzo", sede: "Explanada", dentro: true, tramites: 5548, personas: 2392 },
    { año: 2026, fecha: "1 al 5 de septiembre", sede: "Explanada", dentro: true, tramites: 7174, personas: 2887 }
  ],
  "Hueypoxtla": [
    { año: 2024, fecha: "25 al 27 de sept", sede: "Explanada", dentro: true, tramites: 1248, personas: 488 },
    { año: 2025, fecha: "", sede: "Explanada", dentro: true, tramites: 699, personas: 286 }
  ],
  "Huixquilucan": [
    { año: 2025, fecha: "7 AL 11 DE OCT", sede: "Explanada", dentro: true, tramites: 4395, personas: 1478 },
    { año: 2026, fecha: "15 al 18 de bril", sede: "tianguis de San Matín", dentro: false, tramites: 1645, personas: 820 }
  ],
  "Isidro Fabela": [
    { año: 2024, fecha: "30 de nov al 1 de dic", sede: "Explanada", dentro: true, tramites: 1630, personas: 461 },
    { año: 2025, fecha: "26 AL 27 DE NOV", sede: "Explanada", dentro: true, tramites: 1851, personas: 586 },
    { año: 2026, fecha: "29 y 30 de julio", sede: "Explanada", dentro: true, tramites: 1434, personas: 583 }
  ],
  "Ixtapaluca": [
    { año: 2024, fecha: "26 al 30 de junio", sede: "Explanada", dentro: true, tramites: 5091, personas: 1819 },
    { año: 2025, fecha: "30 AL 4 DE SEP", sede: "Explanada", dentro: true, tramites: 6346, personas: 2794 },
    { año: 2026, fecha: "14 al 18 de julio", sede: "Explanada", dentro: true, tramites: 5325, personas: 2296 }
  ],
  "Ixtapan de la Sal": [
    { año: 2024, fecha: "26 al 28 de junio", sede: "Explanada", dentro: true, tramites: 2304, personas: 544 },
    { año: 2025, fecha: "20 AL 22 DE MAYO", sede: "Explanada", dentro: true, tramites: 3964, personas: 465 },
    { año: 2026, fecha: "17 al 19 de marzo", sede: "Explanada", dentro: true, tramites: 1606, personas: 595 },
    { año: 2026, fecha: "1 al 3 de octubre", sede: "Explanada", dentro: true, tramites: 2109, personas: 685 }
  ],
  "Ixtapan del Oro": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 637, personas: 213 },
    { año: 2025, fecha: "12 AL 13 DE AGO", sede: "Explanada", dentro: true, tramites: 1717, personas: 478 },
    { año: 2026, fecha: "28 al 30 de mayo", sede: "Explanada", dentro: true, tramites: 735, personas: 305 }
  ],
  "Ixtlahuaca": [
    { año: 2024, fecha: "11 al 14 de sept", sede: "Explanada", dentro: true, tramites: 2971, personas: 1161 },
    { año: 2026, fecha: "12 al 16 de mayo", sede: "Explanada", dentro: true, tramites: 4373, personas: 1636 }
  ],
  "Jaltenco": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 2078, personas: 892 },
    { año: 2025, fecha: "12 AL 13 DE AGO", sede: "Explanada", dentro: true, tramites: 3129, personas: 825 },
    { año: 2026, fecha: "8 al 12 de septiembre", sede: "Explanada", dentro: true, tramites: 2953, personas: 1253 }
  ],
  "Jilotepec": [
    { año: 2024, fecha: "23 al 25 de octubre", sede: "Explanada", dentro: true, tramites: 3271, personas: 693 },
    { año: 2025, fecha: "12 AL 14 DE AGO", sede: "Explanada", dentro: true, tramites: 3893, personas: 1243 },
    { año: 2026, fecha: "2 al 4 de julio", sede: "Explanada", dentro: true, tramites: 1973, personas: 690 }
  ],
  "Jilotzingo": [
    { año: 2025, fecha: "26 AL 27 DE MARZ/", sede: "Explanada", dentro: true, tramites: 674, personas: 232 },
    { año: 2025, fecha: "13 AL 15 DE NOV", sede: "Escuela Primaria Benito Juárez", dentro: false, tramites: 677, personas: 271 },
    { año: 2026, fecha: "31 de julio y 1 de agosto", sede: "Explanada", dentro: true, tramites: 627, personas: 151 }
  ],
  "Jiquipilco": [
    { año: 2024, fecha: "3 al 5 de dic", sede: "Unidad Deportiva", dentro: false, tramites: 2242, personas: 695 },
    { año: 2025, fecha: "30 AL 2 DE AGO", sede: "Loma del Artillero", dentro: false, tramites: 5582, personas: 1550 }
  ],
  "Jocotitlán": [
    { año: 2025, fecha: "21 AL 25 DE ENERO", sede: "Explanada", dentro: true, tramites: 4405, personas: 1799 },
    { año: 2026, fecha: "9 y 10 de junio", sede: "Explanada", dentro: true, tramites: 1119, personas: 373 }
  ],
  "Joquicingo": [
    { año: 2025, fecha: "29 Y 30 DE AGO", sede: "Explanada", dentro: true, tramites: 1172, personas: 505 },
    { año: 2026, fecha: "8 y 9 de septiembre", sede: "Explanada", dentro: true, tramites: 1046, personas: 371 }
  ],
  "Juchitepec": [
    { año: 2025, fecha: "21 AL 22 DE ENERO/", sede: "Explanada", dentro: true, tramites: 2293, personas: 1157 },
    { año: 2025, fecha: "8 AL 10 DE JUL", sede: "Explanada", dentro: true, tramites: 4835, personas: 1217 },
    { año: 2026, fecha: "9 y 10 de junio", sede: "Explanada", dentro: true, tramites: 1537, personas: 698 }
  ],
  "La Paz": [
    { año: 2024, fecha: "3 al 7 de julio", sede: "Explanada", dentro: true, tramites: 7187, personas: 2774 },
    { año: 2025, fecha: "2 AL 6 DE JUN", sede: "Explanada", dentro: true, tramites: 7645, personas: 3211 },
    { año: 2026, fecha: "29 de julio al 1 de agosto", sede: "Explanada", dentro: true, tramites: 6435, personas: 3097 }
  ],
  "Lerma": [
    { año: 2025, fecha: "19 AL 23 DE MAR/", sede: "Explanada", dentro: true, tramites: 4416, personas: 1540 },
    { año: 2025, fecha: "18 AL 22 NOV", sede: "Explanada", dentro: true, tramites: 3187, personas: 1475 }
  ],
  "Luvianos": [
    { año: 2025, fecha: "26 Y 27 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 974, personas: 196 },
    { año: 2025, fecha: "14 Y 15 DE OCT", sede: "Explanada", dentro: true, tramites: 1336, personas: 290 },
    { año: 2026, fecha: "24 y 25 de abril", sede: "Explanada", dentro: true, tramites: 504, personas: 151 }
  ],
  "Malinalco": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 2641, personas: 598 },
    { año: 2025, fecha: "27 AL 28 DE MAYO", sede: "Explanada", dentro: true, tramites: 1185, personas: 362 },
    { año: 2026, fecha: "25 y 26 de febrero", sede: "Explanada", dentro: true, tramites: 1394, personas: 305 },
    { año: 2026, fecha: "17 y 19 de septiembre", sede: "Explanada", dentro: true, tramites: 1280, personas: 369 }
  ],
  "Melchor Ocampo": [
    { año: 2025, fecha: "25 AL 27 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 3157, personas: 1082 },
    { año: 2025, fecha: "02 AL 05 DE DIC", sede: "Explanada", dentro: true, tramites: 4494, personas: 1157 },
    { año: 2026, fecha: "8 al 12 de septiembre", sede: "Explanada", dentro: true, tramites: 3659, personas: 1028 }
  ],
  "Metepec": [
    { año: 2024, fecha: "14 al 16 de agosto", sede: "Explanada", dentro: true, tramites: 2918, personas: 1089 },
    { año: 2025, fecha: "17 AL 20 DE SEP", sede: "Explanada", dentro: true, tramites: 1579, personas: 855 },
    { año: 2026, fecha: "7 al 11 de julio", sede: "Explanada", dentro: true, tramites: 1021, personas: 414 }
  ],
  "Mexicaltzingo": [
    { año: 2025, fecha: "19 AL 20 DE MARZ/", sede: "Explanada", dentro: true, tramites: 747, personas: 272 },
    { año: 2025, fecha: "11 al 12 nov", sede: "Explanada", dentro: true, tramites: 744, personas: 382 },
    { año: 2026, fecha: "7 y 8 de agosto", sede: "Explanada", dentro: true, tramites: 985, personas: 273 }
  ],
  "Morelos": [
    { año: 2024, fecha: "12 y 13 de oct", sede: "auditorio municipal", dentro: false, tramites: 1035, personas: 259 },
    { año: 2025, fecha: "15 AL 16 DE AGO", sede: "andador Boshegui", dentro: false, tramites: 1846, personas: 393 }
  ],
  "Naucalpan de Juárez": [
    { año: 2024, fecha: "20 al 24 de nov", sede: "Explanada", dentro: true, tramites: 7718, personas: 2731 },
    { año: 2025, fecha: "29 AL 03 DE MAYO/", sede: "Explanada", dentro: true, tramites: 4044, personas: 1161 },
    { año: 2025, fecha: "21 AL 25 OCT", sede: "Explanada", dentro: true, tramites: 8905, personas: 3499 },
    { año: 2026, fecha: "7 al 11 de abril", sede: "Explanada", dentro: true, tramites: 5478, personas: 2336 },
    { año: 2026, fecha: "29 de septiembre al 3 de octubre", sede: "Explanada", dentro: true, tramites: 4783, personas: 1341 }
  ],
  "Nextlalpan": [
    { año: 2025, fecha: "5 AL 9 DE MAR/", sede: "Explanada", dentro: true, tramites: 6741, personas: 1974 },
    { año: 2025, fecha: "15 AL 16 DE JUL", sede: "Explanada", dentro: true, tramites: 2695, personas: 628 }
  ],
  "Nezahualcóyotl": [
    { año: 2024, fecha: "10 al 14 de julio", sede: "Explanada", dentro: true, tramites: 18223, personas: 6317 },
    { año: 2025, fecha: "10 AL 14 DE JUN/", sede: "Explanada", dentro: true, tramites: 13573, personas: 4542 },
    { año: 2025, fecha: "11 AL 15 DE NOV", sede: "Explanada", dentro: true, tramites: 11184, personas: 4047 },
    { año: 2026, fecha: "19 al 23 de mayo", sede: "Explanada", dentro: true, tramites: 8725, personas: 4470 }
  ],
  "Nicolás Romero": [
    { año: 2024, fecha: "30 de oct al 3 de nov", sede: "Explanada", dentro: true, tramites: 2758, personas: 946 },
    { año: 2025, fecha: "9 AL 13 DE SEP", sede: "Explanada", dentro: true, tramites: 10463, personas: 3691 },
    { año: 2026, fecha: "14 al 18 de julio", sede: "Explanada", dentro: true, tramites: 7774, personas: 3141 }
  ],
  "Nopaltepec": [
    { año: 2025, fecha: "23 AL 24 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 979, personas: 385 },
    { año: 2025, fecha: "9Y10 SEP", sede: "Explanada", dentro: true, tramites: 1107, personas: 280 },
    { año: 2026, fecha: "10 y 11 de abril", sede: "Explanada", dentro: true, tramites: 1272, personas: 487 },
    { año: 2026, fecha: "6 y 7 de octubre", sede: "Explanada", dentro: true, tramites: 1543, personas: 688 }
  ],
  "Ocoyoacac": [
    { año: 2025, fecha: "5 AL 6 DE MARZ/", sede: "Explanada", dentro: true, tramites: 2400, personas: 987 },
    { año: 2025, fecha: "15 AL 18 DE JUL", sede: "Explanada", dentro: true, tramites: 3660, personas: 795 },
    { año: 2026, fecha: "21 al 25 de abri", sede: "Plaza de los Insurgentes", dentro: false, tramites: 2295, personas: 1129 }
  ],
  "Ocuilan": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 897, personas: 531 },
    { año: 2025, fecha: "2 AL 3 DE SEP", sede: "Explanada", dentro: true, tramites: 1254, personas: 303 },
    { año: 2026, fecha: "10 y 11 de septiembre", sede: "Explanada", dentro: true, tramites: 1046, personas: 324 }
  ],
  "Otumba": [
    { año: 2024, fecha: "10 y 11 de agosto", sede: "Explanada", dentro: true, tramites: 1629, personas: 699 },
    { año: 2025, fecha: "1 AL 2 DE AGO", sede: "Explanada", dentro: true, tramites: 1493, personas: 730 },
    { año: 2026, fecha: "24 y 25 de abril", sede: "Explanada", dentro: true, tramites: 963, personas: 397 },
    { año: 2026, fecha: "14 y 15 de agosto", sede: "Explanada", dentro: true, tramites: 2482, personas: 1010 }
  ],
  "Otzoloapan": [
    { año: 2025, fecha: "29 AL 30 DE ABRIL", sede: "Explanada", dentro: true, tramites: 13536, personas: 150 },
    { año: 2026, fecha: "30 de abril y 2 de mayo", sede: "Explanada", dentro: true, tramites: 267, personas: 111 }
  ],
  "Otzolotepec": [
    { año: 2024, fecha: "27 al 29 de nov", sede: "Calle Independencia", dentro: false, tramites: 3913, personas: 1044 },
    { año: 2025, fecha: "23 Y 24 DE MAYO", sede: "Calle Independencia", dentro: false, tramites: 1522, personas: 648 },
    { año: 2025, fecha: "07 Y 08 DE OCT", sede: "Calle Independencia", dentro: false, tramites: 839, personas: 128 },
    { año: 2026, fecha: "11 al 15 de agosto", sede: "Explanada", dentro: true, tramites: 4480, personas: 1583 }
  ],
  "Ozumba": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 899, personas: 493 },
    { año: 2025, fecha: "17 Y 18 DE OCT", sede: "Explanada", dentro: true, tramites: 1731, personas: 393 },
    { año: 2026, fecha: "2 al 4 de junio", sede: "Explanada", dentro: true, tramites: 1449, personas: 792 }
  ],
  "Papalotla": [
    { año: 2025, fecha: "1 AL 2 DE FEB/", sede: "Explanada", dentro: true, tramites: 954, personas: 379 },
    { año: 2025, fecha: "4 Y 5 DE NOV", sede: "Explanada", dentro: true, tramites: 1124, personas: 365 },
    { año: 2026, fecha: "11 y 12 de agosto", sede: "Explanada", dentro: true, tramites: 1800, personas: 687 }
  ],
  "Polotitlán": [
    { año: 2025, fecha: "15 AL 16 DE ENERO/", sede: "Explanada", dentro: true, tramites: 1069, personas: 321 },
    { año: 2025, fecha: "", sede: "Explanada", dentro: true, tramites: 1105, personas: 248 },
    { año: 2026, fecha: "30 de junio 01 de julio", sede: "Explanada", dentro: true, tramites: 691, personas: 215 }
  ],
  "Rayón": [
    { año: 2025, fecha: "21 AL 23 AL MARZ/", sede: "Explanada", dentro: true, tramites: 1505, personas: 537 },
    { año: 2025, fecha: "6 Y 8 NOV", sede: "Explanada", dentro: true, tramites: 1625, personas: 409 },
    { año: 2026, fecha: "31 de julio y 1 de agosto", sede: "Explanada", dentro: true, tramites: 1014, personas: 388 }
  ],
  "San Antonio la Isla": [
    { año: 2024, fecha: "17 y 18 de agosto", sede: "Explanada", dentro: true, tramites: 3090, personas: 950 },
    { año: 2025, fecha: "24 AL 26 DE JUN", sede: "Explanada", dentro: true, tramites: 2737, personas: 754 },
    { año: 2026, fecha: "29 y 30 de julio", sede: "Explanada", dentro: true, tramites: 1787, personas: 540 }
  ],
  "San Felipe del Progreso": [
    { año: 2024, fecha: "11 al 15 de dic", sede: "Explanada", dentro: true, tramites: 3063, personas: 1115 },
    { año: 2025, fecha: "25 AL 29 DE NOV", sede: "Explanada", dentro: true, tramites: 4453, personas: 1174 },
    { año: 2026, fecha: "2 al 6 de junio", sede: "Explanada", dentro: true, tramites: 3451, personas: 1109 }
  ],
  "San José del Rincón": [
    { año: 2025, fecha: "27 AL 28 DE MAYO", sede: "Explanada", dentro: true, tramites: 1619, personas: 724 },
    { año: 2026, fecha: "4 al 8 de agosto", sede: "Explanada", dentro: true, tramites: 3694, personas: 1267 }
  ],
  "San Martín de las Pirámides": [
    { año: 2024, fecha: "(febrero) 11 al 14 de sept", sede: "Explanada", dentro: true, tramites: 3143, personas: 1347 },
    { año: 2025, fecha: "26 AL 30 DE AGO", sede: "Explanada", dentro: true, tramites: 5349, personas: 2533 },
    { año: 2026, fecha: "21 al 23 de abril", sede: "Explanada", dentro: true, tramites: 1533, personas: 1029 },
    { año: 2026, fecha: "29 y 30 de septiembre", sede: "Explanada", dentro: true, tramites: 1434, personas: 548 }
  ],
  "San Mateo Atenco": [
    { año: 2025, fecha: "7 AL 9 DE MARZ/", sede: "Explanada", dentro: true, tramites: 4206, personas: 1998 },
    { año: 2025, fecha: "04 AL 06 DE SEP", sede: "Explanada", dentro: true, tramites: 2274, personas: 1411 },
    { año: 2026, fecha: "6 al 9 de mayo", sede: "Explanada", dentro: true, tramites: 2308, personas: 977 }
  ],
  "San Simón de Guerrero": [
    { año: 2025, fecha: "6 AL 8 DE MAYO", sede: "Calle Riva Palacio", dentro: false, tramites: 1538, personas: 325 },
    { año: 2025, fecha: "16 AL 18 DE OCT", sede: "Calle Riva Palacio", dentro: false, tramites: 684, personas: 157 },
    { año: 2026, fecha: "12 y 13 de mayo", sede: "Calle Riva Palacio", dentro: false, tramites: 552, personas: 164 }
  ],
  "Santiago Tianguistenco": [
    { año: 2025, fecha: "18 AL 14 DE MARZ", sede: "Explanada", dentro: true, tramites: 3971, personas: 1343 },
    { año: 2026, fecha: "19 al 22 de agosto", sede: "Explanada", dentro: true, tramites: 7260, personas: 2259 }
  ],
  "Santo Tomás de los Plátanos": [
    { año: 2024, fecha: "22 y 23 de junio", sede: "Explanada", dentro: true, tramites: 865, personas: 226 },
    { año: 2025, fecha: "3 AL 4 DE SEP", sede: "Explanada", dentro: true, tramites: 1102, personas: 241 },
    { año: 2026, fecha: "26 y 27 de mayo", sede: "Explanada", dentro: true, tramites: 605, personas: 220 }
  ],
  "Soyaniquilpan de Juárez": [
    { año: 2024, fecha: "26 y 27 de octubre", sede: "Explanada", dentro: true, tramites: 1002, personas: 386 },
    { año: 2025, fecha: "28 Y 29 DE NOV", sede: "Explanada", dentro: true, tramites: 1114, personas: 428 },
    { año: 2026, fecha: "7 y 8 de julio", sede: "Explanada", dentro: true, tramites: 922, personas: 345 }
  ],
  "Sultepec": [
    { año: 2025, fecha: "9 AL 11 ABRIL", sede: "Explanada", dentro: true, tramites: 1952, personas: 424 },
    { año: 2026, fecha: "14 y 15 de abril", sede: "Explanada", dentro: true, tramites: 998, personas: 347 }
  ],
  "Tecámac": [
    { año: 2024, fecha: "14 al 18 de agosto", sede: "Explanada", dentro: true, tramites: 9619, personas: 3792 },
    { año: 2025, fecha: "23 AL 27 DE SEP", sede: "Explanada", dentro: true, tramites: 10644, personas: 3636 },
    { año: 2026, fecha: "10 al 14 de marzo", sede: "Explanada", dentro: true, tramites: 7147, personas: 2913 }
  ],
  "Tejupilco": [
    { año: 2025, fecha: "23 AL 25 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 2857, personas: 900 },
    { año: 2025, fecha: "21 AL 25 DE OCT", sede: "Explanada", dentro: true, tramites: 4443, personas: 1208 },
    { año: 2026, fecha: "19 al 23 de mayo", sede: "Explanada", dentro: true, tramites: 2469, personas: 959 }
  ],
  "Temamatla": [
    { año: 2025, fecha: "23 AL 25 DE ENERO", sede: "Explanada", dentro: true, tramites: 4405, personas: 1799 },
    { año: 2025, fecha: "23 AL25 DE OCT", sede: "Explanada", dentro: true, tramites: 2366, personas: 930 },
    { año: 2026, fecha: "23 al 25 de junio", sede: "Explanada", dentro: true, tramites: 1346, personas: 638 }
  ],
  "Temascalapa": [
    { año: 2025, fecha: "2 AL 4 DE ABRIL/", sede: "Explanada", dentro: true, tramites: 3121, personas: 1136 },
    { año: 2025, fecha: "02 AL 04 NOV", sede: "Explanada", dentro: true, tramites: 2069, personas: 693 },
    { año: 2026, fecha: "14 al 18 de abril", sede: "Explanada", dentro: true, tramites: 2651, personas: 1217 }
  ],
  "Temascalcingo": [
    { año: 2025, fecha: "30 AL 2 DE AGO", sede: "Explanada", dentro: true, tramites: 2455, personas: 681 },
    { año: 2026, fecha: "11 al 13 de junio", sede: "Explanada", dentro: true, tramites: 1218, personas: 456 }
  ],
  "Temascaltepec": [
    { año: 2024, fecha: "19 al 21 de junio", sede: "Explanada", dentro: true, tramites: 1531, personas: 363 },
    { año: 2025, fecha: "21 AL 23 DE AGO", sede: "Explanada", dentro: true, tramites: 3074, personas: 1246 },
    { año: 2026, fecha: "14 al 16 de mayo", sede: "Explanada", dentro: true, tramites: 1225, personas: 290 },
    { año: 2026, fecha: "", sede: "Explanada", dentro: true, tramites: 1323, personas: 289 }
  ],
  "Temoaya": [
    { año: 2024, fecha: "20 y 21 de julio", sede: "Avenida Rinconada", dentro: false, tramites: 1869, personas: 622 },
    { año: 2025, fecha: "8 AL 12 DE JUL/", sede: "Explanada", dentro: true, tramites: 6775, personas: 1084 },
    { año: 2025, fecha: "02 AL 06 DE DIC", sede: "Explanada", dentro: true, tramites: 1999, personas: 415 },
    { año: 2026, fecha: "19 al 23 de mayo", sede: "Explanada", dentro: true, tramites: 2441, personas: 1188 }
  ],
  "Tenancingo": [
    { año: 2025, fecha: "26 AL 28 DE FEB/", sede: "Explanada", dentro: true, tramites: 4195, personas: 1509 },
    { año: 2025, fecha: "28 AL 30 DE OCT", sede: "Explanada", dentro: true, tramites: 1980, personas: 429 }
  ],
  "Tenango del Aire": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 1180, personas: 675 },
    { año: 2025, fecha: "21 Y22 DE OCT", sede: "Explanada", dentro: true, tramites: 1388, personas: 421 },
    { año: 2026, fecha: "18 al 20 de junio", sede: "Explanada", dentro: true, tramites: 1082, personas: 652 }
  ],
  "Tenango del Valle": [
    { año: 2024, fecha: "3 al 5 de julio", sede: "Explanada", dentro: true, tramites: 2571, personas: 1143 },
    { año: 2025, fecha: "3 AL 7 DE JUN", sede: "Explanada", dentro: true, tramites: 5276, personas: 1723 },
    { año: 2026, fecha: "3 al 7 de marzo", sede: "Explanada", dentro: true, tramites: 3188, personas: 1639 },
    { año: 2026, fecha: "1 al 5 de septiembre", sede: "Explanada", dentro: true, tramites: 2247, personas: 660 }
  ],
  "Teoloyucan": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 740, personas: 311 },
    { año: 2025, fecha: "25 AL 28 DE NOV", sede: "Explanada", dentro: true, tramites: 3626, personas: 1133 }
  ],
  "Teotihuacán": [
    { año: 2024, fecha: "4 al 8 de dic", sede: "Explanada", dentro: true, tramites: 4223, personas: 1381 },
    { año: 2025, fecha: "5 AL 7 DE AGO", sede: "Explanada", dentro: true, tramites: 3812, personas: 1352 },
    { año: 2026, fecha: "28 de abril al 2 de mayo", sede: "Explanada", dentro: true, tramites: 2863, personas: 1466 }
  ],
  "Tepetlaoxtoc": [
    { año: 2025, fecha: "6 AL 7 DE FEB/", sede: "Calle Hidalgo", dentro: false, tramites: 1947, personas: 824 },
    { año: 2025, fecha: "8 Y 9 DE AGO", sede: "Calle Hidalgo", dentro: false, tramites: 2155, personas: 850 },
    { año: 2026, fecha: "6 y 7 de mayo", sede: "Calle Hidalgo", dentro: false, tramites: 1311, personas: 702 }
  ],
  "Tepetlixpa": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 1371, personas: 525 },
    { año: 2025, fecha: "1 AL 3 DE JUL", sede: "Explanada", dentro: true, tramites: 3621, personas: 957 },
    { año: 2026, fecha: "26 al 28 de mayo", sede: "Explanada", dentro: true, tramites: 1487, personas: 893 }
  ],
  "Tepotzotlán": [
    { año: 2024, fecha: "9 al 13 de octubre", sede: "Explanada", dentro: true, tramites: 5414, personas: 2093 },
    { año: 2025, fecha: "8 AL 12 DE JUL", sede: "Explanada", dentro: true, tramites: 7388, personas: 2635 },
    { año: 2026, fecha: "24 al 28 de febrero", sede: "Explanada", dentro: true, tramites: 6384, personas: 2799 },
    { año: 2026, fecha: "6 al 10 de octubre", sede: "Explanada", dentro: true, tramites: 4622, personas: 1476 }
  ],
  "Tequixquiac": [
    { año: 2025, fecha: "28 AL 30 DE MARZ", sede: "Explanada", dentro: true, tramites: 2590, personas: 1009 },
    { año: 2026, fecha: "25 al 17 de agosto", sede: "Explanada", dentro: true, tramites: 2238, personas: 1232 }
  ],
  "Texcaltitlán": [
    { año: 2024, fecha: "enero", sede: "Explanada", dentro: true, tramites: 1644, personas: 1858 },
    { año: 2025, fecha: "13 AL 15 DE MAYO", sede: "Explanada", dentro: true, tramites: 1648, personas: 363 },
    { año: 2026, fecha: "9 al 11 de abril", sede: "Explanada", dentro: true, tramites: 1095, personas: 357 },
    { año: 2026, fecha: "9 y 10 de octubre", sede: "Explanada", dentro: true, tramites: 586, personas: 193 }
  ],
  "Texcalyacac": [
    { año: 2025, fecha: "26 AL 27 DE MARZ/", sede: "Explanada", dentro: true, tramites: 1629, personas: 345 },
    { año: 2025, fecha: "04 AL 05 DE NOV", sede: "Explanada", dentro: true, tramites: 595, personas: 210 },
    { año: 2026, fecha: "14 y 15 de agosto", sede: "Explanada", dentro: true, tramites: 688, personas: 314 }
  ],
  "Texcoco": [
    { año: 2024, fecha: "1 al 4 de agosto", sede: "Explanada", dentro: true, tramites: 7918, personas: 3154 },
    { año: 2025, fecha: "17 AL 21 DE JUN", sede: "Explanada", dentro: true, tramites: 7160, personas: 2787 },
    { año: 2026, fecha: "4 al 8 de agosto", sede: "Explanada", dentro: true, tramites: 7029, personas: 2440 }
  ],
  "Tezoyuca": [
    { año: 2024, fecha: "30 de nov al 1 de dic", sede: "Explanada", dentro: true, tramites: 2188, personas: 618 },
    { año: 2025, fecha: "17 AL 18 DE JUL", sede: "Explanada", dentro: true, tramites: 2392, personas: 673 },
    { año: 2026, fecha: "8 y 9 de mayo", sede: "Auditorio Municipal", dentro: false, tramites: 1214, personas: 682 }
  ],
  "Timilpan": [
    { año: 2025, fecha: "17 AL 19 DE ENERO", sede: "Explanada", dentro: true, tramites: 2304, personas: 600 },
    { año: 2025, fecha: "", sede: "Explanada", dentro: true, tramites: 1406, personas: 266 }
  ],
  "Tlalmanalco": [
    { año: 2025, fecha: "7 AL 8 DE MAYO/", sede: "Explanada", dentro: true, tramites: 2232, personas: 760 },
    { año: 2025, fecha: "26 Y 27 OCT", sede: "Explanada", dentro: true, tramites: 1358, personas: 499 }
  ],
  "Tlalnepantla de Baz": [
    { año: 2024, fecha: "28 de ago al 1 sep", sede: "Explanada", dentro: true, tramites: 10168, personas: 4335 },
    { año: 2025, fecha: "13 AL 17 DE MAYO", sede: "Explanada", dentro: true, tramites: 9698, personas: 2904 },
    { año: 2026, fecha: "17 al 21 de marzo", sede: "Explanada", dentro: true, tramites: 4700, personas: 1884 }
  ],
  "Tlatlaya": [
    { año: 2024, fecha: "7 al 9 de agosto", sede: "San Pedro Limón", dentro: false, tramites: 1146, personas: 388 },
    { año: 2025, fecha: "1 AL 2 DE JUL", sede: "San Pedro Limón", dentro: false, tramites: 756, personas: 346 },
    { año: 2026, fecha: "21 al 23 de abril", sede: "San Pedro Limón", dentro: false, tramites: 983, personas: 249 }
  ],
  "Toluca": [
    { año: 2024, fecha: "28 de ago al 1 sep", sede: "Explanada", dentro: true, tramites: 6505, personas: 2518 },
    { año: 2025, fecha: "23 AL 27 DE SEP", sede: "Explanada", dentro: true, tramites: 4626, personas: 1835 },
    { año: 2026, fecha: "30 de junio al 4 de julio", sede: "Explanada", dentro: true, tramites: 4836, personas: 2156 }
  ],
  "Tonanitla": [
    { año: 2025, fecha: "9 AL 11 ABRIL/", sede: "Explanada", dentro: true, tramites: 2323, personas: 913 },
    { año: 2025, fecha: "28 AL 30 DE OCT", sede: "Explanada", dentro: true, tramites: 1578, personas: 591 },
    { año: 2026, fecha: "17 al 19 de septiembre", sede: "Explanada", dentro: true, tramites: 1995, personas: 525 }
  ],
  "Tonatico": [
    { año: 2024, fecha: "29 y 30 de junio", sede: "Explanada", dentro: true, tramites: 1681, personas: 369 },
    { año: 2025, fecha: "23 Y 24 DE MAYO", sede: "Explanada", dentro: true, tramites: 1535, personas: 334 },
    { año: 2026, fecha: "20 y 21 de marzo", sede: "Explanada", dentro: true, tramites: 997, personas: 332 },
    { año: 2026, fecha: "29 y 30 de septiembre", sede: "Explanada", dentro: true, tramites: 1132, personas: 289 }
  ],
  "Tultepec": [
    { año: 2024, fecha: "24 al 27 de octubre", sede: "Explanada", dentro: true, tramites: 4952, personas: 1592 },
    { año: 2025, fecha: "1 AL 5 JUL", sede: "Explanada", dentro: true, tramites: 3670, personas: 2565 },
    { año: 2026, fecha: "25 al 29 de agosto", sede: "Explanada", dentro: true, tramites: 5737, personas: 2503 }
  ],
  "Tultitlán": [
    { año: 2025, fecha: "15 al 19 DE ENERO /", sede: "Explanada", dentro: true, tramites: 7258, personas: 2825 },
    { año: 2025, fecha: "23 AL27SEP", sede: "Explanada", dentro: true, tramites: 7648, personas: 3569 },
    { año: 2026, fecha: "10 al 14 de marzo", sede: "Explanada", dentro: true, tramites: 6838, personas: 3516 }
  ],
  "Valle de Bravo": [
    { año: 2024, fecha: "febrero", sede: "Explanada", dentro: true, tramites: 1833, personas: 767 },
    { año: 2025, fecha: "4 AL 8 DE NOV", sede: "Explanada", dentro: true, tramites: 3387, personas: 1597 },
    { año: 2026, fecha: "9 al 13 de junio", sede: "Explanada", dentro: true, tramites: 1845, personas: 923 }
  ],
  "Valle de Chalco Solidaridad": [
    { año: 2024, fecha: "21 al 23 de junio", sede: "Explanada", dentro: true, tramites: 3074, personas: 1097 },
    { año: 2025, fecha: "14 AL 18 DE AGO", sede: "Central de Abasto", dentro: false, tramites: 10292, personas: 1708 },
    { año: 2025, fecha: "Explanada Municipal", sede: "Explanada", dentro: true, tramites: 6713, personas: 2200 },
    { año: 2026, fecha: "7 al 11 de julio", sede: "Explanada", dentro: true, tramites: 17772, personas: 4350 }
  ],
  "Villa de Allende": [
    { año: 2024, fecha: "16 y 17 de diciembre", sede: "Explanada", dentro: true, tramites: 961, personas: 306 },
    { año: 2025, fecha: "7 AL 9 DE AGO", sede: "Explanada", dentro: true, tramites: 2383, personas: 865 },
    { año: 2026, fecha: "2 al 6 de junio", sede: "Explanada", dentro: true, tramites: 2018, personas: 931 }
  ],
  "Villa del Carbón": [
    { año: 2024, fecha: "2 al 4 de octubre", sede: "Explanada", dentro: true, tramites: 2040, personas: 929 },
    { año: 2025, fecha: "5 AL 6 DE AGO", sede: "Explanada", dentro: true, tramites: 1509, personas: 539 }
  ],
  "Villa Guerrero": [
    { año: 2025, fecha: "21 AL 23 DE FEB/", sede: "Explanada", dentro: true, tramites: 1808, personas: 509 },
    { año: 2025, fecha: "26 AL 28 DE AGO", sede: "Explanada", dentro: true, tramites: 3715, personas: 914 },
    { año: 2026, fecha: "10 al 14 de marzo", sede: "Explanada", dentro: true, tramites: 2497, personas: 712 },
    { año: 2026, fecha: "24 al 26 de septiembre", sede: "Explanada", dentro: true, tramites: 1452, personas: 362 }
  ],
  "Villa Victoria": [
    { año: 2025, fecha: "6 AL 9 DE FEB/", sede: "Explanada", dentro: true, tramites: 4345, personas: 1526 }
  ],
  "Xalatlaco": [
    { año: 2024, fecha: "6 y 7 de julio", sede: "Explanada", dentro: true, tramites: 1615, personas: 574 },
    { año: 2025, fecha: "17 AL 21 DE JUN", sede: "Explanada", dentro: true, tramites: 2922, personas: 1038 },
    { año: 2026, fecha: "25 al 29 de agosto", sede: "Explanada", dentro: true, tramites: 4301, personas: 1727 }
  ],
  "Xonacatlán": [
    { año: 2024, fecha: "18 al 20 de sept", sede: "Explanada", dentro: true, tramites: 2009, personas: 861 },
    { año: 2025, fecha: "11 AL 13 DE SEP", sede: "Explanada", dentro: true, tramites: 1706, personas: 621 }
  ],
  "Zacazonapan": [
    { año: 2025, fecha: "2 AL 3 DE MAYO/", sede: "Calle San Juan", dentro: false, tramites: 852, personas: 117 },
    { año: 2025, fecha: "09 AL 11 DE OCT", sede: "Calle San Juan", dentro: false, tramites: 401, personas: 129 },
    { año: 2026, fecha: "28 y 29 de abril", sede: "Explanada", dentro: true, tramites: 349, personas: 143 }
  ],
  "Zacualpan": [
    { año: 2025, fecha: "5 AL 6 DE ABRIL", sede: "Explanada", dentro: true, tramites: 2334, personas: 603 },
    { año: 2026, fecha: "24 y 25 de marzo", sede: "Explanada", dentro: true, tramites: 910, personas: 227 }
  ],
  "Zinacantepec": [
    { año: 2024, fecha: "29 al 31 de octubre", sede: "Explanada", dentro: true, tramites: 1573, personas: 563 },
    { año: 2025, fecha: "11 AL 15 DE NOV", sede: "Explanada", dentro: true, tramites: 4946, personas: 1482 },
    { año: 2026, fecha: "23 al 26 de junio", sede: "Explanada", dentro: true, tramites: 2807, personas: 979 }
  ],
  "Zumpahuacán": [
    { año: 2025, fecha: "2 AL 4 DE ABRIL", sede: "Explanada", dentro: true, tramites: 2403, personas: 466 },
    { año: 2026, fecha: "27 y 28 de febrero", sede: "Explanada", dentro: true, tramites: 1024, personas: 283 },
    { año: 2026, fecha: "22 y 23 de septiembre", sede: "Explanada", dentro: true, tramites: 959, personas: 205 }
  ],
  "Zumpango": [
    { año: 2024, fecha: "18 al 22 de sep", sede: "Explanada", dentro: true, tramites: 4164, personas: 1706 },
    { año: 2025, fecha: "17 AL 20 DE SEP", sede: "Arco Techo de San Miguel", dentro: false, tramites: 2611, personas: 1196 },
    { año: 2026, fecha: "17 al 21 de marzo", sede: "Explanada", dentro: true, tramites: 3764, personas: 2504 }
  ]
};