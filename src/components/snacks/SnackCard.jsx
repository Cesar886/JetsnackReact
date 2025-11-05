import { Box, Typography, IconButton, Card, useMediaQuery, useTheme, Chip } from '@mui/material';
import { Heart, Star, Zap } from 'lucide-react';
import { jetsnackColorPalette, jetsnackGradients } from '../../theme/JetsnackTheme';

export function SnackCard({
  snack,
  isFavorite = false,
  onFavoriteClick,
  onClick,
  variant = 'default',
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCardClick = () => {
    onClick?.(snack.id);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onFavoriteClick?.(snack.id);
  };

  if (variant === 'highlight') {
    const customGradient = snack.color 
      ? `linear-gradient(135deg, ${snack.color} 0%, ${snack.color}dd 100%)`
      : jetsnackGradients.brandGradient;

    return (
      <Card
        onClick={handleCardClick}
        className="scale-in"
        sx={{
          cursor: 'pointer',
          minWidth: { xs: '90%', sm: 160, md: 180 },
          height: { xs: 'auto', sm: 220, md: 240 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: customGradient,
          color: 'white',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          p: { xs: 2, sm: 2.5 },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: `0 10px 30px -5px rgba(${snack.color ? '0, 0, 0' : '0, 188, 212'}, 0.3)`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '120px',
            height: '120px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '50%',
            transition: 'all 0.4s ease',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
          },
          '&:hover': {
            transform: { xs: 'translateY(-8px) scale(1.02)', sm: 'translateY(-16px) scale(1.05)' },
            boxShadow: `0 30px 60px -10px rgba(${snack.color ? '0, 0, 0' : '0, 188, 212'}, 0.4)`,
            '&::before': {
              transform: 'translate(20%, -20%)',
            }
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <Zap size={16} fill="currentColor" />
            <Typography 
              variant="caption" 
              sx={{ 
                opacity: 0.95,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                fontSize: '0.7rem',
              }}
            >
              Premium
            </Typography>
          </Box>
          <Typography 
            variant={isMobile ? 'body1' : 'h6'}
            sx={{ 
              fontWeight: 900, 
              mt: 1,
              lineHeight: 1.1,
              fontSize: { xs: '1.1rem', sm: '1.2rem' },
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            {snack.name}
          </Typography>
        </Box>
        <Box
          component="img"
          src={snack.imageUrl}
          alt={snack.name}
          sx={{
            width: { xs: 80, sm: 100 },
            height: { xs: 80, sm: 100 },
            objectFit: 'contain',
            borderRadius: '14px',
            mx: 'auto',
            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.25))',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </Card>
    );
  }

  return (
    <Card
      onClick={handleCardClick}
      className="fade-in"
      sx={{
        cursor: 'pointer',
        minWidth: { xs: '100%', sm: 140, md: 160 },
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        p: { xs: 1.2, sm: 1.5 },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: jetsnackColorPalette.surface1,
        borderRadius: '18px',
        border: `1px solid ${snack.accentColor || 'rgba(255, 107, 53, 0.1)'}`,
        boxShadow: `0 4px 15px ${snack.accentColor || 'rgba(255, 107, 53, 0.1)'}`,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${snack.accentColor || 'rgba(255, 107, 53, 0)'} 0%, ${snack.accentColor ? snack.accentColor.slice(0, -1) + ', 0.1)' : 'rgba(255, 107, 53, 0.05) 100%'})`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        },
        '&:hover': {
          transform: { xs: 'translateY(-6px)', sm: 'translateY(-12px) scale(1.02)' },
          boxShadow: `0 20px 40px ${snack.accentColor || 'rgba(255, 107, 53, 0.2)'}`,
          border: `1px solid ${snack.color || 'rgba(255, 107, 53, 0.2)'}`,
          '&::before': {
            opacity: 1,
          }
        },
        '&:active': {
          transform: 'scale(0.96)',
        },
      }}
    >
      {/* Image Container */}
      <Box sx={{ 
        position: 'relative', 
        mb: 1.5, 
        overflow: 'hidden', 
        borderRadius: '16px',
        background: snack.accentColor || 'linear-gradient(135deg, #F0F9FE 0%, #E0F2FE 100%)',
        aspectRatio: '1 / 1',
      }}>
        <Box
          component="img"
          src={snack.imageUrl}
          alt={snack.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              transform: 'scale(1.12) rotate(2deg)',
            },
          }}
        />
        
        {/* Badge */}
        <Box sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          background: `linear-gradient(135deg, ${snack.color || '#0EA5E9'} 0%, ${snack.color || '#38BDF8'}dd 100%)`,
          color: 'white',
          px: 1,
          py: 0.5,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backdropFilter: 'blur(4px)',
            boxShadow: `0 4px 12px ${snack.color ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 188, 212, 0.3)'}`,
        }}>
          <Star size={12} fill="white" />
          <Typography variant="caption" sx={{ fontWeight: 700, fontSize: '0.65rem' }}>
            4.8
          </Typography>
        </Box>

        {/* Favorite Button */}
        <IconButton
          size="small"
          onClick={handleFavoriteClick}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'scale(1.15) rotate(15deg)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            },
            '&:active': {
              transform: 'scale(0.9)',
            }
          }}
        >
          <Heart
            size={20}
            fill={isFavorite ? snack.color || jetsnackColorPalette.brand : 'none'}
            color={isFavorite ? snack.color || jetsnackColorPalette.brand : jetsnackColorPalette.textTertiary}
            style={{
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
            }}
          />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', zIndex: 1 }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
            <Typography
              variant="caption"
              sx={{
                color: 'white',
                fontWeight: 800,
                display: 'inline-block',
                background: `linear-gradient(135deg, ${snack.color || '#FF6B35'} 0%, ${snack.color || '#FF8555'}dd 100%)`,
                px: 1,
                py: 0.3,
                borderRadius: '6px',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
              }}
            >
              {Array.from(snack.tags)[0] || 'Snack'}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 800,
              background: `linear-gradient(135deg, ${snack.color || jetsnackColorPalette.brand} 0%, ${snack.color || jetsnackColorPalette.brand}dd 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              mb: 0.5,
              lineHeight: 1.2,
              minHeight: '2.4em',
              fontSize: { xs: '0.9rem', sm: '0.95rem' },
            }}
          >
            {snack.name}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: jetsnackColorPalette.textTertiary,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1,
              lineHeight: 1.3,
              fontSize: '0.8rem',
            }}
          >
            {snack.tagline}
          </Typography>
        </Box>

        {/* Price Section */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 1,
          borderTop: `1px solid ${snack.accentColor || 'rgba(255, 107, 53, 0.1)'}`,
        }}>
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: jetsnackColorPalette.textHelp,
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            >
              desde
            </Typography>
            <Typography
              sx={{
                fontWeight: 900,
                background: jetsnackGradients.brandGradient,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.2rem',
              }}
            >
              ${(snack.price / 100).toFixed(2)}
            </Typography>
          </Box>
          <Box sx={{
            background: jetsnackGradients.brandGradient,
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            fontWeight: 900,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 188, 212, 0.3)',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 6px 20px rgba(14, 165, 233, 0.4)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}>
            +
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default SnackCard;
