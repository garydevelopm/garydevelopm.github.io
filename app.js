var recursos = [
  { 
    titulo: "Repositorios de examenes para FP", 
    desc: "Examenes, talleres, lecciones y ejercicios variados de toda la materia.", 
    tema: "Programacion", 
    tipo: "Drive", 
    url: "https://drive.google.com/drive/folders/1KEu5DSlKlXquYaRCSiNPzoeQ-RhiVfrt?usp=sharing"
  },
  { 
    titulo: "Guia de estudio para FP", 
    desc: "Guía de estudio completa de FP. Resumen de toda la materia, formularios, tips y conceptos clave.",
    tema: "Programacion", 
    tipo: "PDF", 
    guia: true,
    url: "pdfs/Guia_Estudio_FP.pdf" 
  },
  { 
    titulo: "Repositorios de examenes para calculo/cuv", 
    desc: "Examenes, talleres, lecciones y ejercicios variados de toda la materia.", 
    tema: "Calculo", 
    tipo: "Drive", 
    url: "https://drive.google.com/drive/folders/1AiT2JNjb5KD0BTn4wEhjbETxUSVEjKsh?usp=sharing"
  },
  { 
    titulo: "Repositorios de examenes para Estadistica I", 
    desc: "Examenes, talleres, lecciones y ejercicios variados de toda la materia.", 
    tema: "Estadistica", 
    tipo: "Drive", 
    url: "https://drive.google.com/drive/folders/1Z7lU4bLlBvEtPaBZvPJg6cbcqTCZhp64?usp=sharing"
  },
  { 
    titulo: "Guia de estudio para Estadistica I", 
    desc: "Guía de estudio completa de Estadística I. Resumen de toda la materia, formularios, tips y conceptos clave.",
    tema: "Estadistica", 
    tipo: "PDF", 
    guia: true,
    url: "pdfs/Guia_Estudio_Estadistica_I.pdf" 
  },
  { 
    titulo: "Repositorios de examenes para Calculo Vectorial", 
    desc: "Examenes, talleres, lecciones y ejercicios variados de toda la materia.", 
    tema: "Calculo Vectorial", 
    tipo: "Drive", 
    url: "https://drive.google.com/drive/folders/1qZEa4o02iSnE83H-gejO8_opV97cPCUr?usp=sharing"
  },
 
];
var linkInstagram = "https://www.instagram.com/garydevelop";

var videos = [
    { titulo: "Python desde cero", canal: "Piogram", tema: "Programacion", id: "DJdBGf7uzg4" },
    { titulo: "Fundamentos de programacion", canal: "Robespierre Triviño", tema: "Programacion", id: "HlkA0yc2uKo" },
    { titulo: "Python desde cero", canal: "Soy Dalto", tema: "Programacion", id: "nKPbfIU442g" },
    { titulo: "Python desde cero para principiantes", canal: "MoureDev by Brais Moure", tema: "Programacion", id: "Kp4Mvapo5kc" },
    { titulo: "Introduccion a numpy y pandas", canal: "Juan Romero", tema: "Programacion", id: "Ft-04pxLhIw" },
    { titulo: "POO con Python desde cero", canal: "Soy Dalto", tema: "Programacion", id: "HtKqSJX7VoM" },
    { titulo: "Nociones topológicas #1 (Introducción y conceptos básicos)", canal: "Profe Andy Ayluardo", tema: "Calculo", id: "I2j9BLwqiBE" },
    { titulo: "Cálculo de varias variables clase 1: introducción", canal: "Jesus Gregorio Miranda Benavides", tema: "Calculo vectorial", id: "hi0yUyv9xY8" }, 
    { titulo:"Definiciones básicas de Estadística: Población, muestra y diferencia entre parámetro y estadístico (estadistica 1)", canal:"FCNM ESPOL", tema:"Estadistica", id:"Rc3TJHcNSW0" },
    { titulo:"Clase estadistica 1- Conceptos Básicos y Diagramas", canal:"domenica coello", tema:"Estadistica", id:"1VLgBbeUtQk" },
    { titulo:"Ayudantias estadistica 1", canal:"Ivis Pérez Fuentes", tema:"Estadistica", id:"YuTZ6jBPgQE" },
    { titulo:"Mega Ayudantias estadistica 1 - segundo parcial", canal:"Tico Nuñez Gambarrotti", tema:"Estadistica", id:"FBz2S9mLJ_k" },
    { titulo:"Ayudantía de Estadística 1", canal:"Profe Andy Ayluardo", tema:"Estadistica", id:"hEMsQ2c1r6Q" },
  ];

var cursos = [
  { titulo: "CS50: Introducción a las Ciencias de la Computación", desc: "El curso de Harvard para aprender a programar desde cero, con clases y problemas.", tema: "Programación", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "11 semanas", plataforma: "Harvard", publicado: "2026", img: "https://cs50.harvard.edu/x/2026/assets/sanders.jpg", url: "https://cs50.harvard.edu/x/", color: 350 },
  { titulo: "Curso LLM de Hugging Face", desc: "Aprende cómo funcionan los modelos de lenguaje (LLM) y el procesamiento de lenguaje natural con las librerías de Hugging Face. Son 12 capítulos, gratis y sin anuncios. Conviene saber Python.", tema: "Inteligencia Artificial", tipo: "Web", idioma: "EN", nivel: "Intermedio", duracion: "12 capítulos", plataforma: "Hugging Face", publicado: "2025-04-03", img: "https://cdn-thumbnails.huggingface.co/social-thumbnails/learn/llm-course/chapter1/1.png", url: "https://huggingface.co/learn/llm-course/en/chapter1/1", color: 40, fecha: "2026-10-05" },
  { titulo: "CS50P: Introducción a la Programación con Python", desc: "Curso de Harvard para aprender Python desde cero, con o sin experiencia previa. Incluye clases y problemas semanales.", tema: "Programación", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "10 semanas", plataforma: "Harvard", publicado: "2022", img: "https://prod-discovery.edx-cdn.org/media/course/image/2cc794d0-316d-42f7-bbfd-25c34e4cd5df-033e46d516c0.small.png", url: "https://cs50.harvard.edu/python", color: 205, fecha: "2026-10-05" },
  { titulo: "Practical Deep Learning for Coders", desc: "Curso de Jeremy Howard (fast.ai) para aprender deep learning escribiendo código desde la primera clase. La Parte 1 tiene 9 lecciones de unos 90 minutos. Conviene saber un poco de Python.", tema: "Machine Learning", tipo: "Web", idioma: "EN", nivel: "Intermedio", duracion: "9 lecciones", plataforma: "fast.ai", publicado: "2022", img: "https://course.fast.ai/www/social.png", url: "https://course.fast.ai/", color: 160, fecha: "2026-10-05" },
  { titulo: "Machine Learning para principiantes", desc: "Currículo de Microsoft sobre machine learning clásico: 12 semanas, 26 lecciones y 52 quizzes. Tiene traducción al español.", tema: "Machine Learning", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "12 semanas", plataforma: "Microsoft", publicado: "2021", img: "https://repository-images.githubusercontent.com/343965132/549b1a80-c897-11eb-9436-918072d2e0f8", url: "https://github.com/microsoft/ML-For-Beginners", color: 200, fecha: "2026-10-05" },
  { titulo: "CS50 IA: Introducción a la Inteligencia Artificial con Python", desc: "Curso de Harvard sobre búsqueda, conocimiento, incertidumbre, optimización, aprendizaje automático, redes neuronales y lenguaje. 7 semanas con proyectos prácticos. Pide haber hecho CS50x o tener un año de Python.", tema: "Inteligencia Artificial", tipo: "Web", idioma: "EN", nivel: "Intermedio", duracion: "7 semanas", plataforma: "Harvard", publicado: "2020", img: "https://img.youtube.com/vi/qK46ET1xk2A/maxresdefault.jpg", url: "https://cs50.harvard.edu/ai/", color: 350, fecha: "2026-10-05" },
  { titulo: "Machine Learning Crash Course", desc: "Curso gratuito de Google sobre los fundamentos del machine learning: de la pérdida y el descenso del gradiente a la clasificación y las redes neuronales. Disponible en español.", tema: "Machine Learning", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "A tu ritmo", plataforma: "Google", publicado: "2018-03-02", img: "https://developers.google.com/static/machine-learning/crash-course/images/mlcc-hero.png", url: "https://developers.google.com/machine-learning/crash-course", color: 215, fecha: "2026-10-05" },
  { titulo: "Elements of AI: Introducción a la IA", desc: "Curso gratuito de la Universidad de Helsinki y MinnaLearn para entender qué es la IA, sin programar ni matemáticas complicadas. Cada parte toma de 4 a 8 horas. Hay versión en español.", tema: "Inteligencia Artificial", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "A tu ritmo", plataforma: "Helsinki", publicado: "2018", img: "https://elementsofai.s3.amazonaws.com/_1200x630_crop_center-center_none/EOAIhero.png", url: "https://www.elementsofai.com/", color: 270, fecha: "2026-10-05" },
  { titulo: "Introducción a la Programación con Python (MIT 6.0001)", desc: "Curso de MIT para principiantes: aprende a escribir programas pequeños y útiles en Python, con clases, lecturas y problem sets.", tema: "Programación", tipo: "Web", idioma: "EN", nivel: "Principiante", duracion: "A tu ritmo", plataforma: "MIT", publicado: "2016", img: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/bb7bc760922abfcd37f5d8b9203d771f_6-0001f16.jpg", url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/", color: 20, fecha: "2026-10-05" },
];
var playlists = [
  { titulo: "Música para estudiar, trabajar e inspirarse", desc: "mejora la concentración mientras estudias o trabajas.", categoria: "Concentrarse", plataforma: "YouTube", color: 190, fecha: "2026-10-05", url: "https://www.youtube.com/watch?v=VzmtIUmjkTo&list=RDVzmtIUmjkTo&start_radio=1" },
  { titulo: "Dark academia playlist", desc: "Música ambiental para estudiar con calma y concentración", categoria: "Estudiar", plataforma: "YouTube", color: 30, fecha: "2026-10-05", url: "https://www.youtube.com/watch?v=SllpB3W5f6s&list=RDSllpB3W5f6s&start_radio=1" },
];
var tituloGrupo = { "Estudiar": "Para estudiar", "Concentrarse": "Para concentrarte", "Relajarse": "Para relajarte", "Energía": "Para darte energía" };

