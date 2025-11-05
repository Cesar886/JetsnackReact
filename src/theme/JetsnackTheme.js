import { createTheme } from "@mui/material/styles";

export const jetsnackColorPalette = {
  // Primario - Naranja Coral Moderno
  brand: "#FF5722",           // Naranja coral moderno
  brand80: "#FF7043",
  brand60: "#FF8A65",
  brand40: "#FFAB91",
  brand20: "#FFCCBC",
  brandLight: "#FFF3E0",
  
  // Secundario - Teal Vibrante
  accent: "#00BCD4",          // Cyan/Teal vibrante
  accentLight: "#26C6DA",
  accentUltraLight: "#E0F2F1",
  
  // Terciario - Púrpura Vivido
  tertiary: "#9C27B0",        // Púrpura vivido
  tertiaryLight: "#BA68C8",
  tertiaryUltraLight: "#F3E5F5",
  
  // Cuaternario - Azul Profundo
  quaternary: "#1A237E",      // Azul profundo
  quaternaryLight: "#3949AB",
  
  // Estados con colores mejorados
  success: "#4CAF50",         // Verde fresco
  successLight: "#C8E6C9",
  warning: "#FF9800",         // Ámbar vibrante
  warningLight: "#FFE0B2",
  error: "#E53935",           // Rojo moderno
  errorLight: "#FFCDD2",
  info: "#00BCD4",            // Cyan fresco
  infoLight: "#B2EBF2",
  
  // Superficies y Fondos Premium
  surface1: "#FFFFFF",        // Blanco puro
  surface2: "#FAFAFA",        // Gris ultra claro
  surface3: "#F5F5F5",        // Gris claro
  surface4: "#EFEFEF",        // Gris medio
  surface5: "#E5E5E5",        // Gris
  
  // Bordes y Divisores
  border: "#E0E0E0",
  borderLight: "#F0F0F0",
  divider: "#EBEBEB",
  
  // Texto - Escala de Grises Premium
  textPrimary: "#1A1A1A",     // Casi negro
  textSecondary: "#424242",   // Gris oscuro
  textTertiary: "#616161",    // Gris medio
  textDisabled: "#9E9E9E",    // Gris claro
  textHelp: "#757575",        // Gris ayuda
  
  // Fondos Gradiente
  uiBackground: "#FFFFFF",
  iconInteractive: "#FF6B35",
  
  // Sombras Premium
  shadowLight: "rgba(0, 0, 0, 0.04)",
  shadowMedium: "rgba(0, 0, 0, 0.08)",
  shadowDark: "rgba(0, 0, 0, 0.12)",
  shadowXl: "rgba(0, 0, 0, 0.16)",
  
  // Neutrales
  neutral50: "#F9FAFB",
  neutral100: "#F3F4F6",
  neutral200: "#E5E7EB",
  neutral300: "#D1D5DB",
  neutral700: "#374151",
  neutral900: "#111827",
};

export const jetsnackGradients = {
  // Gradientes Moderno
  brandGradient: "linear-gradient(135deg, #FF5722 0%, #FF7043 50%, #FF8A65 100%)",
  brandGradientReverse: "linear-gradient(135deg, #FF7043 0%, #FF5722 100%)",
  
  // Gradientes Teal
  accentGradient: "linear-gradient(135deg, #00BCD4 0%, #26C6DA 100%)",
  accentGradientLight: "linear-gradient(135deg, #26C6DA 0%, #4DD0E1 100%)",
  
  // Gradientes Púrpura
  tertiaryGradient: "linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)",
  
  // Gradientes de Superficie
  surfaceGradient: "linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)",
  surfaceGradientPremium: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)",
  
  // Gradientes Multi-color Modernos
  rainbowGradient: "linear-gradient(90deg, #FF5722 0%, #9C27B0 50%, #00BCD4 100%)",
  
  // Gradientes Overlay
  overlayGradient: "linear-gradient(180deg, rgba(255, 87, 34, 0.8) 0%, rgba(255, 87, 34, 0) 100%)",
  overlayDarkGradient: "linear-gradient(180deg, rgba(26, 26, 26, 0.7) 0%, rgba(26, 26, 26, 0) 100%)",
};

