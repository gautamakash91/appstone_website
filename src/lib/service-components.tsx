import AIServiceSection from "@/components/servicesection/ai-service-section";
import BusinessIntelligenceSection from "@/components/servicesection/business-intelligence";
import DataAnalysisSection from "@/components/servicesection/data-analysis";
import DevOpsEngineeringSection from "@/components/servicesection/dev-ops-engineering";
import DigitalMarketingSection from "@/components/servicesection/digital-marketing";
import ITServiceSection from "@/components/servicesection/it-service";
import MobileAppDevelopmentSection from "@/components/servicesection/mobile-app";
import SoftwareDevelopmentSection from "@/components/servicesection/software-development";
import UIUXDesignSection from "@/components/servicesection/uiux-design";

export const getServiceComponent = (id: string) => {
  const componentMap: { [key: string]: React.ComponentType<any> } = {
    "ai-services": AIServiceSection,
    "business-intelligence": BusinessIntelligenceSection,
    "data-analysis": DataAnalysisSection,
    "devops-engineering": DevOpsEngineeringSection,
    "digital-marketing": DigitalMarketingSection,
    "it-services": ITServiceSection,
    "mobile-app-development": MobileAppDevelopmentSection,
    "software-development": SoftwareDevelopmentSection,
    "uiux-design": UIUXDesignSection,
  };

  return componentMap[id] || null;
};

