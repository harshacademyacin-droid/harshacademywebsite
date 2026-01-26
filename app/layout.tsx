import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://harshacademy.in'), // Update with your actual domain
  title: {
    default: "Harsh Academy Saiyan Agra | Best School in Saiyan | Nursery to Class 8",
    template: "%s | Harsh Academy Saiyan Agra"
  },
  description: "Harsh Academy is the best school in Saiyan, Agra offering quality education from Nursery to Class 8. Expert teachers, modern curriculum, safe environment. Admissions open for 2026-2027.",
  keywords: [
    "Harsh Academy",
    "Harsh Academy Saiyan",
    "Harsh Academy Agra",
    "best school in Saiyan",
    "best school in Agra",
    "school near me Saiyan",
    "CBSE school Saiyan",
    "nursery school Saiyan",
    "primary school Agra",
    "admission in Saiyan school",
    "schools in Saiyan Agra",
    "quality education Agra",
    "best academy near Agra",
    "education in Saiyan",
    "school admission 2026"
  ],
  authors: [{ name: "Harsh Academy" }],
  creator: "Harsh Academy",
  publisher: "Harsh Academy",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://harshacademy.in",
    siteName: "Harsh Academy Saiyan Agra",
    title: "Harsh Academy Saiyan Agra | Best School in Saiyan | Nursery to Class 8",
    description: "Premier educational institution in Saiyan, Agra. Quality education from Nursery to Class 8 with expert faculty and modern facilities. Admissions open!",
    images: [
      {
        url: "/images/banner2.jpg",
        width: 1200,
        height: 630,
        alt: "Harsh Academy - Best School in Saiyan, Agra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Academy Saiyan Agra | Best School in Saiyan",
    description: "Premier educational institution in Saiyan, Agra. Quality education from Nursery to Class 8. Admissions open 2026-2027!",
    images: ["/images/banner2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://harshacademy.in",
  },
  verification: {
    // Add your verification codes here after registering with these services
    google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Education",
  classification: "School, Academy, Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Local Business SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Harsh Academy",
    "alternateName": "Harsh Academy Saiyan",
    "description": "Premier educational institution in Saiyan, Agra offering quality education from Nursery to Class 8 with expert faculty and modern facilities.",
    "url": "https://harshacademy.in",
    "logo": "https://harshacademy.in/images/logo.png",
    "image": "https://harshacademy.in/images/banner2.jpg",
    "telephone": "+91-XXXXXXXXXX", // Update with actual phone number
    "email": "info@harshacademy.in", // Update with actual email
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Saiyan", // Update with actual address
      "addressLocality": "Saiyan",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "XXXXXX", // Update with actual postal code
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.1767", // Update with actual coordinates
      "longitude": "78.0081" // Update with actual coordinates
    },
    "areaServed": {
      "@type": "City",
      "name": "Agra"
    },
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      // Add your social media links here
      // "https://www.facebook.com/harshacademy",
      // "https://www.instagram.com/harshacademy",
      // "https://www.youtube.com/harshacademy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Educational Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Nursery to Class 8 Education",
            "description": "Comprehensive education from Nursery to Class VIII",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Harsh Academy"
            }
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="beforeInteractive"
        />

        {/* Additional Meta Tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Saiyan, Agra" />
        <meta name="geo.position" content="27.1767;78.0081" />
        <meta name="ICBM" content="27.1767, 78.0081" />

        {/* Mobile Optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Theme Color */}
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-navbutton-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#1e40af" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/icon-192x192.png" />
      </head>
      <body className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
