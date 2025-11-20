import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="content-frame max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Terms of Service for JEXFLOW
            </h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: November, 7, 2025
            </p>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="p-6 bg-card/30 border border-border/20 rounded-lg">
              <p className="font-semibold text-foreground">
                PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THE SERVICES OFFERED BY US.
              </p>
              <p className="mt-4 text-foreground">
                BY ACCESSING OR USING OUR WEBSITE jexflow.com OR OUR AI CONSULTING AND SERVICES AI RECEPTIONISTS, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service form a legally binding agreement between the client and JEXFLOW. By engaging our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                JEXFLOW provides AI-powered services, including but not limited to AI receptionists, lead generation, proposal generation, structure repurposing. The specific scope of work for each project will be detailed in a separate proposal, statement of work, or service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Client Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information as required for us to perform the Services.</li>
                <li>Obtain all necessary permissions, rights, and licenses for any data, content, or materials you provide to us.</li>
                <li>Ensure that your use of our Services complies with all applicable laws and regulations.</li>
                <li>Not use our Services to generate content that is illegal, infringing, defamatory, obscene, pornographic, or promotes hate speech or violence.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Client Materials:</strong> You retain all ownership rights to the data, information, and content you provide to us.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Our IP:</strong> We retain all ownership rights to our pre-existing technology, software, know-how, and the Site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Output & Deliverables:</strong> Upon your full and final payment for the Services, we hereby assign to you all rights, title, and interest in the final deliverables specifically created for you as outlined in the project SOW. You acknowledge that the Services may utilize third-party AI models, and the Deliverables may be influenced by such technologies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Fees:</strong> You agree to pay all fees as specified in the invoice, proposal, or SOW.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Payment Schedule:</strong> Unless otherwise stated, payment is due 50% upfront, 50% upon delivery or Net 15/30 upon invoice date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. AI & Third-Party Tools Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-semibold">
                CRITICAL: YOU ACKNOWLEDGE AND AGREE THAT OUR SERVICES ARE PROVIDED USING THIRD-PARTY ARTIFICIAL INTELLIGENCE PLATFORMS AND TOOLS (E.G., OPENAI, ELEVENLABS, N8N, ETC.).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We do not guarantee the accuracy, completeness, or reliability of outputs generated by these AI tools.</li>
                <li>AI outputs may sometimes be inaccurate, biased, or erroneous and should not be solely relied upon for critical decisions.</li>
                <li>We are not liable for any changes, outages, or discontinuation of services by these third-party providers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL JEXFLOW, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES PAID BY YOU TO US IN THE THREE (3) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. No Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless JEXFLOW from any claims, damages, or losses arising from (a) your breach of these Terms, (b) your use of the Services, or (c) your violation of any law or the rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your access to the Services immediately, without prior notice, if you breach these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Rabat-Salé-Kénitra, MOROCCO, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify you of changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-2">
                Email: <a href="mailto:contact@jexflow.com" className="text-primary hover:underline">contact@jexflow.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
