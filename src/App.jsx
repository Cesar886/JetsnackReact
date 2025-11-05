import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Box } from '@mui/material';
import { jetsnackTheme } from './theme/JetsnackTheme';
import { AppProvider } from './context/AppContext';
import Feed from './pages/Feed';
import SnackDetail from './pages/SnackDetail';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import JetsnackBottomBar from './components/navigation/JetsnackBottomBar';
import './App.css';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [favorites, setFavorites] = useState([]);
  const [currentTab, setCurrentTab] = useState(() => {
    const path = location.pathname;
    if (path.includes('/snack/')) return 'home';
    if (path === '/search') return 'search';
    if (path === '/cart') return 'cart';
    if (path === '/profile') return 'profile';
    return 'home';
  });

  const handleSnackClick = (snackId) => {
    navigate(`/snack/${snackId}`);
  };

  const handleFavoriteClick = (snackId) => {
    setFavorites((prev) =>
      prev.includes(snackId)
        ? prev.filter((id) => id !== snackId)
        : [...prev, snackId]
    );
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    switch (tab) {
      case 'home':
        navigate('/');
        break;
      case 'search':
        navigate('/search');
        break;
      case 'cart':
        navigate('/cart');
        break;
      case 'profile':
        navigate('/profile');
        break;
      default:
        navigate('/');
    }
  };

  // Hide BottomBar on detail page
  const isDetailPage = location.pathname.includes('/snack/');

  return (
    <Box sx={{ pb: isDetailPage ? 0 : 7 }}>
      <Routes>
        <Route
          path="/"
          element={
            <Feed
              onSnackClick={handleSnackClick}
              favorites={favorites}
              onFavoriteClick={handleFavoriteClick}
            />
          }
        />
        <Route path="/snack/:id" element={<SnackDetail />} />
        <Route
          path="/search"
          element={
            <Search
              onSnackClick={handleSnackClick}
              favorites={favorites}
              onFavoriteClick={handleFavoriteClick}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {!isDetailPage && (
        <JetsnackBottomBar value={currentTab} onChange={handleTabChange} />
      )}
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={jetsnackTheme}>
      <CssBaseline />
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
