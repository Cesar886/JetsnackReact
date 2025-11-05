import React, { useRef } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import SnackCard from './SnackCard';
import { jetsnackColorPalette } from '../../theme/JetsnackTheme';

export function SnackCollection({
  collection,
  onSnackClick,
  onFavoriteClick,
  favorites = [],
}) {
  const scrollRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const isHighlight = collection.type === 'Highlight';

  return (
    <Box sx={{ mb: 3, width: '100%', position: 'relative' }}>
      {/* Contenedor principal con scroll mejorado */}
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          gap: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
          overflowX: 'auto',
          pb: 2,
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain',
          
          // Mejora visual del scroll en navegadores WebKit
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: '10px',
            margin: '0 8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: jetsnackColorPalette.brand,
            borderRadius: '10px',
            boxShadow: `0 0 6px rgba(255, 87, 34, 0.2)`,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: jetsnackColorPalette.brand80,
              boxShadow: `0 0 12px rgba(255, 87, 34, 0.4)`,
            },
          },

          // Firefox
          scrollbarColor: `${jetsnackColorPalette.brand} rgba(0, 0, 0, 0.05)`,
          scrollbarWidth: 'thin',
        }}
      >
        {/* Contenedor con padding para ver todas las tarjetas */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
            pr: { xs: 1.5, sm: 2, md: 0 },
            pl: 0,
            flexWrap: 'nowrap',
          }}
        >
          {collection.snacks.map((snack) => (
            <Box 
              key={snack.id} 
              sx={{ 
                flexShrink: 0,
                width: isMobile ? 'calc(100vw - 48px)' : isTablet ? 'calc(50vw - 24px)' : { xs: 'auto', sm: 'auto', md: '180px', lg: '200px' },
                minWidth: { xs: '160px', sm: '140px', md: '180px', lg: '200px' },
                maxWidth: { xs: '100vw', sm: 'none' },
              }}
            >
              <SnackCard
                snack={snack}
                isFavorite={favorites.includes(snack.id)}
                onFavoriteClick={onFavoriteClick}
                onClick={onSnackClick}
                variant={isHighlight ? 'highlight' : 'default'}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Fade effect en los extremos para indicar scroll */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40px',
          height: '100%',
          background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          pointerEvents: 'none',
          borderRadius: '0 20px 20px 0',
          display: { xs: 'block', md: 'none' },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40px',
          height: '100%',
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
          pointerEvents: 'none',
          borderRadius: '20px 0 0 20px',
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>
  );
}

export default SnackCollection;
