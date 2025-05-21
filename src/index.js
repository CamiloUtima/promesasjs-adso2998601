function descargarArchivoConError(hayError) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hayError) {
                reject("❌ Error: Hubo un problema al descargar el archivo.");
            } else {
                resolve("✅ Promesa ejecutada con éxito después de 8 segundos!");
            }
        }, 8000);
    });
}

// Función Async que llama a la promesa
async function ejecutar() {
    try {
        console.log("⏳ Promesa ejecutándose...");
        
        
        const hayError = true; // Aqui se cambia el valor de esta variable para probar ambos casos

        const respuesta = await descargarArchivoConError(hayError);
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}

ejecutar();