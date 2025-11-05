# 🚀 GUÍA RÁPIDA: Cómo Usar las Mejoras de Diseño

## 📋 Tabla de Contenidos
1. [Colores](#colores)
2. [Gradientes](#gradientes)
3. [Animaciones](#animaciones)
4. [Componentes](#componentes)
5. [Tipografía](#tipografía)
6. [Ejemplos](#ejemplos)

---

## 🎨 Colores

### Acceder a la paleta de colores
```jsx
import { jetsnackColorPalette } from './theme/JetsnackTheme';

// Colores primarios
jetsnackColorPalette.brand          // #FF5722
jetsnackColorPalette.brand90        // #FF6F35
jetsnackColorPalette.brand80        // #FF7043
jetsnackColorPalette.brand70        // #FF7D54

// Colores secundarios
jetsnackColorPalette.accent         // #00BCD4
jetsnackColorPalette.accentLight    // #26C6DA
jetsnackColorPalette.accentUltraLight // #E0F7FA

// Texto
jetsnackColorPalette.textPrimary    // #0F172A
jetsnackColorPalette.textSecondary  // #475569
jetsnackColorPalette.textTertiary   // #64748B

// Estados
jetsnackColorPalette.success        // #10B981
jetsnackColorPalette.warning        // #F59E0B
jetsnackColorPalette.error          // #EF4444
jetsnackColorPalette.info           // #0EA5E9

// Superficies
jetsnackColorPalette.surface1       // #FFFFFF
jetsnackColorPalette.surface2       // #FAFBFC
jetsnackColorPalette.surface3       // #F3F4F6
```

### Usar colores en componentes
```jsx
<Box sx={{ color: jetsnackColorPalette.brand }}>
  Texto naranja premium
</Box>

<Button sx={{ 
  backgroundColor: jetsnackColorPalette.brand,
  color: 'white'
}}>
  Botón
</Button>
```

---

## 🎨 Gradientes

### Acceder a gradientes
```jsx
import { jetsnackGradients } from './theme/JetsnackTheme';

// Gradientes principales
jetsnackGradients.brandGradient              // Naranja
jetsnackGradients.accentGradient             // Cyan
jetsnackGradients.tertiaryGradient           // Púrpura

// Gradientes temáticos
jetsnackGradients.sunsetGradient             // Naranja/Ámbar
jetsnackGradients.oceanGradient              // Azul
jetsnackGradients.forestGradient             // Verde

// Gradientes de superficie
jetsnackGradients.surfaceGradient            // Gris claro
jetsnackGradients.surfaceGradientPremium     // Blanco

// Overlays
jetsnackGradients.overlayGradient            // Naranja overlay
jetsnackGradients.overlayGradientDark        // Oscuro overlay
```

### Usar gradientes
```jsx
<Box sx={{
  background: jetsnackGradients.brandGradient
}}>
  Contenedor con gradiente
</Box>

<Typography sx={{
  background: jetsnackGradients.brandGradient,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>
  Texto con gradiente
</Typography>
```

---

## ✨ Animaciones

### Usar animaciones CSS
```jsx
// En JSX
<Box className="fade-in">Contenido</Box>
<Box className="slide-in-up">Contenido</Box>

// Todas disponibles:
// fade-in, fade-in-up, slide-in-up, slide-in-down
// slide-in-left, slide-in-right, scale-in, float
// pulse, bounce
```

### Crear animaciones con delays
```jsx
<Box sx={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}>
  Item con delay
</Box>
```

### Animaciones con MUI
```jsx
<Box sx={{
  animation: 'float 3s ease-in-out infinite',
}}>
  Elemento flotante
</Box>
```

---

## 🆕 Componentes Nuevos

### NotFound (404)
```jsx
import NotFound from './pages/NotFound';

export default function App() {
  return <NotFound />;
}
```

### LoadingScreen
```jsx
import LoadingScreen from './components/common/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <LoadingScreen message="Cargando..." />;
  }
  
  return <div>Contenido</div>;
}
```

### NotificationPopup
```jsx
import NotificationPopup from './components/common/NotificationPopup';

export default function App() {
  const [notification, setNotification] = useState({
    open: false,
    type: 'success',
    title: 'Éxito',
    message: 'Operación completada'
  });

  return (
    <>
      <NotificationPopup
        open={notification.open}
        onClose={() => setNotification({ ...notification, open: false })}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />
    </>
  );
}
```

### EmptyState
```jsx
import EmptyState from './components/common/EmptyState';

export default function App() {
  return (
    <EmptyState
      icon="🛒"
      title="Carrito vacío"
      message="Agrega snacks para continuar"
      action={{
        label: 'Explorar',
        onClick: () => navigate('/snacks')
      }}
    />
  );
}
```

---

## 🔤 Tipografía

### Variantes de tipografía disponibles
```jsx
import { Typography } from '@mui/material';

// Todos los variants funcionan con responsive clamp
<Typography variant="h1">Título H1</Typography>
<Typography variant="h2">Título H2</Typography>
<Typography variant="h3">Título H3</Typography>
<Typography variant="body1">Cuerpo 1</Typography>
<Typography variant="body2">Cuerpo 2</Typography>
<Typography variant="caption">Texto pequeño</Typography>
```

### Pesos disponibles
```jsx
// Pesos: 400, 500, 600, 700, 800, 900

<Typography sx={{ fontWeight: 400 }}>Light</Typography>
<Typography sx={{ fontWeight: 700 }}>Bold</Typography>
<Typography sx={{ fontWeight: 900 }}>Extra Bold</Typography>
```

---

## 💡 Ejemplos Prácticos

### Botón Premium
```jsx
<Button
  variant="contained"
  sx={{
    background: jetsnackGradients.brandGradient,
    boxShadow: '0 8px 20px rgba(255, 87, 34, 0.25)',
    px: 4,
    py: 1.5,
    fontWeight: 700,
    borderRadius: '12px',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 32px rgba(255, 87, 34, 0.35)',
    },
  }}
>
  Botón Premium
</Button>
```

### Card con Animación
```jsx
<Card
  sx={{
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    '&:hover': {
      transform: 'translateY(-12px)',
      boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15)',
    },
  }}
>
  Contenido
</Card>
```

### Contenedor Premium
```jsx
<Box
  sx={{
    p: 3,
    borderRadius: '16px',
    background: jetsnackGradients.surfaceGradient,
    border: `1px solid ${jetsnackColorPalette.border}`,
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
  }}
>
  Contenedor Premium
</Box>
```

### Texto con Gradiente
```jsx
<Typography
  sx={{
    background: jetsnackGradients.brandGradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 900,
  }}
>
  Texto con Gradiente
</Typography>
```

### Item con Animación Staggered
```jsx
{items.map((item, index) => (
  <Box
    key={item.id}
    sx={{
      animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
    }}
  >
    {item.name}
  </Box>
))}
```

---

## 📱 Responsive Patterns

### Padding Fluido
```jsx
<Box sx={{
  px: { xs: 1, sm: 1.5, md: 2, lg: 3 },
  py: { xs: 2, sm: 3, md: 4 },
}}>
  Contenido responsive
</Box>
```

### Tipografía Responsiva
```jsx
<Typography sx={{
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
  fontWeight: { xs: 700, md: 800 },
}}>
  Texto responsivo
</Typography>
```

### Grid Responsivo
```jsx
<Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
  {items.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      {item.name}
    </Grid>
  ))}
</Grid>
```

---

## 🎯 Checklist de Implementación

- [ ] Importar `jetsnackColorPalette` donde necesites colores
- [ ] Usar `jetsnackGradients` para fondos especiales
- [ ] Aplicar clases de animación en entrada
- [ ] Usar componentes nuevos donde corresponda
- [ ] Implementar tooltips en botones
- [ ] Usar focus-visible en formularios
- [ ] Probar responsive en móvil
- [ ] Verificar accesibilidad (contraste, focus)
- [ ] Revisar animaciones en slow networks

---

## 🔍 Testing Checklist

### Visual
- [ ] Colores se ven correctos
- [ ] Gradientes son fluidos
- [ ] Animaciones son suaves
- [ ] Responsivo en móvil/tablet/desktop

### Funcional
- [ ] Botones responden a clicks
- [ ] Tooltips aparecen en hover
- [ ] Animaciones se ejecutan
- [ ] Estados (hover, focus, active) funcionan

### Accesibilidad
- [ ] Focus visible en todos lados
- [ ] Contraste de texto adecuado
- [ ] Reduced motion respetado
- [ ] Keyboard navigation funciona

---

## 📚 Archivos de Referencia

```
src/
├── theme/
│   └── JetsnackTheme.js          ← Paleta y tema
├── App.css                        ← Animaciones CSS
├── components/
│   ├── AppBar.jsx                 ← AppBar mejorado
│   ├── ArticleCard.jsx            ← Card artículos
│   └── common/
│       ├── LoadingScreen.jsx      ← Loading nuevo
│       ├── NotificationPopup.jsx  ← Notif nueva
│       └── EmptyState.jsx         ← Empty state
└── pages/
    ├── Cart.jsx                   ← Carrito mejorado
    └── NotFound.jsx               ← 404 nuevo
```

---

## 🆘 Troubleshooting

### Colores no se aplican
```jsx
// Verificar import
import { jetsnackColorPalette } from './theme/JetsnackTheme';

// Verificar uso
color={jetsnackColorPalette.brand}  // ✅ Correcto
color={brandColor}                  // ❌ Incorrecto
```

### Animaciones no funcionan
```jsx
// En CSS
@keyframes nombreAnimacion {
  from { /* ... */ }
  to { /* ... */ }
}

// En JSX - Verificar nombre coincida
className="nombreAnimacion"
```

### Componentes no importan
```jsx
// Ruta correcta
import NotFound from './pages/NotFound';

// No
import NotFound from './NotFound';
```

---

## 📞 Soporte

Para dudas o issues:
1. Revisar este archivo
2. Consultar MEJORAS_DISEÑO_2025.md
3. Ver COMPARATIVA_VISUAL.md

---

**¡Listo para usar! 🎉**

*Versión: 2.0 Premium Design System*
*Actualizado: 4 de Noviembre, 2025*
