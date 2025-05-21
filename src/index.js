function descargarArchivo(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promesa ejecutada con éxito después de 8 segundos!");
        }, 8000);
    })
}

//funcion Async
async function ejecutar() {
    try {
        console.log("Promesa ejecutandose...")
        const respuesta = await descargarArchivo()
        console.log(respuesta)
    } catch (error) {
        console.error("❌error al descargar")
    }
}

ejecutar()