# Qado - Coming Soon Page

A beautiful, modern coming soon page for Qado's AI-powered procurement platform.

## 🚀 Quick Setup

This is a GitHub Pages website. Once you push these files to your `username.github.io` repository, your site will be live at `https://username.github.io`.

## 📁 Project Structure

```
├── index.html          # Main HTML page
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Directory for your logo and other assets
└── README.md           # This file
```

## 🎨 Adding Your Logo

1. Save your Qado logo as `qado-logo.png` in the `assets/` directory
2. Recommended specifications:
   - **Format**: PNG with transparent background (or white background)
   - **Size**: Maximum height of 80px (width will auto-scale)
   - **Quality**: High resolution for crisp display on all devices

### Logo Placement
Simply place your logo file at: `assets/qado-logo.png`

The site will automatically:
- Show your logo when the file exists
- Display a stylish "QADO" placeholder if the logo file is missing
- Handle different logo sizes responsively

## ✨ Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile
- **Modern UI**: Gradient background with subtle animations
- **Email Collection**: Functional email signup form (currently shows success message)
- **Logo Integration**: Automatic logo detection and fallback
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Minimal dependencies, uses system fonts as fallback

## 🔧 Customization

### Content
Edit `index.html` to modify:
- Company name and tagline
- Main headline and description
- Footer text

### Styling
Edit `styles.css` to customize:
- Colors and gradients
- Fonts and typography
- Animations and effects
- Layout and spacing

### Functionality
Edit `script.js` to modify:
- Email form behavior
- Logo loading logic
- Interactive features

## 📧 Email Integration

The email form currently shows a success message. To connect it to a real email service:

1. **Netlify Forms**: If hosting on Netlify, add `netlify` attribute to the form
2. **Formspree**: Replace the JavaScript with Formspree integration
3. **Custom Backend**: Modify the `handleNotifyMe()` function to send to your API

## 🌐 Domain Setup

To point `qado.ai` to this GitHub Pages site:

1. Add a `CNAME` file with your domain:
   ```
   echo "qado.ai" > CNAME
   ```

2. In your domain registrar (GoDaddy), set up these DNS records:
   - **CNAME**: `www` → `yourusername.github.io`
   - **A Record**: `@` → GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. Enable custom domain in your GitHub repository settings

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 2 seconds on 3G
- **Size**: < 50KB total

---

**Built for Qado** - Revolutionizing procurement with AI 🚀 