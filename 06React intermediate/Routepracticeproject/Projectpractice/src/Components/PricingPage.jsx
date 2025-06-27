import React from "react";
import PricingCard from "./PricingCard";

const PricingPage = () => {
  const pricingPlans = [
    {
      plan: "Basic",
      price: 499,
      features: [
        "Access to all recorded courses",
        "Downloadable PDFs",
        "Email Support",
      ],
    },
    {
      plan: "Pro",
      price: 999,
      features: [
        "Everything in Basic",
        "Access to Live Classes",
        "Project Assignments",
        "Certificate of Completion",
      ],
      highlight: true,
    },
    {
      plan: "Enterprise",
      price: 1999,
      features: [
        "Everything in Pro",
        "1-on-1 Mentorship",
        "Resume Building Help",
        "Career Guidance Sessions",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-8">Our Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
