import React, { useState } from "react";

const plans = [
  {
    name: "Yearly",
    price: "€ 94.80",
    period: "every year",
    discount: "-66% discount",
    id: "yearly",
  },
  {
    name: "Monthly",
    price: "€ 10.90",
    period: "every month",
    discount: "-53% discount",
    id: "monthly",
  },
  {
    name: "Weekly",
    price: "€ 5.90",
    period: "every week",
    discount: "",
    id: "weekly",
  },
];

export default function SubscriptionPlans() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-sm">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
            Templates
          </p>
          <h2 className="text-xl font-bold text-gray-900">
            Subscription plans
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow p-4 space-y-4">
          <div className="text-left">
            <h3 className="text-lg font-bold text-gray-900">
              Choose your subscription plan
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              And get a 7-day free trial
            </p>
          </div>

          <div className="space-y-3">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`border rounded-lg px-4 py-3 flex justify-between items-center cursor-pointer ${
                  selectedPlan === plan.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      selectedPlan === plan.id
                        ? "border-blue-600 bg-blue-600"
                        : "border-gray-400"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-medium">{plan.name}</p>
                    {plan.discount && (
                      <p className="text-xs text-blue-500">{plan.discount}</p>
                    )}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="font-semibold">{plan.price}</p>
                  <p className="text-gray-400">{plan.period}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 mb-5 rounded-lg p-4 space-y-2 text-sm text-gray-700">
            <p>⭐ Unlimited access</p>
            <p>⭐ 200GB storage</p>
            <p>⭐ Sync all your devices</p>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}