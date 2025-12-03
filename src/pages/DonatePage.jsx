import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DonatePage = () => {
  // Bank details state
  const [copied, setCopied] = useState({
    accountNumber: false,
    accountName: false,
    bankName: false,
    swiftCode: false,
  });

  // Handle copy to clipboard
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [field]: true });
    setTimeout(() => {
      setCopied({ ...copied, [field]: false });
    }, 2000);
  };

  // Bank details
  const bankDetails = {
    accountName: "CORRIDORS OF PEACE FOUNDATION",
    accountNumber: "1234567890",
    bankName: "ZENITH BANK PLC",
    swiftCode: "ZEBLNGLA",
    bankAddress: "123 Peace Avenue, Abuja, Africa (Nig)",
    note: "Please include your full name and email in the transaction description for our records.",
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
            Support Our Cause
          </h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution will help us empower women and girls in
            Africa (Nig) through education and economic opportunities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Left Side - Bank Details */}
            <div className="p-8 md:w-1/2 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Bank Transfer Details
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    Local Transfer (Africa (Nig))
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Account Name",
                        value: bankDetails.accountName,
                        id: "accountName",
                      },
                      {
                        label: "Account Number",
                        value: bankDetails.accountNumber,
                        id: "accountNumber",
                      },
                      {
                        label: "Bank Name",
                        value: bankDetails.bankName,
                        id: "bankName",
                      },
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="border-b border-gray-100 pb-3"
                      >
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="font-medium text-gray-800">
                            {item.value}
                          </p>
                          <button
                            onClick={() => copyToClipboard(item.value, item.id)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                            title="Copy to clipboard"
                          >
                            {copied[item.id] ? "Copied!" : "Copy"}
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    International Transfer
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Account Name",
                        value: "CORRIDORS OF PEACE",
                        id: "intlAccountName",
                      },
                      {
                        label: "Account Number",
                        value: "CH 27 8093 9000 0045 62641",
                        id: "intlAccountNumber",
                      },
                      {
                        label: "Bank Name",
                        value: "Raiffeisen Bank IBAN ",
                        id: "intlBankName",
                      },
                      // {
                      //   label: "SWIFT Code",
                      //   value: bankDetails.swiftCode,
                      //   id: "swiftCode",
                      // },
                      // {
                      //   label: "Bank Address",
                      //   value: bankDetails.bankAddress,
                      //   id: "bankAddress",
                      // }
                      ,
                    ].map((item) => (
                      <div
                        key={item.id}
                        className="border-b border-gray-100 pb-3"
                      >
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <div className="flex justify-between items-center mt-1">
                          <p className="font-medium text-gray-800">
                            {item.value}
                          </p>
                          <button
                            onClick={() => copyToClipboard(item.value, item.id)}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                            title="Copy to clipboard"
                          >
                            {copied[item.id] ? "Copied!" : "Copy"}
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h2a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        {bankDetails.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Giving Illustration */}
            <div className="p-8 md:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-center">
              <div className="max-w-xs mx-auto">
                {/* Hand holding heart icon */}
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-blue-200 opacity-30"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-blue-300 opacity-30"></div>
                  <div className="relative z-10 mx-auto w-40 h-40 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
                    <img
                      src="/images/logo/cop_logo2.jpg"
                      alt="Corridors of Peace Logo"
                      className="h-full w-full rounded-full object-cover border-2 border-white"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/logo/cop_logo1.jpg";
                      }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Your Support Makes a Difference
                </h2>
                <p className="text-gray-600 mb-6">
                  Every contribution helps us create sustainable change in the
                  lives of women and girls in Africa (Nig). Your generosity
                  provides education, resources, and opportunities for a better
                  future.
                </p>

                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      100% of donations go directly to our programs
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Tax-deductible donations
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Secure and transparent process
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    For questions about donations, email us at{" "}
                    <a
                      href="mailto:corridorsofpeacenigeria@gmail.com"
                      className="text-blue-600 hover:underline"
                    >
                      corridorsofpeacenigeria@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DonatePage;
