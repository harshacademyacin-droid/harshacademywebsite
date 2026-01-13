# Quick Start Guide - Harsh Academy Website

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd harsh-academy
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit **http://localhost:3000**

---

## 📁 What's Included

✅ **5 Complete Pages**
- Home (Hero section + Quick links)
- About Us (Mission & Values)
- Academics (Nursery to Class VIII)
- Admission (Procedure & Guidelines)
- Contact (Form + Contact Info)

✅ **Responsive Design**
- Works on Desktop, Tablet, and Mobile
- Mobile hamburger menu

✅ **Modern Stack**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS

---

## 🎨 Customization Guide

### Change School Colors
Edit `app/globals.css` and Tailwind classes (look for `bg-blue-900`, `text-blue-900`, etc.)

### Update Contact Info
1. **Top Bar**: Edit `components/TopBar.tsx`
2. **Contact Page**: Edit `app/contact/page.tsx`

### Add/Change Images
- Place images in `public/images/`
- Update Image src in components

### Modify Content
Each page is a separate file in the `app/` directory:
- `app/page.tsx` - Home
- `app/about/page.tsx` - About
- `app/academics/page.tsx` - Academics
- `app/admission/page.tsx` - Admission
- `app/contact/page.tsx` - Contact

---

## 🌐 Deploy Your Website

### Option 1: Vercel (Recommended - Free)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (automatic!)

### Option 2: Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect repository
4. Deploy

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## ❓ Common Issues

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not showing?
- Make sure images are in `public/images/`
- Check image filenames match exactly (case-sensitive)

---

## 📞 Need Help?

Check the [README.md](README.md) for detailed documentation.

---

**Happy Coding! 🎓**
