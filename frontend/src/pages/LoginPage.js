import React, { useState } from "react";
import axios from 'axios'; // O usa fetch
import './LoginPage.css'; // Archivo CSS para estilos básicos

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // --- IMPORTANTE: Backend API Endpoint ---
  // Debes reemplazar esto con la URL real de tu endpoint de login en el backend
  const LOGIN_API_URL = '/api/auth/login'; // Ejemplo de ruta API

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir el envío tradicional del formulario
    setError(''); // Limpiar errores previos
    setLoading(true); // Mostrar indicador de carga

    if (!email || !password) {
      setError('Por favor, ingresa tu email y contraseña.');
      setLoading(false);
      return;
    }

    try {
      // --- Petición al Backend ---
      // Aquí es donde el frontend envía los datos al backend.
      // El backend usará el modelo 'Usuario' para verificar las credenciales.
      const response = await axios.post(LOGIN_API_URL, {
        email: email,
        contrasena: password, // Asegúrate que el backend espere 'contrasena'
      });

      // --- Manejo de Respuesta Exitosa ---
      // El backend debería responder con éxito si el login es correcto.
      // Podría devolver datos del usuario o un token (JWT).
      console.log('Login exitoso:', response.data);
      // Aquí normalmente guardarías el token (ej. en localStorage)
      // y redirigirías al usuario a otra página (ej. un dashboard).
      // Ejemplo: localStorage.setItem('authToken', response.data.token);
      // Ejemplo: window.location.href = '/dashboard'; // O usar React Router

    } catch (err) {
      // --- Manejo de Errores ---
      // Si el backend responde con un error (ej. 401 Unauthorized)
      let errorMessage = 'Ocurrió un error al intentar iniciar sesión.';
      if (err.response && err.response.data && err.response.data.message) {
        // Intenta obtener un mensaje de error específico del backend
        errorMessage = err.response.data.message;
      } else if (err.response && err.response.status === 401) {
        errorMessage = 'Email o contraseña incorrectos.';
      }
      console.error('Error en el login:', err);
      setError(errorMessage);
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading} // Deshabilitar mientras carga
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading} // Deshabilitar mientras carga
          />
        </div>

        {/* Muestra el mensaje de error si existe */}
        {error && <p className="error-message">{error}</p>}

        {/* Muestra un texto o spinner de carga */}
        {loading && <p>Iniciando sesión...</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
      {/* Opcional: Enlace para registrarse */}
      {/* <p>¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p> */}
    </div>
  );
}

export default LoginPage;
