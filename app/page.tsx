import ContactForm from "@/components/contact-form"
import FeaturesSection from "@/components/features-section"
import HeroSection from "@/components/title-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <div className="py-16">
        <ContactForm />
      </div>
      <Footer/>
    </main>
  )
}

