import { Card, CardContent, CardMedia, Typography, Box, IconButton, Chip, useMediaQuery, useTheme, Rating } from '@mui/material';
import { Heart, Share2, Bookmark, Clock } from 'lucide-react';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function ArticleCard({
  article,
  isFavorite = false,
  onFavoriteClick,
  onClick,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        borderRadius: '18px',
        border: `1px solid ${jetsnackColorPalette.border}`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
        
        '&:hover': {
          transform: 'translateY(-12px)',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15)',
          borderColor: jetsnackColorPalette.brand,
          '& .article-image': {
            transform: 'scale(1.08) rotate(1deg)',
          },
        },
        
        '&:active': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Imagen Premium */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          paddingBottom: '66.66%',
          overflow: 'hidden',
          backgroundColor: jetsnackColorPalette.surface3,
          background: jetsnackGradients.surfaceGradient,
        }}
      >
        <CardMedia
          component="img"
          image={article.image}
          alt={article.title}
          className="article-image"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />

        {/* Overlay Gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: jetsnackGradients.overlayGradientDark,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Category Badge Top */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 2,
          }}
        >
          <Chip
            label={article.category}
            size="small"
            sx={{
              background: jetsnackGradients.brandGradient,
              color: 'white',
              fontWeight: 700,
              fontSize: '0.7rem',
              boxShadow: '0 4px 12px rgba(255, 87, 34, 0.3)',
            }}
          />
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            display: 'flex',
            gap: 0.5,
            zIndex: 2,
          }}
        >
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteClick?.();
            }}
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.15) rotate(15deg)',
                background: 'white',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              },
              '&:active': {
                transform: 'scale(0.9)',
              },
            }}
          >
            <Heart
              size={18}
              fill={isFavorite ? jetsnackColorPalette.brand : 'none'}
              color={isFavorite ? jetsnackColorPalette.brand : jetsnackColorPalette.textTertiary}
            />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.15)',
                background: 'white',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Share2 size={18} color={jetsnackColorPalette.textTertiary} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.15)',
                background: 'white',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Bookmark size={18} color={jetsnackColorPalette.textTertiary} />
          </IconButton>
        </Box>

        {/* Reading Time Badge */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            px: 1.5,
            py: 0.5,
            borderRadius: '8px',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Clock size={14} color={jetsnackColorPalette.brand} />
          <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.textPrimary }}>
            5 min
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          p: { xs: 1.5, sm: 2 },
        }}
      >
        {/* Category Text */}
        <Typography
          variant="caption"
          sx={{
            color: jetsnackColorPalette.brand,
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            fontSize: '0.7rem',
          }}
        >
          {article.category}
        </Typography>

        {/* Title */}
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          sx={{
            fontWeight: 800,
            lineHeight: 1.3,
            color: jetsnackColorPalette.textPrimary,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {article.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="caption"
          sx={{
            color: jetsnackColorPalette.textTertiary,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: 1.5,
          }}
        >
          {article.description}
        </Typography>

        {/* Footer Metadata */}
        <Box
          sx={{
            mt: 'auto',
            pt: 1.5,
            borderTop: `1px solid ${jetsnackColorPalette.border}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Rating
              value={4.5}
              readOnly
              size="small"
              precision={0.5}
              sx={{
                '& .MuiRating-iconFilled': {
                  color: '#FFD700',
                },
                '& .MuiRating-iconEmpty': {
                  color: jetsnackColorPalette.border,
                },
              }}
            />
            <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.textTertiary, fontSize: '0.75rem' }}>
              (124)
            </Typography>
          </Box>

          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: jetsnackColorPalette.textTertiary,
              fontSize: '0.75rem',
            }}
          >
            {new Date(article.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}
          </Typography>
        </Box>

        {/* Author */}
        <Typography
          variant="caption"
          sx={{
            color: jetsnackColorPalette.textSecondary,
            fontWeight: 700,
            fontSize: '0.75rem',
          }}
        >
          Por {article.author}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
