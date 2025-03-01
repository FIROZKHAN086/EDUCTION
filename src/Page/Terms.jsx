import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const Terms = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using Real Education, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li className="mb-2">Provide accurate and complete information when using our services</li>
                <li className="mb-2">Maintain the confidentiality of your account credentials</li>
                <li className="mb-2">Use the content and services for personal, non-commercial purposes only</li>
                <li className="mb-2">Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Educational Content</h2>
              <p className="text-gray-600 mb-4">
                The educational content provided on our platform is for informational purposes only. 
                While we strive to maintain accuracy, we do not guarantee the completeness or reliability of any content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, including text, graphics, logos, and images, is protected by copyright and other intellectual property rights.
                You may not reproduce, distribute, or modify any content without our explicit permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                Your use of our services is also governed by our Privacy Policy. Please review our 
                <Link to="/privacy" className="text-blue-600 hover:text-blue-800 ml-1">Privacy Policy</Link> 
                to understand how we collect and use your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Real Education shall not be liable for any indirect, incidental, special, or consequential damages 
                arising from your use of our services or any content provided on the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Continued use of our services after changes 
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For any questions regarding these Terms and Conditions, please contact us at:
                <a href="mailto:computerpc096@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">
                  computerpc096@gmail.com
                </a>
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
