import {
  FaRobot,
  FaChartBar,
  FaTools,
  FaBullhorn,
  FaMobileAlt,
  FaCode,
  FaPencilRuler,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
    FaRobot,
    FaChartBar,
    FaTools,
    FaBullhorn,
    FaGear,
    FaMobileAlt,
    FaCode,
    FaPencilRuler,
  };

  return iconMap[iconName] || FaChartBar;
};

