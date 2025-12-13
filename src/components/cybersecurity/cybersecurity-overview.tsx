"use client";

const introParagraph =
  "Even the smallest of organizations has a digital footprint. A phone, a tablet, a laptop, a Wi-Fi connection, a printer, a CCTV system, attendance system and so on. Scale this up with the scale of the organization, and you have a whole network of systems. Now add to this the data which an organization works with – internal data coming from these systems, external client-based data, contact data, marketing data, financial data, human resources data, operational data, and yet again, so many other types of data, given the quantum of data being generated just daily.";

const regulationParagraph =
  "Now add to this regulations and laws which govern the industry you are in, and compliances which must be followed and met with. Some of these laws concern your digital footprint as well.";

const requirementParagraph =
  "This requires every organization to work on their cyber security measures – both for compliances, as well as threats like –";

const threats = [
  "Privacy Breaches",
  "Phishing Attacks",
  "Data Security Breaches",
  "Social Engineering and Ransomware Attacks",
  "Cloud Breaches",
  "Attacks on your devices",
];

const closingParagraph =
  "Appstone offers a comprehensive set of cyber security products to protect your organization from such threats, while ensuring compliances are being met.";

const CybersecurityOverview = () => {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:gap-12">
        <div className="w-full md:w-2/5">
          <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            Why Cyber Security Is Important For Business
          </h2>
        </div>

        <div className="w-full md:w-3/5 space-y-6 text-[#888D97]">
          <p className="text-lg leading-8">{introParagraph}</p>
          <p className="text-lg leading-8">{regulationParagraph}</p>
          <p className="text-lg leading-8">{requirementParagraph}</p>

          <ol className="space-y-2 text-lg leading-8 text-[#888D97]">
            {threats.map((item, idx) => (
              <li key={item} className="flex gap-2">
                <span className="font-semibold text-[#888D97]">{idx + 1}.</span>
                <span className="text-[#888D97]">{item}</span>
              </li>
            ))}
          </ol>

          <p className="text-lg font-semibold leading-8 text-[#888D97]">
            {closingParagraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityOverview;

