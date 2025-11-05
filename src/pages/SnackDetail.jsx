import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, IconButton, Divider, useMediaQuery, useTheme } from '@mui/material';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { useSnackRepository } from '../hooks/useSnackRepository';
import { useAppContext } from '../context/useAppContext';
import JetsnackSurface from '../components/common/JetsnackSurface';
import JetsnackButton from '../components/common/JetsnackButton';
import SnackCollection from '../components/snacks/SnackCollection';
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
    // Mostrar confirmación
    alert(`${quantity} ${snack.name}(s) agregado(s) al carrito`);
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
          backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollOffset / 300, 0.95)})`,
          backdropFilter: `blur(${Math.min(scrollOffset / 100, 10)}px)`,
          borderBottom: `1px solid ${jetsnackColorPalette.border}`,
          boxShadow: scrollOffset > 50 ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <IconButton onClick={() => navigate(-1)} size={isMobile ? 'small' : 'medium'}>
          <ArrowLeft size={isMobile ? 20 : 24} color={jetsnackColorPalette.brand} />
        </IconButton>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          sx={{
            fontWeight: 'bold',
            opacity: Math.min(scrollOffset / 300, 1),
            transition: 'opacity 0.2s ease-in-out',
            textAlign: 'center',
            flex: 1,
            px: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {snack.name}
        </Typography>
        <IconButton
          onClick={() => toggleFavorite(snack.id)}
          size={isMobile ? 'small' : 'medium'}
          sx={{ 
            color: isFavorite ? jetsnackColorPalette.brand : 'gray',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            }
          }}
        >
          <Heart size={isMobile ? 18 : 20} fill={isFavorite ? jetsnackColorPalette.brand : 'none'} />
        </IconButton>
      </Box>

      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: { xs: `${Math.max(140, 200 - scrollOffset * 0.4)}px`, sm: `${imageHeight}px` },
          marginTop: `${MinTitleOffset}px`,
          transition: 'height 0.1s ease-out',
          minHeight: { xs: '140px', sm: '180px' },
          background: jetsnackGradients.surfaceGradient,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={snack.imageUrl}
          alt={snack.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imageOpacity,
            transition: 'opacity 0.1s ease-out',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(180deg, transparent 0%, ${jetsnackColorPalette.brand}40 100%)`,
            pointerEvents: 'none',
          }}
        />
      </Box>

      <JetsnackSurface
        sx={{
          mt: { xs: -2, sm: -3 },
          mx: 0,
          borderRadius: { xs: '20px 20px 0 0', sm: '20px 20px 0 0' },
          position: 'relative',
          zIndex: 10,
          pb: { xs: '120px', sm: '140px', md: '160px' },
        }}
      >
        <Box sx={{ p: { xs: 1.5, sm: 2, md: 3 }, pb: { xs: 1, sm: 1.5, md: 2 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 1 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="caption"
                sx={{
                  color: jetsnackColorPalette.brand,
                  fontWeight: 'bold',
                  display: 'block',
                  mb: 0.5,
                  fontSize: { xs: 'clamp(0.65rem, 1.5vw, 0.75rem)', sm: '0.75rem' },
                }}
              >
                {Array.from(snack.tags)[0] || 'SNACK'}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: jetsnackColorPalette.textPrimary,
                  fontSize: { xs: 'clamp(1rem, 4vw, 1.5rem)', sm: '1.5rem' },
                  wordBreak: 'break-word',
                }}
              >
                {snack.name}
              </Typography>
            </Box>
            <IconButton
              onClick={() => toggleFavorite(snack.id)}
              sx={{
                color: isFavorite ? jetsnackColorPalette.brand : jetsnackColorPalette.textHelp,
                flexShrink: 0,
              }}
              size={isMobile ? 'small' : 'medium'}
            >
              <Heart
                size={isMobile ? 20 : 24}
                fill={isFavorite ? jetsnackColorPalette.brand : 'none'}
              />
            </IconButton>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: jetsnackColorPalette.textSecondary,
              my: { xs: 1, sm: 2 },
              fontSize: { xs: 'clamp(0.8rem, 1.8vw, 0.875rem)', sm: '0.95rem' },
            }}
          >
            {snack.tagline}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: jetsnackColorPalette.brand,
              fontSize: { xs: 'clamp(1.25rem, 5vw, 1.75rem)', sm: '1.5rem' },
            }}
          >
            ${(snack.price / 100).toFixed(2)}
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 1, sm: 2 } }} />

        {/* Descripción */}
        <Box sx={{ px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="caption"
            sx={{
              color: jetsnackColorPalette.textHelp,
              fontWeight: 'bold',
              display: 'block',
              mb: 1,
              fontSize: { xs: 'clamp(0.65rem, 1.5vw, 0.75rem)', sm: '0.75rem' },
            }}
          >
            DESCRIPCIÓN
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: jetsnackColorPalette.textSecondary,
              lineHeight: 1.6,
              fontSize: { xs: 'clamp(0.8rem, 1.8vw, 0.875rem)', sm: '0.95rem' },
            }}
          >
            Disfruta de este delicioso {snack.name}. Hecho con ingredientes premium
            seleccionados cuidadosamente. {snack.tagline}
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 1, sm: 2 } }} />

        {/* Ingredientes */}
        <Box sx={{ px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="caption"
            sx={{
              color: jetsnackColorPalette.textHelp,
              fontWeight: 'bold',
              display: 'block',
              mb: 1,
              fontSize: { xs: 'clamp(0.65rem, 1.5vw, 0.75rem)', sm: '0.75rem' },
            }}
          >
            INGREDIENTES
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: jetsnackColorPalette.textSecondary,
              fontSize: { xs: 'clamp(0.8rem, 1.8vw, 0.875rem)', sm: '0.95rem' },
            }}
          >
            Azúcar, Harina, Huevos, Mantequilla, Vainilla, Chocolate
          </Typography>
        </Box>

        <Divider sx={{ my: { xs: 1, sm: 2 } }} />

        {/* Productos relacionados */}
        <Box sx={{ px: { xs: 1.5, sm: 2, md: 3 }, py: { xs: 1, sm: 1.5, md: 2 } }}>
          <Typography
            variant="caption"
            sx={{
              color: jetsnackColorPalette.textHelp,
              fontWeight: 'bold',
              display: 'block',
              mb: { xs: 1, sm: 1.5, md: 2 },
              fontSize: { xs: 'clamp(0.65rem, 1.5vw, 0.75rem)', sm: '0.75rem' },
            }}
          >
            SIMILAR
          </Typography>
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

      {/* Barra inferior fija */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          p: { xs: 1, sm: 1.5, md: 2 },
          backgroundColor: 'white',
          borderTop: `1px solid ${jetsnackColorPalette.border}`,
          display: 'flex',
          gap: { xs: 1, sm: 1.5, md: 2 },
          alignItems: 'center',
          zIndex: 50,
          flexDirection: { xs: 'row', sm: 'row' },
          justifyContent: { xs: 'stretch', sm: 'flex-start' },
        }}
      >
        {/* Selector de cantidad */}
        <JetsnackSurface
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 },
            px: { xs: 0.75, sm: 1 },
            py: { xs: 0.5, sm: 0.75 },
            minWidth: { xs: '110px', sm: 'auto' },
          }}
        >
          <IconButton
            size={isMobile ? 'small' : 'medium'}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity === 1}
            sx={{ p: { xs: '4px', sm: '8px' } }}
          >
            <Minus size={isMobile ? 14 : 16} />
          </IconButton>
          <Typography sx={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            {quantity}
          </Typography>
          <IconButton
            size={isMobile ? 'small' : 'medium'}
            onClick={() => setQuantity(quantity + 1)}
            sx={{ p: { xs: '4px', sm: '8px' } }}
          >
            <Plus size={isMobile ? 14 : 16} />
          </IconButton>
        </JetsnackSurface>

        {/* Botón Agregar al carrito */}
        <JetsnackButton
          fullWidth
          onClick={handleAddToCart}
          sx={{
            fontSize: { xs: '0.85rem', sm: '1rem' },
            p: { xs: '10px 16px', sm: '12px 24px' },
            whiteSpace: 'nowrap',
          }}
        >
          {isMobile ? 'Agregar' : 'Agregar al Carrito'}
        </JetsnackButton>
      </Box>
    </Box>
  );
}

export default SnackDetail;
