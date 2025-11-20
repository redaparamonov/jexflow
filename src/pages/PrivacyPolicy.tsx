import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-24">
        <div className="content-frame max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
            Privacy Policy for JEXFLOW
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Last Updated: November, 5 2025
          </p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <p className="text-muted-foreground">
              This Privacy Policy describes how we collects, uses, and shares your personal information when you use our website jexflow.com and our AI agency services (ai receptionists, ).
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect several types of information:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Information You Provide:</h3>
                  <p className="text-muted-foreground">This includes information you provide when contacting us, or becoming a client. Examples: your name, email address, phone number, company name.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Client Project Data:</h3>
                  <p className="text-muted-foreground">This is any data, content, or materials you provide to us for the purpose of utilizing our AI Services. This may include documents, text, images, audio files, business information, accounts credentials, or any other data you submit for processing. We treat this data as confidential.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Automatically Collected Information:</h3>
                  <p className="text-muted-foreground">When you visit our Site, we automatically collect information like your IP address, browser type, operating system, referring URLs, and information about your interactions with our Site.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect for the following purposes:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">To Provide and Maintain Our Services:</h3>
                  <p className="text-muted-foreground">To fulfill your requests, process your data using AI tools, manage your account, and provide customer support.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">To Communicate With You:</h3>
                  <p className="text-muted-foreground">To respond to your inquiries, send you important administrative information (like invoices and project updates), and notify you about changes to our services.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">For Marketing:</h3>
                  <p className="text-muted-foreground">With your explicit consent, to send you newsletters, marketing or promotional materials. You can opt-out of these at any time.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">For Improvement:</h3>
                  <p className="text-muted-foreground">To analyze how our Site and Services are used, monitor usage patterns, and improve your experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">3. Sharing Your Information with Third Parties</h2>
              <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share your information with third parties in the following situations:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Service Providers:</h3>
                  <p className="text-muted-foreground">To deliver our Services, we submit your Client Project Data to third-party artificial intelligence platforms, such as OpenAI, ElevenLabs and others. Your data is subject to the privacy policies and terms of service of these third-party providers. We carefully select providers committed to data security.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Service Providers:</h3>
                  <p className="text-muted-foreground">We use other companies and individuals to support our business, such as payment processors (e.g., Stripe), and cloud hosting providers (e.g, Google Cloud). They have access to your information only to perform tasks on our behalf and are obligated not to disclose or use it for other purposes.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Obligations:</h3>
                  <p className="text-muted-foreground">We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">4. International Data Transfers</h2>
              <p className="text-muted-foreground">Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ. By using our Services, you consent to this transfer.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">5. Data Security</h2>
              <p className="text-muted-foreground">We implement commercially acceptable security measures designed to protect your data from unauthorized access, alteration, disclosure, or destruction. These include encryption (SSL/TLS) for data in transit and strict access controls internally. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">6. Data Retention</h2>
              <p className="text-muted-foreground">We will retain your Personal Information only for as long as is necessary for the purposes set out in this Policy. Client Project Data is typically retained for [e.g., 90 days] after project completion to allow for review and revisions, after which it is securely deleted. You can request earlier deletion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">7. Your Data Protection Rights</h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you have certain data protection rights, including:</p>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to object to our processing of your personal data.</li>
                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you.</li>
              </ul>

              <p className="text-muted-foreground mt-4">To exercise any of these rights, please contact us at: privacy@jexflow.com</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">8. Cookies</h2>
              <p className="text-muted-foreground">We use cookies and similar tracking technologies to track activity on our Site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gradient">10. Contact Us</h2>
              <p className="text-muted-foreground">If you have any questions about this Privacy Policy, please contact us:</p>
              <p className="text-muted-foreground mt-2">By Email: privacy@jexflow.com</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
