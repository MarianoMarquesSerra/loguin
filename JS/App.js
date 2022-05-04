var usuarios = [{usuario:"Admin",
                 password:"admin"
                }];
if(localStorage == null){
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function enviarDatos(){
    let validar="Denegado";

    let usuarios = JSON.parse(localStorage.getItem("usuarios"));

    document.getElementById("myForm").addEventListener("submit", function(e){
        e.preventDefault()
    });

    const usuarioIng = document.getElementById("Usuario").value;
    const passwordIng = document.getElementById("Password").value;

    for(let i=0;i<usuarios.length;i++){
        if(usuarios[i].usuario == usuarioIng && usuarios[i].password == passwordIng){
            validar="Permitido";
        }
    }

    alert("Acceso "+validar);

    document.getElementById("Usuario").value = "";
    document.getElementById("Password").value = "";
}

function crearUsuario(){
    document.getElementById("myForm").addEventListener("submit", function(e){
        e.preventDefault()
    });

    usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

    let nombre = prompt("Ingresar Usuario");
    let clave = prompt("Ingresar Password");

    let nuevoUsuario = {
        usuario:nombre,
        password:clave
    }

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
}