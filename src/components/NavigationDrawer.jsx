import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Home, Heart, Settings, LogOut } from 'lucide-react';
import { jetsnackColorPalette } from '../theme/JetsnackTheme';

export function NavigationDrawer({ open, onClose, onNavigate }) {
  const menuItems = [
    { label: 'Home', icon: Home, path: '/' },
    { label: 'Favoritos', icon: Heart, path: '/favorites' },
    { label: 'Intereses', icon: Settings, path: '/interests' },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <div style={{ width: 280 }}>
        <List>
          <ListItem sx={{ padding: 2, backgroundColor: jetsnackColorPalette.brand }}>
            <ListItemText
              primary="Jetsnack"
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                },
              }}
            />
          </ListItem>
        </List>

        <Divider />

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.path}
              onClick={() => {
                onNavigate(item.path);
                onClose();
              }}
              sx={{
                '&:hover': {
                  backgroundColor: jetsnackColorPalette.brandLight,
                },
              }}
            >
              <ListItemIcon sx={{ color: jetsnackColorPalette.brand }}>
                <item.icon size={20} />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <List>
          <ListItemButton
            sx={{
              '&:hover': {
                backgroundColor: jetsnackColorPalette.brandLight,
              },
            }}
          >
            <ListItemIcon sx={{ color: jetsnackColorPalette.error }}>
              <LogOut size={20} />
            </ListItemIcon>
            <ListItemText
              primary="Salir"
              sx={{ color: jetsnackColorPalette.error }}
            />
          </ListItemButton>
        </List>
      </div>
    </Drawer>
  );
}

export default NavigationDrawer;
