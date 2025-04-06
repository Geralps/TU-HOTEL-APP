require('dotenv').config(); // Cargar variables de entorno desde .env

console.log("📌 Cargando configuración...");

// Verificar si las variables de entorno están definidas correctamente
const requiredEnvVars = ["PORT", "DB_NAME", "DB_USER", "DB_PASS", "DB_HOST", "JWT_SECRET"];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        console.error(`❌ ERROR: Falta la variable de entorno ${varName} en el archivo .env`);
        process.exit(1); // Detiene la ejecución si falta alguna variable esencial
    } else {
        console.log(`✅ ${varName} cargado correctamente.`);
    }
});

const config = {
    port: process.env.PORT || 5000,  // Puerto en el que correrá el servidor
    database: {
        name: process.env.DB_NAME,   // Nombre de la base de datos
        user: process.env.DB_USER,   // Usuario de la base de datos
        password: process.env.DB_PASS, // Contraseña de la base de datos
        host: process.env.DB_HOST,   // Host de la base de datos
        dialect: "mysql",            // Motor de la base de datos
    },
    jwtSecret: process.env.JWT_SECRET || "default_secret", // Clave para JWT
};

console.log("🔧 Configuración cargada con éxito:", config);

module.exports = config;
