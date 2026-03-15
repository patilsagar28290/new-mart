# 🛍️ New Mart - Professional E-Commerce Product Gallery

A modern, professional e-commerce product gallery built with React 19, TypeScript, and Tailwind CSS. Features a responsive design, advanced filtering, and a polished user experience.

![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC)
![Vite](https://img.shields.io/badge/Vite-8.0.0-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 **Modern UI/UX**
- **Professional Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Mode Ready**: Built with extensible theming
- **Accessibility**: WCAG compliant with proper focus states

### 🛒 **E-Commerce Features**
- **Product Gallery**: Dynamic product display with real-time data
- **Advanced Search**: Search by title and description
- **Category Filtering**: Filter products by category
- **Product Ratings**: Star rating display system
- **Price Display**: Professional pricing with free shipping indicators

### 🚀 **Technical Excellence**
- **React 19**: Latest React with concurrent features
- **TypeScript**: Full type safety and better developer experience
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing for SPA experience

### 📱 **Pages & Components**
- **Home/Product Gallery**: Main product showcase
- **About**: Company information and story
- **Contact**: Professional contact page with social links
- **404 Page**: Custom error page with navigation
- **Header/Navbar**: Professional navigation with branding
- **Footer**: Comprehensive footer with links and contact info

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 8.0.0
- **Styling**: Tailwind CSS 3.4.4
- **Routing**: React Router DOM 7.13.1
- **Icons**: Heroicons (via SVG)
- **API**: FakeStore API (for demo purposes)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/new-mart.git
   cd new-mart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   ├── Navbar/
│   ├── Footer/
│   ├── Product/
│   └── Search/
├── pages/
│   ├── About/
│   ├── Contact/
│   └── NotFound/
├── App.tsx
├── main.tsx
├── index.css
└── App.css
```

## 🎯 Key Components

### App Component
- Hero section with search and category filters
- Product grid with loading and error states
- Responsive design with professional styling

### ProductCard Component
- Product image with loading states
- Star ratings and pricing
- Hover animations and professional styling
- Category badges and free shipping indicators

### Navigation
- Header with branding and navbar
- Responsive navigation menu
- Active link highlighting

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:

```javascript
// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Vite Configuration
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 📊 API Integration

The application integrates with the [FakeStore API](https://fakestoreapi.com/) for product data:

- **Products Endpoint**: `https://fakestoreapi.com/products`
- **Categories**: Automatically extracted from product data
- **Error Handling**: Comprehensive error states and fallbacks

## 🎨 Styling Guidelines

### Color Palette
- **Primary**: Blue gradients (#2563eb to #1d4ed8)
- **Secondary**: Gray tones for text and backgrounds
- **Accent**: Green for success states, Red for errors

### Typography
- **Headings**: Bold, clean sans-serif fonts
- **Body**: Readable font sizes with proper line heights
- **Responsive**: Scales appropriately across devices

### Animations
- **Hover Effects**: Subtle scale and shadow transitions
- **Loading States**: Smooth spinner animations
- **Page Transitions**: Fade-in effects for better UX

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for product data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework
- [Vite](https://vitejs.dev/) for the build tool

## 📞 Contact

**Sagar Patil**
- Email: patilsagar28290@gmail.com
- GitHub: [https://github.com/patilsagar28290](https://github.com/patilsagar28290)
- LinkedIn: [https://www.linkedin.com/in/sagar-patil-a709ba1b](https://www.linkedin.com/in/sagar-patil-a709ba1b)

---

**Made with ❤️ by Sagar Patil**
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
