"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import FadeInSection from "./fade-in-section"
import DemoDialog from "./demo-dialog"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [email, setEmail] = useState("")
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDemoClick = () => {
    setDialogOpen(true)
  }

  return (
    <FadeInSection>
      <section className="min-h-screen bg-[#f9eee2] flex items-center justify-center px-6 py-6">
        <div className="container mx-auto flex flex-col lg:flex-row gap-24">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Permit approvals,
              <br />
              without the chaos.
            </h1>
            <p className="text-xl">
              No guesswork, no delays — Structure tells you what to submit, when to submit it, and how to get it right
              the first time.
            </p>
            <div className="flex mt-8">
              <div className="relative flex-grow max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
                />
                <button
                  onClick={handleDemoClick}
                  className="absolute right-0 top-0 bottom-0 flex items-center px-6 bg-gradient-to-r from-[#e67e22] to-[#f39c12] text-white rounded-full hover:opacity-90"
                >
                  Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 relative">
            <div className="max-w-md ml-auto">
              {/* Zoning Info Card (behind, peeking more) */}
              <div className="relative z-0 w-[75%] mx-auto mt-30 bg-white p-3 border border-gray-200 rounded-md">
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="mb-2">
                    <span className="font-medium text-gray-800">Zoning:</span>{" "}
                    <span className="underline text-red-600">R1 (Residential)</span>
                  </p>
                  <p className="text-gray-700">
                    Proposed Use: 12-story luxury hotel with 250 rooms, rooftop amenities, and event spaces.
                  </p>
                </div>
              </div>

              {/* Zoning Conflict Card (pulled further up) */}
              <div className="relative -mt-6 z-10 bg-white rounded-md p-6 border-[1px] border-[#A8A8A8] shadow-[0_25px_80px_rgba(0,0,0,0.15)] w-full">
                <h3 className="text-lg font-bold mb-2">R1 Zoning Conflict</h3>
                <p className="mb-4">
                  R1 zoning only allows for single-family homes, and commercial lodging is not permitted.{" "}
                  <span className="underline">
                    Section 12.08(A) of the Los Angeles Municipal Code (LAMC)
                  </span>
                </p>
                <div className="flex gap-4">
                  <button className="px-6 py-2 bg-[#e67e22] text-white rounded-full">Edit</button>
                  <button className="px-6 py-2 text-gray-500 rounded-full">Dismiss</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DemoDialog open={dialogOpen} onOpenChange={setDialogOpen} initialEmail={email} />
      </section>
    </FadeInSection>
  )
}
