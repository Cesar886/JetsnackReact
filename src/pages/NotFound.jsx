import { Box, Typography, Button, Container } from '@mui/material';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { jetsnackGradients, jetsnackColorPalette } from '../theme/JetsnackTheme';

export function NotFound() {
  const navigate = useNavigate();

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
        pt: 8,
        pb: 10,
        px: 2,
      }}
    >
      {/* Decoraciones de fondo */}
      <Box
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: jetsnackGradients.brandGradient,
          borderRadius: '50%',
          opacity: 0.1,
          top: '-200px',
          right: '-200px',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: jetsnackGradients.accentGradient,
          borderRadius: '50%',
          opacity: 0.08,
          bottom: '-150px',
          left: '-150px',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Número 404 */}
        <Typography
          sx={{
            fontSize: 'clamp(8rem, 20vw, 16rem)',
            fontWeight: 900,
            background: jetsnackGradients.brandGradient,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            mb: -2,
            animation: 'slideInDown 0.8s ease-out',
          }}
        >
          404
        </Typography>

        {/* Icono */}
        <Box
          sx={{
            mb: 3,
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          <Box
            sx={{
              width: 120,
              height: 120,
              mx: 'auto',
              background: jetsnackGradients.brandGradient,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 40px rgba(255, 87, 34, 0.2)',
            }}
          >
            <Typography sx={{ fontSize: '4rem' }}>🍿</Typography>
          </Box>
        </Box>

        {/* Título */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            mb: 1.5,
            color: jetsnackColorPalette.textPrimary,
            animation: 'slideInUp 0.8s ease-out 0.2s both',
          }}
        >
          Página no encontrada
        </Typography>

        {/* Descripción */}
        <Typography
          variant="body1"
          sx={{
            color: jetsnackColorPalette.textSecondary,
            mb: 4,
            fontSize: '1.1rem',
            maxWidth: '400px',
            mx: 'auto',
            animation: 'slideInUp 0.8s ease-out 0.4s both',
          }}
        >
          Oops! La página que buscas no existe o se ha movido. Pero no te preocupes, tenemos muchos snacks deliciosos esperando por ti.
        </Typography>

        {/* Botones */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            animation: 'slideInUp 0.8s ease-out 0.6s both',
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/')}
            startIcon={<Home size={20} />}
            sx={{
              background: jetsnackGradients.brandGradient,
              boxShadow: '0 8px 20px rgba(255, 87, 34, 0.25)',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 32px rgba(255, 87, 34, 0.35)',
              },
            }}
          >
            Ir al inicio
          </Button>

          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate(-1)}
            startIcon={<ArrowLeft size={20} />}
            sx={{
              borderWidth: '2px',
              borderColor: jetsnackColorPalette.brand,
              color: jetsnackColorPalette.brand,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 700,
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: jetsnackColorPalette.brandLight,
                transform: 'translateY(-4px)',
              },
            }}
          >
            Ir atrás
          </Button>
        </Box>

        {/* Info adicional */}
        <Box
          sx={{
            mt: 6,
            p: 3,
            borderRadius: '16px',
            background: 'rgba(255, 87, 34, 0.05)',
            border: '1px solid rgba(255, 87, 34, 0.1)',
            animation: 'slideInUp 0.8s ease-out 0.8s both',
          }}
        >
          <Typography variant="caption" sx={{ color: jetsnackColorPalette.textSecondary }}>
            💡 ¿Necesitas ayuda? Contáctanos en support@jetsnack.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
