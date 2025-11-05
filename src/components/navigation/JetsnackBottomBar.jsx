import { BottomNavigation, BottomNavigationAction, Box, useMediaQuery, useTheme } from '@mui/material';
import { Home, Search, ShoppingCart, User } from 'lucide-react';
import { jetsnackGradients } from '../../theme/JetsnackTheme';

export function JetsnackBottomBar({ value, onChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        background: jetsnackGradients.brandGradient,
        backdropFilter: 'blur(10px)',
        borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.08)',
      }}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => onChange(newValue)}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: 'transparent',
          minHeight: { xs: '56px', sm: '64px' },
          '& .MuiBottomNavigationAction-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            transition: 'all 0.3s ease',
            minWidth: { xs: 'auto', sm: '60px' },
            padding: { xs: '8px 4px', sm: '12px 16px' },
            '&:hover': {
              color: 'white',
              transform: { xs: 'scale(1.05)', sm: 'translateY(-4px)' },
            },
          },
          '& .Mui-selected': {
            color: 'white',
            fontWeight: 700,
            '& svg': {
              filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3))',
            },
          },
        }}
      >
        <BottomNavigationAction
          label={isMobile ? '' : 'Inicio'}
          value="home"
          icon={<Home size={isMobile ? 20 : 24} strokeWidth={1.5} />}
        />
        <BottomNavigationAction
          label={isMobile ? '' : 'Buscar'}
          value="search"
          icon={<Search size={isMobile ? 20 : 24} strokeWidth={1.5} />}
        />
        <BottomNavigationAction
          label={isMobile ? '' : 'Carrito'}
          value="cart"
          icon={<ShoppingCart size={isMobile ? 20 : 24} strokeWidth={1.5} />}
        />
        <BottomNavigationAction
          label={isMobile ? '' : 'Perfil'}
          value="profile"
          icon={<User size={isMobile ? 20 : 24} strokeWidth={1.5} />}
        />
      </BottomNavigation>
    </Box>
  );
}

export default JetsnackBottomBar;
