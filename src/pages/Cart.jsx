import { 
  Box, 
  Typography, 
  IconButton, 
  Divider, 
  Button,
  Card,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import JetsnackButton from '../components/common/JetsnackButton';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Cart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { cart, removeFromCart } = useAppContext();

  const total = cart.reduce((sum, item) => sum + item.snack.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Box 
        sx={{ 
          pb: 10, 
          textAlign: 'center', 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: jetsnackGradients.surfaceGradient,
        }}
      >
        <Box 
          sx={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: jetsnackGradients.brandGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ShoppingBag size={50} color="white" />
        </Box>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 800 }}>
          Carrito vacío
        </Typography>
        <Typography color="textSecondary" sx={{ mb: 3, maxWidth: 300 }}>
          Agrega deliciosos snacks a tu carrito para continuar con tu compra
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: jetsnackGradients.brandGradient,
            px: 4,
            py: 1.5,
          }}
          href="/"
        >
          Explorar Snacks
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 10, background: jetsnackGradients.surfaceGradient, minHeight: '100vh' }}>
      {/* Header */}
      <Box
        sx={{
          background: jetsnackGradients.brandGradient,
          color: 'white',
          p: { xs: 2, sm: 3, md: 4 },
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 800, mb: 1 }}>
            🛒 Carrito de Compras
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {cart.length} artículo{cart.length !== 1 ? 's' : ''}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 320px' }, gap: 3 }}>
          {/* Items del carrito */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {cart.map((item) => (
              <Card
                key={item.snack.id}
                sx={{
                  p: 2,
                  display: 'flex',
                  gap: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {/* Imagen */}
                <Box
                  component="img"
                  src={item.snack.imageUrl}
                  alt={item.snack.name}
                  sx={{
                    width: { xs: 80, sm: 120 },
                    height: { xs: 80, sm: 120 },
                    objectFit: 'cover',
                    borderRadius: '12px',
                    flexShrink: 0,
                  }}
                />

                {/* Contenido */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography 
                      variant={isMobile ? 'body2' : 'body1'} 
                      sx={{ fontWeight: 700, mb: 0.5 }}
                    >
                      {item.snack.name}
                    </Typography>
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: jetsnackColorPalette.textTertiary,
                        display: 'block',
                        mb: 1,
                      }}
                    >
                      ${(item.snack.price / 100).toFixed(2)} c/u
                    </Typography>
                  </Box>

                  {/* Controles de cantidad */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton size="small" disabled>
                      <Minus size={16} />
                    </IconButton>
                    <Typography 
                      sx={{ 
                        fontWeight: 700, 
                        minWidth: '24px', 
                        textAlign: 'center',
                        px: 1,
                        py: 0.5,
                        backgroundColor: jetsnackColorPalette.surface2,
                        borderRadius: '6px',
                      }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton size="small" disabled>
                      <Plus size={16} />
                    </IconButton>
                  </Box>
                </Box>

                {/* Precio y botón eliminar */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 800,
                      background: jetsnackGradients.brandGradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ${((item.snack.price * item.quantity) / 100).toFixed(2)}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(item.snack.id)}
                    sx={{ 
                      color: jetsnackColorPalette.brand,
                      '&:hover': {
                        backgroundColor: jetsnackColorPalette.brandLight,
                      },
                    }}
                  >
                    <Trash2 size={18} />
                  </IconButton>
                </Box>
              </Card>
            ))}
          </Box>

          {/* Resumen (sticky en desktop) */}
          <Box sx={{ height: 'fit-content', position: { md: 'sticky' }, top: 80 }}>
            <Card
              sx={{
                p: 3,
                background: jetsnackGradients.surfaceGradient,
                border: `1px solid ${jetsnackColorPalette.border}`,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                Resumen
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2" color="textSecondary">
                  Subtotal:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  ${(total / 100).toFixed(2)}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2" color="textSecondary">
                  Envío:
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 600, color: jetsnackColorPalette.success }}>
                  Gratis
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography sx={{ fontWeight: 800 }}>Total:</Typography>
                <Typography 
                  sx={{ 
                    fontWeight: 800, 
                    fontSize: '1.3rem',
                    background: jetsnackGradients.brandGradient,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ${(total / 100).toFixed(2)}
                </Typography>
              </Box>

              <JetsnackButton fullWidth>
                Proceder al Pago
              </JetsnackButton>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Cart;
