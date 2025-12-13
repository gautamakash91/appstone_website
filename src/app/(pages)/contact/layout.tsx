import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Contact Us - Get in Touch with Appstone",
  description:
    "Contact Appstone for your digital solutions needs. Reach us at +91-7809424281 or info@appstone.in. Located in Bhubaneswar, Odisha, India.",
  keywords: [
    "contact Appstone",
    "Appstone contact",
    "digital solutions contact",
    "web development contact",
    "Bhubaneswar IT company",
    "Odisha software company",
  ],
  url: "https://appstone.in/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

