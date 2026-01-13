# Email Setup Guide - Contact Form Integration

## Overview

The contact form is now fully integrated with **Resend** email service. When someone submits the contact form, you'll receive a beautifully formatted email with all the details.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Resend API Key

1. Go to [Resend.com](https://resend.com) and sign up for a **free account**
2. Verify your email address
3. Navigate to **API Keys** section
4. Click **Create API Key**
5. Give it a name (e.g., "Harsh Academy Contact Form")
6. Copy the API key (starts with `re_`)

### Step 2: Configure Environment Variables

1. Open the file `.env.local` in your project root
2. Replace the placeholder values:

```env
# Replace with your actual Resend API key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx

# Your email address (where you want to receive contact forms)
CONTACT_EMAIL_TO=youremail@gmail.com

# For testing, keep this as is
CONTACT_EMAIL_FROM=onboarding@resend.dev
```

### Step 3: Test It!

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check your email inbox (the one you set in `CONTACT_EMAIL_TO`)

**That's it!** You should receive a formatted email within seconds.

---

## 📧 Email Features

### What You'll Receive

When someone submits the contact form, you get an email with:

✅ **Professional Design**: Blue-themed HTML email matching your brand
✅ **All Form Data**: Name, Email, Phone, Subject, Message
✅ **Timestamp**: When the form was submitted
✅ **Quick Reply**: Click the email address to reply directly
✅ **Plain Text Fallback**: Works in all email clients

### Email Preview

```
┌─────────────────────────────────────┐
│     HARSH ACADEMY                    │
│  New Contact Form Submission         │
├─────────────────────────────────────┤
│                                      │
│  Contact Details                     │
│                                      │
│  Name:     John Doe                  │
│  Email:    john@example.com          │
│  Phone:    +91 XXXXXXXXXX            │
│  Subject:  Admission Inquiry         │
│  Received: Jan 13, 2026, 10:30 AM    │
│                                      │
│  Message:                            │
│  ┌────────────────────────────────┐  │
│  │ I would like to know more...   │  │
│  └────────────────────────────────┘  │
│                                      │
│  💡 Reply to: john@example.com       │
│                                      │
└─────────────────────────────────────┘
```

---

## 🔧 Configuration Options

### Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `RESEND_API_KEY` | ✅ Yes | Your Resend API key | `re_123abc...` |
| `CONTACT_EMAIL_TO` | ❌ No | Where to send emails | `admin@harshacademy.com` |
| `CONTACT_EMAIL_FROM` | ❌ No | "From" email address | `onboarding@resend.dev` |

**Default Values:**
- `CONTACT_EMAIL_TO`: `admin@harshacademy.com`
- `CONTACT_EMAIL_FROM`: `onboarding@resend.dev`

### Multiple Recipients

To send emails to multiple addresses:

```env
CONTACT_EMAIL_TO=admin@harshacademy.com,principal@harshacademy.com
```

Or modify the API route to use an array:

```typescript
to: [
  "admin@harshacademy.com",
  "principal@harshacademy.com"
],
```

---

## 🌐 Production Deployment

### For Production (Vercel, Netlify, etc.)

1. **Add Environment Variables to your hosting platform:**

   **Vercel:**
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`

   **Netlify:**
   - Go to Site Settings → Environment Variables
   - Add the same variables

2. **Use Your Own Domain (Recommended):**

   Instead of `onboarding@resend.dev`, use your own domain:

   ```env
   CONTACT_EMAIL_FROM=noreply@harshacademy.com
   ```

   **To do this:**
   - Go to Resend Dashboard → Domains
   - Click "Add Domain"
   - Add your domain (e.g., `harshacademy.com`)
   - Add the DNS records shown by Resend to your domain provider
   - Wait for verification (usually 5-10 minutes)
   - Update your `.env` file

---

## 📊 Resend Free Tier Limits

Perfect for small to medium websites:

- ✅ **3,000 emails/month** (Free forever)
- ✅ **100 emails/day**
- ✅ **Unlimited domains**
- ✅ **Email analytics**
- ✅ **Webhooks**

Need more? Paid plans start at $20/month for 50,000 emails.

---

## 🔍 Monitoring & Analytics

### View Email Status

1. Log into [Resend Dashboard](https://resend.com/emails)
2. See all sent emails, delivery status, and opens
3. Debug any delivery issues

### Email Logs in Your App

Check your server console/logs for:

```
New contact form submission: { name: "John", ... }
Email notification sent successfully to: admin@harshacademy.com
```

---

## 🛠️ Customization

### Modify Email Template

Edit the file: `app/api/contact/email-template.tsx`

**Change Colors:**
```tsx
// Header background (currently blue)
backgroundColor: '#1e3a8a'  // Change to your color

// Accent color (currently blue)
color: '#2563eb'  // Change to match your theme
```

**Add Your Logo:**
```tsx
<img
  src="https://yourdomain.com/logo.png"
  alt="Harsh Academy"
  style={{ height: '50px' }}
/>
```

**Customize Footer:**
```tsx
<p style={{ color: '#9ca3af', margin: 0, fontSize: '12px' }}>
  Your custom footer text here
</p>
```

### Change Email Subject

In `app/api/contact/route.ts`, line 69:

```typescript
subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
```

Change to:
```typescript
subject: `[Harsh Academy] New Inquiry from ${name}`,
```

---

## 🧪 Testing

### Test in Development

```bash
npm run dev
```

Go to `/contact`, fill the form, submit. Check your email!

### Test Different Scenarios

1. **Valid Submission**: All fields filled correctly ✅
2. **Missing Fields**: Try submitting without required fields ❌
3. **Invalid Email**: Use wrong email format ❌
4. **Long Message**: Test with a very long message ✅
5. **Special Characters**: Test with emojis, quotes, etc. ✅

---

## ❓ Troubleshooting

### Issue: Not Receiving Emails

**Check 1: API Key**
- Make sure `RESEND_API_KEY` is set correctly in `.env.local`
- Verify the key is active in Resend dashboard

**Check 2: Email Address**
- Confirm `CONTACT_EMAIL_TO` is correct
- Check spam/junk folder

**Check 3: Server Console**
Look for error messages:
```bash
Failed to send email notification: [error details]
```

**Check 4: Resend Dashboard**
- Go to Resend → Emails
- Check if emails are being sent but bouncing

### Issue: 500 Error on Form Submit

**Check Server Logs:**
```bash
npm run dev
# Look for error messages in the console
```

**Common Causes:**
- Missing `RESEND_API_KEY`
- Invalid API key
- Network issues

### Issue: Emails Going to Spam

**Solutions:**
1. Use your own verified domain instead of `onboarding@resend.dev`
2. Add SPF, DKIM records (Resend provides these)
3. Ask recipients to mark as "Not Spam"

---

## 🔐 Security Best Practices

### Never Commit `.env.local`

Already configured in `.gitignore`:
```
.env*.local
.env
```

### Use Environment Variables in Production

Never hardcode API keys in your code!

### Rate Limiting (Recommended)

Add to prevent spam:

```bash
npm install express-rate-limit
```

In `app/api/contact/route.ts`:
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 submissions per window
});
```

---

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend React Email](https://react.email)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

## 🆘 Support

### Email Issues
- Resend Support: [resend.com/support](https://resend.com/support)
- Check status: [resend.com/status](https://resend.com/status)

### Common Questions

**Q: Can I use Gmail to send emails?**
A: No, Resend is specifically designed for this. Gmail SMTP is not recommended for production apps.

**Q: Is Resend free forever?**
A: Yes! 3,000 emails/month free forever. Perfect for most school websites.

**Q: Can I change the email template?**
A: Yes! Edit `app/api/contact/email-template.tsx`

**Q: How do I test without sending real emails?**
A: Resend has a test mode. Check their documentation for details.

---

## ✅ Setup Checklist

Before going to production:

- [ ] Resend account created
- [ ] API key obtained and added to `.env.local`
- [ ] `CONTACT_EMAIL_TO` set to your email
- [ ] Tested form submission in development
- [ ] Received test email successfully
- [ ] Environment variables added to hosting platform (Vercel/Netlify)
- [ ] Custom domain verified in Resend (optional but recommended)
- [ ] Email template customized with your branding
- [ ] Tested in production after deployment

---

**Your contact form is now production-ready with email notifications! 📧✨**
