# Contact Form Management Guide

## Overview

The Harsh Academy website includes a fully functional contact form with:
- ✅ Frontend validation
- ✅ Backend API route
- ✅ Data storage to JSON files
- ✅ Error handling
- ✅ Loading states
- ✅ Success/error messages

## How It Works

### 1. Frontend ([app/contact/page.tsx](app/contact/page.tsx))

The contact form includes:
- **Field Validation**: Name (min 2 chars), Email (valid format), Message (min 10 chars)
- **Real-time Error Display**: Shows validation errors as users type
- **Loading State**: Disables form and shows spinner during submission
- **Success/Error Messages**: Displays feedback after submission
- **Phone & Subject Fields**: Optional fields for better categorization

### 2. Backend API ([app/api/contact/route.ts](app/api/contact/route.ts))

The API endpoint handles:
- **POST requests** for form submissions
- **Input validation** on the server side
- **Data storage** to JSON files in `data/contacts/` directory
- **Error handling** with appropriate HTTP status codes

## Stored Data Structure

Each submission is saved as a JSON file with:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 XXXXXXXXXX",
  "subject": "admission",
  "message": "I would like to know more about...",
  "timestamp": "2026-01-13T10:30:00.000Z",
  "ipAddress": "192.168.1.1"
}
```

Files are saved as: `contact_{timestamp}_{sanitized_name}.json`

## Viewing Submitted Forms

### Option 1: Direct File Access

All submissions are stored in the `data/contacts/` directory:

```bash
cd harsh-academy/data/contacts
ls -la
```

Each file can be viewed with:

```bash
cat contact_1705145400000_John_Doe.json
```

### Option 2: Create a Simple Admin Panel (Optional)

You can create an admin page to view submissions:

**Create `app/admin/contacts/page.tsx`:**

```tsx
import { readdir, readFile } from 'fs/promises';
import path from 'path';

export default async function AdminContactsPage() {
  const dataDir = path.join(process.cwd(), 'data', 'contacts');

  let submissions = [];
  try {
    const files = await readdir(dataDir);
    submissions = await Promise.all(
      files.map(async (file) => {
        const content = await readFile(path.join(dataDir, file), 'utf-8');
        return JSON.parse(content);
      })
    );
  } catch (error) {
    console.error('Error reading contacts:', error);
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      <div className="space-y-4">
        {submissions.map((sub, index) => (
          <div key={index} className="border p-4 rounded">
            <p><strong>Name:</strong> {sub.name}</p>
            <p><strong>Email:</strong> {sub.email}</p>
            <p><strong>Phone:</strong> {sub.phone}</p>
            <p><strong>Subject:</strong> {sub.subject}</p>
            <p><strong>Message:</strong> {sub.message}</p>
            <p><strong>Time:</strong> {new Date(sub.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

Access at: `http://localhost:3000/admin/contacts`

> **Note:** Secure this page with authentication in production!

## Email Integration (Recommended)

To receive email notifications for each submission, integrate an email service:

### Option 1: Resend (Recommended - Simple & Free tier)

```bash
npm install resend
```

Update `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// After saving the file, send email:
await resend.emails.send({
  from: 'Harsh Academy <noreply@yourdomain.com>',
  to: 'admin@harshacademy.com',
  subject: `New Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});
```

Add to `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxx
```

### Option 2: Nodemailer (Gmail/SMTP)

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'admin@harshacademy.com',
  subject: `New Contact Form: ${subject}`,
  text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
});
```

### Option 3: SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'admin@harshacademy.com',
  from: 'noreply@harshacademy.com',
  subject: `New Contact Form: ${subject}`,
  text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
});
```

## Database Integration (For Production)

For a production website, consider storing data in a database instead of JSON files:

### Option 1: MongoDB (with Mongoose)

```typescript
import { connectDB } from '@/lib/mongodb';
import Contact from '@/models/Contact';

await connectDB();
await Contact.create(submissionData);
```

### Option 2: PostgreSQL (with Prisma)

```typescript
import { prisma } from '@/lib/prisma';

await prisma.contact.create({
  data: submissionData,
});
```

### Option 3: Supabase (Easiest for beginners)

```typescript
import { supabase } from '@/lib/supabase';

const { data, error } = await supabase
  .from('contacts')
  .insert([submissionData]);
```

## Testing the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/contact`

3. Fill out and submit the form

4. Check the `data/contacts/` directory for the saved JSON file

5. Check the console for log output

## Security Considerations

### Current Implementation
- ✅ Input validation (frontend & backend)
- ✅ Email format validation
- ✅ CSRF protection (built into Next.js)
- ✅ File storage outside public directory

### For Production
- 🔒 Add rate limiting (prevent spam)
- 🔒 Add CAPTCHA (Google reCAPTCHA or hCaptcha)
- 🔒 Sanitize input (prevent XSS)
- 🔒 Add authentication for admin panel
- 🔒 Use environment variables for sensitive data
- 🔒 Move to database storage

### Rate Limiting Example

Install package:
```bash
npm install express-rate-limit
```

Add to API route:
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
});
```

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify API route is accessible at `/api/contact`
- Check file permissions for `data/contacts/` directory

### Data not saving?
- Ensure `data/contacts/` directory exists (auto-created on first submission)
- Check server console for errors
- Verify write permissions

### Validation errors?
- Name must be at least 2 characters
- Email must be valid format
- Message must be at least 10 characters

## Next Steps

1. **Test the form** - Submit a test message
2. **Set up email notifications** - Choose an email service
3. **Customize styling** - Adjust colors/layout as needed
4. **Add CAPTCHA** - Prevent spam submissions
5. **Create admin panel** - View submissions easily
6. **Move to database** - For production deployment

## Support

For issues or questions:
- Check the [README.md](README.md) for general setup
- Review [Next.js API Routes documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Check the browser and server console for errors
