import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateSEOMetadata({
  title: "Terms & Conditions - Appstone",
  description:
    "Read Appstone's Terms and Conditions to understand the rules and regulations for using our website and services. Learn about your rights and obligations.",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "Appstone terms",
    "service terms",
  ],
  url: "https://appstone.in/terms",
});

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm max-w-none space-y-8 sm:space-y-10">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Welcome to Appstone. These Terms and Conditions ("Terms") govern your access to and use of our website{" "}
              <a href="https://appstone.in" className="text-blue-600 hover:underline">
                appstone.in
              </a>{" "}
              and our services, including but not limited to web development, mobile app development, business intelligence, cybersecurity, integration, and IT outsourcing services.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our services.
            </p>
          </section>

          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              2. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              By accessing, browsing, or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, you must discontinue use of our website and services immediately.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              3. Services Description
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Appstone provides digital solutions and technology services, including:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Web Application Development</li>
              <li>Mobile Application Development (iOS and Android)</li>
              <li>Business Intelligence and Data Analytics</li>
              <li>Cybersecurity Services</li>
              <li>Third-Party Integration Services</li>
              <li>IT Outsourcing and Software Development</li>
              <li>Digital Marketing Services</li>
              <li>UI/UX Design Services</li>
              <li>DevOps Engineering</li>
              <li>AI and Machine Learning Services</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              4. Use of Website
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              4.1 Permitted Use
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit any harmful, offensive, or illegal content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the website or services</li>
              <li>Use automated systems to access the website without permission</li>
              <li>Copy, reproduce, or distribute content without authorization</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 mt-6">
              4.2 User Accounts
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              5. Intellectual Property Rights
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, software, and code, is the property of Appstone or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Reproduce, distribute, or create derivative works from our content</li>
              <li>Use our trademarks or logos without written permission</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use our content for commercial purposes without authorization</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              Any work product created by Appstone for clients remains the property of the client upon full payment, subject to any specific agreements to the contrary.
            </p>
          </section>

          {/* Service Agreements */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              6. Service Agreements
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              When you engage our services:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <li>A separate service agreement or contract will be executed</li>
              <li>Terms specific to your project will be outlined in the agreement</li>
              <li>Payment terms, deliverables, and timelines will be specified</li>
              <li>Intellectual property rights will be addressed in the agreement</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              In case of conflict between these Terms and a specific service agreement, the service agreement shall prevail.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              7. Payment Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Payment terms for our services will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Payment schedules will be agreed upon before project commencement</li>
              <li>Late payments may incur interest charges as specified in the agreement</li>
              <li>All prices are subject to change without notice until a contract is signed</li>
              <li>Refunds are subject to the terms of the specific service agreement</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          {/* Warranties and Disclaimers */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              8. Warranties and Disclaimers
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              8.1 Service Warranties
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We warrant that our services will be performed in a professional and workmanlike manner. Specific warranties will be outlined in individual service agreements.
            </p>

         
     
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, APPSTONE SHALL NOT BE LIABLE FOR:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Damages resulting from use or inability to use our website or services</li>
              <li>Third-party claims arising from your use of our services</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              Our total liability for any claims shall not exceed the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              10. Indemnification
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Appstone, its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Your use of our website or services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Content or materials you provide to us</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice, for any reason, including:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Any other reason we deem necessary</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination will remain in effect.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              12. Confidentiality
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This obligation will survive termination of any service agreement.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              13. Governing Law and Jurisdiction
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              14. Changes to Terms
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on this page and updating the "Last Updated" date. Your continued use of our website and services after such changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              15. Severability
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              16. Entire Agreement
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              These Terms, together with any service agreements, constitute the entire agreement between you and Appstone regarding the use of our website and services, superseding any prior agreements.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              17. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
              <p className="text-sm sm:text-base text-gray-900 font-semibold mb-2">
                Appstone
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>Address:</strong> 428 DLF Cybercity, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha 751024, India
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@appstone.in" className="text-blue-600 hover:underline">
                  info@appstone.in
                </a>
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <strong>Phone:</strong>{" "}
                <a href="tel:+917809424281" className="text-blue-600 hover:underline">
                  +91-7809424281
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;

