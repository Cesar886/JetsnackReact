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
  LinearProgress,
  Chip,
  Grid,
  Badge,
} from '@mui/material';
import { Trash2, Plus, Minus, ShoppingBag, Truck, Lock, Tag } from 'lucide-react';
import { useAppContext } from '../context/useAppContext';
import JetsnackButton from '../components/common/JetsnackButton';
import { jetsnackColorPalette, jetsnackGradients } from '../theme/JetsnackTheme';

export function Cart() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { cart, removeFromCart } = useAppContext();

  const subtotal = cart.reduce((sum, item) => sum + item.snack.price * item.quantity, 0);
  const shipping = subtotal > 50 * 100 ? 0 : 5 * 100;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + shipping + tax;
  const progress = Math.min((subtotal / (50 * 100)) * 100, 100);

  if (cart.length === 0) {
    return (
      <Box sx={{ pb: 10, background: jetsnackGradients.surfaceGradient, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', px: 2 }}>
        {/* Icono */}
        <Box
          sx={{
            width: { xs: 100, sm: 150 },
            height: { xs: 100, sm: 150 },
            background: jetsnackGradients.brandGradient,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: { xs: '3rem', sm: '4rem' },
            mb: 3,
            boxShadow: '0 12px 32px rgba(255, 87, 34, 0.15)',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          🛒
        </Box>

        {/* Título */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            color: jetsnackColorPalette.textPrimary,
            mb: 1.5,
          }}
        >
          Carrito vacío
        </Typography>

        {/* Mensaje */}
        <Typography
          variant="body1"
          sx={{
            color: jetsnackColorPalette.textSecondary,
            maxWidth: '400px',
            mb: 3,
            fontSize: '1.05rem',
          }}
        >
          ¿Aún no has agregado snacks a tu carrito? ¡Exploralos ahora!
        </Typography>

        {/* Botón */}
        <Button
          variant="contained"
          onClick={() => window.location.href = '/'}
          startIcon={<ShoppingBag size={20} />}
          sx={{
            background: jetsnackGradients.brandGradient,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 700,
            boxShadow: '0 8px 20px rgba(255, 87, 34, 0.25)',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 32px rgba(255, 87, 34, 0.35)',
            },
          }}
        >
          Explorar Snacks
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 10, background: jetsnackGradients.surfaceGradient, minHeight: '100vh' }}>
      {/* Header Mejorado */}
      <Box
        sx={{
          background: jetsnackGradients.brandGradient,
          color: 'white',
          p: { xs: 2.5, sm: 3.5, md: 4.5 },
          mb: 4,
          boxShadow: '0 8px 32px rgba(255, 87, 34, 0.15)',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShoppingBag size={28} />
            </Box>
            <div>
              <Typography variant={isMobile ? 'h5' : 'h4'} sx={{ fontWeight: 900, mb: 0 }}>
                Tu Carrito
              </Typography>
            </div>
          </Box>
          <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
            {cart.length} artículo{cart.length !== 1 ? 's' : ''} en el carrito
          </Typography>

          {/* Barra de progreso para envío gratis */}
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, alignItems: 'center' }}>
              <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 700 }}>
                🚚 {subtotal >= 50 * 100 ? '¡Envío Gratis Desbloqueado!' : `Falta $${((50 * 100 - subtotal) / 100).toFixed(2)} para envío gratis`}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.9, fontWeight: 700 }}>
                {progress.toFixed(0)}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: '8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '& .MuiLinearProgress-bar': {
                  background: 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)',
                  borderRadius: '4px',
                },
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Items del carrito */}
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {cart.map((item, index) => (
                <Card
                  key={item.snack.id}
                  sx={{
                    p: { xs: 1.5, sm: 2.5 },
                    display: 'flex',
                    gap: { xs: 1.5, sm: 2.5 },
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    animation: `slideInUp 0.5s ease-out ${index * 0.1}s both`,
                    '&:hover': {
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  {/* Imagen */}
                  <Box
                    component="img"
                    src={item.snack.imageUrl}
                    alt={item.snack.name}
                    sx={{
                      width: { xs: 90, sm: 140 },
                      height: { xs: 90, sm: 140 },
                      objectFit: 'cover',
                      borderRadius: '14px',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  />

                  {/* Contenido */}
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                        <Typography 
                          variant={isMobile ? 'body2' : 'body1'} 
                          sx={{ fontWeight: 800, mb: 0.5, color: jetsnackColorPalette.textPrimary }}
                        >
                          {item.snack.name}
                        </Typography>
                        {item.snack.isPremium && (
                          <Chip
                            label="Premium"
                            size="small"
                            sx={{
                              background: jetsnackGradients.brandGradient,
                              color: 'white',
                              fontWeight: 700,
                              height: 'auto',
                              fontSize: '0.7rem',
                            }}
                          />
                        )}
                      </Box>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: jetsnackColorPalette.textTertiary,
                          display: 'block',
                          mb: 1,
                          fontWeight: 600,
                        }}
                      >
                        ${(item.snack.price / 100).toFixed(2)} c/u
                      </Typography>
                    </Box>

                    {/* Controles */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <IconButton size="small" disabled sx={{ opacity: 0.5 }}>
                        <Minus size={16} />
                      </IconButton>
                      <Box 
                        sx={{ 
                          fontWeight: 800, 
                          minWidth: '40px', 
                          textAlign: 'center',
                          px: 1.5,
                          py: 0.75,
                          backgroundColor: jetsnackColorPalette.surface2,
                          borderRadius: '8px',
                          color: jetsnackColorPalette.textPrimary,
                        }}
                      >
                        {item.quantity}
                      </Box>
                      <IconButton size="small" disabled sx={{ opacity: 0.5 }}>
                        <Plus size={16} />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Precio y eliminar */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', gap: 2 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 900,
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
                        color: jetsnackColorPalette.error,
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(239, 68, 68, 0.15)',
                          transform: 'scale(1.1)',
                        },
                      }}
                    >
                      <Trash2 size={18} />
                    </IconButton>
                  </Box>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Resumen (sticky en desktop) */}
          <Grid item xs={12} md={4}>
            <Box sx={{ height: 'fit-content', position: { md: 'sticky' }, top: 100 }}>
              <Card
                sx={{
                  p: 3,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%)',
                  border: `1px solid ${jetsnackColorPalette.border}`,
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 900, mb: 2.5, color: jetsnackColorPalette.textPrimary }}>
                  Resumen del Pedido
                </Typography>

                {/* Detalles */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
                      Subtotal ({cart.length} item{cart.length !== 1 ? 's' : ''}):
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      ${(subtotal / 100).toFixed(2)}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Truck size={16} color={jetsnackColorPalette.success} />
                      <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
                        Envío:
                      </Typography>
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 700, 
                        color: shipping === 0 ? jetsnackColorPalette.success : jetsnackColorPalette.textPrimary 
                      }}
                    >
                      {shipping === 0 ? '¡Gratis!' : `$${(shipping / 100).toFixed(2)}`}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 600 }}>
                      Impuesto (10%):
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      ${(tax / 100).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Total */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography sx={{ fontWeight: 900, fontSize: '1.1rem', color: jetsnackColorPalette.textPrimary }}>
                    Total:
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontWeight: 900, 
                      fontSize: '1.5rem',
                      background: jetsnackGradients.brandGradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ${(total / 100).toFixed(2)}
                  </Typography>
                </Box>

                {/* Botón de pago */}
                <JetsnackButton fullWidth sx={{ mb: 2, py: 1.5 }}>
                  <Lock size={18} style={{ marginRight: '8px' }} />
                  Proceder al Pago Seguro
                </JetsnackButton>

                {/* Beneficios */}
                <Box sx={{ 
                  p: 2, 
                  background: jetsnackColorPalette.brandLight, 
                  borderRadius: '12px',
                  border: `1px solid ${jetsnackColorPalette.brand}20`,
                }}>
                  <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                    <Tag size={18} color={jetsnackColorPalette.brand} />
                    <div>
                      <Typography variant="caption" sx={{ fontWeight: 900, color: jetsnackColorPalette.brand }}>
                        Obtén 10% de recompensas
                      </Typography>
                      <Typography variant="caption" sx={{ color: jetsnackColorPalette.textSecondary, display: 'block' }}>
                        En tu próxima compra
                      </Typography>
                    </div>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Cart;
