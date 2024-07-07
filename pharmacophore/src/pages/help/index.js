import Navbar from "@/components/Navbar";
import React from "react";

const HelpPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">FAQs</h2>
            <div className="space-y-2">
              <div>
                <h3 className="font-semibold">What is Pharmacore?</h3>
                <p>
                  Pharmacore is a platform dedicated to advancing bioactivity
                  and pharmacological research.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How can I access my account?</h3>
                <p>
                  You can access your account by clicking on the "Login" button
                  in the top-right corner of the page.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Can I request a demo?</h3>
                <p>
                  Yes, you can request a demo by contacting our support team at
                  support@pharmacore.com.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p>
              If you have any further questions or need assistance, please feel
              free to contact us at support@pharmacore.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
