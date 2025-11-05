import { Box, Typography, Button, Container, Card, CardContent } from '@mui/material';
import { Check } from 'lucide-react';
import { useState, useCallback } from 'react';
import { categories } from '../data/articles';
import { jetsnackColorPalette } from '../theme/JetsnackTheme';

export function Interests() {
  const [selectedInterests, setSelectedInterests] = useState(new Set(categories));

  const toggleInterest = useCallback((category) => {
    setSelectedInterests((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  }, []);

  const handleSave = () => {
    console.log('Intereses guardados:', Array.from(selectedInterests));
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: jetsnackColorPalette.textPrimary }}>
        Selecciona tus intereses
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
        Estos intereses personalizarán tu experiencia en Jetsnack
      </Typography>

      {/* Grid de intereses */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}>
        {categories.map((category) => (
          <Card
            key={category}
            onClick={() => toggleInterest(category)}
            sx={{
              cursor: 'pointer',
              backgroundColor: selectedInterests.has(category)
                ? jetsnackColorPalette.brand
                : jetsnackColorPalette.surface3,
              transition: 'all 0.2s',
              borderRadius: '12px',
              border: `2px solid ${selectedInterests.has(category) ? jetsnackColorPalette.brand : jetsnackColorPalette.border}`,
              '&:hover': {
                boxShadow: `0 8px 16px ${jetsnackColorPalette.shadowMedium}`,
                transform: 'translateY(-2px)',
              },
            }}
          >
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  border: `2px solid ${selectedInterests.has(category) ? '#fff' : jetsnackColorPalette.border}`,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedInterests.has(category)
                    ? jetsnackColorPalette.brand
                    : 'transparent',
                }}
              >
                {selectedInterests.has(category) && (
                  <Check size={16} color="white" />
                )}
              </Box>
              <Typography
                sx={{
                  color: selectedInterests.has(category) ? 'white' : jetsnackColorPalette.textPrimary,
                  fontWeight: selectedInterests.has(category) ? 'bold' : 'normal',
                }}
              >
                {category}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Botón de guardar */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleSave}
        sx={{
          backgroundColor: jetsnackColorPalette.brand,
          color: 'white',
          padding: '12px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: jetsnackColorPalette.brand80,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 16px ${jetsnackColorPalette.shadowMedium}`,
          },
        }}
      >
        Guardar Intereses
      </Button>
    </Container>
  );
}

export default Interests;
