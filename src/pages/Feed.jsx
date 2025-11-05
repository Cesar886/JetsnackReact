import { useState, useCallback } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  useMediaQuery,
  useTheme,
  Container,
} from '@mui/material';
import { ChevronRight } from 'lucide-react';
import { useSnackRepository } from '../hooks/useSnackRepository';
import SnackCollection from '../components/snacks/SnackCollection';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Feed({ onSnackClick, favorites = [], onFavoriteClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { getSnacks, getFilters } = useSnackRepository();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [favorites_, setFavorites] = useState(favorites);

  const snackCollections = getSnacks();
  const allFilters = getFilters();

  const handleFilterClick = useCallback((filterId) => {
    setSelectedFilter(selectedFilter === filterId ? null : filterId);
  }, [selectedFilter]);

  const handleFavoriteClick = useCallback((snackId) => {
    setFavorites((prev) =>
      prev.includes(snackId)
        ? prev.filter((id) => id !== snackId)
        : [...prev, snackId]
    );
    onFavoriteClick?.(snackId);
  }, [onFavoriteClick]);

  return (
    <Box sx={{ pb: { xs: 8, sm: 10, md: 12 }, background: jetsnackGradients.surfaceGradient, minHeight: '100vh' }}>
      {/* Hero Section Mejorado */}
      <Box
        sx={{
          background: jetsnackGradients.brandGradient,
          color: 'white',
          p: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem' },
          mb: { xs: 2, sm: 3, md: 4 },
          position: 'relative',
          overflow: 'hidden',
          borderRadius: { xs: 0, sm: 0, md: '24px' },
          mx: { xs: 0, md: 2 },
          mt: { xs: 0, md: 2 },
          boxShadow: { md: '0 20px 50px rgba(14, 165, 233, 0.2)' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: 'min(500px, 60vw)',
            height: 'min(500px, 60vw)',
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-40%',
            left: '-5%',
            width: 'min(400px, 50vw)',
            height: 'min(400px, 50vw)',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 1.5, sm: 2 } }}>
          <Box sx={{ animation: 'slideInUp 0.8s ease-out' }}>
            <Typography 
              variant="h2"
              sx={{ 
                fontWeight: 900,
                mb: 1,
                letterSpacing: '-0.02em',
                fontSize: { xs: 'clamp(1.5rem, 7vw, 2.5rem)', sm: 'clamp(2rem, 6vw, 3rem)' },
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              }}
            >
              🍿 {isMobile ? 'Jetsnack' : 'Descubre Jetsnack'}
            </Typography>
            <Typography 
              variant={isMobile ? 'body2' : 'body1'}
              sx={{ 
                opacity: 0.98,
                maxWidth: '100%',
                lineHeight: 1.7,
                fontSize: { xs: 'clamp(0.9rem, 2.5vw, 1.05rem)', sm: '1.1rem' },
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              {isMobile 
                ? '🎉 Snacks Premium Seleccionados' 
                : '✨ Los mejores snacks artesanales con ingredientes 100% naturales. Variedad, calidad y sabor extraordinario en cada mordida.'}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 1.5, md: 2, lg: 3 } }}>
        {/* Sección de Filtros Mejorada */}
        <Box sx={{ mb: { xs: 2.5, sm: 3, md: 4 }, animation: 'slideInUp 1s ease-out 0.2s both' }}>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mb: 1.5,
              fontWeight: 900,
              color: jetsnackColorPalette.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: { xs: 'clamp(0.65rem, 1.8vw, 0.8rem)', sm: '0.85rem' },
            }}
          >
            🔍 Filtra por Categoría
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 0.8, sm: 1.2, md: 1.5 },
              mb: { xs: 2.5, sm: 3, md: 4 },
            }}
          >
            {allFilters.map((filter) => (
              <Button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                variant={selectedFilter === filter.id ? 'contained' : 'outlined'}
                size={isMobile ? 'small' : 'medium'}
                sx={{
                  borderRadius: '12px',
                  borderWidth: '2px',
                  fontSize: { xs: 'clamp(0.75rem, 1.8vw, 0.9rem)', sm: '0.9rem' },
                  fontWeight: 700,
                  px: { xs: 1.2, sm: 2.5, md: 3 },
                  py: { xs: 0.6, sm: 0.9, md: 1.1 },
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  backgroundColor:
                    selectedFilter === filter.id
                      ? jetsnackColorPalette.brand
                      : 'transparent',
                  color:
                    selectedFilter === filter.id
                      ? 'white'
                      : jetsnackColorPalette.brand,
                  borderColor: jetsnackColorPalette.brand,
                  boxShadow: selectedFilter === filter.id ? `0 8px 20px rgba(14, 165, 233, 0.3)` : 'none',
                  '&:hover': {
                    backgroundColor:
                      selectedFilter === filter.id
                        ? jetsnackColorPalette.brand80
                        : jetsnackColorPalette.brandLight,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 12px 24px rgba(14, 165, 233, 0.2)`,
                  },
                  '&:active': {
                    transform: 'scale(0.98)',
                  }
                }}
              >
                {filter.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Colecciones de Snacks */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, sm: 6, md: 7 } }}>
          {snackCollections.map((collection, index) => (
            <Box key={collection.id} sx={{ animation: `slideInUp 0.8s ease-out ${0.3 + index * 0.1}s both` }}>
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: { xs: 2.5, sm: 3, md: 3.5 },
                  gap: 2,
                  pb: { xs: 1.5, sm: 2 },
                  borderBottom: `2px solid rgba(14, 165, 233, 0.1)`,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: jetsnackColorPalette.textPrimary,
                    fontSize: { xs: 'clamp(1.15rem, 4vw, 1.75rem)', sm: '1.5rem' },
                    flex: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    background: jetsnackGradients.brandGradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: 'none',
                  }}
                >
                  {collection.description}
                </Typography>
                <Box sx={{
                  background: jetsnackGradients.brandGradient,
                  p: 1,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 8px 20px rgba(14, 165, 233, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(90deg) scale(1.1)',
                    boxShadow: '0 12px 30px rgba(14, 165, 233, 0.3)',
                  }
                }}>
                  <ChevronRight 
                    size={24} 
                    color="white"
                    style={{ cursor: 'pointer' }}
                  />
                </Box>
              </Box>

              <SnackCollection
                collection={collection}
                onSnackClick={onSnackClick}
                onFavoriteClick={handleFavoriteClick}
                favorites={favorites_}
              />

              {index < snackCollections.length - 1 && (
                <Box
                  sx={{
                    height: 2,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(14, 165, 233, 0.1) 50%, transparent 100%)',
                    my: { xs: 4, sm: 5, md: 6 },
                    borderRadius: '2px',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Feed;
