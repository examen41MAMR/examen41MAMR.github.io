

/** @type {HTMLUListElement} */
const lista = document.
  querySelector("#lista");
const daoAlumno =
  getFirestore().
    collection("Alumno");

getAuth().
  onAuthStateChanged(
    protege, muestraError);

/** @param {import(
    "../lib/tiposFire.js").User}
    usuario */
async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    consulta();
  }
}

function consulta() {
  daoAlumno.
    orderBy("nombre")
    .onSnapshot(
      htmlLista, errConsulta);
}
function consulta() {
  daoAlumno.
    orderBy("matricula")
    .onSnapshot(
      htmlLista, errConsulta);
}

function htmlLista(snap) {
  let html = "";
  if (snap.size > 0) {
    snap.forEach(doc =>
      html += htmlFila(doc));
  } else {
    html += 
      `<li class="vacio">
        -- No hay alumnos
        registrados. --
      </li>`;
  }
  lista.innerHTML = html;
}


function htmlFila(doc) {
  
  const data = doc.data();
  const matricula = cod(data.matricula);
  const nombre = cod(data.nombre);
  const parámetros =
    new URLSearchParams();
  parámetros.append("id", doc.id);
  return ( 
    `<li>
      <a class="fila" href=
  "alumno.html?${parámetros}">
        <strong class="primario">
          ${nombre}
        </strong>
      </a>
    </li>`);
}

function errConsulta(e) {
  muestraError(e);
  consulta();
}
