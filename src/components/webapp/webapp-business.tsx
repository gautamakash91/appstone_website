"use client";

const cards = [
  {
    id: 1,
    title: "Reach",
    description:
      "It allows businesses to reach out to new customers and notify them about their products and services. Furthermore, it ensures a suitable communication line between potential clients and makes the business more accessible.",
  },
  {
    id: 2,
    title: "Security",
    description:
      "Web apps store information and other vital data on a cloud host, and you can safely log in anywhere with any device if you have your web address and log-in credentials.",
  },
  {
    id: 3,
    title: "Efficiency",
    description:
      "Having all of your data in one place provides you with a better understanding of your business and allows you to run updated reports in real-time and web apps help in simplifying corporate processes, allowing you to accomplish more in less time and with greater accuracy. ",
  },
];

const WebAppBusiness = () => {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2 md:max-w-md">
            <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
            How Web Apps Can Help You In Your Business
            </h2>
          </div>
          <p className="text-base leading-7 text-[#888D97] md:max-w-xl">
          Web apps make your business faster, smarter, and more accessible. They allow your customers to reach you anytime, automate your daily operations, and improve overall productivity. With a custom web app, you can manage sales, track inventory, handle customer data, and streamline communication in one place. It also helps reduce manual work, improves accuracy, and gives you real-time insights to make better decisions. A good web app enhances customer experience and helps your business grow more efficiently.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex h-full flex-col items-center gap-3 rounded-3xl border border-neutral-200 bg-white px-6 py-7 text-center shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2D73FF] text-base font-semibold text-white">
                {card.id}
              </div>
              <h3 className="text-lg font-semibold leading-7 text-[#1F2933]">
                {card.title}
              </h3>
              <p className="text-sm leading-6 text-[#888D97]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebAppBusiness;

