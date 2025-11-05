import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import { Heart } from 'lucide-react';
import { jetsnackColorPalette } from '../theme/JetsnackTheme';

export function ArticleCard({
  article,
  isFavorite = false,
  onFavoriteClick,
  onClick,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: 2,
        cursor: 'pointer',
        transition: 'transform 0.2s',
        borderRadius: '16px',
        border: `1px solid ${jetsnackColorPalette.border}`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 12px 24px ${jetsnackColorPalette.shadowMedium}`,
        },
      }}
      onClick={onClick}
    >
      <CardMedia
        component="img"
        height="200"
        image={article.image}
        alt={article.title}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              gutterBottom
              variant="caption"
              sx={{ color: jetsnackColorPalette.brand, fontWeight: 'bold', textTransform: 'uppercase' }}
            >
              {article.category}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: jetsnackColorPalette.textPrimary }}>
              {article.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1, color: jetsnackColorPalette.textTertiary }}>
              {article.description}
            </Typography>
            <Typography
              variant="caption"
              sx={{ display: 'block', marginTop: 1, color: jetsnackColorPalette.textDisabled }}
            >
              Por {article.author} • {new Date(article.date).toLocaleDateString()}
            </Typography>
          </Box>
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteClick?.();
            }}
            sx={{ color: isFavorite ? jetsnackColorPalette.brand : jetsnackColorPalette.border }}
          >
            <Heart size={20} fill={isFavorite ? jetsnackColorPalette.brand : 'none'} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ArticleCard;
