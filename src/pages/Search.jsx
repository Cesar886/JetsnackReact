import { useState, useMemo } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Chip,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Search as SearchIcon, X } from 'lucide-react';
import { useSnackRepository } from '../hooks/useSnackRepository';
import SnackCard from '../components/snacks/SnackCard';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Search({ onSnackClick, favorites = [], onFavoriteClick }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { getSnacks } = useSnackRepository();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const allSnacks = useMemo(() => {
    return getSnacks().flatMap((col) => col.snacks);
  }, [getSnacks]);

  const filteredSnacks = useMemo(() => {
    return allSnacks.filter((snack) => {
      const matchesQuery =
        snack.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        snack.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || snack.tags.has(selectedCategory);
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allSnacks]);

  const categories = Array.from(
    new Set(allSnacks.flatMap((snack) => Array.from(snack.tags)))
  );

  return (
    <Box sx={{ pb: 10, background: jetsnackGradients.surfaceGradient, minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ background: jetsnackGradients.brandGradient, color: 'white', p: { xs: 2, sm: 3 }, mb: 4 }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 800, mb: 2 }}>
            🔍 Buscar Snacks
          </Typography>

          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="Busca tus snacks favoritos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            InputProps={{
              startAdornment: <SearchIcon size={20} style={{ marginRight: 12, color: jetsnackColorPalette.textTertiary }} />,
              endAdornment: searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 4,
                  }}
                >
                  <X size={18} color={jetsnackColorPalette.textTertiary} />
                </button>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                '&:hover fieldset': {
                  borderColor: 'white',
                },
              },
              '& .MuiOutlinedInput-input': {
                color: jetsnackColorPalette.textPrimary,
              },
            }}
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Filtros por categoría */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="caption" 
            sx={{ 
              fontWeight: 800, 
              display: 'block', 
              mb: 1.5,
              color: jetsnackColorPalette.textSecondary,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Categorías
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                color={selectedCategory === category ? 'primary' : 'default'}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                onDelete={
                  selectedCategory === category
                    ? () => setSelectedCategory(null)
                    : undefined
                }
                sx={{
                  fontWeight: 600,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Resultados */}
        {filteredSnacks.length > 0 ? (
          <Box>
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 700, 
                display: 'block', 
                mb: 3,
                color: jetsnackColorPalette.textSecondary,
              }}
            >
              {filteredSnacks.length} resultado{filteredSnacks.length !== 1 ? 's' : ''}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { 
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(5, 1fr)',
                },
                gap: { xs: 1.5, sm: 2, md: 2.5 },
              }}
            >
              {filteredSnacks.map((snack) => (
                <SnackCard
                  key={snack.id}
                  snack={snack}
                  isFavorite={favorites.includes(snack.id)}
                  onFavoriteClick={onFavoriteClick}
                  onClick={onSnackClick}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box 
            sx={{ 
              p: 4,
              textAlign: 'center',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              😕 Sin resultados
            </Typography>
            <Typography color="textSecondary">
              No encontramos snacks que coincidan con "{searchQuery}"
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Search;
