//Funcion para simular la descarga de un archivo utilizando promeseas

function descargarArchivo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("📁 Archivo descargado con exito!");
        }, 5000);
    })
}

console.log(descargarArchivo()
    .then((resultado) => {
        console.log(resultado);
    })
)
  