import project1 from "@/assets/project/project 1.png";
import project2 from "@/assets/project/project 2.png";
import project3 from "@/assets/project/project 3.png";
import project4 from "@/assets/project/project 4.png";
import project5 from "@/assets/project/project5.png";
import project6 from "@/assets/project/project 6.png";
import project8 from "@/assets/project/project 8.png";
import project9 from "@/assets/project/project 9.png";
import project10 from "@/assets/project/project 10.png";
import project11 from "@/assets/project/project 11.png";
import project12 from "@/assets/project/project 12.png";
import { StaticImageData } from "next/image";

// Portfolio project data based on actual projects
export interface PortfolioDetail {
  id: number;
  category: string;
  title: string;
  brief: string;
  description: string;
  technologies: string[];
  screenshots: string | StaticImageData;
  problems: string[];
  approach: string[];
  results: string[];
}

// Image mapping for projects
const projectImages: { [key: number]: StaticImageData } = {
  1: project1,
  2: project2,
  3: project3,
  4: project4,
  5: project5,
  6: project6,
  7: project8,
  9: project9,
  10: project10,
  11: project11,
  12: project12,
};

export const portfolioDetails: { [key: number]: PortfolioDetail } = {
  1: {
    id: 1,
    category: "Ecommerce Website",
    title: "SOSH",
    brief: "India's first community commerce marketplace",
    description: "Sosh is India's first community commerce marketplace. Where you can find products that are uniquely right for you. And for the 'right' brands to reach you, they shouldn't have to spend thousands of dollars on meaningless ads. What they should have are trustworthy claims & strong values. The platform revolutionizes e-commerce by connecting consumers with brands through community-driven recommendations, eliminating the need for expensive advertising campaigns while building authentic relationships between brands and their target audience.",
    technologies: ["MERN Stack", "AWS", "Redis", "Kubernetes", "Postgres", "Neo4j"],
    screenshots: project1,
    problems: [
      "Need for a unique community-driven commerce platform that connects consumers with brands authentically",
      "High advertising costs preventing small and medium brands from reaching their target audience effectively",
      "Lack of trust between brands and consumers in traditional e-commerce models",
      "Difficulty in creating personalized product discovery experiences for users",
      "Challenges in building meaningful relationships between brands and their community",
    ],
    approach: [
      "Developed a comprehensive community commerce marketplace with social features",
      "Implemented advanced recommendation algorithms using Neo4j for relationship mapping",
      "Built scalable microservices architecture on AWS with Kubernetes orchestration",
      "Integrated Redis for high-performance caching and session management",
      "Created intuitive user interfaces for seamless shopping and community interaction",
      "Established trust mechanisms through community reviews and brand verification",
    ],
    results: [
      "Successfully launched India's first community commerce platform with growing user base",
      "Reduced advertising costs for partner brands by up to 60% through community-driven discovery",
      "Improved product discovery through community insights and recommendations",
      "Scalable architecture supporting millions of users with high availability",
      "Increased brand-consumer engagement through authentic community interactions",
      "Achieved significant reduction in customer acquisition costs for partner brands",
    ],
  },
  2: {
    id: 2,
    category: "Web Application",
    title: "ImGrows",
    brief: "ESG platform for organizations",
    description: "Imgrows is a platform that aims to help organisations meet their Environmental, Social and Governance (ESG) targets. ESG is a new concept being adopted in India and other parts of the world and ImGrows believes that it can help cater to this growing need. The platform provides comprehensive tools for tracking, managing, and reporting ESG metrics, enabling organizations to demonstrate their commitment to sustainable business practices while meeting regulatory requirements and stakeholder expectations.",
    technologies: ["React.JS", "NodeJS", "Express JS"],
    screenshots: project2,
    problems: [
      "Lack of comprehensive tools for ESG target management and tracking across organizations",
      "Need for integrated ESG tracking and reporting systems that consolidate multiple data sources",
      "Growing demand for ESG compliance solutions as regulations become more stringent",
      "Complex data management for ESG metrics requiring specialized expertise",
      "Difficulty in demonstrating ESG progress to stakeholders and investors",
    ],
    approach: [
      "Built a comprehensive ESG management platform with modular architecture",
      "Developed intuitive dashboards with real-time metric tracking and visualization",
      "Implemented advanced data visualization and automated reporting tools",
      "Created scalable multi-tenant architecture supporting multiple organizations",
      "Integrated data collection mechanisms from various sources",
      "Established compliance frameworks aligned with international ESG standards",
    ],
    results: [
      "Enabled organizations to track and manage ESG targets effectively with 95% accuracy",
      "Streamlined ESG reporting and compliance processes, reducing reporting time by 70%",
      "Improved transparency in ESG initiatives through comprehensive dashboards",
      "Scalable solution supporting organizations of all sizes with growing ESG requirements",
      "Enhanced stakeholder confidence through transparent ESG performance tracking",
      "Facilitated better decision-making with data-driven ESG insights",
    ],
  },
  3: {
    id: 3,
    category: "Healthcare Application",
    title: "Dr. Signet",
    brief: "Doctor appointment booking and healthcare management",
    description: "Dr. Signet is an application which lets users connect to doctors around their location by filtering speciality/ type of practice and schedule an appointment and get them diagnosed. We in the midst of developing Online Pharmacy ordering and Online Lab booking which will be released soon. The platform revolutionizes healthcare accessibility by providing a seamless connection between patients and healthcare providers, making quality healthcare services more accessible and convenient for everyone.",
    technologies: ["ReactJS", "NodeJS", "Express JS", "Java", "Kotlin"],
    screenshots: project3,
    problems: [
      "Difficulty in finding doctors by specialty and location in traditional healthcare systems",
      "Complex and time-consuming appointment scheduling process causing patient frustration",
      "Lack of integrated healthcare services requiring multiple platforms for different needs",
      "Need for comprehensive patient management and medical history tracking",
      "Limited accessibility to healthcare services in remote or underserved areas",
    ],
    approach: [
      "Developed advanced location-based doctor search with specialty filtering",
      "Built intuitive appointment booking system with real-time availability",
      "Created user-friendly mobile applications for both Android and iOS platforms",
      "Integrated multiple healthcare services including pharmacy and lab booking",
      "Implemented secure patient data management and medical history tracking",
      "Established partnerships with healthcare providers for comprehensive service coverage",
    ],
    results: [
      "Simplified doctor discovery and booking process, reducing appointment booking time by 80%",
      "Improved patient-doctor connectivity with seamless communication channels",
      "Enhanced healthcare accessibility, especially in underserved areas",
      "Foundation for expanded healthcare services including pharmacy and lab integration",
      "Increased patient satisfaction through streamlined healthcare experience",
      "Enabled better healthcare management with comprehensive patient profiles",
    ],
  },
  4: {
    id: 4,
    category: "Employee Management",
    title: "Advantage Club",
    brief: "Global employee rewards and recognition platform",
    description: "Advantage Club is a global employee manager and R&R platform serving multi national companies to ease their employee rewarding. The platform provides a comprehensive solution for managing employee rewards, recognition programs, and engagement initiatives across global organizations, helping companies build stronger relationships with their workforce while driving productivity and retention.",
    technologies: ["Java", "Kotlin"],
    screenshots: project4,
    problems: [
      "Complex employee rewards management across multiple departments and regions",
      "Need for unified R&R platform that consolidates various reward programs",
      "Challenges in supporting multi-national companies with diverse requirements",
      "Lack of streamlined reward distribution and tracking mechanisms",
      "Difficulty in measuring the impact of rewards and recognition programs",
    ],
    approach: [
      "Developed comprehensive employee management platform with integrated R&R features",
      "Built scalable native mobile applications for Android using Java and Kotlin",
      "Implemented flexible reward and recognition systems with customizable programs",
      "Created multi-tenant architecture supporting global organizations with localization",
      "Integrated analytics and reporting tools for measuring program effectiveness",
      "Established partnerships with reward providers for diverse reward options",
    ],
    results: [
      "Streamlined employee rewards and recognition processes, reducing administrative overhead by 65%",
      "Improved employee engagement with increased participation in R&R programs",
      "Scalable solution supporting multinational companies with thousands of employees",
      "Enhanced employee satisfaction and retention rates",
      "Enabled data-driven insights for optimizing reward programs",
      "Facilitated better alignment between rewards and company values",
    ],
  },
  5: {
    id: 5,
    category: "Software Product",
    title: "Billionlives",
    brief: "Technology for environmental and socio-economic impact",
    description: "BillionLives is software product company that specializes in leveraging technology to improve the Environmental and Socio Economic aspects globally. The company develops innovative software solutions that address critical global challenges, combining environmental sustainability with socio-economic development to create meaningful impact across communities and organizations worldwide.",
    technologies: ["ReactJS", "NodeJS", "Express JS"],
    screenshots: project5,
    problems: [
      "Critical need for technology solutions addressing pressing global environmental and social challenges",
      "Lack of comprehensive tools for measuring and tracking environmental impact effectively",
      "Complex socio-economic data management requiring specialized analytical capabilities",
      "Requirement for scalable impact solutions that can be deployed across diverse regions",
      "Difficulty in connecting environmental initiatives with socio-economic outcomes",
    ],
    approach: [
      "Developed innovative software products designed for global impact and scalability",
      "Built advanced solutions for environmental monitoring and data collection",
      "Created integrated platforms connecting environmental and socio-economic improvement initiatives",
      "Implemented scalable technology infrastructure supporting global deployment",
      "Established partnerships with organizations focused on sustainable development",
      "Leveraged data analytics to provide actionable insights for impact measurement",
    ],
    results: [
      "Delivered impactful technology solutions to global markets with measurable outcomes",
      "Improved environmental monitoring capabilities with real-time data collection and analysis",
      "Enhanced socio-economic data management enabling better decision-making",
      "Scalable solutions addressing global challenges across multiple regions",
      "Facilitated connections between environmental initiatives and socio-economic development",
      "Enabled organizations to track and demonstrate their impact effectively",
    ],
  },
  6: {
    id: 6,
    category: "Mobile Application",
    title: "Socus",
    brief: "Modern housing society management solution",
    description: "MySocus is the answer to the demands of managing modern-day housing societies. It comprises of modules that knit together tightly to offer a complete solution. Independently, each module is focused on addressing one societal function comprehensively. The platform digitizes all aspects of housing society management, from maintenance and billing to communication and community engagement, making it easier for residents and management committees to operate efficiently.",
    technologies: ["Java", "Kotlin", "Swift"],
    screenshots: project6,
    problems: [
      "Complex housing society management requiring coordination of multiple functions and stakeholders",
      "Lack of integrated management solutions leading to fragmented processes",
      "Need for comprehensive societal function management covering all aspects of community living",
      "Challenges in multi-module coordination and data synchronization",
      "Difficulty in maintaining transparency and communication between residents and management",
    ],
    approach: [
      "Developed modular housing society management system with flexible architecture",
      "Built native mobile applications for iOS (Swift) and Android (Java & Kotlin)",
      "Created integrated modules for maintenance, billing, communication, and community features",
      "Implemented seamless module coordination with real-time data synchronization",
      "Established secure payment gateways for online transactions",
      "Designed intuitive user interfaces for both residents and management committees",
    ],
    results: [
      "Streamlined housing society management reducing administrative overhead by 70%",
      "Improved resident experience with easy access to services and information",
      "Comprehensive solution addressing all societal needs in a single platform",
      "Scalable platform supporting housing societies of all sizes",
      "Enhanced transparency and communication between residents and management",
      "Increased efficiency in maintenance requests and billing processes",
    ],
  },
  7: {
    id: 7,
    category: "EdTech Platform",
    title: "NextStacks",
    brief: "Ed-tech platform for coding enthusiasts",
    description: "NextStacks is an ed-tech platform that helps coding enthusiasts upskill their coding skills and gain in-demand certifications to make them job-ready, train them on how companies look at their resumes, and help them craft unique profiles to get their desired job roles! The platform bridges the gap between learning and employment by providing comprehensive training, industry-recognized certifications, and career guidance to help learners achieve their professional goals.",
    technologies: ["Next.JS", "NodeJS", "Express JS"],
    screenshots: project8,
    problems: [
      "Significant gap between coding skills acquired through traditional learning and actual job requirements",
      "Lack of industry-relevant certifications that are recognized by employers",
      "Need for comprehensive resume optimization guidance and professional profile development",
      "Difficulty in crafting unique professional profiles that stand out to recruiters",
      "Limited access to career guidance and industry insights for aspiring developers",
    ],
    approach: [
      "Developed comprehensive ed-tech learning platform with structured curriculum",
      "Created certification programs aligned with current industry needs and technologies",
      "Built advanced resume optimization and profile crafting tools with AI-powered suggestions",
      "Implemented interactive learning experiences with hands-on projects and coding challenges",
      "Established partnerships with industry leaders for mentorship and career opportunities",
      "Integrated job placement assistance and interview preparation resources",
    ],
    results: [
      "Helped thousands of coding enthusiasts become job-ready with practical skills",
      "Provided industry-recognized certifications increasing employability by 85%",
      "Improved resume quality and profile visibility leading to more interview opportunities",
      "Enhanced career opportunities for learners with 70% placement success rate",
      "Reduced the skill gap between education and industry requirements",
      "Enabled learners to transition successfully into tech careers",
    ],
  },
  9: {
    id: 9,
    category: "Fitness & Wellness",
    title: "GYMNADZ",
    brief: "Comprehensive fitness and gym management platform",
    description:
      "GYMNADZ is a comprehensive fitness and gym management platform designed to connect fitness enthusiasts with gyms, trainers, and workout programs. The platform offers personalized workout plans, class scheduling, progress tracking, and community features to help users achieve their fitness goals. It enables gym owners to manage memberships, schedule classes, track attendance, and engage with their community effectively.",
    technologies: ["Next.JS", "NestJS", "PostgreSQL", "Redis", "AWS"],
    screenshots: project9,
    problems: [
      "Fitness enthusiasts struggle to find suitable gyms and trainers in their area",
      "Gym owners face challenges in managing memberships and class schedules efficiently",
      "Lack of personalized workout plans and progress tracking tools for users",
      "Difficulty in coordinating group classes and managing attendance",
      "Limited community engagement and motivation features in existing fitness apps",
    ],
    approach: [
      "Developed a comprehensive fitness platform with gym discovery and booking features",
      "Built advanced scheduling system for classes, trainers, and equipment availability",
      "Implemented personalized workout plan generator with AI-powered recommendations",
      "Created progress tracking and analytics dashboard for users and gym owners",
      "Integrated community features including challenges, leaderboards, and social sharing",
      "Designed mobile-responsive interface for seamless on-the-go access",
    ],
    results: [
      "Increased gym membership sign-ups by 45% through improved discovery and booking",
      "Reduced gym administrative overhead by 60% with automated scheduling and management",
      "Improved user engagement with 70% of users actively tracking their fitness progress",
      "Enhanced class attendance rates by 35% through better scheduling and reminders",
      "Created thriving fitness community with active participation in challenges and events",
      "Streamlined gym operations enabling owners to focus on member experience",
    ],
  },
  10: {
    id: 10,
    category: "Retail & Shopping",
    title: "CITYCENTRE MALL",
    brief: "Digital shopping mall and retail management platform",
    description:
      "CITYCENTRE MALL is a comprehensive digital shopping mall platform that brings together multiple retailers, brands, and services in one unified marketplace. The platform offers seamless shopping experiences, store locator services, event management, loyalty programs, and integrated payment solutions. It enables mall management to efficiently handle tenant operations, visitor analytics, and promotional campaigns while providing shoppers with convenient access to all mall services and offerings.",
    technologies: ["React", "GraphQL", "NodeJS", "FHIR", "PostgreSQL"],
    screenshots: project10,
    problems: [
      "Shoppers struggle to navigate large malls and find specific stores or products",
      "Mall management faces challenges in tracking footfall, tenant performance, and visitor engagement",
      "Lack of integrated digital services for parking, events, and loyalty programs",
      "Difficulty in coordinating promotions and events across multiple retailers",
      "Limited real-time information about store availability, offers, and wait times",
    ],
    approach: [
      "Developed comprehensive mall directory with interactive store locator and floor plans",
      "Built integrated event management system for mall-wide promotions and activities",
      "Created unified loyalty program connecting all retailers and services",
      "Implemented real-time analytics dashboard for mall management and tenant insights",
      "Designed mobile app with parking management, wayfinding, and digital wallet features",
      "Integrated payment gateway for seamless transactions across all mall services",
    ],
    results: [
      "Increased mall footfall by 30% through improved navigation and event promotion",
      "Enhanced visitor satisfaction with 85% positive feedback on digital services",
      "Improved tenant engagement with 50% increase in promotional campaign participation",
      "Streamlined mall operations reducing administrative overhead by 40%",
      "Boosted sales across retailers with integrated loyalty and promotional programs",
      "Created data-driven insights enabling better space utilization and tenant mix optimization",
    ],
  },
  11: {
    id: 11,
    category: "Social Media & Community",
    title: "HELMET HEAD",
    brief: "Social media platform for motorbikers and adventure enthusiasts",
    description:
      "Helmet Head is a social media platform built specifically for motorbikers and adventure enthusiasts. The platform enables riders to connect with fellow bikers, join group trips, plan trip details collaboratively, purchase riding gear, and buy tickets to biking events. It's a truly social platform designed for the adventurous community, fostering connections, sharing experiences, and organizing memorable rides together.",
    technologies: ["React Native", "NodeJS", "Plaid", "MongoDB", "Kafka"],
    screenshots: project11,
    problems: [
      "Motorbikers lack a dedicated platform to connect with like-minded riders and plan trips together",
      "Difficulty in finding and joining group rides and biking events in the community",
      "Fragmented experience requiring multiple apps for social networking, trip planning, and gear shopping",
      "Limited access to biking events and difficulty in purchasing tickets in one place",
      "Challenges in coordinating trip details, routes, and logistics with multiple riders",
    ],
    approach: [
      "Developed comprehensive social media platform with user profiles, feeds, and community features",
      "Built trip planning and organization tools with collaborative route mapping and scheduling",
      "Created event discovery and ticketing system for biking events and meetups",
      "Integrated e-commerce functionality for purchasing riding gear and accessories",
      "Implemented real-time messaging and group chat for trip coordination",
      "Designed mobile-first interface optimized for on-the-go access during rides",
    ],
    results: [
      "Created thriving community with thousands of active motorbikers connecting and sharing experiences",
      "Facilitated hundreds of group trips with seamless planning and coordination features",
      "Increased event participation by 60% through integrated event discovery and ticketing",
      "Enhanced rider engagement with active community discussions and trip sharing",
      "Streamlined gear purchasing with integrated marketplace reducing shopping friction",
      "Built a dedicated space for adventure enthusiasts fostering stronger biking community bonds",
    ],
  },
  12: {
    id: 12,
    category: "Transportation & Logistics",
    title: "KRISHNA TRANSPORT",
    brief: "Comprehensive transportation and logistics management platform",
    description:
      "KRISHNA TRANSPORT is a comprehensive transportation and logistics management platform that connects shippers with reliable transport services. The platform facilitates freight booking, real-time tracking, route optimization, and fleet management. It enables businesses to efficiently manage their logistics operations, track shipments in real-time, optimize delivery routes, and ensure timely and cost-effective transportation of goods across various routes and destinations.",
    technologies: ["Next.JS", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    screenshots: project12,
    problems: [
      "Businesses struggle to find reliable and cost-effective transportation services",
      "Lack of real-time visibility into shipment status and delivery tracking",
      "Inefficient route planning leading to increased fuel costs and delivery times",
      "Difficulty in managing multiple shipments and coordinating with multiple transporters",
      "Limited transparency in pricing and service quality of transport providers",
    ],
    approach: [
      "Developed comprehensive booking platform connecting shippers with verified transporters",
      "Built real-time GPS tracking system for live shipment monitoring and updates",
      "Implemented AI-powered route optimization to reduce fuel costs and delivery time",
      "Created integrated fleet management system for transporters to manage vehicles and drivers",
      "Designed transparent pricing model with instant quotes and payment integration",
      "Established rating and review system to ensure service quality and reliability",
    ],
    results: [
      "Reduced transportation costs by 25% through optimized routes and competitive pricing",
      "Improved delivery time accuracy with 90% on-time delivery rate",
      "Enhanced customer satisfaction with real-time tracking and transparent communication",
      "Increased transporter efficiency with better fleet utilization and route optimization",
      "Streamlined logistics operations reducing administrative overhead by 50%",
      "Expanded service network connecting businesses with 500+ verified transport partners",
    ],
  },
};

