

const daoAlumno =
  getFirestore().
    collection("Alumno");

async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}


async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
      const matricula = getString(
        formData, "telefono").trim();
      const matricula = getString(
        formData, "fecha").trim();
    const matricula = getString(
        formData, "grupo").trim();  
        const matricula = getString(
          formData, "matricula").trim();
    const nombre = getString(
      formData, "nombre").trim();
    
    const modelo = {
      matricula,
      nombre
    };
    await daoAlumno.
      add(modelo);
    muestraAlumnos();
  } catch (e) {
    muestraError(e);
  }
}
