import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "About Us - Appstone Digital Solutions",
  description:
    "Learn about Appstone, a passionate team dedicated to your growth. We provide innovative digital solutions, web development, mobile apps, and IT services from Bhubaneswar, India.",
  keywords: [
    "about Appstone",
    "Appstone team",
    "digital solutions company",
    "Bhubaneswar IT company",
    "software development company",
    "technology services",
  ],
  url: "https://appstone.in/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

