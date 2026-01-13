# Setup Checklist - Harsh Academy Website

## ✅ Complete Setup Guide

Follow these steps to get your website running with email notifications.

---

## 1. Initial Setup (5 minutes)

### Install Dependencies
```bash
cd harsh-academy
npm install
```

**Status**: ⬜ Not Started | ✅ Completed

---

## 2. Email Configuration (5 minutes)

### A. Get Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for free account
3. Verify your email
4. Navigate to **API Keys**
5. Click **Create API Key**
6. Copy the key (starts with `re_`)

**Status**: ⬜ Not Started | ✅ Completed

### B. Configure Environment Variables

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and update:
   ```env
   RESEND_API_KEY=re_your_actual_key_here
   CONTACT_EMAIL_TO=your.email@gmail.com
   CONTACT_EMAIL_FROM=onboarding@resend.dev
   ```

**Status**: ⬜ Not Started | ✅ Completed

---

## 3. Development Testing (2 minutes)

### Start Development Server
```bash
npm run dev
```

### Test the Website

1. **Open**: http://localhost:3000
2. **Navigate to**: Contact page
3. **Fill out form** with test data
4. **Submit** the form
5. **Check your email** (the one in `CONTACT_EMAIL_TO`)

**Status**: ⬜ Not Started | ✅ Completed

---

## 4. Customization (10 minutes)

### Update Contact Information

**File**: `app/contact/page.tsx` (Lines 332-407)

Update:
- [ ] Address
- [ ] Phone numbers
- [ ] Email addresses
- [ ] Office hours

**File**: `components/TopBar.tsx`

Update:
- [ ] Top bar email
- [ ] Top bar phone

**Status**: ⬜ Not Started | ✅ Completed

### Update Website Content

- [ ] Home page stats (if needed)
- [ ] About page information
- [ ] Academics page courses
- [ ] Admission page details

**Status**: ⬜ Not Started | ✅ Completed

---

## 5. Production Deployment

### A. Choose Hosting Platform

**Recommended**: Vercel (easiest for Next.js)

- [ ] Sign up at [vercel.com](https://vercel.com)
- [ ] Connect your GitHub repository
- [ ] Or use Vercel CLI: `npm install -g vercel`

**Alternatives**:
- Netlify
- Railway
- AWS Amplify

**Status**: ⬜ Not Started | ✅ Completed

### B. Add Environment Variables to Hosting

**For Vercel**:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add these variables:

```
RESEND_API_KEY = re_your_key_here
CONTACT_EMAIL_TO = your.email@gmail.com
CONTACT_EMAIL_FROM = onboarding@resend.dev
```

**For Netlify**:
1. Go to Site Settings
2. Navigate to Environment Variables
3. Add the same variables

**Status**: ⬜ Not Started | ✅ Completed

### C. Deploy

**Vercel**:
```bash
vercel --prod
```

**Netlify**:
```bash
netlify deploy --prod
```

**Status**: ⬜ Not Started | ✅ Completed

---

## 6. Post-Deployment Testing

### Test Production Site

- [ ] Visit your live website URL
- [ ] Test contact form with real submission
- [ ] Verify email received
- [ ] Test all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Verify images load properly

**Status**: ⬜ Not Started | ✅ Completed

---

## 7. Optional Enhancements

### Use Custom Domain for Emails (Recommended)

Instead of `onboarding@resend.dev`:

1. **In Resend Dashboard**:
   - Go to Domains
   - Click "Add Domain"
   - Add your domain (e.g., `harshacademy.com`)

2. **In Your Domain Provider** (GoDaddy, Namecheap, etc.):
   - Add DNS records provided by Resend
   - Wait 5-10 minutes for verification

3. **Update `.env.local` and Production Env**:
   ```env
   CONTACT_EMAIL_FROM=noreply@harshacademy.com
   ```

**Status**: ⬜ Not Started | ✅ Completed

### Add Rate Limiting (Recommended)

Prevent spam submissions:

```bash
npm install express-rate-limit
```

See [CONTACT_FORM_GUIDE.md](CONTACT_FORM_GUIDE.md) for implementation.

**Status**: ⬜ Not Started | ✅ Completed

### Add Google reCAPTCHA

Extra spam protection:

1. Get reCAPTCHA keys from [Google](https://www.google.com/recaptcha)
2. Add to environment variables
3. Implement in contact form

**Status**: ⬜ Not Started | ✅ Completed

---

## 8. Maintenance

### Regular Tasks

**Weekly**:
- [ ] Check Resend dashboard for email delivery status
- [ ] Review contact form submissions in `data/contacts/`

**Monthly**:
- [ ] Update dependencies: `npm update`
- [ ] Check for Next.js updates
- [ ] Review and backup contact form data

**As Needed**:
- [ ] Update content (admission dates, news, etc.)
- [ ] Add new pages or features
- [ ] Optimize images

---

## Quick Reference

### Important Files

| File | Purpose |
|------|---------|
| `.env.local` | Environment variables (DO NOT commit) |
| `app/contact/page.tsx` | Contact form page |
| `app/api/contact/route.ts` | API endpoint for form |
| `app/api/contact/email-template.tsx` | Email template |
| `data/contacts/` | Saved form submissions |

### Important Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for issues
npm run lint

# Deploy to Vercel
vercel --prod
```

### Environment Variables

```env
RESEND_API_KEY=re_xxxxx        # Required
CONTACT_EMAIL_TO=email@x.com   # Optional (defaults to admin@harshacademy.com)
CONTACT_EMAIL_FROM=noreply@x   # Optional (defaults to onboarding@resend.dev)
```

---

## 📚 Documentation Links

- [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) - Detailed email setup
- [README.md](README.md) - General project info
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide
- [CONTACT_FORM_GUIDE.md](CONTACT_FORM_GUIDE.md) - Form management
- [UI_IMPROVEMENTS.md](UI_IMPROVEMENTS.md) - UI enhancements

---

## 🆘 Need Help?

### Common Issues

**Emails not sending?**
→ Check [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) troubleshooting section

**Form not submitting?**
→ Check browser console and server logs

**Build errors?**
→ Run `npm install` and check for missing dependencies

### Support Resources

- Resend Support: [resend.com/support](https://resend.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

## 🎉 Completion Status

**Overall Progress**: ___% Complete

Mark items as completed as you go through this checklist!

**Essential Tasks** (Required for launch):
- [ ] Dependencies installed
- [ ] Email configured
- [ ] Local testing successful
- [ ] Contact info updated
- [ ] Production deployment
- [ ] Production testing

**Optional Tasks** (Recommended):
- [ ] Custom domain for emails
- [ ] Rate limiting
- [ ] reCAPTCHA
- [ ] Custom email template styling

---

**Once all essential tasks are complete, your website is ready to launch! 🚀**
