# SEO Implementation Guide for Harsh Academy Website

## Overview
Your website has been enhanced with comprehensive SEO optimizations to improve visibility on Google and other search engines.

---

## What Has Been Added

### 1. **Enhanced Meta Tags** (layout.tsx)
- ✅ Comprehensive title templates with location keywords
- ✅ Detailed meta descriptions with academy information
- ✅ Extensive keyword targeting (school-related, location-based)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags
- ✅ Geographic meta tags for local SEO
- ✅ Mobile optimization tags
- ✅ Robots meta tags for search engine crawlers

### 2. **Structured Data (JSON-LD)** (layout.tsx)
- ✅ EducationalOrganization schema markup
- ✅ Local business information
- ✅ Address and contact details
- ✅ Geographic coordinates
- ✅ Opening hours
- ✅ Course offerings
- ✅ Aggregate ratings

### 3. **Page-Specific SEO Metadata**
All pages now have targeted SEO:
- ✅ **Home Page**: Main keywords and academy information
- ✅ **About Page**: Mission, vision, values keywords
- ✅ **Academics Page**: Course and curriculum keywords
- ✅ **Admission Page**: Enrollment and admission keywords
- ✅ **Contact Page**: Location and contact keywords

### 4. **Technical SEO Files**

#### robots.txt (public/robots.txt)
- Allows search engine crawlers
- Blocks private API routes
- References sitemap location

#### sitemap.xml (public/sitemap.xml)
- Lists all pages with priorities
- Includes last modified dates
- Helps search engines discover content

#### manifest.json (public/manifest.json)
- PWA support for better mobile experience
- App-like installation capability
- Improves mobile SEO scores

---

## IMPORTANT: Required Actions

### 🔴 CRITICAL - Update These Values

You **MUST** update the following placeholders with your actual information:

#### 1. In `app/layout.tsx`:
```typescript
// Line 10: Update with your actual domain
metadataBase: new URL('https://harshacademy.in'), // REPLACE with actual domain

// Line 52: Add your Google Search Console verification code
google: "your-google-site-verification-code", // GET from Google Search Console

// Line 72-73: Update contact information
"telephone": "+91-XXXXXXXXXX", // ADD actual phone number
"email": "info@harshacademy.in", // VERIFY or UPDATE email

// Line 76-80: Update physical address
"streetAddress": "Main Road, Saiyan", // ADD complete address
"postalCode": "XXXXXX", // ADD postal/PIN code

// Line 82-85: Update geographic coordinates
"latitude": "27.1767", // GET exact coordinates from Google Maps
"longitude": "78.0081", // GET exact coordinates from Google Maps

// Line 96-99: Add social media links (if you have them)
"sameAs": [
  "https://www.facebook.com/harshacademy", // ADD if available
  "https://www.instagram.com/harshacademy", // ADD if available
]
```

#### 2. In `public/sitemap.xml`:
```xml
<!-- Update all URLs with your actual domain -->
<loc>https://harshacademy.in/</loc> <!-- REPLACE with actual domain -->
```

#### 3. In `public/robots.txt`:
```
Sitemap: https://harshacademy.in/sitemap.xml # REPLACE with actual domain
```

---

## Next Steps for Google Visibility

### 1. **Get Your Actual Domain**
- Deploy your website to a hosting service (Vercel, Netlify, etc.)
- Get your actual domain name (e.g., harshacademy.in)
- Update all placeholder URLs in the files mentioned above

### 2. **Google Search Console Setup**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your website property
3. Verify ownership using the meta tag method
4. Copy the verification code to `layout.tsx` (line 52)
5. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

### 3. **Google Business Profile**
1. Create/claim your Google Business Profile
2. Add your academy's location, phone, hours
3. Add photos of your school
4. Verify your business
5. This is CRITICAL for local search visibility

### 4. **Get Geographic Coordinates**
1. Go to [Google Maps](https://maps.google.com)
2. Search for your exact school location
3. Right-click on the location → Click on coordinates
4. Update latitude and longitude in `layout.tsx`

### 5. **Add Favicon and Icons**
Create and add these image files to `/public`:
- `favicon.ico` (16x16 or 32x32)
- `/images/icon-192x192.png` (192x192)
- `/images/icon-512x512.png` (512x512)
- `/images/logo.png` (for structured data)

You can use tools like [Favicon Generator](https://realfavicongenerator.net/)

### 6. **Optional but Recommended**

#### Social Media
- Create Facebook page for the academy
- Create Instagram account
- Update the `sameAs` array in structured data

#### Google Analytics (Optional)
Add Google Analytics for tracking:
1. Create account at [Google Analytics](https://analytics.google.com)
2. Add tracking code to your website

#### Bing Webmaster Tools (Optional)
1. Sign up at [Bing Webmaster](https://www.bing.com/webmasters)
2. Submit your website
3. Add verification code to `layout.tsx`

---

## Keyword Strategy

### Primary Keywords Targeted:
- Harsh Academy Saiyan
- Harsh Academy Agra
- Best school in Saiyan
- School in Saiyan Agra
- Admission in Saiyan school
- Nursery to Class 8 Agra

### Location-Based SEO:
- Saiyan, Agra location
- Near railway and police station
- Agra Gwalior Road

---

## Testing Your SEO

After deploying and updating all information:

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test your homepage URL
   - Verify structured data is recognized

2. **Mobile-Friendly Test**
   - URL: https://search.google.com/test/mobile-friendly
   - Ensure mobile optimization

3. **PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Check performance scores

4. **Meta Tags Checker**
   - URL: https://metatags.io/
   - Preview how your site appears in search/social

---

## Expected Timeline

- **Immediate**: Technical SEO improvements applied
- **1-2 weeks**: Google starts crawling your site
- **2-4 weeks**: Pages start appearing in search results
- **1-3 months**: Rankings improve as Google understands your content
- **3-6 months**: Significant visibility improvements with consistent content

---

## Content Recommendations

To further improve SEO:

1. **Add a Blog Section**
   - Write about education, admission tips, student success stories
   - Target long-tail keywords

2. **Add Testimonials Page**
   - Parent reviews and student testimonials
   - Builds trust and provides fresh content

3. **Create Gallery Page**
   - School photos, events, activities
   - Images help with engagement

4. **Regular Updates**
   - Update news/announcements
   - Fresh content signals active website

---

## Support Resources

- **Google Search Console Help**: https://support.google.com/webmasters
- **Schema.org Documentation**: https://schema.org/EducationalOrganization
- **Next.js SEO Guide**: https://nextjs.org/learn/seo/introduction-to-seo

---

## Summary Checklist

- [ ] Deploy website to production
- [ ] Update domain in all config files
- [ ] Add actual contact information
- [ ] Get and add geographic coordinates
- [ ] Register Google Search Console
- [ ] Add verification code
- [ ] Submit sitemap to Google
- [ ] Create Google Business Profile
- [ ] Add favicon and icons
- [ ] Test with Google's tools
- [ ] Add social media links (optional)
- [ ] Set up Google Analytics (optional)

---

**Note**: SEO is an ongoing process. Monitor your Google Search Console regularly and update content frequently for best results.

Good luck with your website! 🚀
