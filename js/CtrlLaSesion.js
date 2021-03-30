


const forma = document["forma"];

const avatar = document.
  querySelector("#avatar");


getAuth().onAuthStateChanged(
  muestraSesión, muestraError);


async function
  muestraSesión(usuario) {
  if (usuario && usuario.email) {

    forma.email.value =
      usuario.email || "";
    forma.nombre.value =
      usuario.displayName || "";
    avatar.src =
      usuario.photoURL || "";
    forma.terminarSesión.
      addEventListener(
        "click", terminaSesión);
  } else {
 
    iniciaSesión();
  }
}
