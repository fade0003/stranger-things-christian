# Upside Down Faith - 80s Retro Christian Website

A welcoming React.js website for seeking Christians with an 80s retro Stranger Things theme, featuring interactive mouse-responsive textures, content management, and subscription system.

## Features

- 🎮 **80s Retro Stranger Things Theme** - Neon colors, glitch effects, and CRT screen aesthetics
- ✝️ **Christian-Friendly Content** - Welcoming space for faith exploration and resources
- 🖱️ **Interactive Mouse Effects** - Particle systems, mouse trails, and responsive textures
- 📝 **Content Management** - Add links, videos, and blog posts through the interface
- 📧 **Subscription System** - Email capture for community updates and devotionals
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Dependencies

- React 18 with TypeScript
- Styled Components for styling
- Framer Motion for animations
- React Router for navigation
- Additional UI libraries for interactive effects

## Project Structure

```
src/
├── components/
│   ├── InteractiveBackground.tsx  # Mouse-responsive particle effects
│   ├── Navigation.tsx              # Retro-styled navigation
│   ├── Hero.tsx                    # Landing section with glitch effects
│   ├── ContentSection.tsx          # Dynamic content management
│   └── SubscriptionForm.tsx       # Email subscription system
├── App.tsx                         # Main application
├── index.tsx                       # Entry point
└── index.css                       # Global styles and animations
```

## Features Overview

### Interactive Background
- Particle system that responds to mouse movement
- Dynamic grid overlay with animation
- Mouse trail effects with neon colors
- Floating religious symbols

### Content Sections
- **Resources & Links** - Curated Christian resources
- **Video Content** - Faith-based videos and teachings
- **Blog Posts** - Personal stories and devotionals
- Each section includes modal forms for adding new content

### Subscription System
- Email validation and submission
- Animated success/error states
- Integration ready for email service providers
- Retro-styled form with hover effects

### Visual Effects
- Glitch text animations
- Neon glow effects
- CRT screen simulation
- Scanline effects
- 80s color palette (red, cyan, magenta)

## Customization

### Colors
The theme uses CSS custom properties that can be modified in `index.css`:
```css
:root {
  --primary-red: #ff0000;
  --neon-blue: #00ffff;
  --neon-pink: #ff1493;
  --dark-bg: #0a0a0a;
  --light-text: #ffffff;
}
```

### Fonts
- **Press Start 2P** - Retro gaming font for headers
- **Kalam** - Handwritten-style font for body text

### Content Management
Currently uses local state for content. To persist data:
1. Connect to a backend API
2. Implement database storage
3. Add authentication for content management

## Deployment

### Netlify
```bash
npm run build
# Deploy the build/ folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the build/ folder to Vercel
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers with CSS Grid and Flexbox support
- JavaScript must be enabled for interactive features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

---

**Built with ❤️ for the seeking Christian community**
