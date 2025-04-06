import FadeInSection from "./fade-in-section"

export default function FeaturesSection() {
  return (
    <FadeInSection>
      <section className="w-full p-6 bg-[#f9eee2] rounded-lg mx-auto my-8 max-w-7xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12">Submit your permit documents with confidence.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-r border-[#e67e22] pr-6">
              <h3 className="text-2xl font-bold mb-4">Permit risk detection</h3>
              <p className="text-gray-700">Eliminate costly errors with automated permit checks.</p>
            </div>

            <div className="border-r border-[#e67e22] pr-6">
              <h3 className="text-2xl font-bold mb-4">Streamline feedback from officials</h3>
              <p className="text-gray-700">Officials can leave direct comments within your workplace.</p>
            </div>

            <div className="border-r border-[#e67e22] pr-6">
              <h3 className="text-2xl font-bold mb-4">Compliance grading</h3>
              <p className="text-gray-700">Real-time suggestions and feedback.</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">One workplace, every stakeholder</h3>
              <p className="text-gray-700">Collaborate, edit, and finalize submittals on a single platform.</p>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

