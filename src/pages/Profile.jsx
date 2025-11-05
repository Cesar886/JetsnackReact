import { 
  Box, 
  Typography, 
  Button, 
  Divider, 
  Avatar,
  Card,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LogOut, Heart, ShoppingBag, Settings, Bell } from 'lucide-react';
import JetsnackButton from '../components/common/JetsnackButton';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Profile() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const user = {
    name: 'Usuario Jetsnack',
    email: 'usuario@jetsnack.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  };

  const stats = [
    { label: 'Pedidos', value: '12', icon: ShoppingBag },
    { label: 'Favoritos', value: '24', icon: Heart },
    { label: 'Puntos', value: '1,240', icon: Bell },
  ];

  const menuItems = [
    { icon: Heart, label: 'Favoritos', description: 'Tus snacks favoritos' },
    { icon: ShoppingBag, label: 'Mis Pedidos', description: 'Historial de compras' },
    { icon: Settings, label: 'Configuración', description: 'Preferencias de cuenta' },
    { icon: Bell, label: 'Notificaciones', description: 'Alertas y promociones' },
  ];

  return (
    <Box sx={{ pb: 10, background: jetsnackGradients.surfaceGradient, minHeight: '100vh' }}>
      {/* Header con fondo */}
      <Box
        sx={{
          background: jetsnackGradients.brandGradient,
          color: 'white',
          p: { xs: 3, sm: 4, md: 5 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '400px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Avatar
            src={user.avatar}
            sx={{
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
              mx: 'auto',
              mb: 2,
              border: '4px solid white',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          />
          <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 800, mb: 0.5 }}>
            {user.name}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {user.email}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ mt: -3, mb: 4, position: 'relative', zIndex: 10 }}>
        {/* Estadísticas */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
          {stats.map((stat) => {
            const StatIcon = stat.icon;
            return (
              <Card
                key={stat.label}
                sx={{
                  textAlign: 'center',
                  p: 2.5,
                  background: 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: jetsnackGradients.brandGradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1,
                  }}
                >
                  <StatIcon size={24} color="white" />
                </Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 800, 
                    background: jetsnackGradients.brandGradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: jetsnackColorPalette.textTertiary,
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Container>

      <Container maxWidth="md">
        {/* Opciones de menú */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: jetsnackColorPalette.textSecondary,
              display: 'block',
              mb: 2,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Mi Cuenta
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {menuItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Card
                  key={item.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    p: 2.5,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(4px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: '12px',
                      background: jetsnackColorPalette.brandLight,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ItemIcon size={24} color={jetsnackColorPalette.brand} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 700, mb: 0.25 }}>
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ color: jetsnackColorPalette.textTertiary }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: jetsnackColorPalette.brand, fontWeight: 700 }}>
                    ›
                  </Typography>
                </Card>
              );
            })}
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Botón cerrar sesión */}
        <Box sx={{ mb: 4 }}>
          <JetsnackButton
            fullWidth
            variant="outlined"
            sx={{
              borderColor: jetsnackColorPalette.brand,
              color: jetsnackColorPalette.brand,
              fontSize: '1rem',
              py: 1.5,
              '&:hover': {
                backgroundColor: jetsnackColorPalette.brandLight,
              },
            }}
          >
            <LogOut size={20} style={{ marginRight: 8 }} />
            Cerrar Sesión
          </JetsnackButton>
        </Box>

        {/* Información */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: jetsnackColorPalette.textTertiary,
              display: 'block',
              mb: 0.5,
            }}
          >
            Jetsnack v1.0.0
          </Typography>
          <Typography 
            variant="caption" 
            sx={{ color: jetsnackColorPalette.textTertiary }}
          >
            © 2025 Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Profile;
