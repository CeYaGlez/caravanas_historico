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
  "Acolman": [
    { año: 2024, fecha: "feb", sede: "explanada municipal", dentro: true, tramites: 1765, personas: 948 },
    { año: 2025, fecha: "24 AL 28 DE JUN", sede: "explanada municipal", dentro: true, tramites: 4863, personas: 1665 },
    { año: 2026, fecha: "24 al 28 de marzo", sede: "casa de cultura", dentro: false, tramites: 4105, personas: 2388 }
  ],
  "Apaxco": [
    { año: 2024, fecha: "28 y 29 de sept", sede: "explanada municipal", dentro: true, tramites: 988, personas: 367 },
    { año: 2025, fecha: "02 Y 03 DE SEP", sede: "campo la noria", dentro: false, tramites: 3808, personas: 869 },
    { año: 2025, fecha: "02 Y 03 DE DIC", sede: "explanada municipal", dentro: true, tramites: 0, personas: 483 }
  ],
  "Chalco": [
    { año: 2024, fecha: "7 al 9 de agosto", sede: "colonia culturas", dentro: false, tramites: 4613, personas: 2341 },
    { año: 2025, fecha: "24 AL 28 DE JUN", sede: "jardín central", dentro: true, tramites: 10247, personas: 4742 }
  ],
  "Chimalhuacán": [
    { año: 2024, fecha: "17 al 21 de julio", sede: "Recinto Ferial", dentro: false, tramites: 11283, personas: 4227 },
    { año: 2025, fecha: "17 AL 21 DE JUN", sede: "explanada municipal", dentro: true, tramites: 10203, personas: 3647 },
    { año: 2026, fecha: "12 al 16 de mayo", sede: "Deportivo Tepalcate", dentro: false, tramites: 5241, personas: 3708 }
  ],
  "Cuautitlán": [
    { año: 2024, fecha: "6 al 10 de nov", sede: "Centro Social y Cultural", dentro: false, tramites: 6884, personas: 1648 },
    { año: 2025, fecha: "27 AL 31 DE ENERO", sede: "Centro Social y Cultural", dentro: false, tramites: 27799, personas: 6327 }
  ],
  "Ecatepec de Morelos": [
    { año: 2024, fecha: "21 al 25 de agosto", sede: "Deportivo Emiliano Zapata", dentro: false, tramites: 9441, personas: 2211 },
    { año: 2025, fecha: "12 AL 16 DE MARZ", sede: "explanada municipal", dentro: true, tramites: 22949, personas: 4223 },
    { año: 2025, fecha: "14 AL 18 OCT", sede: "Central de Abasto", dentro: false, tramites: 0, personas: 3994 }
  ],
  "El Oro": [
    { año: 2024, fecha: "19 y 20 de octubre", sede: "Teatro Juárez", dentro: false, tramites: 1596, personas: 484 },
    { año: 2026, fecha: "3 al 5 de marzo", sede: "Teatro Juárez", dentro: false, tramites: 1708, personas: 912 }
  ],
  "Huehuetoca": [
    { año: 2024, fecha: "2 al 6 de octubre", sede: "explanada municipal", dentro: true, tramites: 5251, personas: 2757 },
    { año: 2025, fecha: "19 AL 23 DE AGO", sede: "concha acustica", dentro: false, tramites: 14167, personas: 4511 },
    { año: 2026, fecha: "3 al 7 de marzo", sede: "explanada municipal", dentro: true, tramites: 5548, personas: 2392 }
  ],
  "Huixquilucan": [
    { año: 2025, fecha: "7 AL 11 DE OCT", sede: "explanada municipal", dentro: true, tramites: 4395, personas: 1478 },
    { año: 2026, fecha: "15 al 18 de bril", sede: "tianguis de San Matín", dentro: false, tramites: 1645, personas: 820 }
  ],
  "Jilotzingo": [
    { año: 2025, fecha: "26 AL 27 DE MARZ", sede: "explanada municipal", dentro: true, tramites: 1351, personas: 232 },
    { año: 2025, fecha: "13 AL 15 DE NOV", sede: "Escuela Primaria Benito Juárez", dentro: false, tramites: 0, personas: 271 }
  ],
  "Jiquipilco": [
    { año: 2024, fecha: "3 al 5 de dic", sede: "Unidad Deportiva", dentro: false, tramites: 2242, personas: 695 },
    { año: 2025, fecha: "30 AL 2 DE AGO", sede: "Loma del Artillero", dentro: false, tramites: 5582, personas: 1550 },
    { año: 2026, fecha: "explanada municipal", sede: "explanada municipal", dentro: true, tramites: 2072, personas: 759 }
  ],
  "Morelos": [
    { año: 2024, fecha: "12 y 13 de oct", sede: "auditorio municipal", dentro: false, tramites: 1035, personas: 259 },
    { año: 2025, fecha: "15 AL 16 DE AGO", sede: "andador Boshegui", dentro: false, tramites: 1846, personas: 393 }
  ],
  "Otzolotepec": [
    { año: 2024, fecha: "27 al 29 de nov", sede: "Calle Independencia", dentro: false, tramites: 3913, personas: 1044 },
    { año: 2025, fecha: "23 Y 24 DE MAYO", sede: "Calle Independencia", dentro: false, tramites: 2361, personas: 648 },
    { año: 2025, fecha: "07 Y 08 DE OCT", sede: "Calle Independencia", dentro: false, tramites: 0, personas: 128 }
  ],
  "Otumba": [
    { año: 2024, fecha: "10 y 11 de agosto", sede: "explanada municipal", dentro: true, tramites: 1629, personas: 699 },
    { año: 2025, fecha: "1 AL 2 DE AGO", sede: "explanada municipal", dentro: true, tramites: 1493, personas: 730 },
    { año: 2026, fecha: "24 y 25 de abril", sede: "Av. Eugenio Montaño", dentro: false, tramites: 963, personas: 397 }
  ],
  "Rayón": [
    { año: 2025, fecha: "21 AL 23 AL MARZ", sede: "Centro Cultural Rayón", dentro: false, tramites: 3130, personas: 537 },
    { año: 2025, fecha: "6 Y 8 NOV", sede: "Plaza Rayón", dentro: false, tramites: 0, personas: 409 }
  ],
  "San Simón de Guerrero": [
    { año: 2025, fecha: "6 AL 8 DE MAYO", sede: "Calle Riva Palacio", dentro: false, tramites: 2222, personas: 325 },
    { año: 2025, fecha: "16 AL 18 DE OCT", sede: "Calle Riva Palacio", dentro: false, tramites: 0, personas: 157 },
    { año: 2026, fecha: "12 y 13 de mayo", sede: "Calle Riva Palacio", dentro: false, tramites: 552, personas: 164 }
  ],
  "Temoaya": [
    { año: 2024, fecha: "20 y 21 de julio", sede: "Avenida Rinconada", dentro: false, tramites: 1869, personas: 622 },
    { año: 2025, fecha: "8 AL 12 DE JUL", sede: "Plaza Civíca", dentro: true, tramites: 8774, personas: 1084 },
    { año: 2025, fecha: "02 AL 06 DE DIC", sede: "Plaza Civíca", dentro: true, tramites: 0, personas: 415 },
    { año: 2026, fecha: "19 al 23 de mayo", sede: "Plaza Civíca", dentro: true, tramites: 2441, personas: 1188 }
  ],
  "Tenango del Valle": [
    { año: 2024, fecha: "3 al 5 de julio", sede: "explanada municipal", dentro: true, tramites: 2571, personas: 1143 },
    { año: 2025, fecha: "3 AL 7 DE JUN", sede: "explanada municipal", dentro: true, tramites: 5276, personas: 1723 },
    { año: 2026, fecha: "3 al 7 de marzo", sede: "Santa Maria Jajalpa", dentro: false, tramites: 3188, personas: 1639 }
  ],
  "Tepetlaoxtoc": [
    { año: 2025, fecha: "6 AL 7 DE FEB", sede: "Calle Hidalgo", dentro: false, tramites: 4102, personas: 824 },
    { año: 2025, fecha: "8 Y 9 DE AGO", sede: "Calle Hidalgo", dentro: false, tramites: 0, personas: 850 },
    { año: 2026, fecha: "6 y 7 de mayo", sede: "Calle Hidalgo", dentro: false, tramites: 1311, personas: 702 }
  ],
  "Tezoyuca": [
    { año: 2024, fecha: "30 de nov al 1 de dic", sede: "explanada municipal", dentro: true, tramites: 2188, personas: 618 },
    { año: 2025, fecha: "17 AL 18 DE JUL", sede: "explanada municipal", dentro: true, tramites: 2392, personas: 673 },
    { año: 2026, fecha: "8 y 9 de mayo", sede: "Auditorio Municipal", dentro: false, tramites: 1214, personas: 682 }
  ],
  "Tlatlaya": [
    { año: 2024, fecha: "7 al 9 de agosto", sede: "San Pedro Limón", dentro: false, tramites: 1146, personas: 388 },
    { año: 2025, fecha: "1 AL 2 DE JUL", sede: "San Pedro Limón", dentro: false, tramites: 756, personas: 346 },
    { año: 2026, fecha: "21 al 23 de abril", sede: "San Pedro Limón", dentro: false, tramites: 983, personas: 249 }
  ],
  "Valle de Chalco Solidaridad": [
    { año: 2024, fecha: "21 al 23 de junio", sede: "explanada municipal", dentro: true, tramites: 3074, personas: 1097 },
    { año: 2025, fecha: "14 AL 18 DE AGO", sede: "Central de Abasto", dentro: false, tramites: 10292, personas: 1708 },
    { año: 2025, fecha: "Explanada Municipal", sede: "explanada municipal", dentro: true, tramites: 0, personas: 2200 }
  ],
  "Zacazonapan": [
    { año: 2025, fecha: "2 AL 3 DE MAYO", sede: "Calle San Juan", dentro: false, tramites: 1253, personas: 117 },
    { año: 2025, fecha: "09 AL 11 DE OCT", sede: "Calle San Juan", dentro: false, tramites: 0, personas: 129 },
    { año: 2026, fecha: "28 y 29 de abril", sede: "explanada municipal", dentro: true, tramites: 349, personas: 143 }
  ],
  "Zumpango": [
    { año: 2024, fecha: "18 al 22 de sep", sede: "explanada municipal", dentro: true, tramites: 4164, personas: 1706 },
    { año: 2025, fecha: "17 AL 20 DE SEP", sede: "Arco Techo de San Miguel", dentro: false, tramites: 2611, personas: 1196 },
    { año: 2026, fecha: "17 al 21 de marzo", sede: "explanada municipal", dentro: true, tramites: 3764, personas: 2504 }
  ]
};
