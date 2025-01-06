import React from "react";

const TermsCondition = () => {
  return (
    <div className="flex flex-col items-center  p-6 min-h-screen">
      <div className="w-full max-w-4xl   rounded-lg p-8">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-center text-primary">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">Introduction</h2>
          <p className="text-gray-700">
            Welcome to our game review website! We are thrilled to have you here
            and hope you enjoy exploring our platform. By accessing or using our
            website, you agree to abide by the terms and conditions outlined
            below. These terms are designed to ensure a safe, enjoyable, and
            fair experience for all users. Whether you are reading reviews,
            submitting your opinions, or engaging with other users, we encourage
            you to adhere to these guidelines. Please take the time to read
            these terms carefully as they outline your rights, responsibilities,
            and the rules governing your use of this website. Your continued use
            of our site signifies your acceptance of these terms, so if you have
            any questions or concerns, feel free to contact us. Happy reviewing!
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">User Responsibilities</h2>
          <p className="text-gray-700">
          Users of our game review website are expected to maintain integrity and respect while using the platform. This includes providing accurate and genuine reviews based on their personal experiences. Users must refrain from posting any content that is abusive, hateful, inappropriate, or violates the rights of others. It is essential to ensure that all contributions, including reviews and comments, are original and free of any copyrighted material unless proper permission has been obtained. By adhering to these responsibilities, users help create a trustworthy and welcoming community for all.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">
            Content Ownership and Licensing
          </h2>
          <p className="text-gray-700">
          By submitting content such as reviews, comments, or other materials to our website, users retain ownership of their contributions. However, by doing so, you grant us a non-exclusive, worldwide, royalty-free license to use, display, distribute, and modify your content for the purpose of operating and promoting the website. This ensures that we can showcase your reviews and maintain the functionality of our platform. We reserve the right to remove or modify any content that violates our terms, infringes on intellectual property rights, or is deemed inappropriate.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">Intellectual Property</h2>
          <p className="text-gray-700">
          All content, design elements, logos, and branding on this website are the exclusive intellectual property of the site owner unless otherwise stated. This includes the website's layout, graphics, and functionality. Users are prohibited from copying, reproducing, distributing, or using any of these materials for commercial purposes without explicit written permission. Unauthorized use or infringement of our intellectual property rights may result in legal action. Users are encouraged to respect the intellectual property of others while contributing to the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">Prohibited Activities</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Spamming or posting irrelevant content</li>
            <li>Hacking or attempting unauthorized access</li>
            <li>Using bots or scraping tools</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">
            Disclaimer of Warranties
          </h2>
          <p className="text-gray-700">
            We provide the website and its content "as is" without warranties of
            any kind. Reviews represent user opinions and not our endorsements.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">
            Limitation of Liability
          </h2>
          <p className="text-gray-700">
          We strive to ensure that our website operates smoothly and that all content is accurate and up-to-date. However, we cannot guarantee that the platform will always function without interruptions, errors, or omissions. By using our website, you agree that we are not liable for any damages arising from inaccuracies in user-submitted reviews, server downtime, technical issues, unauthorized access, or loss of data. Your use of the website is at your own risk, and we disclaim all liability to the fullest extent permitted by law.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">Modification of Terms</h2>
          <p className="text-gray-700">
            We reserve the right to update these terms at any time. Continued
            use of the website constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl  mb-2 text-cyan-400 font-bold">Governing Law</h2>
          <p className="text-gray-700">
            These terms are governed by the laws of [Your Country/State]. Any
            disputes will be resolved in the appropriate jurisdiction.
          </p>
        </section>

        <section className="text-center mt-6">
          <p className="text-gray-700">
            If you have any questions about these terms, feel free to contact us
            at
            <span className="text-blue-500"> chill@gamer.com</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsCondition;