var noticias = [
  { titulo: "Artemis II vuelve a la Luna: primer viaje tripulado desde 1972", fuente: "NBC News", tema: "Espacio", resumen: "Cuatro astronautas despegaron el 1 de abril, rodearon la Luna y regresaron a la Tierra tras unos 10 días. Alcanzaron más de 406 000 km de distancia, un nuevo récord para una misión tripulada.", color: 230, fecha: "2026-04-01", img: "https://media.nbcnewyork.com/2026/04/GettyImages-2269359565.jpg?quality=85&strip=all&resize=1200%2C675", url: "https://www.nbcnewyork.com/news/national-international/nasa-artemis-splashdown/" },
  { titulo: "La NASA lanza el telescopio espacial Nancy Grace Roman", fuente: "Popular Science", tema: "Espacio", resumen: "Despegó el 30 de agosto en un Falcon Heavy rumbo al punto L2. Estudiará la energía oscura y buscará exoplanetas con un campo de visión 100 veces mayor que el del Hubble. Sus primeras imágenes se esperan en enero de 2027.", color: 250, fecha: "2026-08-30", img: "https://www.popsci.com/wp-content/uploads/2026/08/nancy-grace-roman-launch-lead.png?w=1200", url: "https://www.popsci.com/science/nancy-grace-roman-space-telescope-launch/" },
  { titulo: "Detectan una atmósfera en un planeta rocoso de la zona habitable", fuente: "Newswise", tema: "Espacio", resumen: "Astrónomos detectaron helio escapando de LHS 1140 b, una supertierra a unos 48 años luz. Es la primera vez que se confirma una atmósfera en un mundo rocoso de la zona habitable de su estrella, aunque faltan más observaciones.", color: 200, fecha: "2026-07-16", img: "https://www.newswise.com/images/uploads/2026/07/23/6a6267fa2936e_cfa-055-heliumatomsphereplanet3Hlrg.jpg", url: "https://www.newswise.com/articles/first-atmosphere-detected-on-a-habitable-zone-rocky-world" },
  { titulo: "El CERN transporta antimateria en un camión por primera vez", fuente: "Consejo Europeo de Investigación (ERC)", tema: "Ciencia", resumen: "El 24 de marzo, el experimento BASE-STEP movió 92 antiprotones dentro del CERN en una trampa portátil. Abre la puerta a llevar antimateria a otros laboratorios y medirla con más precisión.", color: 190, fecha: "2026-03-24", img: "https://erc.europa.eu/sites/default/files/2026-03/202410-259_98.jpg", url: "https://erc.europa.eu/news-events/news/antiprotons-cern-antimatter-factory-make-their-first-road-trip" },
  { titulo: "Premio Turing para los pioneros de la criptografía cuántica", fuente: "IBM Newsroom", tema: "Ciencia", resumen: "Charles Bennett (IBM) y Gilles Brassard (Université de Montréal) recibieron el máximo galardón de la computación. Su protocolo BB84, de 1984, es la base de la criptografía cuántica y de la ciencia de la información cuántica.", color: 270, fecha: "2026-03-18", img: "https://newsroom.ibm.com/image/Charles-H-Bennett-social.jpg", url: "https://newsroom.ibm.com/2026-03-18-ibm-fellow-and-quantum-pioneer-charles-h-bennett-receives-a-m-turing-award-computings-highest-honor" },
  { titulo: "2025 fue el tercer año más cálido de la historia", fuente: "ECMWF / Copernicus", tema: "Ciencia", resumen: "Según Copernicus, la temperatura media global fue 1,47 °C superior a la época preindustrial. Además, 2023-2025 es el primer período de tres años que supera 1,5 °C, el umbral del Acuerdo de París.", color: 20, fecha: "2026-01-14", url: "https://www.ecmwf.int/en/about/media-centre/news/2025/2025-third-warmest-year" },
  { titulo: "La FDA aprueba el primer fármaco dirigido a RAS contra el cáncer de páncreas", fuente: "Michigan Public", tema: "Salud", resumen: "Daraxonrasib (Rasonque) casi duplicó la supervivencia mediana en cáncer de páncreas metastásico: 13,2 meses frente a unos 6,7 con quimioterapia. No es una cura, pero ataca una proteína que durante décadas se consideró intratable.", color: 150, fecha: "2026-08-26", img: "https://npr.brightspotcdn.com/dims4/default/0b432fb/2147483647/strip/true/crop/2742x1440+0+51/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnpr.brightspotcdn.com%2Fdims3%2Fdefault%2Fstrip%2Ffalse%2Fcrop%2F2742x1542%200%20142%2Fresize%2F2742x1542%21%2F%3Furl%3Dhttp%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F9d%2F8e%2F4f19d19c47ecb6b05a6efe23b65b%2Fap26222551894866.jpg", url: "https://www.michiganpublic.org/2026-08-27/fda-approves-landmark-pancreatic-cancer-drug-thats-shown-to-improve-survival" },
  { titulo: "La FDA aprueba la primera vacuna de ARNm contra la gripe", fuente: "Becker's Hospital Review", tema: "Salud", resumen: "mFLUSIVA, de Moderna, fue aprobada para mayores de 50 años. En ensayos con más de 40 000 adultos resultó cerca de 27 % más eficaz que una dosis estándar, y se espera para la temporada 2026-2027.", color: 170, fecha: "2026-08-06", url: "https://www.beckershospitalreview.com/pharmacy/fda-approves-modernas-mrna-flu-vaccine/" },
  { titulo: "DeepMind libera AlphaGenome, una IA que lee el ADN no codificante", fuente: "SiliconANGLE", tema: "Tecnología e IA", resumen: "El 28 de enero Google DeepMind publicó el modelo en Nature y lo abrió al público. Predice cómo afectan las variantes del ADN en regiones que no producen proteínas, y funciona con una sola GPU H100.", color: 260, fecha: "2026-01-28", img: "https://images.siliconangle.com/blogs.dir/1/files/2026/01/DeepMind.png", url: "https://siliconangle.com/2026/01/28/google-deepmind-open-sources-alphagenome-medical-research-model/" },
  { titulo: "ONU: los centros de datos casi duplicarán su consumo eléctrico hacia 2030", fuente: "Tech Wire Asia", tema: "Tecnología e IA", resumen: "Un informe de la Universidad de las Naciones Unidas calcula que pasarán de 448 TWh en 2025 a 945 TWh en 2030, con la IA cerca del 40 % del consumo. El agua que usan casi se duplicaría, hasta 9,3 billones de litros.", color: 210, fecha: "2026-06-03", img: "https://techwireasia.com/wp-content/uploads/2026/06/AI-data-centres-could-double-power-and-water-use-by-2030-scaled-e1780561982942.jpg", url: "https://techwireasia.com/2026/06/ai-data-centres-power-water-use-2030/" },
  { titulo: "El Papa León XIV publica su encíclica sobre la inteligencia artificial", fuente: "The Good Newsroom", tema: "Sociedad y ética", resumen: "«Magnifica Humanitas» se publicó el 25 de mayo. Advierte que la IA puede simular voces, rostros e incluso empatía, y recuerda que acceder a muchos datos no es lo mismo que encontrarles sentido.", color: 40, fecha: "2026-05-25", img: "https://thegoodnewsroom.org/wp-content/uploads/2026/05/20260518T0755-POPE-AI-ENCYCLICAL-ANNOUNCED-1819883-scaled.jpg", url: "https://thegoodnewsroom.org/pope-leo-xiv-to-publish-encyclical-on-artificial-intelligence-may-25/" },
  { titulo: "Entran en vigor las reglas de transparencia de la ley de IA europea", fuente: "Cooley", tema: "Sociedad y ética", resumen: "Desde el 2 de agosto, los sistemas de IA deben avisar que son IA y marcar el contenido sintético. Las multas llegan a 15 millones de euros o 3 % de la facturación mundial; los sistemas generativos existentes tienen plazo hasta el 2 de diciembre.", color: 300, fecha: "2026-08-02", url: "https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026" },
];

