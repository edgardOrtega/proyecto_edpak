# Proyecto React

## 📌 Descripción
Este es un proyecto desarrollado con React que utiliza varias dependencias para facilitar la construcción de la interfaz de usuario y la gestión de rutas.

## 🚀 Instalación
Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd nombre-del-proyecto
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## 📦 Dependencias utilizadas

| Paquete               | Versión      | Descripción |
|----------------------|------------|-------------|
| **axios**            | ^1.7.9      | Cliente HTTP para realizar peticiones a APIs |
| **bootstrap**        | ^5.0.2      | Framework de diseño CSS para estilos responsivos |
| **react**            | ^18.3.1     | Librería principal para construir interfaces de usuario |
| **react-bootstrap**  | ^2.9.0-beta.1 | Componentes de Bootstrap para React |
| **react-dom**        | ^18.3.1     | Renderizado de la aplicación en el DOM |
| **react-icons**      | ^5.4.0      | Conjunto de iconos populares para React |
| **react-router-dom** | ^7.1.5      | Manejo de rutas y navegación en React |
| **sweetalert2**    | ^11.16.1    | Para notificaciones y ventanas mas esteticas |

## 🚀 Tecnologías Utilizadas
- **Frontend**: React, React Bootstrap, React Router
- **Backend (Simulado)**: JSON Server para manejo de datos de usuarios y productos
- **Gestor de Estado**: Context API para la gestión del carrito de compras y autenticación
- **Autenticación**: Manejo de usuarios con localStorage
- **Alertas**: SweetAlert2 para notificaciones

## 📂 Estructura del Proyecto
```
Proyecto_EDPAK/
│── public/
│   ├── data/
│   │   ├── listadoUsuarios.json  # Datos de Usuarios
|   |   ├── tecnologia.json  # Datos de Producto
│   ├── images/
│── src/
│   ├── assets/
|   |   ├── edpak.png
|   |   ├── grupo.png
│   ├── components/
│   │   ├── Navegation.jsx
│   │   ├── ProductCart.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── CartContext.jsx
│   │   ├── HistoryContext.jsx
│   ├── views/
│   │   ├── Carritojsx
│   │   ├── CrearProducto.jsx
│   │   ├── Galeria.jsx
│   │   ├── Historial.jsx
│   │   ├── Home.jsx
│   │   ├── ListarProductos.jsx
│   │   ├── ListarUsuarios.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│── README.md
│── package.json
│── .gitignore
```

## 🎯 Características Principales

### ✅ Funcionalidades Públicas
- Visualización del home.
- Registro de usuarios.
- Inicio de sesión.

### 🔒 Funcionalidades Protegidas
- **Cliente**: Acceso al carrito de compras, historial de pedidos y galería.
- **Administrador**: Gestión de productos y usuarios.

### 🔑 Autenticación
- Validación de credenciales con `listadoUsuarios.json`.
- Redirección automática según el rol del usuario.


## 🔄 Flujo de Autenticación y Navegación
1. Un usuario se registra o inicia sesión.
2. Si la autenticación es correcta, se almacena en context
3. Dependiendo del rol, se muestran diferentes opciones en la barra de navegación.
4. Los usuarios pueden agregar productos al carrito y realizar compras.
5. Se puede cerrar sesión, lo que limpia la variable global en context y mostrará solo las vistas públicas.

## 📝 Próximas Mejoras
- Integración con una API real para usuarios y productos.
- Mejoras en la interfaz de usuario y experiencia de compra.

📌 **Desarrollado con ❤️ y React por el equipo de EDPAK**

