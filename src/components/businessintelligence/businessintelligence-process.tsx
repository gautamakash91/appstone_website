"use client";

import { Button } from "@/components/ui/button";

type Step = {
  id: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Data Extraction",
    description:
      "Data extraction is the process of obtaining raw data, be it from a transactional database, an API or as primitive as from a flat file.",
  },
  {
    id: 2,
    title: "Data Storage",
    description:
      "Extracted data has to be stored somewhere to study. Depending on the kind of data and size of data, we might store it in either No SQL, SQL or in a big data environment. This is the staging area for the data. This is a temporary storage, where the data will be transformed.",
  },
  {
    id: 3,
    title: "Data Transformation",
    description:
      "The raw data can't be read or analyzed without cleaning or aggregation since the data might contain a lot of noise or extra information which might not be required for analysis.",
  },
  {
    id: 4,
    title: "Data Loading",
    description:
      "This can be treated as the last step of the ETL(extraction, transform, load) process. Here we load the data in the data warehouse which will be further used to do all kinds of visualization or data related analysis.",
  },
  {
    id: 5,
    title: "Analysis Services",
    description:
      "After the process of data loading is completed we create OLAP cubes which changes the data analysis to drag and drop action and does not require to write any queries in the database. This helps to save time and also simplifies the process.",
  },
  {
    id: 6,
    title: "Data Visualization",
    description:
      "This is done on either top of the database layer or on top of analysis services. We can leverage the power of tools like Power BI, Tableau and QlikView to visualise and create reports.",
  },
];

const BusinessIntelligenceProcess = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-2xl font-semibold leading-8 text-[#1F2933] sm:text-3xl">
              What We Do On A Day
            </p>
            <p className="text-2xl font-semibold leading-8 text-[#1F2933] sm:text-3xl">
              To Day Basis
            </p>
          </div>
       
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-row gap-4 rounded-2xl border border-neutral-200 bg-linear-to-br from-white to-[#f7f9fb] px-6 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)] sm:gap-5 sm:px-7 sm:py-7"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2D73FF] text-base font-semibold text-white sm:h-16 sm:w-16 sm:text-lg">
                {step.id}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-7 text-[#2A2E32] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="text-base leading-7 text-[#888D97]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessIntelligenceProcess;

