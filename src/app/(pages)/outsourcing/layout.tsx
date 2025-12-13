import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "IT Outsourcing Services - Software Development Outsourcing",
  description:
    "Professional IT outsourcing services by Appstone. Outsource your software development projects to expert developers. Cost-effective, scalable, and reliable outsourcing solutions.",
  keywords: [
    "IT outsourcing",
    "software outsourcing",
    "development outsourcing",
    "outsourcing services",
    "offshore development",
    "software development outsourcing",
    "IT services outsourcing",
  ],
  url: "https://appstone.in/outsourcing",
});

export default function OutsourcingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

