# Nova Resume - Complete Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

**That's it! No external setup required!**

### 3. Optional: Stripe Configuration (for PDF downloads)

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

## 🎯 Features

### ✅ Authentication System

- **Email/Password Login & Signup** with validation
- **Local Storage** based user management
- **Demo Account** for quick testing (demo@nova.com / demo123)
- **No external dependencies** required
- **Instant setup** - works offline
- **Protected Routes** for builder

### ✅ Resume Builder

- **Pixel-Perfect** A4 resume generation
- **2-Page Resume** support
- **Multiple Templates** (Modern, Professional, Creative, etc.)
- **Real-time Preview** with zoom controls
- **Drag & Drop** sections
- **Rich Text Editor** for content
- **PDF Export** with high quality

### ✅ Professional UI/UX

- **Responsive Design** for all devices
- **Dark Theme** with gradients
- **Smooth Animations** with Framer Motion
- **Loading States** and error handling
- **Professional Typography** with Inter font
- **Custom Scrollbars** and components

### ✅ Technical Features

- **Next.js 14** with TypeScript
- **Firebase Authentication** & Storage
- **Tailwind CSS** for styling
- **Material-UI** components
- **Zustand** state management
- **HTML2Canvas** & jsPDF for export
- **ESLint & Prettier** for code quality

## 📱 Usage

### For Users

1. **Sign Up/Login** using email or social providers
2. **Choose Template** from available options
3. **Fill Information** using the editor
4. **Preview Resume** in real-time
5. **Download PDF** when ready

### For Developers

1. **Add New Templates** in `/src/templates/`
2. **Customize Themes** in `/src/stores/themes.ts`
3. **Modify Sections** in `/src/modules/builder/editor/modules/`
4. **Update Styling** in `/src/styles/globals.css`

## 🔧 Configuration

### Firebase Rules (Firestore)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /resumes/{resumeId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

### Firebase Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 🛠️ Troubleshooting

### Common Issues

1. **Firebase Auth Not Working**
   - Check environment variables
   - Verify Firebase configuration
   - Ensure domains are authorized

2. **PDF Generation Issues**
   - Check browser compatibility
   - Verify html2canvas dependencies
   - Test with different templates

3. **Styling Issues**
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify custom CSS imports

### Support

- Check GitHub issues
- Review Firebase documentation
- Test with different browsers

## 📄 License

MIT License - feel free to use for personal and commercial projects.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

---

**Nova Resume** - Build Your Future, One Resume at a Time! 🌟
