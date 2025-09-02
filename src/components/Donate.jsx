import { useState } from "react";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [isOneTime, setIsOneTime] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDonation = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setDonationAmount(50);
      }, 3000);
    }, 1500);
  };

  const presetAmounts = [20, 50, 100, 250, 500];

  return (
    <section
      id="donate"
      className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
    >
      <div className="max-w-7xl mxo px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Your generous donation will help us continue our mission to
              empower women and girls in Nigeria. Every contribution, no matter
              the size, makes a significant impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-yellow-400"></div>
                <span>100% of donations go directly to our programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-yellow-400"></div>
                <span>Tax-deductible in many countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-yellow-400"></div>
                <span>Secure and encrypted payments</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Donation Amount
              </h3>

              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h4>
                  <p className="text-gray-600">
                    Your donation has been received.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDonation}>
                  <div className="mb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setDonationAmount(amount)}
                          className={`py-3 px-4 rounded-lg border-2 font-medium text-center transition-colors ${
                            donationAmount === amount
                              ? "border-blue-600 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-blue-300 text-gray-700"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 font-medium">$</span>
                        </div>
                        <input
                          type="number"
                          min="1"
                          value={donationAmount}
                          onChange={(e) =>
                            setDonationAmount(parseInt(e.target.value) || 0)
                          }
                          className="w-full py-3 pl-6 pr-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Other"
                        />
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-gray-700 font-medium">
                          Donation Type
                        </span>
                        <div className="inline-flex rounded-md shadow-sm">
                          <button
                            type="button"
                            onClick={() => setIsOneTime(true)}
                            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                              isOneTime
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                            }`}
                          >
                            One-time
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsOneTime(false)}
                            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                              !isOneTime
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                            }`}
                          >
                            Monthly
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {isOneTime
                          ? "Your one-time donation will help us make an immediate impact."
                          : "Your monthly donation will provide ongoing support for our programs."}
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || donationAmount <= 0}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      `Donate $${donationAmount} ${!isOneTime ? "/month" : ""}`
                    )}
                  </button>
                </form>
              )}

              <p className="mt-4 text-center text-sm text-gray-500">
                Secure payment processing powered by our trusted partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
