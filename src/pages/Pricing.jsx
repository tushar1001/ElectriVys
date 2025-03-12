import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "Free",
      features: ["Limited Access", "Basic Support"],
    },
    {
      name: "Premium Plan",
      price: "₹799/month",
      features: ["Full Access", "Priority Support", "Exclusive Content"],
    },
    {
      name: "Pro Plan",
      price: "₹1499/month",
      features: ["All Premium Features", "VIP Support", "Business Tools"],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-green-800 px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-green-700">Choose Your Plan</h2>
      <p className="text-md md:text-lg mb-12 max-w-2xl text-center text-green-600">
        Find a plan that fits your needs and get started with exclusive benefits.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 md:p-8 rounded-xl shadow-xl transition-transform transform hover:scale-105 bg-green-100 text-green-800 text-center border border-green-400"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-green-700">{plan.name}</h3>
            <p className="text-3xl md:text-4xl font-bold mb-5 text-green-900">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-md md:text-lg text-green-700">✅ {feature}</li>
              ))}
            </ul>
            <button className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;