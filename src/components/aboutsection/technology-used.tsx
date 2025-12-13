"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { IconCloud } from "../ui/snappy-icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  // AI/ML Technologies
  "python",
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "mlflow",
  // Business Intelligence
  "powerbi",
  "tableau",
  "qlikview",
  "microsoftsqlserver",
  // Data Analysis
  "r",
  "sql",
  "microsoftexcel",
  // DevOps
  "kubernetes",
  "terraform",
  "jenkins",
  "gitlabci",
  // Digital Marketing
  "googleads",
  "facebook",
  "hubspot",
  "mailchimp",
  // UI/UX Design
  "adobexd",
  "sketch",
  "invision",
];

const Technologies = () => {
  return (
    <section className="relative items-center justify-center  md:flex-row md:justify-between">
      {/* Top Line with Icon */}
      <div className="flex flex-col items-center justify-center py-20 bg-white px-5">
        <motion.h2
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Technologies We Use
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Our experts leverage the latest tools and frameworks to deliver
          innovative and robust solutions for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="relative flex w-full min-h-[300px] items-center justify-center overflow-hidden px-4 pb-20 pt-8"
        >
          <IconCloud iconSlugs={slugs} />
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

