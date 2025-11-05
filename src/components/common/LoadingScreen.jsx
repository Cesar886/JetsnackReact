import { Box, Typography, CircularProgress, Container } from '@mui/material';
import { jetsnackGradients, jetsnackColorPalette } from '../theme/JetsnackTheme';

export function LoadingScreen({ message = 'Cargando...' }) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: jetsnackGradients.surfaceGradient,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elementos de fondo animados */}
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: jetsnackGradients.brandGradient,
          borderRadius: '50%',
          opacity: 0.08,
          top: '20%',
          left: '-100px',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          background: jetsnackGradients.accentGradient,
          borderRadius: '50%',
          opacity: 0.06,
          bottom: '10%',
          right: '-80px',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Icono con animación */}
        <Box
          sx={{
            mb: 3,
            animation: 'bounce 1.5s ease-in-out infinite',
          }}
        >
          <Typography sx={{ fontSize: '4rem' }}>🍿</Typography>
        </Box>

        {/* Spinner */}
        <Box sx={{ mb: 3, position: 'relative', display: 'inline-block' }}>
          <CircularProgress
            size={60}
            sx={{
              background: jetsnackGradients.brandGradient,
              backgroundClip: 'padding-box',
              '& circle': {
                strokeLinecap: 'round',
                stroke: jetsnackColorPalette.brand,
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 900,
              fontSize: '1.2rem',
              animation: 'spin 2s linear infinite',
            }}
          >
            ✨
          </Box>
        </Box>

        {/* Texto */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            color: jetsnackColorPalette.textPrimary,
            mb: 1.5,
            animation: 'slideInUp 0.8s ease-out 0.2s both',
          }}
        >
          {message}
        </Typography>

        {/* Puntos animados */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 2,
          }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              sx={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: jetsnackColorPalette.brand,
                animation: `bounce 1.4s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </Box>

        {/* Subtítulo */}
        <Typography
          variant="caption"
          sx={{
            color: jetsnackColorPalette.textTertiary,
            display: 'block',
            mt: 3,
            animation: 'slideInUp 0.8s ease-out 0.4s both',
          }}
        >
          Preparando tu experiencia Jetsnack premium...
        </Typography>
      </Container>
    </Box>
  );
}

export default LoadingScreen;
