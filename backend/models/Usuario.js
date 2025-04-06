const { DataTypes, Sequelize } = require("sequelize"); // Asegúrate de importar Sequelize si usarás defaultValue: Sequelize.NOW
const sequelize = require("../config/database"); // Reutiliza la misma instancia de sequelize

const Usuario = sequelize.define("Usuario", {
  // Define el modelo 'Usuario'
  id_usuario: {
    // Columna id_usuario
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true, // Es la llave primaria
  },
  nombre: {
    // Columna nombre
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
  },
  apellido: {
    // Columna apellido
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
  },
  email: {
    // Columna email
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
    unique: true, // Generalmente los emails son únicos
  },
  contrasena: {
    // Columna contrasena (Considera hashear la contraseña antes de guardarla)
    type: DataTypes.STRING,
    allowNull: false, // No permite valores nulos
  },
  telefono: {
    // Columna telefono
    type: DataTypes.STRING, // Usar STRING es más flexible para formatos de teléfono
    allowNull: false, // No permite valores nulos
  },
  fecha_registro: {
    // Columna fecha_registro
    type: DataTypes.DATE, // Tipo fecha/hora
    allowNull: false, // No permite valores nulos
    defaultValue: Sequelize.NOW, // Establece la fecha y hora actual por defecto al crear un registro
  },
}, {
  tableName: "usuarios", // Especifica el nombre exacto de la tabla en la base de datos
  timestamps: false, // Deshabilita los campos createdAt y updatedAt automáticos de Sequelize,
                     // ya que tienes tu propio campo 'fecha_registro'.
});

module.exports = Usuario; // Exporta el modelo para usarlo en otras partes de tu aplicación