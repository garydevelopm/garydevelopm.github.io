var recursos = [
  { 
    titulo: "Repositorios de examenes para FP", 
    desc: "Examenes, talleres, lecciones y ejercicios variados de toda la materia.", 
    tema: "Programacion", 
    tipo: "Drive", 
    url: ""
  },
  { 
    titulo: "Guia de estudio para FP", 
    desc: "Guía de estudio completa de FP. Resumen de toda la materia, formularios, tips y conceptos clave.",
    tema: "Programacion", 
    tipo: "PDF", 
    url: "" 
  }
];
var linkInstagram = "https://www.instagram.com/garydevelop";

var temas = ["Todos","Programacion", "Drive", "PDF"];
var temaActual = "Todos";
var cajaFiltros = document.getElementById("filtros");
var cajaLista = document.getElementById("lista");
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

if (permiteCookies()) {
  var guardado = leerCookie("gm_tema");
  if (temas.indexOf(guardado) !== -1) temaActual = guardado;
}

function dibujarFiltros() {
  cajaFiltros.textContent = "";
  temas.forEach(function (t) {
    var b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.textContent = t;
    b.setAttribute("aria-pressed", String(t === temaActual));
    b.addEventListener("click", function () {
      temaActual = t;
      if (permiteCookies()) guardarCookie("gm_tema", t, 180);
      dibujarFiltros();
      dibujarLista();
    });
    cajaFiltros.appendChild(b);
  });
}

function dibujarLista() {
  cajaLista.textContent = "";
  var visibles = recursos.filter(function (r) {
  return temaActual === "Todos" || r.tema === temaActual || r.tipo.toLowerCase() === temaActual.toLowerCase();
});
  if (visibles.length === 0) {
    var vacio = document.createElement("p");
    vacio.className = "empty";
    vacio.textContent = "Todavía no hay material en este tema.";
    cajaLista.appendChild(vacio);
    return;
  }
  visibles.forEach(function (r) {
    var url = urlSegura(r.url);
    var activo = url !== "";
    var tarjeta = document.createElement("article");
    tarjeta.className = "card";

    var etiqueta = document.createElement("span");
    etiqueta.className = "tag";
    etiqueta.textContent = textoSeguro(r.tipo, 12) + " · " + textoSeguro(r.tema, 20);

    var titulo = document.createElement("h3");
    titulo.textContent = textoSeguro(r.titulo, 90);

    var desc = document.createElement("p");
    desc.textContent = textoSeguro(r.desc, 200);

    var boton = document.createElement("a");
    boton.className = "btn";
    if (activo) {
      boton.href = url;
      boton.target = "_blank";
      boton.rel = "noopener noreferrer";
      boton.textContent = r.tipo === "PDF" ? "Descargar PDF" : (r.tipo === "DRIVE" ? "Abrir en Drive" : "Abrir enlace");
    } else {
      boton.setAttribute("aria-disabled", "true");
      boton.tabIndex = -1;
      boton.textContent = "Próximamente";
    }

    tarjeta.appendChild(etiqueta);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(desc);
    tarjeta.appendChild(boton);
    cajaLista.appendChild(tarjeta);
  });
}

dibujarFiltros();
dibujarLista();

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