const jetsnackTheme = createTheme({
  palette: {
    primary: {
      main: jetsnackColorPalette.brand,
      light: jetsnackColorPalette.brand80,
      dark: "#E64A19",
      contrastText: "#fff",
    },
    secondary: {
      main: jetsnackColorPalette.accent,
      light: jetsnackColorPalette.accentLight,
      dark: "#0097A7",
      contrastText: "#fff",
    },
    success: {
      main: jetsnackColorPalette.success,
      light: jetsnackColorPalette.successLight,
    },
    warning: {
      main: jetsnackColorPalette.warning,
      light: jetsnackColorPalette.warningLight,
    },
    error: {
      main: jetsnackColorPalette.error,
      light: jetsnackColorPalette.errorLight,
    },
    info: {
      main: jetsnackColorPalette.info,
      light: jetsnackColorPalette.infoLight,
    },
    background: {
      default: jetsnackColorPalette.neutral50,
      paper: jetsnackColorPalette.surface1,
    },
    text: {
      primary: jetsnackColorPalette.textPrimary,
      secondary: jetsnackColorPalette.textSecondary,
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif",
    h1: { 
      fontSize: "clamp(1.25rem, 7vw, 2.5rem)", 
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      "@media (max-width: 359px)": {
        fontSize: "1.25rem",
      },
    },
    h2: { 
      fontSize: "clamp(1.125rem, 5.5vw, 2rem)", 
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.25,
      "@media (max-width: 359px)": {
        fontSize: "1.125rem",
      },
    },
    h3: { 
      fontSize: "clamp(1rem, 4vw, 1.5rem)", 
      fontWeight: 700,
      lineHeight: 1.35,
      "@media (max-width: 359px)": {
        fontSize: "1rem",
      },
    },
    h4: {
      fontSize: "clamp(0.95rem, 3vw, 1.25rem)",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width: 359px)": {
        fontSize: "0.95rem",
      },
    },
    h5: {
      fontSize: "clamp(0.9rem, 2.5vw, 1.125rem)",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width: 359px)": {
        fontSize: "0.9rem",
      },
    },
    h6: {
      fontSize: "clamp(0.875rem, 2vw, 1rem)",
      fontWeight: 600,
      lineHeight: 1.5,
      "@media (max-width: 359px)": {
        fontSize: "0.875rem",
      },
    },
    body1: { 
      fontSize: "clamp(0.875rem, 2vw, 1rem)", 
      lineHeight: 1.6,
      letterSpacing: "0.3px",
      "@media (max-width: 359px)": {
        fontSize: "0.875rem",
      },
    },
    body2: { 
      fontSize: "clamp(0.8125rem, 1.8vw, 0.875rem)", 
      lineHeight: 1.57,
      letterSpacing: "0.25px",
      "@media (max-width: 359px)": {
        fontSize: "0.8125rem",
      },
    },
    caption: {
      fontSize: "clamp(0.7rem, 1.5vw, 0.75rem)",
      lineHeight: 1.66,
      letterSpacing: "0.4px",
      fontWeight: 500,
      "@media (max-width: 359px)": {
        fontSize: "0.7rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.5px",
      "@media (max-width: 359px)": {
        fontSize: "0.8rem",
      },
    },
  },
  shape: { borderRadius: 16 },
  shadows: [
    "none",
    "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    ...Array(22).fill("0 25px 50px -12px rgba(0, 0, 0, 0.25)"),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
          backgroundColor: jetsnackColorPalette.neutral50,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 20px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 24px rgba(255, 107, 53, 0.15)",
          },
          "&:active": {
            transform: "translateY(0)",
          },
        },
        contained: {
          boxShadow: "0 4px 12px rgba(255, 87, 34, 0.2)",
          background: jetsnackGradients.brandGradient,
          border: "none",
          
          "&:hover": {
            background: jetsnackGradients.brandGradient,
            boxShadow: "0 12px 24px rgba(255, 87, 34, 0.3)",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: jetsnackColorPalette.brand,
          color: jetsnackColorPalette.brand,
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: jetsnackColorPalette.brandLight,
          },
        },
        containedSecondary: {
          background: jetsnackGradients.accentGradient,
          boxShadow: "0 4px 12px rgba(0, 188, 212, 0.2)",
          
          "&:hover": {
            background: jetsnackGradients.accentGradient,
            boxShadow: "0 12px 24px rgba(0, 188, 212, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: jetsnackColorPalette.surface1,
          
          "&:hover": {
            boxShadow: "0 12px 32px rgba(0, 0, 0, 0.12)",
            transform: "translateY(-4px)",
            borderColor: jetsnackColorPalette.brand,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: jetsnackGradients.brandGradient,
          boxShadow: "0 4px 20px rgba(255, 87, 34, 0.15)",
          backdropFilter: "blur(10px)",
          borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            transition: "all 0.3s ease",
            backgroundColor: jetsnackColorPalette.surface2,
            
            "&:hover fieldset": {
              borderColor: jetsnackColorPalette.brand,
            },
            
            "&.Mui-focused fieldset": {
              borderColor: jetsnackColorPalette.brand,
              borderWidth: "2px",
              boxShadow: `0 0 0 3px rgba(255, 107, 53, 0.1)`,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 600,
          transition: "all 0.3s ease",
        },
        filled: {
          backgroundColor: jetsnackColorPalette.surface3,
          
          "&:hover": {
            backgroundColor: jetsnackColorPalette.brand,
            color: "white",
          },
        },
        outlined: {
          borderColor: jetsnackColorPalette.border,
          color: jetsnackColorPalette.brand,
          
          "&:hover": {
            backgroundColor: jetsnackColorPalette.brandLight,
            borderColor: jetsnackColorPalette.brand,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          transition: "all 0.2s ease",
          
          "&:hover": {
            backgroundColor: "rgba(255, 107, 53, 0.08)",
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: jetsnackColorPalette.divider,
          opacity: 0.6,
        },
      },
    },
  },
});

export { jetsnackTheme };
export default jetsnackTheme;
