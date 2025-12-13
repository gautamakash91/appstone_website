import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Portfolio - Our Work & Projects",
  description:
    "Explore Appstone's portfolio of successful projects including web applications, mobile apps, and digital solutions. See how we've helped businesses transform with technology.",
  keywords: [
    "Appstone portfolio",
    "web development projects",
    "mobile app projects",
    "digital solutions portfolio",
    "software projects",
    "case studies",
  ],
  url: "https://appstone.in/portfolio",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

