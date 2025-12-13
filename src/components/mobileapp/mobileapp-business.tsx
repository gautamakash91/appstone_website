"use client";

const cards = [
  {
    id: 1,
    title: "Accessibility",
    description:
      "Users may quickly browse and download mobile apps. When things are in hand, the user feels more connected and secure.",
  },
  {
    id: 2,
    title: "Efficiency",
    description:
      "Businesses benefit from mobile apps to make customer service more accessible and efficient. Customers can reach out to the help desk at any time.",
  },
  {
    id: 3,
    title: "Engagement",
    description:
      "With the help of marketing, a mobile app can be tailored to increase engagement. You can use mobile apps to bring the best deals in front of customers' eyes.",
  },
];

const MobileAppBusiness = () => {
  return (
    <section className="bg-white py-12 sm:py-14 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:gap-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2 md:max-w-md">
            <h2 className="text-3xl font-semibold leading-tight text-[#1F2933] sm:text-4xl">
              How Mobile Apps Can Help You In Your Business
            </h2>
          </div>
          <p className="text-base leading-7 text-[#888D97] md:max-w-xl">
            Mobile apps help your business stay connected with customers anytime
            and anywhere. They make your services more accessible, improve
            customer engagement, and offer a faster way to interact. With a
            mobile app, you can send instant updates, automate bookings, manage
            orders, and provide personalized experiences. It also simplifies
            internal operations, increases brand visibility, and strengthens
            customer loyalty. A well-designed mobile app can boost sales,
            improve efficiency, and help your business grow faster in today’s
            digital world.
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
              <p className="text-sm leading-6 text-[#888D97]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppBusiness;
