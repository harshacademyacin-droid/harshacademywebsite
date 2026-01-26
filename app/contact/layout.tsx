import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Harsh Academy Saiyan Agra. Located near railway and police station on Agra Gwalior Road. Call +91 9927700400 or email us for admission inquiries.",
  keywords: [
    "contact Harsh Academy",
    "school contact Saiyan",
    "admission inquiry Agra",
    "school address Saiyan",
    "phone number Harsh Academy",
    "school location near me"
  ],
  openGraph: {
    title: "Contact Harsh Academy - Saiyan, Agra",
    description: "Get in touch with us for admission inquiries. Located on Agra Gwalior Road, near railway and police station, Saiyan.",
    url: "https://harshacademy.co.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
