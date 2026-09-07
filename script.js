/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador Web · Soporte Técnico",

  "about.title":          "Sobre Mí",
  "about.text":           "[I am a university student, dedicated to my studies and committed to achieving my goals and dreams. I consider myself a responsible and persevering person, with a desire to keep learning and growing both personally and professionally..]",
  "about.infoTitle":      "Información",
  "about.labelLocation":  " Colombia",
  "about.valueLocation":  "[Ciudad], Colombia",
  "about.labelEmail":     "correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés ([A1])",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "[I am currently a university student studying Systems Engineering, where I am developing knowledge in programming, web development, databases, and computer systems. I have worked on different academic projects that have helped me improve my technical skills, teamwork, and responsibility..]",
  "edu.2.title": "[curso de ingles en idefum]",
  "edu.2.text":  "[I learned vocabulary, pronunciation, listening comprehension, and basic communication in English. It helps me improve my ability to communicate in English and strengthen my academic and professional opportunities]",

  "exp.1.title": "[Web Development Project]",
  "exp.1.text":  "[I developed a web platform for managing computer lab availability. I used HTML, CSS, JavaScript, and MySQL to create the interface and manage the information. The result was a functional platform that makes it easier to check and manage available computer labs.]",
  "exp.2.title": "[Quinceañera Registration Website]",
  "exp.2.text":  "[I developed a website for registering guests for a quinceañera event. I used HTML, CSS, JavaScript, and MySQL to create the registration form and manage the data. The result was a simple and organized website for collecting and managing guest information.]",

  "portfolio.title": "Proyectos",
  "project.1.title": "[Computer Lab Management Platform]",
  "project.1.text":  "[HTML, CSS, JavaScript, MySQ]",
  "project.2.title": "[Quinceañera Registration Website]",
  "project.2.text":  "[HTML, CSS, JavaScript, MySQL]",
  "project.3.title": "[Ice Cream Shop Website]",
  "project.3.text":  "[HTML, CSS, JavaScript, Bootstrap]",

  "contact.title":         "Contacto",
  "contact.intro":         "[Interested in learning more about this project or collaborating on future initiatives? Feel free to get in touch with me to share ideas and discuss opportunities..]",
  "contact.emailLabel":    "emiliricorico@icloud.com",
 

  "footer.note": "[Emili Rioo] · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Developer · Technical Support",

  "about.title":          "About Me",
  "about.text":           "[I am a university student, dedicated to my studies and committed to achieving my goals and dreams. I consider myself a responsible and persevering person, with a desire to keep learning and growing both personally and professionally.]",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "[City], Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English ([A1])",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "[I am currently a university student studying Systems Engineering, where I am developing knowledge in programming, web development, databases, and computer systems. I have worked on different academic projects that have helped me improve my technical skills, teamwork, and responsibility.]",
  "edu.2.title": "[curso de ingles en idefum]",
  "edu.2.text":  "[I learned vocabulary, pronunciation, listening comprehension, and basic communication in English. It helps me improve my ability to communicate in English and strengthen my academic and professional opportunities.]",

  "exp.1.title": "[Web Development Project]",
  "exp.1.text":  "[I developed a web platform for managing computer lab availability. I used HTML, CSS, JavaScript, and MySQL to create the interface and manage the information. The result was a functional platform that makes it easier to check and manage available computer labs.]",
  "exp.2.title": "[Quinceañera Registration Website]",
  "exp.2.text":  "[I developed a website for registering guests for a quinceañera event. I used HTML, CSS, JavaScript, and MySQL to create the registration form and manage the data. The result was a simple and organized website for collecting and managing guest information]",

  "portfolio.title": "Projects",
  "project.1.title": "[Computer Lab Management Platform]",
  "project.1.text":  "[HTML, CSS, JavaScript, MySQ]",
  "project.2.title": "[Quinceañera Registration Website]",
  "project.2.text":  "[HTML, CSS, JavaScript, MySQL]",
  "project.3.title": "[Ice Cream Shop Website]",
  "project.3.text":  "[HTML, CSS, JavaScript, Bootstrap]",

  "contact.title":         "Contact",
  "contact.intro":         "[Interested in learning more about this project or collaborating on future initiatives? Feel free to get in touch with me to share ideas and discuss opportunities.]",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "[emiliricorico@icloud.com]",

  "footer.note": "[Emily Rico Rico] · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
