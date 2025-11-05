import { createTheme } from "@mui/material/styles";

export const jetsnackColorPalette = {
  // Primario - Naranja Coral Premium
  brand: "#FF5722",           // Naranja coral vibrante
  brand90: "#FF6F35",
  brand80: "#FF7043",
  brand70: "#FF7D54",
  brand60: "#FF8A65",
  brand40: "#FFAB91",
  brand20: "#FFCCBC",
  brandLight: "#FFF3E0",
  brandUltraLight: "#FFFBF7",
  
  // Secundario - Cyan Moderno
  accent: "#00BCD4",          // Cyan/Teal vibrante
  accentLight: "#26C6DA",
  accent80: "#4DD0E1",
  accentUltraLight: "#E0F7FA",
  
  // Terciario - Púrpura Elegante
  tertiary: "#9C27B0",        // Púrpura vivido
  tertiaryLight: "#BA68C8",
  tertiaryUltraLight: "#F3E5F5",
  
  // Cuaternario - Azul Profundo
  quaternary: "#1A237E",      // Azul profundo
  quaternaryLight: "#3949AB",
  quaternaryUltraLight: "#E8EAF6",
  
  // Estados Mejorados
  success: "#10B981",         // Verde esmeralda
  successLight: "#D1FAE5",
  warning: "#F59E0B",         // Ámbar premium
  warningLight: "#FEF3C7",
  error: "#EF4444",           // Rojo moderno
  errorLight: "#FEE2E2",
  info: "#0EA5E9",            // Azul cielo
  infoLight: "#E0F2FE",
  
  // Superficies Premium
  surface1: "#FFFFFF",        // Blanco puro
  surface2: "#FAFBFC",        // Gris ultra claro
  surface3: "#F3F4F6",        // Gris claro premium
  surface4: "#EFEFEF",        // Gris medio
  surface5: "#E5E5E5",        // Gris
  surfaceHover: "#F9FAFB",
  
  // Bordes y Divisores
  border: "#E5E7EB",
  borderLight: "#F3F4F6",
  borderStrong: "#D1D5DB",
  divider: "#E5E7EB",
  
  // Texto - Escala Profesional
  textPrimary: "#0F172A",     // Casi negro premium
  textSecondary: "#475569",   // Gris oscuro
  textTertiary: "#64748B",    // Gris medio
  textDisabled: "#94A3B8",    // Gris claro
  textHelp: "#78716C",        // Gris ayuda
  textInverse: "#FFFFFF",     // Blanco
  
  // Interactivos
  uiBackground: "#FFFFFF",
  iconInteractive: "#FF6B35",
  linkColor: "#0EA5E9",
  linkHover: "#0284C7",
  
  // Sombras Premium Mejoradas
  shadowLight: "rgba(0, 0, 0, 0.02)",
  shadowMedium: "rgba(0, 0, 0, 0.06)",
  shadowDark: "rgba(0, 0, 0, 0.1)",
  shadowXl: "rgba(0, 0, 0, 0.15)",
  shadowXxl: "rgba(0, 0, 0, 0.2)",
  
  // Neutrales Escala
  neutral50: "#F9FAFB",
  neutral100: "#F3F4F6",
  neutral200: "#E5E7EB",
  neutral300: "#D1D5DB",
  neutral400: "#9CA3AF",
  neutral500: "#6B7280",
  neutral600: "#4B5563",
  neutral700: "#374151",
  neutral800: "#1F2937",
  neutral900: "#111827",
};

