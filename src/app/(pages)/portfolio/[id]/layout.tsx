import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { portfolioDetails } from "@/lib/portfolio-data";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<ReturnType<typeof generateSEOMetadata>> {
  const id = Number(params.id);
  const portfolio = portfolioDetails[id];

  if (!portfolio) {
    return generateSEOMetadata({
      title: "Portfolio Project Not Found",
      description: "The requested portfolio project could not be found.",
      url: `https://appstone.in/portfolio/${id}`,
      noindex: true,
    });
  }

  return generateSEOMetadata({
    title: `${portfolio.title} - Portfolio Project | Appstone`,
    description: portfolio.brief || portfolio.description || `View ${portfolio.title} project by Appstone. ${portfolio.category} project showcasing our expertise.`,
    keywords: [
      portfolio.title,
      portfolio.category,
      "Appstone portfolio",
      "web development project",
      "mobile app project",
      "case study",
      ...portfolio.technologies,
    ],
    url: `https://appstone.in/portfolio/${id}`,
    type: "article",
  });
}

export default function PortfolioDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

