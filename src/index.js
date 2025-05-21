//Funcion con async

function descargarArchivo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("📁 Archivo descargado con exito!");
        }, 5000);
    })
}

//funcion Async
async function ejecutar() {
    try {
        console.log("⏳ Descarga en proceso...")
        const respuesta = await descargarArchivo()
        console.log(respuesta)
    } catch (error) {
        console.error("❌error al descargar")
    }
}

ejecutar()

