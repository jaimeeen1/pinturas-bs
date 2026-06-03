/* ════════════════════════════════════════════════════════════════════════
   CATÁLOGO DE PRODUCTOS — PINTURAS BS SPA
   ────────────────────────────────────────────────────────────────────────
   👉 CÓMO EDITAR (no necesitas saber programar):

   El catálogo es una LISTA de categorías. Cada categoría tiene productos.
   Para agregar un producto, copia una línea { ... } y cámbiale el texto.
   Para agregar una categoría, copia un bloque { categoria: ... } completo.

   Cada PRODUCTO tiene 3 datos entre comillas:
     nombre  → cómo se llama el producto
     marca   → la marca (Soquina, Ceresita, Sherwin Williams, etc.)
     detalle → presentación o acabado (ej: "Galón · Mate", "1/4 Gl · Brillante")

   ⚠️ Reglas simples para que no se rompa:
     • Cada dato va entre "comillas dobles".
     • Después de cada } va una coma ,  (menos en el último de la lista).
     • No borres los corchetes [ ] ni las llaves { }.

   El campo "color" es el color de acento de la categoría (código tipo #00d4ff).
   El campo "icono" elige el dibujo (usa uno de estos valores tal cual):
     "latex-int" "latex-ext" "esmalte" "barniz" "impermeable" "especial" "accesorio"
   ════════════════════════════════════════════════════════════════════════ */

const CATALOGO = [

  {
    categoria: "Látex Interior",
    color: "#00d4ff",
    icono: "latex-int",
    descripcion: "Base agua para muros y cielos interiores. Lavable y sin olor.",
    productos: [
      { nombre: "Látex Premium Lavable",      marca: "Soquina",          detalle: "Galón / Tineta · Mate" },
      { nombre: "Látex Interior Mate",        marca: "Ceresita",         detalle: "Galón / Tineta · Mate" },
      { nombre: "Látex Satinado Lavable",     marca: "Soquina",          detalle: "Galón · Satinado" },
      { nombre: "Óleo al Agua Cielos",        marca: "Sherwin Williams", detalle: "Galón · Mate · Antimanchas" }
    ]
  },

  {
    categoria: "Látex Exterior",
    color: "#4fc3f7",
    icono: "latex-ext",
    descripcion: "Resisten lluvia y humedad del sur. Con filtro UV y antihongos.",
    productos: [
      { nombre: "Látex Fachada Premium",      marca: "Ceresita",         detalle: "Galón / Tineta · Anti-UV" },
      { nombre: "Látex Exterior Antihongos",  marca: "Soquina",          detalle: "Galón / Tineta" },
      { nombre: "Súper Látex Exterior",       marca: "Sherwin Williams", detalle: "Galón · Alta cobertura" }
    ]
  },

  {
    categoria: "Esmaltes",
    color: "#f5a623",
    icono: "esmalte",
    descripcion: "Sintéticos y al agua para maderas y metales. Brillante o satinado.",
    productos: [
      { nombre: "Esmalte Sintético Brillante", marca: "Soquina",  detalle: "1/4 · 1 Gl · Brillante" },
      { nombre: "Esmalte al Agua",             marca: "Ceresita", detalle: "1/4 · 1 Gl · Satinado · Bajo olor" },
      { nombre: "Esmalte Industrial",          marca: "Hela",     detalle: "Galón · Alta dureza" },
      { nombre: "Anticorrosivo + Esmalte",     marca: "Hela",     detalle: "Galón · 2 en 1" }
    ]
  },

  {
    categoria: "Barnices & Stains",
    color: "#c49a5a",
    icono: "barniz",
    descripcion: "Acabados transparentes que resaltan y protegen la madera.",
    productos: [
      { nombre: "Barniz Marino",             marca: "Renner Sayerlack", detalle: "1/4 · 1 Gl · Brillante" },
      { nombre: "Stain Protector Deck",      marca: "Renner Sayerlack", detalle: "Galón · Semitransparente" },
      { nombre: "Barniz Pisos Poliuretano",  marca: "Renner Sayerlack", detalle: "Galón · Alto tránsito" }
    ]
  },

  {
    categoria: "Impermeabilizantes",
    color: "#29b6f6",
    icono: "impermeable",
    descripcion: "Para techumbres, muros y zonas húmedas. Sellado elástico.",
    productos: [
      { nombre: "Impermeabilizante Techos",   marca: "Passol",   detalle: "Tineta · Elástico" },
      { nombre: "Membrana Acrílica",          marca: "Passol",   detalle: "Galón / Tineta · Fibrado" },
      { nombre: "Sello Muros Húmedos",        marca: "Ceresita", detalle: "Galón · Interior/Exterior" }
    ]
  },

  {
    categoria: "Pinturas Especiales",
    color: "#ab47bc",
    icono: "especial",
    descripcion: "Anticorrosivos, epóxicos, de tráfico y revestimientos técnicos.",
    productos: [
      { nombre: "Esmalte Epóxico Pisos",      marca: "Sherwin Williams", detalle: "Kit · 2 componentes" },
      { nombre: "Pintura de Tráfico",         marca: "Hela",             detalle: "Galón · Demarcación" },
      { nombre: "Anticorrosivo Galvanizado",  marca: "Soquina",          detalle: "Galón · Base metal" }
    ]
  },

  {
    categoria: "Accesorios y Herramientas",
    color: "#66bb6a",
    icono: "accesorio",
    descripcion: "Todo lo necesario para pintar: brochas, rodillos, lijas y más.",
    productos: [
      { nombre: "Set Rodillo + Bandeja",      marca: "Nexxo",  detalle: "9\" · Lana / Espuma" },
      { nombre: "Brochas Profesionales",      marca: "Nexxo",  detalle: "1\" a 4\" · Cerda mixta" },
      { nombre: "Cinta de Enmascarar",        marca: "Nexxo",  detalle: "18 / 24 / 36 mm" },
      { nombre: "Lijas y Espátulas",          marca: "Varios", detalle: "Grano surtido" }
    ]
  }

];
