import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateSEOMetadata({
  title: "Privacy Policy - Appstone",
  description:
    "Read Appstone's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data practices and your privacy rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy rights",
    "Appstone privacy",
    "data security",
  ],
  url: "https://appstone.in/privacy",
});

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
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
              Welcome to Appstone ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
              <a href="https://appstone.in" className="text-blue-600 hover:underline">
                appstone.in
              </a>{" "}
              or use our services.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              By accessing or using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
              2.1 Personal Information
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <li>Contact us through our website forms or email</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletters or marketing communications</li>
              <li>Engage with our customer support</li>
              <li>Participate in surveys or feedback forms</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700 mb-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Business address</li>
              <li>Project requirements and details</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We use the collected information for various purposes, including:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>To provide, maintain, and improve our services</li>
              <li>To respond to your inquiries, requests, and comments</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To process transactions and manage client relationships</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or serving our clients, provided they agree to keep this information confidential.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share your information with your explicit consent for any other purpose.
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our security measures include:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device that help us improve your browsing experience.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We use cookies for:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Website functionality and user preferences</li>
              <li>Analytics and performance monitoring</li>
              <li>Marketing and advertising (with consent)</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              7. Your Rights
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <strong>Access:</strong> Request access to your personal information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your personal information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to another service
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              8. Data Retention
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to the transfer of your information to our facilities and those third parties with whom we share it as described in this policy.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicyPage;

