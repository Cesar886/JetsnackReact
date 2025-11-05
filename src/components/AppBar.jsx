import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Badge,
  Tooltip,
  InputBase,
  alpha,
} from '@mui/material';
import { Menu, Search, ShoppingBag, Bell, Heart } from 'lucide-react';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function AppBar({ onMenuClick, title = 'Jetsnack', notificationCount = 0, favoriteCount = 0 }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiAppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: jetsnackGradients.brandGradient,
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid rgba(255, 255, 255, 0.12)`,
        boxShadow: '0 4px 24px rgba(255, 87, 34, 0.12)',
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          gap: { xs: 0.5, sm: 1 },
          py: { xs: 1.25, sm: 1.5 },
          px: { xs: 1, sm: 1.5, md: 3 },
          minHeight: { xs: '60px', sm: '68px' },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        {/* Logo y Menú */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.75, sm: 1.5 }, flex: { xs: 1, sm: 'initial' } }}>
          <Tooltip title="Abrir menú" arrow>
            <IconButton
              onClick={onMenuClick}
              size={isMobile ? 'small' : 'medium'}
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.08)',
                },
                '&:active': {
                  transform: 'scale(0.96)',
                },
              }}
            >
              <Menu size={isMobile ? 20 : 24} />
            </IconButton>
          </Tooltip>
          
          <Typography 
            variant={isMobile ? 'body1' : 'h6'}
            sx={{ 
              fontWeight: 900,
              letterSpacing: { xs: '-0.3px', sm: '-0.5px' },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: 'white',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              fontSize: { xs: '1.1rem', sm: '1.3rem' },
            }}
          >
            🍿 {title}
          </Typography>
        </Box>

        {/* Buscador (Oculto en móvil) */}
        {!isMobile && (
          <Box 
            sx={{
              flex: 1,
              mx: 2,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: alpha('#fff', 0.15),
              borderRadius: '12px',
              padding: '6px 12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: alpha('#fff', 0.25),
                borderColor: 'rgba(255, 255, 255, 0.4)',
              },
              '&:focus-within': {
                backgroundColor: 'white',
                borderColor: 'white',
              },
            }}
          >
            <Search size={18} color="rgba(255, 255, 255, 0.7)" />
            <InputBase
              placeholder="Buscar snacks..."
              sx={{
                ml: 1,
                flex: 1,
                color: 'white',
                fontSize: '0.95rem',
                '& .MuiInputBase-input': {
                  color: 'white',
                  padding: '4px 0',
                  '&::placeholder': {
                    color: 'rgba(255, 255, 255, 0.6)',
                    opacity: 1,
                  },
                  '&:focus': {
                    color: jetsnackColorPalette.textPrimary,
                  },
                },
                '&:focus-within .MuiInputBase-input::placeholder': {
                  color: jetsnackColorPalette.textTertiary,
                },
              }}
            />
          </Box>
        )}

        {/* Iconos de Acciones */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.25, sm: 0.75 } }}>
          {/* Búsqueda Móvil */}
          <Tooltip title="Buscar" arrow>
            <IconButton
              size={isMobile ? 'small' : 'medium'}
              color="inherit"
              aria-label="search"
              sx={{
                display: { xs: 'flex', sm: 'none' },
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.08)',
                },
              }}
            >
              <Search size={isMobile ? 18 : 20} />
            </IconButton>
          </Tooltip>

          {/* Notificaciones */}
          <Tooltip title="Notificaciones" arrow>
            <IconButton
              size={isMobile ? 'small' : 'medium'}
              color="inherit"
              aria-label="notifications"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.08)',
                },
              }}
            >
              <Badge badgeContent={notificationCount} color="error">
                <Bell size={isMobile ? 18 : 20} />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Favoritos */}
          <Tooltip title="Favoritos" arrow>
            <IconButton
              size={isMobile ? 'small' : 'medium'}
              color="inherit"
              aria-label="favorites"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.08)',
                },
              }}
            >
              <Badge badgeContent={favoriteCount} color="error">
                <Heart size={isMobile ? 18 : 20} />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Carrito */}
          <Tooltip title="Carrito de compras" arrow>
            <IconButton
              size={isMobile ? 'small' : 'medium'}
              color="inherit"
              aria-label="shopping cart"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.08)',
                },
              }}
            >
              <Badge badgeContent={0} color="error">
                <ShoppingBag size={isMobile ? 18 : 20} />
              </Badge>
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
