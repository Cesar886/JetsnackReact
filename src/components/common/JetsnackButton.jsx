import { Button } from '@mui/material';
import { jetsnackColorPalette } from '../../theme/JetsnackTheme';

export function JetsnackButton({
  children,
  variant = 'contained',
  size = 'medium',
  fullWidth = false,
  onClick,
  disabled = false,
  startIcon,
  endIcon,
  ...props
}) {
  const buttonSizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: '0.75rem',
    },
    medium: {
      padding: '12px 24px',
      fontSize: '0.875rem',
    },
    large: {
      padding: '16px 32px',
      fontSize: '1rem',
    },
  };

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...buttonSizeStyles[size],
        fontWeight: 600,
        textTransform: 'none',
        borderRadius: '8px',
        transition: 'all 0.3s ease-in-out',
        backgroundColor: variant === 'contained' ? jetsnackColorPalette.brand : 'transparent',
        color: variant === 'contained' ? '#fff' : jetsnackColorPalette.brand,
        border: variant === 'outlined' ? `2px solid ${jetsnackColorPalette.brand}` : 'none',
        '&:hover': {
          backgroundColor: variant === 'contained' ? jetsnackColorPalette.brand80 : `${jetsnackColorPalette.brand}15`,
        },
        '&:disabled': {
          backgroundColor: jetsnackColorPalette.textHelp,
          color: '#ffffff',
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default JetsnackButton;
