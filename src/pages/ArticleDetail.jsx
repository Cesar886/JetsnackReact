import { Box, Typography, Button, Container, CardMedia } from '@mui/material';
import { ArrowLeft, Heart } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { jetsnackColorPalette } from '../theme/JetsnackTheme';

export function ArticleDetail({ articleId, onBack }) {
  const { favorites, toggleFavorite } = useAppContext();

  // En una aplicación real, obtendrías el artículo de los parámetros de la URL
  const article = {
    id: articleId,
    title: 'Jetpack Compose Basics',
    category: 'Jetpack Compose',
    author: 'María García',
    date: '2025-11-01',
    description: 'Introducción a los componentes fundamentales de Jetpack Compose.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    content: `
      Jetpack Compose es un kit de herramientas de interfaz de usuario moderno de Android.
      Simplifica y acelera el desarrollo de la interfaz de usuario en Android con menos código,
      herramientas poderosas y capacidades intuitivas de Kotlin.

      Ventajas principales:
      - Menos código
      - Herramientas poderosas
      - Desarrollo más rápido
      - Mejor experiencia de desarrollo
    `,
  };

  const isFavorite = favorites.includes(article.id);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Botón de regreso */}
      <Button
        startIcon={<ArrowLeft size={20} />}
        onClick={onBack}
        sx={{ mb: 2, color: jetsnackColorPalette.brand }}
      >
        Volver
      </Button>

      {/* Imagen del artículo */}
      <CardMedia
        component="img"
        image={article.image}
        alt={article.title}
        sx={{ width: '100%', maxHeight: 400, objectFit: 'cover', borderRadius: 2, mb: 3 }}
      />

      {/* Encabezado */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: jetsnackColorPalette.brand, fontWeight: 'bold', display: 'block', mb: 1, textTransform: 'uppercase' }}
          >
            {article.category}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1, color: jetsnackColorPalette.textPrimary }}>
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Por {article.author} • {new Date(article.date).toLocaleDateString()}
          </Typography>
        </Box>

        {/* Botón de favorito */}
        <Button
          onClick={() => toggleFavorite(article.id)}
          sx={{
            color: isFavorite ? jetsnackColorPalette.brand : jetsnackColorPalette.border,
          }}
        >
          <Heart size={28} fill={isFavorite ? jetsnackColorPalette.brand : 'none'} />
        </Button>
      </Box>

      {/* Contenido del artículo */}
      <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-wrap', color: jetsnackColorPalette.textSecondary }}>
        {article.content}
      </Typography>
    </Container>
  );
}

export default ArticleDetail;
