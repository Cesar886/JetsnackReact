import { useState } from 'react';
import { Box, CircularProgress, TextField, ButtonGroup, Button, Container, Typography, Grid, Card, Avatar } from '@mui/material';
import { Star, TrendingUp, Zap, Award } from 'lucide-react';
import AppBar from '../components/AppBar';
import NavigationDrawer from '../components/NavigationDrawer';
import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../hooks/useArticles';
import { useAppContext } from '../context/useAppContext';
import { categories } from '../data/articles';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const {
    articles,
    selectedCategory,
    searchQuery,
    isLoading,
    updateCategory,
    updateSearchQuery,
  } = useArticles();
  const { favorites, toggleFavorite } = useAppContext();

  const handleNavigate = (path) => {
    console.log('Navegando a:', path);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: jetsnackGradients.surfaceGradient }}>
      <AppBar
        onMenuClick={() => setDrawerOpen(true)}
        title="Jetsnack"
      />
      <NavigationDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onNavigate={handleNavigate}
      />

      <Box sx={{ flex: 1, pb: 10 }}>
        {/* Hero Section con Estadísticas */}
        <Box
          sx={{
            background: jetsnackGradients.brandGradient,
            color: 'white',
            py: { xs: 3, sm: 4, md: 5 },
            px: { xs: 2, sm: 3 },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              pointerEvents: 'none',
            }
          }}
        >
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>
              ¡Bienvenido a Jetsnack!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.95, fontSize: '1.05rem' }}>
              Descubre nuestro blog con historias de nuestros mejores snacks premium
            </Typography>
            
            {/* Stats Row */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1.5 }}>
                  <TrendingUp size={28} style={{ marginBottom: '8px' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>500+</Typography>
                  <Typography variant="caption">Artículos</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1.5 }}>
                  <Star size={28} style={{ marginBottom: '8px' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>4.9★</Typography>
                  <Typography variant="caption">Calificación</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1.5 }}>
                  <Award size={28} style={{ marginBottom: '8px' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>50K+</Typography>
                  <Typography variant="caption">Clientes</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ p: 1.5 }}>
                  <Zap size={28} style={{ marginBottom: '8px' }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>24/7</Typography>
                  <Typography variant="caption">Disponible</Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Barra de búsqueda mejorada */}
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              placeholder="🔍 Buscar artículos..."
              value={searchQuery}
              onChange={(e) => updateSearchQuery(e.target.value)}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                  background: 'white',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(14, 165, 233, 0.1)',
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.15)',
                  },
                  '&.Mui-focused': {
                    boxShadow: '0 12px 35px rgba(14, 165, 233, 0.2)',
                  }
                }
              }}
            />
          </Box>

          {/* Filtros por categoría mejorados */}
          <Box sx={{ marginBottom: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              📁 Categorías
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => updateCategory(category)}
                  variant={selectedCategory === category ? 'contained' : 'outlined'}
                  sx={{
                    borderRadius: '12px',
                    borderWidth: '2px',
                    fontWeight: 700,
                    px: 2.5,
                    py: 1,
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    backgroundColor:
                      selectedCategory === category ? jetsnackColorPalette.brand : 'white',
                    color:
                      selectedCategory === category ? 'white' : jetsnackColorPalette.brand,
                    borderColor: jetsnackColorPalette.brand,
                    boxShadow: selectedCategory === category ? `0 8px 20px rgba(14, 165, 233, 0.3)` : 'none',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 10px 25px rgba(14, 165, 233, 0.2)`,
                      backgroundColor:
                        selectedCategory === category
                          ? jetsnackColorPalette.brand80
                          : jetsnackColorPalette.brandLight,
                    },
                  }}
                >
                  {category}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Sección de testimonios */}
          <Box sx={{ mb: 5, p: 3, background: 'linear-gradient(135deg, #F0F9FE 0%, #E0F2FE 100%)', borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 2, color: jetsnackColorPalette.textPrimary }}>
              💬 Lo que dicen nuestros clientes
            </Typography>
            <Grid container spacing={2}>
              {[
                { name: 'María López', text: '¡Los mejores snacks que he probado!' },
                { name: 'Carlos García', text: 'Calidad premium, entrega rápida.' },
                { name: 'Ana Rodríguez', text: '100% recomendado, muy sabrosos.' },
              ].map((testimonial, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card sx={{
                    p: 2,
                    background: 'white',
                    border: '1px solid rgba(14, 165, 233, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(14, 165, 233, 0.15)',
                    }
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: jetsnackColorPalette.textSecondary, mb: 1 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: jetsnackColorPalette.brand }}>
                      - {testimonial.name}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Lista de artículos */}
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, color: jetsnackColorPalette.textPrimary }}>
              📰 Últimos Artículos
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2.5,
              }}
            >
              {articles.map((article, index) => (
                <Box key={article.id} sx={{ animation: `slideInUp 0.6s ease-out ${index * 0.1}s both` }}>
                  <ArticleCard
                    article={article}
                    isFavorite={favorites.includes(article.id)}
                    onFavoriteClick={() => toggleFavorite(article.id)}
                    onClick={() => console.log('Ver artículo:', article.id)}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