var eventos = [
   { titulo: "NASA Space Apps Challenge 2026", desc: "Hackatón internacional de la NASA, el 14 y 15 de noviembre. Se participa en equipos de hasta 6 personas, en un evento local o virtual. Tema de este año: «The Next Frontier».", tipo: "Hackatón", modalidad: "Híbrido", origen: "Nacional", lugar: "Presencial o virtual", fecha: "2026-11-14", color: 230, img: "https://assets.spaceappschallenge.org/media/images/Space_Apps_Logo_Color_and_White.width-440.jpegquality-60.png", logo: true, url: "https://www.spaceappschallenge.org/2026/" },
   { titulo: "GameLab ÉPICO: Cuando las ideas se juntan, empieza el juego", desc: "Cuarta sesión del GameLab ÉPICO. Herramientas prácticas para conformar tu equipo y equilibrar arte, música, narrativa y programación, con el Dr. Wellington Villota. Martes 6 de octubre de 16h00 a 17h00, 100% virtual y gratuito.", tipo: "Charla", modalidad: "Virtual", origen: "Nacional", lugar: "Virtual", fecha: "2026-10-06", color: 220, img: "https://epico.gob.ec/archivos/eventos/CHAR-00053-logo.png", url: "https://epico.gob.ec/shared/evento/index.php?id=1187" },
   { titulo: "DevFest Guayaquil 2026", desc: "Conferencia de desarrolladores organizada por Google Developer Groups (GDG Guayaquil). Un encuentro comunitario para aprender, construir y conectar con otros desarrolladores, con temas de Google Cloud, inteligencia artificial y Gemini. Call for Speakers abierto: si tienes un proyecto, una idea o una experiencia que compartir, puedes postular para dar una charla.", tipo: "Conferencia", modalidad: "Presencial", origen: "ESPOL", lugar: "Auditorio FIEC, ESPOL", ciudad: "Guayaquil", hora: "9:00 a.m. – 3:00 p.m.", fecha: "2026-12-05", color: 215, img: "https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_2560/c_crop,h_640,w_2560,y_0.0_mul_h_sub_0.0_mul_640/c_crop,h_640,w_2560/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/contentbuilder/GDG_Bevy_DefaultEventBanner_g3sdRZ4.png", url: "https://gdg.community.dev/events/details/google-gdg-guayaquil-presents-devfest-guayaquil-2026/" },
   { titulo: "Hult Prize ESPOL", desc: "Competencia internacional de emprendimiento social para estudiantes. Forma un equipo de 2 a 4 personas (con al menos un estudiante activo de ESPOL), propón una idea para resolver un problema social o ambiental alineado a los ODS y compite hacia la gran final. Los entregables y el pitch son en inglés.", tipo: "Concurso", modalidad: "Híbrido", origen: "ESPOL", lugar: "ESPOL, Guayaquil", color: 330, abierto: true, img: "https://images.squarespace-cdn.com/content/v1/55d9fb0ee4b0dfd798034243/1603386956241-Z8C24FHYKG6KHSDERY6F/hp-un.png?format=500w", url: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=r4yvt9iDREaFrjF8VFIjwQ9T7qwvNgdJkH7X8GYkzRxUMVJHU09STlFORlNSQVZTMU9YR0FGT0ZOMC4u&route=shorturl" },
  ];

var cajaCookies = document.getElementById("cookies");

function urlSegura(texto) {
  if (typeof texto !== "string") return "";
  var t = texto.trim();
  if (t === "") return "";
  if (/^pdfs\/[A-Za-z0-9_\-]+\.pdf$/.test(t)) return t;
  try {
    var u = new URL(t);
    return u.protocol === "https:" ? u.href : "";
  } catch (e) {
    return "";
  }
}

function textoSeguro(valor, maximo) {
  return String(valor == null ? "" : valor).replace(/[\u0000-\u001f\u007f]/g, "").slice(0, maximo);
}

function leerCookie(nombre) {
  try {
    var partes = document.cookie.split("; ");
    for (var i = 0; i < partes.length; i++) {
      var par = partes[i].split("=");
      if (par[0] === nombre) return decodeURIComponent(par.slice(1).join("="));
    }
  } catch (e) {}
  return "";
}
function guardarCookie(nombre, valor, dias) {
  try {
    document.cookie = nombre + "=" + encodeURIComponent(valor) +
      "; max-age=" + (dias * 86400) + "; path=/; SameSite=Lax" +
      (location.protocol === "https:" ? "; Secure" : "");
  } catch (e) {}
}
function borrarCookie(nombre) {
  try { document.cookie = nombre + "=; max-age=0; path=/; SameSite=Lax"; } catch (e) {}
}
function permiteCookies() { return leerCookie("gm_consent") === "si"; }

function elegirConsentimiento(respuesta) {
  guardarCookie("gm_consent", respuesta, 180);
  if (respuesta !== "si") borrarCookie("gm_tema");
  cajaCookies.hidden = true;
}
document.getElementById("cookies-si").addEventListener("click", function () { elegirConsentimiento("si"); });
document.getElementById("cookies-no").addEventListener("click", function () { elegirConsentimiento("no"); });
if (leerCookie("gm_consent") === "") cajaCookies.hidden = false;

var secciones = [
  { id: "materias",  nombre: "Materias",  dato: "Material por materia", grupo: "Estudio" },
  { id: "guias",     nombre: "Guías",     dato: "Guías y resúmenes",              grupo: "Estudio" },
  { id: "videos",    nombre: "Videos",    dato: "Clases en video",                 grupo: "Estudio" },
  { id: "cursos",    nombre: "Cursos",    dato: "Cursos completos",        grupo: "Estudio" },
  { id: "playlists", nombre: "Playlists", dato: "Música para tu estudio",       grupo: "Extras" },
  { id: "noticias",  nombre: "Noticias",  dato: "Información del mundo STEM",         grupo: "Extras" },
  { id: "eventos",   nombre: "Eventos próximos", dato: "Eventos de ESPOL y nacionales", grupo: "Extras" }
];

function el(tag, clase, texto) {
  var e = document.createElement(tag);
  if (clase) e.className = clase;
  if (texto !== undefined) e.textContent = texto;
  return e;
}
function unicos(lista, campo) {
  var res = [];
  lista.forEach(function (x) { if (res.indexOf(x[campo]) === -1) res.push(x[campo]); });
  return res;
}
function normalizar(s) { return String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); }
function coincide(consulta, campos) {
  var palabras = normalizar(consulta).trim().split(/\s+/).filter(Boolean);
  if (palabras.length === 0) return true;
  var texto = normalizar(campos.join(" "));
  return palabras.every(function (p) { return texto.indexOf(p) !== -1; });
}
function fechaValida(iso) { return typeof iso === "string" && /^\d{4}-\d{2}-\d{2}$/.test(iso); }
function aFecha(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
function fechaCorta(iso) { if (!fechaValida(iso)) return ""; return aFecha(iso).toLocaleDateString("es-EC", { day: "numeric", month: "short", year: "numeric" }); }
function esNuevo(iso) { return fechaValida(iso) && (Date.now() - aFecha(iso).getTime()) / 86400000 <= 21; }   // "Nuevo" = últimos 21 días

function ponerActualizado(seccion, lista, prefijo) {
  var maxima = lista.reduce(function (m, x) { return fechaValida(x.fecha) && x.fecha > m ? x.fecha : m; }, "0000-00-00");
  seccion.querySelector("[data-actualizado]").textContent = maxima === "0000-00-00" ? "" : (prefijo || "Actualizado") + ": " + fechaCorta(maxima);
}
function textoResumen(nodo, cantidad, consulta) {
  var q = consulta.trim();
  nodo.textContent = q ? cantidad + (cantidad === 1 ? " resultado" : " resultados") + " para «" + q + "»" : "";
}
function mensajeVacio(consulta, tipo, porDefecto) {
  var p = el("p", "empty");
  var q = consulta.trim();
  p.textContent = q ? "No encontré " + tipo + " para «" + q + "»." : porDefecto;
  return p;
}
function pildoraNuevo() { return el("span", "nuevo", "Nuevo"); }
function fondoDegradado(color) { if (typeof color !== "number") color = 210; return "linear-gradient(135deg, hsl(" + color + " 45% 32%), hsl(" + (color + 40) + " 40% 14%))"; }

function abrirEnlace(a, url) {   // solo enlaces https (o tus PDFs en pdfs/); si no hay enlace, el botón queda apagado
  var seguro = urlSegura(url);
  if (seguro !== "") { a.href = seguro; a.target = "_blank"; a.rel = "noopener noreferrer"; }
  else { a.setAttribute("aria-disabled", "true"); a.tabIndex = -1; a.textContent = "Próximamente"; }
}
function idVideoOk(id) { return typeof id === "string" && /^[A-Za-z0-9_-]{11}$/.test(id); }
function miniaturaYoutube(url) {   
  try {
    var u = new URL(url);
    var hosts = ["youtu.be", "youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com"];
    if (hosts.indexOf(u.hostname) === -1) return "";
    var id = u.hostname === "youtu.be" ? u.pathname.slice(1) : (u.searchParams.get("v") || "");
    return idVideoOk(id) ? "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg" : "";
  } catch (e) { return ""; }
}

var ICONO_LUPA = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>';
var contadorFiltros = 0;

function crearFiltro(seccion, placeholder, alCambiar, cookieTema, etiqueta) {   
  var n = ++contadorFiltros;
  var cont = seccion.querySelector("[data-filtro]");
  var estado = { tema: "Todos", consulta: "", abierto: false };
  var chips = [];

  function guardarTema() { if (cookieTema && permiteCookies()) guardarCookie(cookieTema, estado.tema, 180); }

  var barra = el("div", "barra");
  var btnTodos = el("button", "chip chip-todos", etiqueta || "Todos");
  btnTodos.type = "button";
  btnTodos.setAttribute("aria-controls", "sub-" + n);
  var caret = el("span", "caret"); caret.setAttribute("aria-hidden", "true");
  btnTodos.appendChild(caret);

  var buscador = el("div", "buscador");
  buscador.innerHTML = ICONO_LUPA;                       // texto fijo, sin datos de usuario
  var campo = el("input");
  campo.type = "search"; campo.placeholder = placeholder; campo.autocomplete = "off"; campo.maxLength = 60;
  campo.setAttribute("aria-label", placeholder);
  var borrar = el("button", "borrar", "×");
  borrar.type = "button"; borrar.hidden = true; borrar.setAttribute("aria-label", "Borrar búsqueda");
  buscador.appendChild(campo); buscador.appendChild(borrar);
  barra.appendChild(btnTodos); barra.appendChild(buscador);

  var sub = el("div", "subfiltros"); sub.id = "sub-" + n;
  var interior = el("div");
  var caja = el("div", "chips"); caja.setAttribute("role", "group"); caja.setAttribute("aria-label", "Filtrar");
  interior.appendChild(caja); sub.appendChild(interior);

  function pintar() {
    btnTodos.setAttribute("aria-pressed", String(etiqueta ? estado.tema !== "Todos" : estado.tema === "Todos"));
    btnTodos.setAttribute("aria-expanded", String(estado.abierto));
    sub.classList.toggle("abierto", estado.abierto);
    interior.inert = !estado.abierto;
    caja.textContent = "";
    (etiqueta ? ["Todas"].concat(chips) : chips).forEach(function (t) {
      var valor = (etiqueta && t === "Todas") ? "Todos" : t;   // "Todas" = quitar el filtro de categoría
      var b = el("button", "chip", t);
      b.type = "button";
      b.setAttribute("aria-pressed", String(valor === estado.tema));
      b.addEventListener("click", function () { estado.tema = valor; guardarTema(); pintar(); alCambiar(); });
      caja.appendChild(b);
    });
  }
  btnTodos.addEventListener("click", function () {
    if (!etiqueta && estado.tema !== "Todos") { estado.tema = "Todos"; estado.abierto = true; }   // volver a todo
    else { estado.abierto = !estado.abierto; }                                                      // abrir / cerrar la fila
    guardarTema(); pintar(); alCambiar();
  });
  campo.addEventListener("input", function () { estado.consulta = campo.value; borrar.hidden = campo.value === ""; alCambiar(); });
  borrar.addEventListener("click", function () { campo.value = ""; estado.consulta = ""; borrar.hidden = true; campo.focus(); alCambiar(); });

  cont.appendChild(barra); cont.appendChild(sub);
  return {
    estado: estado,
    poner: function (lista) {
      chips = lista;
      if (cookieTema && permiteCookies()) {   // recuerda el último tema elegido (solo si aceptó las cookies)
        var guardado = leerCookie(cookieTema);
        if (guardado !== "Todos" && lista.indexOf(guardado) !== -1) { estado.tema = guardado; estado.abierto = true; }
      }
      pintar();
    }
  };
}

var vistas = {};

function pintarRecursos(cont, lista, consulta, vacio) {
  cont.textContent = "";
  if (lista.length === 0) { cont.appendChild(mensajeVacio(consulta, "recursos", vacio)); return; }
  lista.forEach(function (r) {
    var t = el("article", "card");
    var fila = el("div", "fila-tag");
    fila.appendChild(el("span", "tag", textoSeguro(r.tipo, 12) + " · " + textoSeguro(r.tema, 20)));
    if (esNuevo(r.fecha)) fila.appendChild(pildoraNuevo());
    var tipo = String(r.tipo).toLowerCase();
    var boton = el("a", "btn", tipo === "pdf" ? "Descargar PDF" : (tipo === "drive" ? "Abrir en Drive" : "Abrir enlace"));
    abrirEnlace(boton, r.url);
    t.appendChild(fila); t.appendChild(el("h3", "", r.titulo)); t.appendChild(el("p", "", r.desc)); t.appendChild(boton);
    cont.appendChild(t);
  });
}
(function () {   // MATERIAS
  var sec = document.getElementById("vista-materias");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var f = crearFiltro(sec, "Buscar materia, tema o archivo…", function () { render(); }, "gm_tema");
  f.poner(unicos(recursos, "tema").concat(unicos(recursos, "tipo")));
function render() {
    var e = f.estado;
    var lista = recursos.filter(function (r) {
      var pasa = e.tema === "Todos" || r.tema === e.tema || r.tipo.toLowerCase() === e.tema.toLowerCase();
      return pasa && coincide(e.consulta, [r.titulo, r.desc, r.tema, r.tipo]);
    });
    pintarRecursos(cont, lista, e.consulta, "Todavía no hay material en este tema.");
    textoResumen(res, lista.length, e.consulta);
  }
  ponerActualizado(sec, recursos);
  vistas.materias = { render: render };
})();

(function () {   
  var base = recursos.filter(function (r) { return r.guia; });
  var sec = document.getElementById("vista-guias");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var f = crearFiltro(sec, "Buscar guía o materia…", function () { render(); });
  f.poner(unicos(base, "tema"));
  function render() {
    var e = f.estado;
    var lista = base.filter(function (r) {
      return (e.tema === "Todos" || r.tema === e.tema) && coincide(e.consulta, [r.titulo, r.desc, r.tema]);
    });
    pintarRecursos(cont, lista, e.consulta, "Todavía no hay guías en esta materia.");
    textoResumen(res, lista.length, e.consulta);
  }
  ponerActualizado(sec, base);
  vistas.guias = { render: render };
})();

(function () {   
  var sec = document.getElementById("vista-videos");
  var res = sec.querySelector("[data-resumen]");
  var carrete = document.getElementById("carrete");
  var vacio = document.getElementById("videos-vacio");
  var pista = document.getElementById("videos-lista");
  var flechaIzq = document.getElementById("flecha-izq");
  var flechaDer = document.getElementById("flecha-der");
  var f = crearFiltro(sec, "Buscar video, canal o materia…", function () { render(); });
  f.poner(unicos(videos.filter(function (v) { return idVideoOk(v.id); }), "tema"));

  function mezclar(lista) {   // uno de cada materia, por turnos
    var grupos = {};
    lista.forEach(function (v) { (grupos[v.tema] = grupos[v.tema] || []).push(v); });
    var listas = Object.keys(grupos).map(function (t) { return grupos[t]; });
    var mayor = Math.max.apply(null, listas.map(function (g) { return g.length; }));
    var out = [];
    for (var i = 0; i < mayor; i++) listas.forEach(function (g) { if (g[i]) out.push(g[i]); });
    return out;
  }
  function revisarFlechas() {
    var maximo = pista.scrollWidth - pista.clientWidth;
    flechaIzq.disabled = pista.scrollLeft <= 2;
    flechaDer.disabled = pista.scrollLeft >= maximo - 2;
  }
  flechaIzq.addEventListener("click", function () { pista.scrollBy({ left: -pista.clientWidth * 0.8, behavior: "smooth" }); });
  flechaDer.addEventListener("click", function () { pista.scrollBy({ left: pista.clientWidth * 0.8, behavior: "smooth" }); });
  pista.addEventListener("scroll", revisarFlechas);
  window.addEventListener("resize", revisarFlechas);

  var arrastrando = false, seMovio = false, inicioX = 0, inicioScroll = 0;
  pista.addEventListener("mousedown", function (e) { arrastrando = true; seMovio = false; inicioX = e.pageX; inicioScroll = pista.scrollLeft; });
  window.addEventListener("mousemove", function (e) {
    if (!arrastrando) return;
    var d = e.pageX - inicioX;
    if (Math.abs(d) > 5) { seMovio = true; pista.style.scrollSnapType = "none"; }
    if (seMovio) pista.scrollLeft = inicioScroll - d;
  });
  window.addEventListener("mouseup", function () { if (!arrastrando) return; arrastrando = false; pista.style.scrollSnapType = ""; });
  pista.addEventListener("click", function (e) { if (seMovio) { e.preventDefault(); seMovio = false; } }, true);

  function render() {
    var e = f.estado, esTodos = e.tema === "Todos";
    pista.textContent = "";
    var base = videos.filter(function (v) { return idVideoOk(v.id) && (esTodos || v.tema === e.tema) && coincide(e.consulta, [v.titulo, v.canal, v.tema]); });
    var elegidos = esTodos ? mezclar(base) : base;
    textoResumen(res, elegidos.length, e.consulta);
    carrete.hidden = elegidos.length === 0;
    vacio.hidden = elegidos.length !== 0;
    if (elegidos.length === 0) { vacio.textContent = e.consulta.trim() ? "No encontré videos para «" + e.consulta.trim() + "»." : "Todavía no hay videos en este tema."; return; }

    elegidos.forEach(function (v) {
      var a = el("a", "video");
      a.href = "https://www.youtube.com/watch?v=" + v.id; a.target = "_blank"; a.rel = "noopener noreferrer";
      var mini = el("div", "miniatura");
      mini.style.background = fondoDegradado(v.color);
      var img = el("img");
      img.src = "https://i.ytimg.com/vi/" + v.id + "/hqdefault.jpg"; img.alt = ""; img.loading = "lazy"; img.draggable = false; img.referrerPolicy = "no-referrer";
      img.addEventListener("error", function () { img.remove(); });    // si no carga, queda el degradado
      mini.appendChild(img); mini.appendChild(el("span", "play"));
      if (esTodos) mini.appendChild(el("span", "video-tema", v.tema));
      if (esNuevo(v.fecha)) mini.appendChild(pildoraNuevo());
      a.appendChild(mini); a.appendChild(el("span", "video-titulo", v.titulo)); a.appendChild(el("span", "video-canal", v.canal));
      pista.appendChild(a);
    });
    pista.scrollLeft = 0;
    revisarFlechas();
  }
  ponerActualizado(sec, videos);
  vistas.videos = { render: render };
})();

(function () {   // CURSOS (por categoría; "Todos" = del más nuevo al más viejo)
  var sec = document.getElementById("vista-cursos");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var MESES_CORTO = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var f = crearFiltro(sec, "Buscar curso, categoría o plataforma…", function () { render(); });
  f.poner(unicos(cursos, "tema"));   // las categorías salen solas del campo "tema" de cada curso
  var textoBoton = { "Video": "Ver curso", "Web": "Ir al curso ↗", "Playlist": "Ver playlist" };

  function textoPublicado(p) {   // acepta "2026", "2018-03" o "2018-03-02"
    if (/^\d{4}$/.test(p)) return p;
    if (/^\d{4}-\d{2}$/.test(p)) return MESES_CORTO[+p.slice(5, 7) - 1] + " " + p.slice(0, 4);
    return fechaCorta(p);
  }

  function render() {
    var e = f.estado;
    var lista = cursos.filter(function (c) {
      return (e.tema === "Todos" || c.tema === e.tema) && coincide(e.consulta, [c.titulo, c.desc, c.tema, c.plataforma, c.idioma, c.nivel]);
    }).sort(function (a, b) {   // los más nuevos primero; los que no tienen "publicado", al final
      var pa = a.publicado || "", pb = b.publicado || "";
      return pa < pb ? 1 : (pa > pb ? -1 : 0);
    });
    textoResumen(res, lista.length, e.consulta);
    cont.textContent = "";
    if (lista.length === 0) { cont.appendChild(mensajeVacio(e.consulta, "cursos", "Pronto habrá cursos en este tema.")); return; }
    lista.forEach(function (c) {
      var t = el("article", "pcard");
      var portada = el("div", "portada");
      portada.style.background = fondoDegradado(c.color);
      if (urlSegura(c.img).indexOf("https:") === 0) {   // miniatura del curso; si falla, queda el degradado
        portada.classList.add("con-foto");
        var img = el("img"); img.src = urlSegura(c.img); img.alt = ""; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
        img.addEventListener("error", function () { img.remove(); portada.classList.remove("con-foto"); });
        portada.appendChild(img);
      }
      portada.appendChild(el("span", "portada-grande", textoSeguro(c.duracion, 14)));
      portada.appendChild(el("span", "portada-etq", c.plataforma));
      if (esNuevo(c.fecha)) portada.appendChild(pildoraNuevo());

      var cuerpo = el("div", "pcuerpo");
      cuerpo.appendChild(el("span", "tag", c.tema));
      cuerpo.appendChild(el("h3", "", c.titulo));
      if (c.publicado) cuerpo.appendChild(el("span", "meta", "Publicado: " + textoPublicado(c.publicado)));
      cuerpo.appendChild(el("p", "", c.desc));
      var pil = el("div", "pildoras");
      pil.appendChild(el("span", "pildora", c.idioma === "EN" ? "Inglés" : "Español"));
      pil.appendChild(el("span", "pildora", c.nivel));
      cuerpo.appendChild(pil);
      var boton = el("a", "btn", textoBoton[c.tipo] || "Abrir");
      abrirEnlace(boton, c.url);
      cuerpo.appendChild(boton);
      t.appendChild(portada); t.appendChild(cuerpo);
      cont.appendChild(t);
    });
  }
  ponerActualizado(sec, cursos);
  vistas.cursos = { render: render };
})();

(function () {   // PLAYLISTS (agrupadas por ánimo)
  var sec = document.getElementById("vista-playlists");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var f = crearFiltro(sec, "Buscar playlist…", function () { render(); });
  f.poner(unicos(playlists, "categoria"));

  function render() {
    var e = f.estado, total = 0;
    cont.textContent = "";
    unicos(playlists, "categoria").forEach(function (cat) {
      if (e.tema !== "Todos" && e.tema !== cat) return;
      var lista = playlists.filter(function (p) { return p.categoria === cat && coincide(e.consulta, [p.titulo, p.desc, p.categoria, p.plataforma]); });
      if (lista.length === 0) return;
      total += lista.length;
      var h = el("h3", "grupo-titulo", tituloGrupo[cat] || cat);
      h.appendChild(el("small", "", lista.length + (lista.length === 1 ? " playlist" : " playlists")));
      cont.appendChild(h);
      var grid = el("div", "cuerpo-grid");
      lista.forEach(function (p) {
        var t = el("article", "pcard playlist");
        var portada = el("div", "portada");
        portada.style.background = fondoDegradado(p.color);
        var foto = urlSegura(p.img) || miniaturaYoutube(p.url);   // foto: tu img, o la del video de YouTube
        if (foto.indexOf("https:") === 0) {
          portada.classList.add("con-foto");
          var img = el("img"); img.src = foto; img.alt = ""; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
          img.addEventListener("error", function () { img.remove(); portada.classList.remove("con-foto"); });   // si no carga, queda el degradado
          portada.appendChild(img);
        }
        var eq = el("span", "eq"); eq.setAttribute("aria-hidden", "true");
        for (var i = 0; i < 4; i++) eq.appendChild(el("i"));
        portada.appendChild(eq);
        portada.appendChild(el("span", "portada-etq", p.plataforma));
        if (esNuevo(p.fecha)) portada.appendChild(pildoraNuevo());
        var cuerpo = el("div", "pcuerpo");
        cuerpo.appendChild(el("h3", "", p.titulo));
        cuerpo.appendChild(el("p", "", p.desc));
        if (p.duracion) cuerpo.appendChild(el("span", "meta", textoSeguro(p.duracion, 14) + " de música"));
        var boton = el("a", "btn", "Abrir en " + p.plataforma);
        abrirEnlace(boton, p.url);
        cuerpo.appendChild(boton);
        t.appendChild(portada); t.appendChild(cuerpo);
        grid.appendChild(t);
      });
      cont.appendChild(grid);
    });
    if (total === 0) cont.appendChild(mensajeVacio(e.consulta, "playlists", "Pronto habrá playlists."));
    textoResumen(res, total, e.consulta);
  }
  ponerActualizado(sec, playlists);
  vistas.playlists = { render: render };
})();

(function () {   // NOTICIAS
  var sec = document.getElementById("vista-noticias");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var MESES_LARGO = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  var f = crearFiltro(sec, "Buscar noticia o tema…", function () { render(); }, null, "Categorías");
  f.poner(unicos(noticias, "tema"));   // las categorías salen solas del campo "tema" de cada noticia

  // años que existen en tus noticias (de más nuevo a más viejo)
  var anios = [];
  noticias.forEach(function (n) {
    if (fechaValida(n.fecha) && anios.indexOf(n.fecha.slice(0, 4)) === -1) anios.push(n.fecha.slice(0, 4));
  });
  anios.sort().reverse();
  // el "año presente": el de hoy si tiene noticias; si no, el más nuevo que tengas
  var anioActual = anios.indexOf(String(new Date().getFullYear())) !== -1 ? String(new Date().getFullYear()) : (anios[0] || "");
  var anioElegido = "auto";   // "auto" = todavía no tocó la fila de años

  function anioFiltro() {   // qué año se está mostrando de verdad
    if (anioElegido !== "auto") return anioElegido;
    var e = f.estado;
    // sin filtros → solo el año presente. Si elige una categoría o busca algo → se buscan en todos los años
    return (e.tema === "Todos" && e.consulta.trim() === "") ? anioActual : "Todos";
  }

  var filaAnio = el("div", "fila-anio");
  filaAnio.hidden = anios.length === 0;
  sec.querySelector("[data-filtro]").insertAdjacentElement("afterend", filaAnio);
  function pintarAnios() {
    var activo = anioFiltro();
    filaAnio.textContent = "";
    filaAnio.appendChild(el("span", "fila-etq", "Año"));
    ["Todos"].concat(anios).forEach(function (a) {
      var b = el("button", "chip", a);
      b.type = "button";
      b.setAttribute("aria-pressed", String(a === activo));
      b.addEventListener("click", function () { anioElegido = a; render(); });
      filaAnio.appendChild(b);
    });
    if (anios.length > 1 && anioElegido === "auto" && activo === anioActual) {
      filaAnio.appendChild(el("span", "fila-nota", "Las notas de años anteriores aparecen al elegir su año o una categoría."));
    }
  }

  function render() {
    var e = f.estado, anio = anioFiltro();
    pintarAnios();
    var lista = noticias.filter(function (n) {
      var anioNota = fechaValida(n.fecha) ? n.fecha.slice(0, 4) : "";
      return (e.tema === "Todos" || n.tema === e.tema)
          && (anio === "Todos" || anioNota === anio)
          && coincide(e.consulta, [n.titulo, n.resumen, n.fuente, n.tema]);
    }).sort(function (a, b) {   // las más nuevas primero; las que no tienen fecha, al final
      var fa = fechaValida(a.fecha) ? a.fecha : "", fb = fechaValida(b.fecha) ? b.fecha : "";
      return fa < fb ? 1 : (fa > fb ? -1 : 0);
    });
    textoResumen(res, lista.length, e.consulta);
    cont.textContent = "";
    if (lista.length === 0) { cont.appendChild(mensajeVacio(e.consulta, "noticias", "Todavía no hay noticias con este filtro.")); return; }
    var mesActual = null;
    lista.forEach(function (n) {
      var mes = fechaValida(n.fecha) ? n.fecha.slice(0, 7) : "sin";
      if (mes !== mesActual) {   // título de cada mes: "Agosto 2026"
        mesActual = mes;
        cont.appendChild(el("h3", "grupo-mes", mes === "sin" ? "Sin fecha" : MESES_LARGO[+mes.slice(5, 7) - 1] + " " + mes.slice(0, 4)));
      }
      var t = el("article", "pcard noticia");
      var portada = el("div", "portada");
      portada.style.background = fondoDegradado(n.color);
      if (urlSegura(n.img).indexOf("https:") === 0) {   // si luego pones una imagen, se muestra; si falla, queda el degradado
        var img = el("img"); img.src = urlSegura(n.img); img.alt = ""; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
        img.addEventListener("error", function () { img.remove(); });
        portada.appendChild(img);
      }
      portada.appendChild(el("span", "portada-etq", n.tema));
      if (esNuevo(n.fecha)) portada.appendChild(pildoraNuevo());
      var cuerpo = el("div", "pcuerpo");
      cuerpo.appendChild(el("span", "meta", [n.fuente, fechaCorta(n.fecha)].filter(Boolean).join(" · ")));
      cuerpo.appendChild(el("h3", "", n.titulo));
      cuerpo.appendChild(el("p", "", n.resumen));
      var boton = el("a", "btn", "Leer noticia ↗");
      abrirEnlace(boton, n.url);
      cuerpo.appendChild(boton);
      t.appendChild(portada); t.appendChild(cuerpo);
      cont.appendChild(t);
    });
  }
  ponerActualizado(sec, noticias, "Última nota");
  vistas.noticias = { render: render };
})();

(function () {   // EVENTOS PRÓXIMOS
  var sec = document.getElementById("vista-eventos");
  var cont = sec.querySelector("[data-contenido]"), res = sec.querySelector("[data-resumen]");
  var f = crearFiltro(sec, "Buscar evento, ciudad o ESPOL…", function () { render(); });
  f.poner(["ESPOL", "Nacionales"]);
  var MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  var IGNORAR = ["del", "los", "las", "para", "por", "con", "una", "uno", "que", "hay", "proximo", "proximos"];

  function textoBuscable(ev) {
    var partes = [ev.titulo, ev.desc, ev.tipo, ev.modalidad, "evento eventos"];
    if (ev.origen === "ESPOL") partes.push("espol", ev.lugar);                              // la ciudad no cuenta: son los de la U
    else partes.push("nacional nacionales ecuador", ev.ciudad, ev.lugar);
    return normalizar(partes.join(" "));
  }
  function coincideEvento(consulta, ev) {
    var palabras = normalizar(consulta).split(/\s+/).filter(function (p) { return p.length > 2 && IGNORAR.indexOf(p) === -1; });
    if (palabras.length === 0) return true;
    var texto = textoBuscable(ev);
    return palabras.every(function (p) { return texto.indexOf(p) !== -1; });
  }

  function diasHasta(iso) {
    var hoy = new Date(); hoy.setHours(0, 0, 0, 0);
    return Math.round((aFecha(iso).getTime() - hoy.getTime()) / 86400000);
  }
  function proximos() {
    return eventos.filter(function (e) { return fechaValida(e.fecha) ? diasHasta(e.fecha) >= 0 : e.abierto === true; })   // sin fecha: solo si es "abierto"
                  .sort(function (a, b) {
                    var va = fechaValida(a.fecha), vb = fechaValida(b.fecha);
                    if (va && vb) return a.fecha < b.fecha ? -1 : (a.fecha > b.fecha ? 1 : 0);
                    return va ? -1 : (vb ? 1 : 0);   // los que no tienen fecha van al final
                  });
  }


  function cuentaAtras(d) { return d === 0 ? "Hoy" : (d === 1 ? "Mañana" : "En " + d + " días"); }

  function render() {
    var e = f.estado;
    var lista = proximos().filter(function (ev) {
      var pasa = e.tema === "Todos" || (e.tema === "ESPOL" && ev.origen === "ESPOL") || (e.tema === "Nacionales" && ev.origen === "Nacional");
      return pasa && coincideEvento(e.consulta, ev);
    });
    textoResumen(res, lista.length, e.consulta);
    cont.textContent = "";
    if (lista.length === 0) { cont.appendChild(mensajeVacio(e.consulta, "eventos", "Por ahora no hay eventos próximos. ¡Vuelve pronto!")); return; }
    lista.forEach(function (ev) {
      var conFecha = fechaValida(ev.fecha);
      var d = conFecha ? diasHasta(ev.fecha) : 0, fecha = conFecha ? aFecha(ev.fecha) : null;
      var t = el("article", "pcard evento");
      var portada = el("div", "portada");
      portada.style.background = fondoDegradado(ev.color);
      if (urlSegura(ev.img).indexOf("https:") === 0) {   // miniatura / afiche del evento; si falla, queda el degradado
        var img = el("img"); img.src = urlSegura(ev.img); img.alt = ""; img.loading = "lazy"; img.referrerPolicy = "no-referrer";
        img.addEventListener("error", function () { img.remove(); });
        portada.appendChild(img);
      }
            if (conFecha) {
        var bloque = el("div", "fecha-bloque");
        bloque.appendChild(el("b", "", String(fecha.getDate())));
        bloque.appendChild(el("span", "", MESES[fecha.getMonth()]));
        portada.appendChild(bloque);
      }
      if (ev.modalidad) portada.appendChild(el("span", "portada-etq", ev.modalidad));
      if (conFecha) portada.appendChild(el("span", d <= 3 ? "cuenta pronto" : "cuenta", cuentaAtras(d)));
      if (ev.abierto) portada.appendChild(el("span", "abierto", "Evento abierto"));
      var cuerpo = el("div", "pcuerpo");
      cuerpo.appendChild(el("span", "tag", ev.tipo + " · " + (ev.origen === "ESPOL" ? "ESPOL" : "Nacional")));
      cuerpo.appendChild(el("h3", "", ev.titulo));
      var donde = [ev.lugar, ev.ciudad].filter(Boolean).join(", ");
      cuerpo.appendChild(el("span", "meta", [fechaCorta(ev.fecha), ev.hora, donde].filter(Boolean).join(" · ")));
      cuerpo.appendChild(el("p", "", ev.desc));
      var boton = el("a", "btn", "Ver evento \u2197");
      abrirEnlace(boton, ev.url);
      cuerpo.appendChild(boton);
      t.appendChild(portada); t.appendChild(cuerpo);
      cont.appendChild(t);
    });
  }
  var prox = proximos();
  sec.querySelector("[data-actualizado]").textContent = prox.length ? (fechaValida(prox[0].fecha) ? "Próximo evento: " + fechaCorta(prox[0].fecha) : "Eventos abiertos por ahora") : "Sin eventos próximos por ahora";
  vistas.eventos = { render: render };
})();

var cajaRecursos = document.getElementById("caja-recursos");
var barraPestanas = document.getElementById("pestanas");

(function construirMenus() {
  var grupoActual = "";
  secciones.forEach(function (s) {
    if (s.grupo !== grupoActual) {
      if (grupoActual !== "") cajaRecursos.appendChild(el("div", "menu-sep"));
      cajaRecursos.appendChild(el("span", "menu-grupo", s.grupo));
      grupoActual = s.grupo;
    }
    var a = el("a");
    a.href = "#" + s.id; a.setAttribute("data-ir", s.id);
    a.appendChild(el("span", "menu-titulo", s.nombre));
    a.appendChild(el("span", "menu-dato", s.dato));
    cajaRecursos.appendChild(a);
    // pestañas de celular
    var p = el("a", "", s.nombre);
    p.href = "#" + s.id; p.setAttribute("data-ir", s.id);
    barraPestanas.appendChild(p);
  });
})();

(function construirPie() {   
  var caja = document.getElementById("pie-links");
  secciones.forEach(function (sec) {
    var a = el("a", "", sec.nombre);
    a.href = "#" + sec.id; a.setAttribute("data-ir", sec.id);
    caja.appendChild(a);
  });
})();

var SECCIONES_CON_SUGERENCIA = ["materias", "guias", "videos", "cursos"];
var vistaActual = "";
function nombreDesdeHash() {
  var h = location.hash.replace("#", "");
  if (h === "recursos") return "materias";   
  return secciones.some(function (s) { return s.id === h; }) ? h : "";
}
function mostrarVista(id) {
  vistaActual = id;
  secciones.forEach(function (s) { document.getElementById("vista-" + s.id).hidden = s.id !== id; });
  document.querySelectorAll("[data-ir]").forEach(function (a) {
    if (a.getAttribute("data-ir") === id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  vistas[id].render();
  document.getElementById("contacto").hidden = SECCIONES_CON_SUGERENCIA.indexOf(id) === -1;
  var activa = barraPestanas.querySelector('[aria-current="page"]');
  if (activa) barraPestanas.scrollLeft = activa.offsetLeft - barraPestanas.clientWidth / 2 + activa.clientWidth / 2;
}
function irA(id) {
  try { if (location.hash !== "#" + id) history.pushState(null, "", "#" + id); }
  catch (e) { location.hash = "#" + id; }
  mostrarVista(id);
  var vista = document.getElementById("vista-" + id);
  vista.scrollIntoView({ behavior: "smooth", block: "start" });
}
document.addEventListener("click", function (e) {
  var link = e.target.closest("[data-ir]");
  if (link) { e.preventDefault(); irA(link.getAttribute("data-ir")); }
});
document.addEventListener("click", function (e) {
  var link = e.target.closest('a[href="#contacto"]');
  if (!link) return;
  e.preventDefault();
  var destino = document.getElementById("contacto");
  if (destino.hidden) destino = document.getElementById("pie");
  destino.scrollIntoView({ behavior: "smooth", block: "center" });
});
function alCambiarRuta() { var n = nombreDesdeHash() || "materias"; if (n !== vistaActual) mostrarVista(n); }   // sin # = Materias
window.addEventListener("popstate", alCambiarRuta);
window.addEventListener("hashchange", alCambiarRuta);

var menus = document.querySelectorAll(".menu");
function cerrarMenus() {
  menus.forEach(function (m) {
    m.classList.remove("abierto");
    var b = m.querySelector("button.menu-btn");
    if (b) b.setAttribute("aria-expanded", "false");
  });
}
menus.forEach(function (m) {
  var boton = m.querySelector("button.menu-btn");
  if (boton) {
    boton.addEventListener("click", function () {
      m.classList.remove("cerrado");
      var abre = !m.classList.contains("abierto");
      cerrarMenus();
      if (abre) { m.classList.add("abierto"); boton.setAttribute("aria-expanded", "true"); }
    });
  }
  m.addEventListener("mouseleave", function () { m.classList.remove("cerrado"); });
  m.querySelectorAll(".caja a").forEach(function (a) {
    a.addEventListener("click", function () {
      cerrarMenus();
      m.classList.add("cerrado");                    
      if (document.activeElement) document.activeElement.blur();
    });
  });
});
document.addEventListener("click", function (e) { if (!e.target.closest(".menu")) cerrarMenus(); });
document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarMenus(); });

mostrarVista(nombreDesdeHash() || "materias");   

var urlSugerencias = "https://script.google.com/macros/s/AKfycbzkuBirgytLrb3KRXrOdpXNzGXJ1nYdv6W9ofejgCzv7gP5eRtLBL3s1kxlypNzzBb3Xg/exec";

var btnSugerencia = document.getElementById("btn-enviar-sugerencia");
var textareaSugerencia = document.getElementById("sugerencia");
var campoTrampa = document.getElementById("web");
var mensajeSug = document.getElementById("mensaje-sugerencia");
var enviando = false;

function mostrarMensaje(texto) {
  if (mensajeSug) mensajeSug.textContent = texto;
}


function urlGoogleOk(url) {
  return typeof url === "string" && url.indexOf("https://script.google.com/macros/s/") === 0;
}

if (btnSugerencia) {
  btnSugerencia.addEventListener("click", function () {
    if (enviando) return;

    var texto = textoSeguro(textareaSugerencia.value, 100).trim();
    if (texto.length < 2) {
      mostrarMensaje("Escribe el nombre de la materia.");
      return;
    }
    if (!urlGoogleOk(urlSugerencias)) {
      mostrarMensaje("El envio no esta configurado todavia.");
      return;
    }

    
    var ahora = Date.now();
    try {
      var ultimo = Number(localStorage.getItem("gm_ultimo_envio") || 0);
      if (ahora - ultimo < 30000) {
        mostrarMensaje("Espera unos segundos antes de enviar otra.");
        return;
      }
    } catch (e) {}

    enviando = true;
    btnSugerencia.disabled = true;

    var datos = new URLSearchParams();
    datos.append("materia", texto);
    datos.append("web", campoTrampa ? campoTrampa.value : "");

    fetch(urlSugerencias, { method: "POST", mode: "no-cors", body: datos })
      .then(function () {
        try { localStorage.setItem("gm_ultimo_envio", String(ahora)); } catch (e) {}
        textareaSugerencia.value = "";
        mostrarMensaje("¡Gracias! Recibí tu sugerencia.");
      })
      .catch(function () {
        mostrarMensaje("No se pudo enviar, intenta de nuevo.");
      })
      .finally(function () {
        enviando = false;
        btnSugerencia.disabled = false;
      });
  });
}
document.addEventListener("click", function (e) {
  var a = e.target.closest('a[href="#"]');
  if (a) e.preventDefault();
});

var urlContador = "https://script.google.com/macros/s/AKfycbwmR7jqvhWyrtWrH7o9jWzQH-tIDh-dVAn8JXup7qfo3_1GkPc7FBjKa61FonImef78/exec";

(function () {
  var caja = document.getElementById("visitas");
  var numero = document.getElementById("visitas-num");
  if (!caja || !numero || !urlGoogleOk(urlContador)) return;

  var ultimoTotal = -1;

  function mostrarTotal(total) {
    if (typeof total !== "number" || total === ultimoTotal) return;
    ultimoTotal = total;
    var texto = total.toLocaleString("es-EC");
    numero.textContent = texto;
    caja.setAttribute("aria-label", "Visitas al sitio: " + texto);
    caja.hidden = false;
    numero.classList.remove("sube");
    void numero.offsetWidth;              
    numero.classList.add("sube");
  }

  function pedirTotal(sumar) {
    fetch(urlContador + (sumar ? "?sumar=1" : ""))
      .then(function (r) { return r.json(); })
      .then(function (datos) { mostrarTotal(Number(datos.total)); })
      .catch(function () {});           
  }

  var yaContada = false;
  try { yaContada = sessionStorage.getItem("kc_visita") === "1"; } catch (e) {}
  pedirTotal(!yaContada);
  try { sessionStorage.setItem("kc_visita", "1"); } catch (e) {}

  setInterval(function () {
    if (!document.hidden) pedirTotal(false);
  }, 15000);
})();
