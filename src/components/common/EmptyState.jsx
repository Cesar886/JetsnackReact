import { Box, Typography, Button, Container } from '@mui/material';
import { jetsnackGradients, jetsnackColorPalette } from '../theme/JetsnackTheme';

export function EmptyState({ 
  icon = '🍿',
  title = 'Sin resultados',
  message = 'No hay nada que mostrar aquí',
  action = null,
  fullHeight = false,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: fullHeight ? 20 : 6,
        minHeight: fullHeight ? '100vh' : 'auto',
        px: 2,
        background: fullHeight ? jetsnackGradients.surfaceGradient : 'transparent',
      }}
    >
      {/* Icono */}
      <Box
        sx={{
          width: { xs: 80, sm: 120 },
          height: { xs: 80, sm: 120 },
          background: jetsnackGradients.brandGradient,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: { xs: '2.5rem', sm: '3.5rem' },
          mb: 3,
          boxShadow: '0 12px 32px rgba(255, 87, 34, 0.15)',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        {icon}
      </Box>

      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          color: jetsnackColorPalette.textPrimary,
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      {/* Mensaje */}
      <Typography
        variant="body1"
        sx={{
          color: jetsnackColorPalette.textSecondary,
          maxWidth: '400px',
          mb: 3,
          fontSize: '1.05rem',
        }}
      >
        {message}
      </Typography>

      {/* Botón de acción */}
      {action && (
        <Button
          variant="contained"
          onClick={action.onClick}
          startIcon={action.icon}
          sx={{
            background: jetsnackGradients.brandGradient,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 700,
            boxShadow: '0 8px 20px rgba(255, 87, 34, 0.25)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 32px rgba(255, 87, 34, 0.35)',
            },
          }}
        >
          {action.label}
        </Button>
      )}
    </Box>
  );
}

export default EmptyState;
