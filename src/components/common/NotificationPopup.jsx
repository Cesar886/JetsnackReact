import { Box, Typography, Button, Snackbar, Alert, useMediaQuery, useTheme } from '@mui/material';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import { jetsnackGradients } from '../theme/JetsnackTheme';

export function NotificationPopup({ 
  open, 
  onClose, 
  type = 'success', 
  title, 
  message, 
  action = null,
  autoHideDuration = 4000,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />;
      case 'error':
        return <AlertCircle size={24} />;
      case 'info':
        return <Info size={24} />;
      default:
        return <CheckCircle size={24} />;
    }
  };

  const getBackground = () => {
    switch (type) {
      case 'success':
        return jetsnackGradients.forestGradient;
      case 'error':
        return 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)';
      case 'info':
        return jetsnackGradients.oceanGradient;
      default:
        return jetsnackGradients.brandGradient;
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        '& .MuiSnackbar-root': {
          width: isMobile ? '100%' : 'auto',
        },
      }}
    >
      <Alert
        onClose={onClose}
        severity={type}
        icon={getIcon()}
        sx={{
          background: getBackground(),
          color: 'white',
          borderRadius: '16px',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)',
          border: 'none',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 2,
          minWidth: isMobile ? '100%' : '320px',
          maxWidth: isMobile ? '100%' : '400px',
          animation: 'slideInDown 0.4s ease-out',
          '& .MuiAlert-icon': {
            color: 'white',
            marginTop: '2px',
          },
          '& .MuiAlert-action': {
            padding: 0,
            marginRight: 0,
            color: 'white',
          },
        }}
        action={
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {action && (
              <Button
                size="small"
                onClick={action.onClick}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                {action.label}
              </Button>
            )}
            <Box
              component="button"
              onClick={onClose}
              sx={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '8px',
                p: 0.5,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  transform: 'scale(1.1)',
                },
              }}
            >
              <X size={18} />
            </Box>
          </Box>
        }
      >
        <Box>
          {title && (
            <Typography sx={{ fontWeight: 800, fontSize: '1rem', mb: 0.5 }}>
              {title}
            </Typography>
          )}
          {message && (
            <Typography sx={{ fontWeight: 500, fontSize: '0.9rem', opacity: 0.95 }}>
              {message}
            </Typography>
          )}
        </Box>
      </Alert>
    </Snackbar>
  );
}

export default NotificationPopup;
