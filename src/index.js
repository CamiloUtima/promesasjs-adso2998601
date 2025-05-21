// ejercicio2
// crear una promesa que se rechace después de 3 segundos si un numero aleatorio es menor que 0.5, si no que se resuelva

function promesaRechazada() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.random();
            console.log("🔢 Número aleatorio generado:", numeroAleatorio);

            if (numeroAleatorio < 0.5) {
                reject("❌ Error: El número aleatorio fue menor que 0.5.");
            } else {
                resolve("✅ Promesa ejecutada con éxito: número >= 0.5.");
            }
        }, 3000);
    });
}

// Función Async que llama a la promesa
async function ejecutar() {
    try {
        console.log("⏳ Promesa ejecutándose...");
        const respuesta = await promesaRechazada();
        console.log(respuesta);
    } catch (error) {
        console.error(error);
    }
}

ejecutar();