export const jetsnackGradients = {
  // Gradientes Premium
  brandGradient: "linear-gradient(135deg, #FF5722 0%, #FF7043 50%, #FF8A65 100%)",
  brandGradientReverse: "linear-gradient(135deg, #FF8A65 0%, #FF7043 50%, #FF5722 100%)",
  brandGradientHorizontal: "linear-gradient(90deg, #FF5722 0%, #FF7043 100%)",
  
  // Gradientes Secundarios
  accentGradient: "linear-gradient(135deg, #00BCD4 0%, #26C6DA 100%)",
  accentGradientLight: "linear-gradient(135deg, #26C6DA 0%, #4DD0E1 100%)",
  accentGradientDark: "linear-gradient(135deg, #0097A7 0%, #00BCD4 100%)",
  
  // Gradientes Terciarios
  tertiaryGradient: "linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)",
  tertiaryGradientLight: "linear-gradient(135deg, #BA68C8 0%, #E1BEE7 100%)",
  
  // Gradientes Cuaternarios
  quaternaryGradient: "linear-gradient(135deg, #1A237E 0%, #3949AB 100%)",
  
  // Gradientes de Superficie
  surfaceGradient: "linear-gradient(135deg, #FAFBFC 0%, #F3F4F6 100%)",
  surfaceGradientPremium: "linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%)",
  surfaceGradientDark: "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)",
  
  // Gradientes Multi-color
  rainbowGradient: "linear-gradient(90deg, #FF5722 0%, #9C27B0 50%, #00BCD4 100%)",
  sunsetGradient: "linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FF8A65 100%)",
  oceanGradient: "linear-gradient(135deg, #00BCD4 0%, #0097A7 50%, #006064 100%)",
  forestGradient: "linear-gradient(135deg, #4CAF50 0%, #2E7D32 50%, #1B5E20 100%)",
  
  // Gradientes Overlay
  overlayGradient: "linear-gradient(180deg, rgba(255, 87, 34, 0.85) 0%, rgba(255, 87, 34, 0.4) 50%, rgba(255, 87, 34, 0) 100%)",
  overlayGradientDark: "linear-gradient(180deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0) 100%)",
  overlayGradientLight: "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 100%)",
  
  // Gradientes Decorativos
  shimmerGradient: "linear-gradient(90deg, #FAFBFC 0%, #FFFFFF 50%, #FAFBFC 100%)",
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
    fontFamily: "'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', sans-serif",
    h1: { 
      fontSize: "clamp(1.75rem, 8vw, 3.5rem)", 
      fontWeight: 900,
      letterSpacing: "-0.03em",
      lineHeight: 1.0,
      "@media (max-width: 359px)": {
        fontSize: "1.75rem",
      },
    },
    h2: { 
      fontSize: "clamp(1.5rem, 6.5vw, 2.75rem)", 
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.1,
      "@media (max-width: 359px)": {
        fontSize: "1.5rem",
      },
    },
    h3: { 
      fontSize: "clamp(1.25rem, 5vw, 2rem)", 
      fontWeight: 800,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      "@media (max-width: 359px)": {
        fontSize: "1.25rem",
      },
    },
    h4: {
      fontSize: "clamp(1.125rem, 4vw, 1.75rem)",
      fontWeight: 700,
      lineHeight: 1.3,
      "@media (max-width: 359px)": {
        fontSize: "1.125rem",
      },
    },
    h5: {
      fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
      fontWeight: 700,
      lineHeight: 1.35,
      "@media (max-width: 359px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontSize: "clamp(0.95rem, 3vw, 1.25rem)",
      fontWeight: 700,
      lineHeight: 1.4,
      "@media (max-width: 359px)": {
        fontSize: "0.95rem",
      },
    },
    body1: { 
      fontSize: "clamp(0.9375rem, 2.2vw, 1.0625rem)", 
      lineHeight: 1.65,
      letterSpacing: "0.2px",
      "@media (max-width: 359px)": {
        fontSize: "0.9375rem",
      },
    },
    body2: { 
      fontSize: "clamp(0.875rem, 2vw, 1rem)", 
      lineHeight: 1.6,
      letterSpacing: "0.15px",
      "@media (max-width: 359px)": {
        fontSize: "0.875rem",
      },
    },
    caption: {
      fontSize: "clamp(0.75rem, 1.8vw, 0.875rem)",
      lineHeight: 1.7,
      letterSpacing: "0.3px",
      fontWeight: 600,
      "@media (max-width: 359px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.3px",
      "@media (max-width: 359px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle1: {
      fontSize: "1.0625rem",
      fontWeight: 700,
      lineHeight: 1.4,
      letterSpacing: "0.1px",
    },
    subtitle2: {
      fontSize: "0.9375rem",
      fontWeight: 700,
      lineHeight: 1.5,
      letterSpacing: "0.1px",
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
          color: jetsnackColorPalette.textPrimary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 700,
          padding: "12px 24px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.15)",
            transition: "left 0.3s ease",
          },
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 12px 24px rgba(255, 107, 53, 0.25)",
            "&::before": {
              left: "100%",
            },
          },
          "&:active": {
            transform: "translateY(0)",
          },
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: jetsnackColorPalette.brand,
            outlineOffset: "2px",
          },
        },
        contained: {
          boxShadow: "0 4px 16px rgba(255, 87, 34, 0.2)",
          background: jetsnackGradients.brandGradient,
          border: "none",
          color: "white",
          
          "&:hover": {
            background: jetsnackGradients.brandGradient,
            boxShadow: "0 12px 32px rgba(255, 87, 34, 0.35)",
          },
          "&:disabled": {
            background: jetsnackColorPalette.neutral200,
            color: jetsnackColorPalette.textDisabled,
            cursor: "not-allowed",
          },
        },
        outlined: {
          borderWidth: "2px",
          borderColor: jetsnackColorPalette.brand,
          color: jetsnackColorPalette.brand,
          transition: "all 0.3s ease",
          "&:hover": {
            borderWidth: "2px",
            backgroundColor: jetsnackColorPalette.brandLight,
            borderColor: jetsnackColorPalette.brand,
            transform: "translateY(-2px)",
          },
          "&:disabled": {
            borderColor: jetsnackColorPalette.neutral200,
            color: jetsnackColorPalette.textDisabled,
          },
        },
        text: {
          color: jetsnackColorPalette.brand,
          "&:hover": {
            backgroundColor: jetsnackColorPalette.brandLight,
          },
          "&:disabled": {
            color: jetsnackColorPalette.textDisabled,
          },
        },
        sizeLarge: {
          padding: "14px 32px",
          fontSize: "1rem",
          fontWeight: 700,
        },
        sizeSmall: {
          padding: "8px 16px",
          fontSize: "0.875rem",
          fontWeight: 600,
        },
      },
      defaultProps: {
        disableElevation: false,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
          border: "1px solid rgba(0, 0, 0, 0.03)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backgroundColor: jetsnackColorPalette.surface1,
          
          "&:hover": {
            boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
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
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            transition: "all 0.3s ease",
            backgroundColor: jetsnackColorPalette.surface2,
            
            "&:hover fieldset": {
              borderColor: jetsnackColorPalette.brand,
            },
            
            "&.Mui-focused fieldset": {
              borderColor: jetsnackColorPalette.brand,
              borderWidth: "2px",
              boxShadow: `0 0 0 4px rgba(255, 107, 53, 0.08)`,
            },
            
            "&.Mui-error.Mui-focused fieldset": {
              borderColor: jetsnackColorPalette.error,
              boxShadow: `0 0 0 4px rgba(239, 68, 68, 0.08)`,
            },
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            
            "&::placeholder": {
              color: jetsnackColorPalette.textTertiary,
              opacity: 0.7,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          fontWeight: 700,
          transition: "all 0.3s ease",
          fontSize: "0.875rem",
        },
        filled: {
          backgroundColor: jetsnackColorPalette.surface3,
          color: jetsnackColorPalette.textPrimary,
          
          "&:hover": {
            backgroundColor: jetsnackColorPalette.brand,
            color: "white",
            transform: "scale(1.05)",
          },
        },
        outlined: {
          borderColor: jetsnackColorPalette.border,
          color: jetsnackColorPalette.brand,
          borderWidth: "2px",
          
          "&:hover": {
            backgroundColor: jetsnackColorPalette.brandLight,
            borderColor: jetsnackColorPalette.brand,
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          transition: "all 0.2s ease",
          
          "&:hover": {
            backgroundColor: "rgba(255, 107, 53, 0.08)",
            transform: "scale(1.08)",
          },
          
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: jetsnackColorPalette.brand,
            outlineOffset: "2px",
          },
        },
        colorPrimary: {
          color: jetsnackColorPalette.brand,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: jetsnackColorPalette.divider,
          opacity: 0.7,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: jetsnackColorPalette.surface1,
          transition: "all 0.3s ease",
        },
        elevation0: {
          boxShadow: "none",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        },
        elevation2: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(1rem, 3vw, 3rem)",
          paddingRight: "clamp(1rem, 3vw, 3rem)",
        },
      },
    },
  },
});

export { jetsnackTheme };
export default jetsnackTheme;
