import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Divider, useMediaQuery, useTheme, Chip, Rating, Card, Grid, Container } from '@mui/material';
import { ArrowLeft, Heart, Minus, Plus, Star, Zap, Award, Check, Truck, Lock, RefreshCw, ShoppingBag } from 'lucide-react';
import { useSnackRepository } from '../hooks/useSnackRepository';
import { useAppContext } from '../context/useAppContext';
import JetsnackSurface from '../components/common/JetsnackSurface';
import JetsnackButton from '../components/common/JetsnackButton';
import SnackCollection from '../components/snacks/SnackCollection';
import NotificationPopup from '../components/common/NotificationPopup';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

const MinTitleOffset = 56;
const TitleHeight = 128;
const GradientScroll = 180;

export function SnackDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { getSnack, getRelated } = useSnackRepository();
  const { addToCart, favorites, toggleFavorite } = useAppContext();

  const snack = getSnack(parseInt(id));
  const related = getRelated();
  const isFavorite = favorites.includes(snack?.id);

  const [quantity, setQuantity] = useState(1);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [notification, setNotification] = useState({
    open: false,
    type: 'success',
    title: '',
    message: '',
  });
  const scrollRef = useRef(null);

  if (!snack) {
    return (
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography>Snack no encontrado</Typography>
      </Box>
    );
  }

  const handleScroll = (e) => {
    setScrollOffset(e.target.scrollTop);
  };

  const imageHeight = Math.max(100, 300 - scrollOffset * 0.5);
  const imageOpacity = Math.max(0.5, 1 - scrollOffset / 300);

  const handleAddToCart = () => {
    addToCart(snack, quantity);
    setNotification({
      open: true,
      type: 'success',
      title: '¡Agregado al carrito!',
      message: `${quantity} ${snack.name}${quantity > 1 ? 's' : ''} ha sido agregado(s)`,
    });
  };

  return (
    <Box
      ref={scrollRef}
      onScroll={handleScroll}
      sx={{
        height: '100vh',
        overflowY: 'auto',
        background: jetsnackColorPalette.uiBackground,
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: 1, sm: 1.5, md: 2 },
          backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollOffset / 300, 0.98)})`,
          backdropFilter: `blur(${Math.min(scrollOffset / 100, 12)}px)`,
          borderBottom: `1px solid ${scrollOffset > 50 ? jetsnackColorPalette.border : 'transparent'}`,
          boxShadow: scrollOffset > 50 ? '0 8px 24px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <IconButton 
          onClick={() => navigate(-1)} 
          size={isMobile ? 'small' : 'medium'}
          sx={{
            transition: 'all 0.3s ease',
            backgroundColor: 'rgba(255, 107, 53, 0.08)',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: jetsnackColorPalette.brandLight,
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
        >
          <ArrowLeft size={isMobile ? 20 : 24} color={jetsnackColorPalette.brand} />
        </IconButton>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          sx={{
            fontWeight: 900,
            opacity: Math.min(scrollOffset / 300, 1),
            transition: 'opacity 0.2s ease-in-out',
            textAlign: 'center',
            flex: 1,
            px: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: jetsnackColorPalette.textPrimary,
          }}
        >
          {snack.name}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography
            sx={{
              fontWeight: 900,
              background: jetsnackGradients.brandGradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: Math.min(scrollOffset / 300, 1),
              transition: 'opacity 0.2s',
              fontSize: { xs: '0.9rem', sm: '1rem' }
            }}
          >
            ${(snack.price / 100).toFixed(2)}
          </Typography>
          <IconButton
            onClick={() => toggleFavorite(snack.id)}
            size={isMobile ? 'small' : 'medium'}
            sx={{ 
              color: isFavorite ? jetsnackColorPalette.brand : 'gray',
              backgroundColor: isFavorite ? 'rgba(255, 107, 53, 0.08)' : 'transparent',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '&:hover': {
                transform: 'scale(1.2) rotate(15deg)',
                backgroundColor: 'rgba(255, 107, 53, 0.12)',
              }
            }}
          >
            <Heart size={isMobile ? 18 : 20} fill={isFavorite ? jetsnackColorPalette.brand : 'none'} />
          </IconButton>
        </Box>
      </Box>

      {/* Imagen Hero Mejorada */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: `${Math.max(200, 350 - scrollOffset * 0.4)}px`, sm: `${imageHeight}px` },
          marginTop: `${MinTitleOffset}px`,
          transition: 'height 0.1s ease-out',
          minHeight: { xs: '200px', sm: '280px' },
          background: `linear-gradient(135deg, ${snack.color || jetsnackColorPalette.brand}15 0%, ${snack.color || jetsnackColorPalette.accent}10 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Decoración de fondo */}
        <Box
          sx={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            background: `radial-gradient(circle, ${snack.color || jetsnackColorPalette.brand}20 0%, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        
        <Box
          component="img"
          src={snack.imageUrl}
          alt={snack.name}
          sx={{
            width: { xs: '100%', sm: '80%' },
            height: { xs: '100%', sm: '80%' },
            objectFit: 'contain',
            opacity: imageOpacity,
            transition: 'opacity 0.1s ease-out',
            zIndex: 2,
            filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))',
          }}
        />
        
        {/* Gradiente superpuesto superior */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />
        
        {/* Gradiente superpuesto inferior */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: `linear-gradient(180deg, transparent 0%, ${snack.color || jetsnackColorPalette.brand}30 100%)`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      </Box>

      <JetsnackSurface
        sx={{
          mt: { xs: -3, sm: -4 },
          mx: 0,
          borderRadius: { xs: '28px 28px 0 0', sm: '28px 28px 0 0' },
          position: 'relative',
          zIndex: 10,
          pb: { xs: '140px', sm: '160px', md: '180px' },
        }}
      >
        {/* Encabezado Premium */}
        <Box sx={{ p: { xs: 2, sm: 2.5, md: 3.5 }, pb: { xs: 1.5, sm: 2, md: 2.5 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 2, mb: 1.5 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                <Chip
                  icon={<Zap size={14} />}
                  label={Array.from(snack.tags)[0] || 'SNACK'}
                  sx={{
                    background: jetsnackGradients.brandGradient,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.7rem',
                    height: '28px',
                  }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, background: jetsnackColorPalette.surface3, px: 1, py: 0.5, borderRadius: '8px' }}>
                  <Star size={14} fill={jetsnackColorPalette.brand} color={jetsnackColorPalette.brand} />
                  <Typography sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>4.8</Typography>
                </Box>
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  color: jetsnackColorPalette.textPrimary,
                  fontSize: { xs: 'clamp(1.25rem, 5vw, 2rem)', sm: '2rem' },
                  wordBreak: 'break-word',
                  background: `linear-gradient(135deg, ${snack.color || jetsnackColorPalette.brand} 0%, ${snack.color || jetsnackColorPalette.brand}dd 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {snack.name}
              </Typography>
            </Box>
            <IconButton
              onClick={() => toggleFavorite(snack.id)}
              sx={{
                width: { xs: '48px', sm: '56px' },
                height: { xs: '48px', sm: '56px' },
                background: isFavorite ? jetsnackColorPalette.brandLight : jetsnackColorPalette.surface2,
                color: isFavorite ? jetsnackColorPalette.brand : jetsnackColorPalette.textHelp,
                flexShrink: 0,
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '&:hover': {
                  transform: 'scale(1.15) rotate(15deg)',
                  background: jetsnackColorPalette.brandLight,
                }
              }}
              size="large"
            >
              <Heart
                size={24}
                fill={isFavorite ? jetsnackColorPalette.brand : 'none'}
              />
            </IconButton>
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: jetsnackColorPalette.textSecondary,
              my: { xs: 1.5, sm: 2 },
              fontSize: { xs: 'clamp(0.85rem, 2vw, 1rem)', sm: '1rem' },
              fontStyle: 'italic',
            }}
          >
            {snack.tagline}
          </Typography>

          {/* Precio Premium */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: 1, 
            mt: 2,
            mb: 1.5,
          }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                background: jetsnackGradients.brandGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: 'clamp(1.75rem, 6vw, 2.5rem)', sm: '2.5rem' },
              }}
            >
              ${(snack.price / 100).toFixed(2)}
            </Typography>
            <Typography
              sx={{
                color: jetsnackColorPalette.textHelp,
                fontSize: '0.9rem',
                fontWeight: 600,
              }}
            >
              cada uno
            </Typography>
          </Box>

          {/* Beneficios del Producto */}
          <Grid container spacing={1.5} sx={{ mt: 1 }}>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '12px',
                  background: 'rgba(255, 107, 53, 0.08)',
                  border: `1px solid rgba(255, 107, 53, 0.2)`,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: 'rgba(255, 107, 53, 0.12)',
                    boxShadow: '0 12px 24px rgba(255, 107, 53, 0.12)',
                  }
                }}
              >
                <Truck size={20} color={jetsnackColorPalette.brand} style={{ marginBottom: '6px', display: 'block', margin: '0 auto 6px' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.textPrimary, display: 'block' }}>
                  Envío Gratis
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.65rem', color: jetsnackColorPalette.textSecondary }}>
                  Mayoría de compras
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '12px',
                  background: 'rgba(102, 204, 153, 0.08)',
                  border: `1px solid rgba(102, 204, 153, 0.2)`,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: 'rgba(102, 204, 153, 0.12)',
                    boxShadow: '0 12px 24px rgba(102, 204, 153, 0.12)',
                  }
                }}
              >
                <Lock size={20} color="#66cc99" style={{ marginBottom: '6px', display: 'block', margin: '0 auto 6px' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.textPrimary, display: 'block' }}>
                  Pago Seguro
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.65rem', color: jetsnackColorPalette.textSecondary }}>
                  Encriptado SSL
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: '12px',
                  background: 'rgba(100, 200, 255, 0.08)',
                  border: `1px solid rgba(100, 200, 255, 0.2)`,
                  textAlign: 'center',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: 'rgba(100, 200, 255, 0.12)',
                    boxShadow: '0 12px 24px rgba(100, 200, 255, 0.12)',
                  }
                }}
              >
                <RefreshCw size={20} color="#64c8ff" style={{ marginBottom: '6px', display: 'block', margin: '0 auto 6px' }} />
                <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.textPrimary, display: 'block' }}>
                  Devoluciones
                </Typography>
                <Typography variant="caption" sx={{ fontSize: '0.65rem', color: jetsnackColorPalette.textSecondary }}>
                  Hasta 30 días
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: { xs: 1.5, sm: 2 }, opacity: 0.3 }} />

        {/* Descripción Mejorada */}
        <Box sx={{ px: { xs: 2, sm: 2.5, md: 3.5 }, py: { xs: 1.5, sm: 2, md: 2.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Award size={18} color={jetsnackColorPalette.brand} />
            <Typography
              variant="subtitle2"
              sx={{
                color: jetsnackColorPalette.brand,
                fontWeight: 900,
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
              }}
            >
              DESCRIPCIÓN PREMIUM
            </Typography>
          </Box>
          <Card
            sx={{
              background: jetsnackColorPalette.surface2,
              border: `1px solid ${jetsnackColorPalette.border}`,
              p: { xs: 1.5, sm: 2 },
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: jetsnackColorPalette.textSecondary,
                lineHeight: 1.8,
                fontSize: { xs: 'clamp(0.85rem, 2vw, 0.95rem)', sm: '0.95rem' },
              }}
            >
              Disfruta de este delicioso {snack.name}. Hecho con ingredientes premium
              seleccionados cuidadosamente. {snack.tagline} 
              <br />
              <br />
              Cada producto está elaborado artesanalmente con las mejores técnicas de pastelería 
              moderna para garantizar una experiencia única en cada bocado. Nuestro compromiso es ofrecerte
              la máxima calidad y sabor en cada compra.
            </Typography>
          </Card>
        </Box>

        <Divider sx={{ my: { xs: 1.5, sm: 2 }, opacity: 0.3 }} />

        {/* Ingredientes Mejorado */}
        <Box sx={{ px: { xs: 2, sm: 2.5, md: 3.5 }, py: { xs: 1.5, sm: 2, md: 2.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Zap size={18} color={jetsnackColorPalette.brand} />
            <Typography
              variant="subtitle2"
              sx={{
                color: jetsnackColorPalette.brand,
                fontWeight: 900,
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
              }}
            >
              INGREDIENTES NATURALES
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' },
              gap: 1.5,
            }}
          >
            {['Azúcar', 'Harina', 'Huevos', 'Mantequilla', 'Vainilla', 'Chocolate'].map((ing, idx) => (
              <Box
                key={ing}
                sx={{
                  p: 1.5,
                  borderRadius: '10px',
                  background: jetsnackColorPalette.surface2,
                  border: `1.5px solid ${jetsnackColorPalette.brand}40`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  animation: `fadeIn 0.5s ease ${idx * 0.08}s both`,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: jetsnackColorPalette.brandLight,
                    borderColor: jetsnackColorPalette.brand,
                  }
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: jetsnackColorPalette.brand,
                    fontSize: '0.9rem',
                  }}
                >
                  {ing}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: { xs: 1.5, sm: 2 }, opacity: 0.3 }} />

        {/* Reseñas de Clientes */}
        <Box sx={{ px: { xs: 2, sm: 2.5, md: 3.5 }, py: { xs: 1.5, sm: 2, md: 2.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Star size={18} color={jetsnackColorPalette.brand} />
            <Typography
              variant="subtitle2"
              sx={{
                color: jetsnackColorPalette.brand,
                fontWeight: 900,
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
              }}
            >
              CALIFICACIÓN DE CLIENTES
            </Typography>
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 2,
                  background: 'rgba(255, 107, 53, 0.04)',
                  border: `1px solid rgba(255, 107, 53, 0.1)`,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 900, color: jetsnackColorPalette.brand, mb: 0.5 }}>
                  4.8
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 0.5 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={jetsnackColorPalette.brand}
                      color={jetsnackColorPalette.brand}
                    />
                  ))}
                </Box>
                <Typography variant="caption" sx={{ color: jetsnackColorPalette.textSecondary }}>
                  Basado en 1,247 reseñas
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card
                sx={{
                  p: 2,
                  background: 'rgba(102, 204, 153, 0.04)',
                  border: `1px solid rgba(102, 204, 153, 0.1)`,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#66cc99', mb: 0.5 }}>
                  ✓ Recomendado
                </Typography>
                <Typography variant="body2" sx={{ color: jetsnackColorPalette.textSecondary, mb: 0.5 }}>
                  94% lo recomendaría
                </Typography>
                <Typography variant="caption" sx={{ color: jetsnackColorPalette.textSecondary }}>
                  De clientes verificados
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ px: { xs: 2, sm: 2.5, md: 3.5 }, py: { xs: 1.5, sm: 2, md: 2.5 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <Star size={18} color={jetsnackColorPalette.brand} />
            <Typography
              variant="subtitle2"
              sx={{
                color: jetsnackColorPalette.brand,
                fontWeight: 900,
                fontSize: '0.8rem',
                letterSpacing: '0.5px',
              }}
            >
              TAMBIÉN TE PUEDE INTERESAR
            </Typography>
          </Box>
          {related.map((collection) => (
            <SnackCollection
              key={collection.id}
              collection={collection}
              onSnackClick={(snackId) => navigate(`/snack/${snackId}`)}
              onFavoriteClick={toggleFavorite}
              favorites={favorites}
            />
          ))}
        </Box>
      </JetsnackSurface>

      {/* Barra inferior fija mejorada */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 1.5, sm: 2, md: 2 },
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderTop: `2px solid ${jetsnackColorPalette.brandLight}`,
          display: 'flex',
          gap: { xs: 1.5, sm: 2, md: 2.5 },
          alignItems: 'center',
          zIndex: 50,
          flexDirection: { xs: 'row', sm: 'row' },
          justifyContent: { xs: 'stretch', sm: 'flex-start' },
          boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Selector de cantidad premium */}
        <JetsnackSurface
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.75, sm: 1.25 },
            px: { xs: 1, sm: 1.5 },
            py: { xs: 0.75, sm: 1 },
            minWidth: { xs: '130px', sm: 'auto' },
            background: jetsnackColorPalette.surface2,
            borderRadius: '14px',
          }}
        >
          <IconButton
            size={isMobile ? 'small' : 'medium'}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity === 1}
            sx={{ 
              p: { xs: '6px', sm: '10px' },
              color: jetsnackColorPalette.brand,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: jetsnackColorPalette.brandLight,
                transform: 'scale(1.1)',
              },
              '&:disabled': {
                opacity: 0.5,
              }
            }}
          >
            <Minus size={isMobile ? 16 : 18} />
          </IconButton>
          <Typography 
            sx={{ 
              fontWeight: 900, 
              minWidth: '24px', 
              textAlign: 'center', 
              fontSize: { xs: '1rem', sm: '1.2rem' },
              background: jetsnackGradients.brandGradient,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {quantity}
          </Typography>
          <IconButton
            size={isMobile ? 'small' : 'medium'}
            onClick={() => setQuantity(quantity + 1)}
            sx={{ 
              p: { xs: '6px', sm: '10px' },
              color: jetsnackColorPalette.brand,
              transition: 'all 0.3s ease',
              '&:hover': {
                background: jetsnackColorPalette.brandLight,
                transform: 'scale(1.1)',
              }
            }}
          >
            <Plus size={isMobile ? 16 : 18} />
          </IconButton>
        </JetsnackSurface>

        {/* Botón Agregar al carrito mejorado */}
        <JetsnackButton
          fullWidth
          onClick={handleAddToCart}
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
            p: { xs: '14px 20px', sm: '16px 28px', md: '18px 32px' },
            whiteSpace: 'nowrap',
            fontWeight: 900,
            letterSpacing: '0.5px',
            background: jetsnackGradients.brandGradient,
            boxShadow: `0 12px 32px rgba(255, 107, 53, 0.28)`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.15)',
              transition: 'left 0.4s ease',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: `0 16px 40px rgba(255, 107, 53, 0.35)`,
              '&::before': {
                left: '100%',
              }
            },
            '&:active': {
              transform: 'translateY(0)',
            }
          }}
        >
          <ShoppingBag size={18} style={{ marginRight: '8px' }} />
          Agregar al carrito
        </JetsnackButton>
      </Box>

      <NotificationPopup
        open={notification.open}
        onClose={() => setNotification({ ...notification, open: false })}
        type={notification.type}
        title={notification.title}
        message={notification.message}
      />
    </Box>
  );
}

export default SnackDetail;
