import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: " Free",
      price: 0,
      benefits: [
        "everything on free",
        "Lifetime free",
        "unlimited deals",
        "localaized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 2,
      name: " Regular",
      price: 9.99,
      benefits: [
        "everything on regular",
        "Lifetime free",
        "unlimited deals",
        "localaized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
    {
      id: 3,
      name: " Premium",
      price: 19.99,
      benefits: [
        "everything on premium",
        "Lifetime free",
        "unlimited deals",
        "localaized deals",
        "fantastic deals",
        "crazy deals",
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-6xl font-mono text-white">Best Deals of the Town</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam autem
        alias pariatur!
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
