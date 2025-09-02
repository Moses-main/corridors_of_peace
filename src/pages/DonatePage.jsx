import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DonatePage = () => {
  const [amount, setAmount] = useState("50");
  const [donationType, setDonationType] = useState("one-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Donation submitted:", {
        amount,
        donationType,
        name,
        email,
        message,
      });
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form
      setAmount("50");
      setName("");
      setEmail("");
      setMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 pb-16 bg-gray-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Make a Donation
          </h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution will help us empower women and girls in
            Nigeria through education and economic opportunities.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="p-8 md:w-1/2 bg-blue-600 text-white">
              <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-200 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    100% of your donation goes directly to our programs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-200 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Tax-deductible in the United States (EIN: XX-XXXXXXX)
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-200 mr-2 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Secure and encrypted payment processing</span>
                </li>
              </ul>

              <div className="mt-8 bg-blue-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Other Ways to Give</h3>
                <ul className="text-sm space-y-2">
                  <li>• Bank Transfer</li>
                  <li>• Check by Mail</li>
                  <li>• Corporate Matching</li>
                  <li>• Stock Donations</li>
                </ul>
                <p className="text-xs mt-2 text-blue-200">
                  Contact us at donations@corridorsofpeace.org for more
                  information.
                </p>
              </div>
            </div>

            <div className="p-8 md:w-1/2">
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-8 rounded-lg text-center">
                  <svg
                    className="h-12 w-12 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>
                    Your donation has been received. A confirmation email has
                    been sent to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="amount"
                    >
                      Donation Amount (USD)
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset.toString())}
                          className={`px-4 py-2 border rounded-md text-center ${
                            amount === preset.toString()
                              ? "bg-blue-600 text-white border-blue-600"
                              : "border-gray-300 hover:border-blue-500"
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setAmount("")}
                        className={`px-4 py-2 border rounded-md text-center ${
                          !presetAmounts.includes(Number(amount))
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 hover:border-blue-500"
                        }`}
                      >
                        Other
                      </button>
                    </div>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.00"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Donation Type
                    </label>
                    <div className="flex rounded-md shadow-sm">
                      <button
                        type="button"
                        onClick={() => setDonationType("one-time")}
                        className={`flex-1 py-2 px-4 border rounded-l-md text-sm font-medium ${
                          donationType === "one-time"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setDonationType("monthly")}
                        className={`flex-1 py-2 px-4 border rounded-r-md text-sm font-medium ${
                          donationType === "monthly"
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-medium mb-2"
                      htmlFor="message"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add a personal message..."
                    ></textarea>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-600">
                          I agree to the{" "}
                          <a
                            href="/terms"
                            className="text-blue-600 hover:underline"
                          >
                            terms and conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="text-blue-600 hover:underline"
                          >
                            privacy policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      `Donate ${
                        donationType === "monthly" ? "Monthly" : "Now"
                      } $${amount || "0"}`
                    )}
                  </button>

                  <div className="mt-4 text-center text-xs text-gray-500">
                    <p>Secure payment processing powered by Stripe®</p>
                    <div className="mt-2 flex justify-center space-x-4">
                      <svg
                        className="h-6 w-auto"
                        fill="currentColor"
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                          fill="#6772E5"
                        ></path>
                        <path
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                          fill="#fff"
                        ></path>
                        <path
                          d="M13.9 6.6c-1.6 0-2.9.6-3.7 1.7l.1-.1-1.5 8.9h-3l2.6-15.1h3l-1 5.7c.6-.8 1.5-1.3 2.7-1.3.1 0 .2 0 .3.1v2.9c-.1 0-.3-.1-.5-.1-1.1 0-1.8.6-2.1 1.6l-1.3 7.5h3l1.3-7.5c.2-1.1.9-1.7 2.1-1.7 1.2 0 1.8.6 1.8 1.7v7.5h3v-8.3c0-2.1-1.2-3.6-3.4-3.6z"
                          fill="#6772E5"
                        ></path>
                        <path
                          d="M32 6.6c-1.6 0-2.9.6-3.7 1.7l.1-.1-1.5 8.9h-3l2.6-15.1h3l-1 5.7c.6-.8 1.5-1.3 2.7-1.3.1 0 .2 0 .3.1v2.9c-.1 0-.3-.1-.5-.1-1.1 0-1.8.6-2.1 1.6l-1.3 7.5h3l1.3-7.5c.2-1.1.9-1.7 2.1-1.7 1.2 0 1.8.6 1.8 1.7v7.5h3v-8.3c0-2.1-1.2-3.6-3.4-3.6z"
                          fill="#6772E5"
                        ></path>
                      </svg>
                      <svg
                        className="h-6 w-auto"
                        fill="currentColor"
                        viewBox="0 0 38 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                          fill="#5469D4"
                        ></path>
                        <path
                          d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                          fill="#fff"
                        ></path>
                        <path
                          d="M28 6h-2.7c-.7 0-1.3.5-1.5 1.2l-2.9 8.3h-3.8l-1.2-3.5c-.3-.8-1-1.3-1.8-1.3h-2.2c-.4 0-.8.3-.9.7L9.7 15H6l5.5-14h3.5l2.3 6.1c.2.5.7.9 1.3.9h1.7c.6 0 1.1-.4 1.3-.9L24 6h4z"
                          fill="#5469D4"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonatePage;
