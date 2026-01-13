# Harsh Academy Website

A modern, responsive website for Harsh Academy built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Next.js App Router**: Built with the latest Next.js 15 features
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Beautiful, responsive design with utility-first CSS
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Email Integration**: Contact form with Resend email notifications
- **Form Validation**: Client and server-side validation with error handling
- **Data Storage**: Contact submissions saved as JSON files

## Pages

- **Home**: Hero section with school mission and quick links
- **About**: Information about the school, mission, and values
- **Academics**: Course offerings from Nursery to Class VIII
- **Admission**: Detailed admission procedure and guidelines
- **Contact**: Contact form and school contact information

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd harsh-academy
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. **Configure Email (Important!)**:
   - Copy `.env.example` to `.env.local`
   - Get a free API key from [Resend.com](https://resend.com)
   - Add your API key and email to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL_TO=youremail@gmail.com
   ```
   - See [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) for detailed instructions

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

6. **Test the contact form** at [http://localhost:3000/contact](http://localhost:3000/contact)

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
harsh-academy/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── academics/         # Academics page
│   ├── admission/         # Admission page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   └── TopBar.tsx         # Top announcement bar
├── public/                # Static assets
│   └── images/            # Image files
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Customization

### Update Contact Information

Edit the contact details in:
- [components/TopBar.tsx](components/TopBar.tsx) - Top bar email/phone
- [app/contact/page.tsx](app/contact/page.tsx) - Contact page details

### Modify Colors

Update the color scheme in:
- [tailwind.config.ts](tailwind.config.ts) - Tailwind color configuration
- [app/globals.css](app/globals.css) - Global CSS variables

### Add Images

Place your images in the `public/images/` directory and update the Image components in the pages.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Resend**: Email service for contact form notifications
- **ESLint**: Code linting

## Documentation

- [EMAIL_SETUP_GUIDE.md](EMAIL_SETUP_GUIDE.md) - Complete email integration guide
- [CONTACT_FORM_GUIDE.md](CONTACT_FORM_GUIDE.md) - Contact form management
- [UI_IMPROVEMENTS.md](UI_IMPROVEMENTS.md) - UI enhancements documentation
- [MIGRATION_NOTES.md](MIGRATION_NOTES.md) - HTML to Next.js migration notes
- [QUICKSTART.md](QUICKSTART.md) - Quick start guide

## License

This project is created for Harsh Academy.

## Support

For any questions or issues, please contact info@harshacademy.com
