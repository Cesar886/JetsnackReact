# 🍰 Jetsnack React - Premium Desserts E-Commerce Application

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react) ![Material-UI](https://img.shields.io/badge/Material--UI-7.3.5-007FFF?logo=mui) ![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite) ![License](https://img.shields.io/badge/License-MIT-green)

**Jetsnack** is a modern e-commerce web application specialized in selling premium desserts and snacks. Built with React 19, Material-UI, and Vite, it offers a smooth, responsive, and visually attractive user experience.

## ✨ Key Features

### 🛍️ Core Functionalities
- **Product Catalog**: Intuitive exploration of desserts and snacks with advanced filters
- **Smart Search**: Real-time search system with autocomplete
- **Shopping Cart**: Complete cart management with state persistence
- **Favorites System**: Mark favorite products for quick access
- **Product Details**: Detailed views with image galleries and specifications
- **User Profile**: User information management and preferences
- **Ratings System**: Customer scoring and reviews

### 🎨 Design & UX
- **Responsive Interface**: Optimized for mobile, tablet, and desktop devices
- **Premium Theme**: Modern color palette with sophisticated gradients
- **Smooth Animations**: Professional transitions and visual effects
- **Bottom Bar Navigation**: Floating navigation bar with modern mobile style
- **Light/Dark Mode**: Theme support ready for expansion

### 🚀 Performance
- **Vite Build Tool**: Lightning-fast compilation and optimized development
- **React 19**: Latest rendering system and advanced hooks
- **Lazy Loading**: Deferred loading of components and routes
- **Modular Code**: Scalable and maintainable architecture

## 📋 Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm)
- **Modern Browser**: Chrome, Firefox, Safari, Edge

## 🚀 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/Cesar886/JetsnackReact.git
cd JetsnackReact
```

### 2. Install Dependencies
```bash
npm install
# or with yarn
yarn install
```

### 3. Run Development Server
```bash
npm run dev
# or with yarn
yarn dev
```

Application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
# or with yarn
yarn build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
JetsnackReact/
├── src/
│   ├── assets/               # Static resources (images, icons)
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── EmptyState.jsx
│   │   │   ├── JetsnackButton.jsx
│   │   │   ├── JetsnackSurface.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   └── NotificationPopup.jsx
│   │   ├── navigation/       # Navigation components
│   │   │   └── JetsnackBottomBar.jsx
│   │   ├── snacks/           # Product-specific components
│   │   │   ├── SnackCard.jsx
│   │   │   └── SnackCollection.jsx
│   │   ├── AppBar.jsx
│   │   ├── ArticleCard.jsx
│   │   └── NavigationDrawer.jsx
│   ├── context/
│   │   ├── AppContext.jsx    # Global application context
│   │   ├── AppContextProvider.js
│   │   └── useAppContext.js
│   ├── data/
│   │   ├── articles.js       # Blog/article data
│   │   ├── models.js         # Data models
│   │   └── snacks.js         # Snacks catalog
│   ├── hooks/
│   │   ├── useArticles.js
│   │   └── useSnackRepository.js
│   ├── pages/
│   │   ├── ArticleDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Feed.jsx
│   │   ├── Home.jsx
│   │   ├── Interests.jsx
│   │   ├── NotFound.jsx
│   │   ├── Profile.jsx
│   │   ├── Search.jsx
│   │   └── SnackDetail.jsx
│   ├── styles/
│   │   └── responsive.css
│   ├── theme/
│   │   └── JetsnackTheme.js  # Custom Material-UI theme
│   ├── App.jsx               # Root component
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/                   # Static public files
├── package.json
├── vite.config.js
├── eslint.config.js
└── index.html
```

## 🎨 Color Palette

### Primary Colors
- **Brand (Coral Orange)**: `#FF5722` - Premium primary color
- **Accent (Cyan)**: `#00BCD4` - Vibrant secondary color
- **Tertiary (Purple)**: `#9C27B0` - Elegant accents
- **Quaternary (Deep Blue)**: `#1A237E` - Serious elements

### States
- **Success (Green)**: `#10B981` - Successful operations
- **Warning (Amber)**: `#F59E0B` - Warnings
- **Error (Red)**: `#EF4444` - Errors
- **Info (Sky Blue)**: `#0EA5E9` - Information

### Surfaces
- **Surface 1-5**: Gray scales for layers and elevation
- **Border**: `#E5E7EB` - Borders and dividers
- **Background**: Smooth gradients

## 🔧 Main Dependencies

### Runtime
```json
{
  "@emotion/react": "^11.14.0",          // CSS-in-JS engine
  "@emotion/styled": "^11.14.1",         // Styled-components with Emotion
  "@mui/material": "^7.3.5",             // Material Design components
  "lucide-react": "^0.552.0",            // High-quality icons
  "react": "^19.1.1",                    // Main React library
  "react-dom": "^19.1.1",                // React DOM rendering
  "react-router-dom": "^7.9.5",          // SPA routing
  "recharts": "^3.3.0"                   // Charts & data visualization
}
```

### DevDependencies
```json
{
  "vite": "^7.1.7",                      // Lightning-fast build tool
  "eslint": "^9.36.0",                   // Code linting
  "@vitejs/plugin-react": "^5.0.4"       // React plugin for Vite
}
```

## 📱 Available Pages

### 🏠 Feed (/)
Homepage with snacks catalog and featured products.
- Thematic collections
- Special discounts
- Related articles

### 🔍 Search (/search)
Advanced search system with filters.
- Search by name and description
- Category filters
- Sort by relevance and price

### 🛒 Cart (/cart)
Complete shopping cart management.
- Product summary
- Total calculations
- Purchase options

### 👤 Profile (/profile)
User information and preferences.
- Personal data
- Purchase history
- Saved payment methods

### 📝 Snack Detail (/snack/:id)
Complete product page.
- Image gallery
- Detailed description
- Ingredients
- Ratings and reviews
- Quantity selector
- Add to cart button

## 🎯 Key Components

### JetsnackButton
Custom button with gradients and premium effects.
```jsx
<JetsnackButton onClick={handleClick}>
  Premium Action
</JetsnackButton>
```

### JetsnackSurface
Container with elevation and premium styles.
```jsx
<JetsnackSurface>
  Elevated Content
</JetsnackSurface>
```

### SnackCard
Product card with hover effects and favorites.
```jsx
<SnackCard
  snack={snack}
  onFavoriteClick={toggleFavorite}
  isFavorite={favorites.includes(snack.id)}
/>
```

### NotificationPopup
Notification system with types (success, error, warning, info).
```jsx
<NotificationPopup
  open={open}
  type="success"
  title="Success!"
  message="Action completed successfully"
/>
```

## 🎨 Custom Animations

The project includes smooth and fluid animations:

- **float**: Continuous floating movement
- **fadeIn**: Soft entrance
- **fadeInScale**: Combined scale + fade
- **slideInDown**: Slide from top
- **slideDown**: Slide down animation
- **starPulse**: Star pulsation
- **shimmer**: Sliding shimmer effect

## 🔗 Routing

```javascript
/                    → Feed (Homepage)
/search              → Product search
/snack/:id           → Product detail
/cart                → Shopping cart
/profile             → User profile
```

## 🌐 Context API & Global State

### AppContext
Manages global application state:
- **cart**: Shopping cart
- **favorites**: Favorites list
- **user**: User information
- **notifications**: Notification system

```jsx
const { cart, favorites, toggleFavorite, addToCart } = useAppContext();
```

## 📊 Custom Hooks

### useSnackRepository
Hook for accessing snacks repository.
```jsx
const { getSnack, getAllSnacks, getRelated } = useSnackRepository();
```

### useArticles
Hook for accessing articles and content.
```jsx
const { getArticles, getArticle } = useArticles();
```

## 🎯 Standout Features

### Responsive Design
- Adapted for screens from 320px to 2560px
- Automatic responsive grid
- Flexible components

### Accessibility
- Semantic HTML tags
- Keyboard navigation support
- Proper color contrast
- ARIA labels where needed

### Performance
- Automatic code splitting
- Route lazy loading
- Image optimization
- Component memoization

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code with ESLint |

## 📦 Build & Deployment

### Create Production Build
```bash
npm run build
```

This generates the `dist/` folder ready for deployment.

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🐛 Troubleshooting

### Port 5173 Already in Use
```bash
# On Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# On Mac/Linux
lsof -i :5173
kill -9 <PID>
```

### Import Path Issues
Ensure import paths are correct:
```jsx
// ✅ Correct
import { jetsnackTheme } from '../../theme/JetsnackTheme';

// ❌ Incorrect
import { jetsnackTheme } from '../theme/JetsnackTheme';
```

## 📚 Useful Resources

- [React 19 Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com)
- [Vite Guide](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

## 👥 Contributors

- **Lead Developer**: Cesar886
- **Design**: Jetsnack Design Team

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 📞 Support & Contact

To report bugs or suggest improvements:
1. Open an [Issue](https://github.com/Cesar886/JetsnackReact/issues)
2. Create a [Pull Request](https://github.com/Cesar886/JetsnackReact/pulls)

## 🎉 Acknowledgments

- Material-UI for quality components
- Lucide-react for beautiful icons
- Vite for incredible development experience
- React community for best practices

---

**Made with ❤️ using React, Material-UI, and Vite**

*Last Updated: November 5, 2025*
