import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography, 
  Box,
  IconButton,
  useMediaQuery,
  useTheme 
} from '@mui/material';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { jetsnackColorPalette } from '../theme/JetsnackTheme';

export function AppBar({ onMenuClick, title = 'Jetsnack' }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiAppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: `linear-gradient(135deg, ${jetsnackColorPalette.brand} 0%, ${jetsnackColorPalette.brand80} 100%)`,
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
      }}
    >
      <Toolbar 
        sx={{ 
          justifyContent: 'space-between',
          py: { xs: 1, sm: 1.5 },
          px: { xs: 1, sm: 2, md: 3 },
          minHeight: { xs: '56px', sm: '64px' },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 }, flex: 1 }}>
          <IconButton
            onClick={onMenuClick}
            size={isMobile ? 'small' : 'large'}
            edge="start"
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Menu size={isMobile ? 20 : 24} />
          </IconButton>
          <Typography 
            variant={isMobile ? 'body1' : 'h6'}
            sx={{ 
              fontWeight: 800,
              letterSpacing: '-0.5px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.25, sm: 0.5 } }}>
          <IconButton
            size={isMobile ? 'small' : 'large'}
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <Search size={isMobile ? 18 : 20} />
          </IconButton>
          <IconButton
            size={isMobile ? 'small' : 'large'}
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ShoppingBag size={isMobile ? 18 : 20} />
          </IconButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
