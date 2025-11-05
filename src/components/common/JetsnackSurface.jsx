import { Paper } from '@mui/material';
import { jetsnackColorPalette } from '../../theme/JetsnackTheme';

export function JetsnackSurface({
  children,
  elevation = 0,
  shape = 'medium',
  backgroundColor = jetsnackColorPalette.surface1,
  padding = '16px',
  ...props
}) {
  const borderRadius = {
    small: '8px',
    medium: '12px',
    large: '16px',
    none: '0px',
  };

  return (
    <Paper
      elevation={elevation}
      sx={{
        backgroundColor,
        borderRadius: borderRadius[shape] || borderRadius.medium,
        padding,
        transition: 'all 0.3s ease-in-out',
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
}

export default JetsnackSurface;
