# 🍰 Jetsnack React - Aplicación de E-commerce de Postres Premium

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react) ![Material-UI](https://img.shields.io/badge/Material--UI-7.3.5-007FFF?logo=mui) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite) ![License](https://img.shields.io/badge/License-MIT-green)

**Jetsnack** es una aplicación web moderna de e-commerce especializada en la venta de postres y snacks premium. Construida con React 19, Material-UI y Vite, ofrece una experiencia de usuario fluida, responsiva y visualmente atractiva.

## ✨ Características Principales

### 🛍️ Funcionalidades Core
- **Catálogo de Productos**: Exploración intuitiva de postres y snacks con filtros avanzados
- **Búsqueda Inteligente**: Sistema de búsqueda en tiempo real con autocomplete
- **Carrito de Compras**: Gestión completa del carrito con persistencia de estado
- **Sistema de Favoritos**: Marcar productos favoritos para acceso rápido
- **Detalle de Productos**: Vistas detalladas con galería de imágenes y especificaciones
- **Perfil de Usuario**: Gestión de información y preferencias del usuario
- **Calificaciones**: Sistema de puntuación y reseñas de clientes

### 🎨 Diseño y UX
- **Interfaz Responsiva**: Optimizada para dispositivos móviles, tablets y desktop
- **Tema Premium**: Paleta de colores moderna con gradientes sofisticados
- **Animaciones Fluidas**: Transiciones y efectos visuales profesionales
- **Navegación Bottom Bar**: Barra de navegación flotante estilo móvil moderno
- **Modo Claro/Oscuro**: Soporte de tema adaptable (preparado para expansión)

### 🚀 Rendimiento
- **Vite Build Tool**: Compilación rápida y desarrollo optimizado
- **React 19**: Último sistema de renderizado y hooks avanzados
- **Lazy Loading**: Carga diferida de componentes y rutas
- **Código Modular**: Arquitectura escalable y mantenible

## 📋 Requisitos Previos

- **Node.js**: v18.0.0 o superior
- **npm**: v9.0.0 o superior (o yarn/pnpm)
- **Navegador moderno**: Chrome, Firefox, Safari, Edge

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/Cesar886/JetsnackReact.git
cd JetsnackReact
```

### 2. Instalar Dependencias
```bash
npm install
# o con yarn
yarn install
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
# o con yarn
yarn dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Construir para Producción
```bash
npm run build
# o con yarn
yarn build
```

### 5. Vista Previa de Producción
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
JetsnackReact/
├── src/
│   ├── assets/               # Recursos estáticos (imágenes, iconos)
│   ├── components/
│   │   ├── common/           # Componentes reutilizables
│   │   │   ├── EmptyState.jsx
│   │   │   ├── JetsnackButton.jsx
│   │   │   ├── JetsnackSurface.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   └── NotificationPopup.jsx
│   │   ├── navigation/       # Componentes de navegación
│   │   │   └── JetsnackBottomBar.jsx
│   │   ├── snacks/           # Componentes específicos de productos
│   │   │   ├── SnackCard.jsx
│   │   │   └── SnackCollection.jsx
│   │   ├── AppBar.jsx
│   │   ├── ArticleCard.jsx
│   │   └── NavigationDrawer.jsx
│   ├── context/
│   │   ├── AppContext.jsx    # Contexto global de la aplicación
│   │   ├── AppContextProvider.js
│   │   └── useAppContext.js
│   ├── data/
│   │   ├── articles.js       # Datos de artículos/blog
│   │   ├── models.js         # Modelos de datos
│   │   └── snacks.js         # Catálogo de snacks
│   ├── hooks/
│   │   ├── useArticles.js
│   │   └── useSnackRepository.js
│   ├── pages/
│   │   ├── ArticleDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Feed.jsx
│   │   ├── Home.jsx
│   │   ├── Interests.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   ├── Search.jsx
│   │   └── SnackDetail.jsx
│   ├── styles/
│   │   └── responsive.css
│   ├── theme/
│   │   └── JetsnackTheme.js  # Tema Material-UI personalizado
│   ├── App.jsx               # Componente raíz
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/                   # Archivos públicos estáticos
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## 🎨 Paleta de Colores

### Colores Principales
- **Brand (Naranja Coral)**: `#FF5722` - Color primario premium
- **Accent (Cyan)**: `#00BCD4` - Color secundario vibrante
- **Tertiary (Púrpura)**: `#9C27B0` - Acentos elegantes
- **Quaternary (Azul Profundo)**: `#1A237E` - Elementos serios

### Estados
- **Success (Verde)**: `#10B981` - Operaciones exitosas
- **Warning (Ámbar)**: `#F59E0B` - Advertencias
- **Error (Rojo)**: `#EF4444` - Errores
- **Info (Azul Cielo)**: `#0EA5E9` - Información

### Superficies
- **Surface 1-5**: Escalas de gris para capas y elevación
- **Border**: `#E5E7EB` - Bordes y divisores
- **Background**: Gradientes suaves

## 🔧 Dependencias Principales

### Runtime
```json
{
  "@emotion/react": "^11.14.0",          // Motor de CSS-in-JS
  "@emotion/styled": "^11.14.1",         // Styled-components con Emotion
  "@mui/material": "^7.3.5",             // Librería de componentes Material Design
  "lucide-react": "^0.552.0",            // Iconos de alta calidad
  "react": "^19.1.1",                    // Librería principal React
  "react-dom": "^19.1.1",                // Renderizado React en DOM
  "react-router-dom": "^7.9.5",          // Enrutamiento de SPA
  "recharts": "^3.3.0"                   // Gráficos y visualización de datos
}
```

### DevDependencies
```json
{
  "vite": "^7.1.7",                      // Build tool ultra-rápido
  "eslint": "^9.36.0",                   // Linting de código
  "@vitejs/plugin-react": "^5.0.4"       // Plugin React para Vite
}
```

## 📱 Páginas Disponibles

### 🏠 Feed (/)
Página principal con catálogo de snacks y productos destacados.
- Colecciones temáticas
- Descuentos especiales
- Artículos relacionados

### 🔍 Búsqueda (/search)
Sistema de búsqueda avanzada con filtros.
- Búsqueda por nombre y descripción
- Filtros por categoría
- Ordenamiento por relevancia y precio

### 🛒 Carrito (/cart)
Gestión completa del carrito de compras.
- Resumen de productos
- Cálculo de totales
- Opciones de compra

### 👤 Perfil (/profile)
Información y preferencias del usuario.
- Datos personales
- Historial de compras
- Métodos de pago guardados

### 📝 Detalle de Snack (/snack/:id)
Página completa de cada producto.
- Galería de imágenes
- Descripción detallada
- Ingredientes
- Calificaciones y reseñas
- Selector de cantidad
- Botón de agregar al carrito

## 🎯 Componentes Clave

### JetsnackButton
Botón personalizado con gradientes y efectos premium.
```jsx
<JetsnackButton onClick={handleClick}>
  Acción Premium
</JetsnackButton>
```

### JetsnackSurface
Contenedor con elevación y estilos premium.
```jsx
<JetsnackSurface>
  Contenido elevado
</JetsnackSurface>
```

### SnackCard
Tarjeta de producto con efecto hover y favoritos.
```jsx
<SnackCard
  snack={snack}
  onFavoriteClick={toggleFavorite}
  isFavorite={favorites.includes(snack.id)}
/>
```

### NotificationPopup
Sistema de notificaciones con tipos (success, error, warning, info).
```jsx
<NotificationPopup
  open={open}
  type="success"
  title="¡Éxito!"
  message="Acción realizada correctamente"
/>
```

## 🎨 Animaciones Personalizadas

El proyecto incluye animaciones suaves y fluidas:

- **float**: Movimiento flotante continuo
- **fadeIn**: Entrada suave
- **fadeInScale**: Escala + fade combinadas
- **slideInDown**: Deslizamiento desde arriba
- **slideDown**: Animación de bajada
- **starPulse**: Pulsación de estrellas
- **shimmer**: Efecto de brillo deslizante

## 🔗 Enrutamiento

```javascript
/                    → Feed (Página principal)
/search              → Búsqueda de productos
/snack/:id           → Detalle de producto
/cart                → Carrito de compras
/profile             → Perfil de usuario
```

## 🌐 Context API y Estado Global

### AppContext
Gestiona el estado global de la aplicación:
- **cart**: Carrito de compras
- **favorites**: Lista de favoritos
- **user**: Información del usuario
- **notifications**: Sistema de notificaciones

```jsx
const { cart, favorites, toggleFavorite, addToCart } = useAppContext();
```

## 📊 Hooks Personalizados

### useSnackRepository
Hook para acceder al repositorio de snacks.
```jsx
const { getSnack, getAllSnacks, getRelated } = useSnackRepository();
```

### useArticles
Hook para acceder a artículos y contenido.
```jsx
const { getArticles, getArticle } = useArticles();
```

## 🎯 Características Destacadas

### Responsive Design
- Adaptado a pantallas desde 320px hasta 2560px
- Grid responsive automático
- Componentes flexibles

### Accesibilidad
- Etiquetas semánticas HTML
- Soporte para navegación por teclado
- Contraste de colores adecuado
- ARIA labels donde corresponde

### Performance
- Code splitting automático
- Lazy loading de rutas
- Optimización de imágenes
- Memoización de componentes

## 🛠️ Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Vista previa de build |
| `npm run lint` | Verifica código con ESLint |

## 📦 Build y Despliegue

### Crear Build de Producción
```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar.

### Desplegar en Vercel
```bash
npm i -g vercel
vercel
```

### Desplegar en Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🐛 Solución de Problemas

### Puerto 5173 ya está en uso
```bash
# En Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# En Mac/Linux
lsof -i :5173
kill -9 <PID>
```

### Problema de importaciones
Asegúrate de que las rutas de importación sean correctas:
```jsx
// ✅ Correcto
import { jetsnackTheme } from '../../theme/JetsnackTheme';

// ❌ Incorrecto
import { jetsnackTheme } from '../theme/JetsnackTheme';
```

## 📚 Recursos Útiles

- [Documentación de React 19](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [Vite Guide](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 👥 Contribuidores

- **Desarrollador Principal**: Cesar886
- **Diseño**: Jetsnack Design Team

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 📞 Soporte y Contacto

Para reportar bugs o sugerir mejoras:
1. Abre un [Issue](https://github.com/Cesar886/JetsnackReact/issues)
2. Crea un [Pull Request](https://github.com/Cesar886/JetsnackReact/pulls)

## 🎉 Agradecimientos

- Material-UI por proporcionar componentes de calidad
- Lucide-react por los iconos hermosos
- Vite por la experiencia de desarrollo increíble
- React community por las mejores prácticas

---

**Hecho con ❤️ usando React, Material-UI y Vite**

*Última actualización: 5 de Noviembre, 2025*
