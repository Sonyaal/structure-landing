"use client"

import type React from "react"

import { useState } from "react"
import FadeInSection from "./fade-in-section"
import { sendContactEmail } from "@/lib/actions"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState<{
    type: "success" | "error" | "idle"
    message: string
  }>({
    type: "idle",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "idle", message: "" })

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        setStatus({
          type: "success",
          message: "Your message has been sent! We'll get back to you soon.",
        })
        // Clear form on success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
      } else {
        setStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeInSection>
      <section id="contact" className="w-full px-8">
        <div className="container mx-auto">
          <div className="bg-[#f9eee2] rounded-lg p-6 ">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-[1px] border-[#A8A8A8] shadow-md hover:shadow-lg">
              <h2 className="text-3xl font-bold mb-8 ">Contact Us</h2>

              {status.type === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start mb-6">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                  <p className="text-green-800">{status.message}</p>
                </div>
              ) : status.type === "error" ? (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start mb-6">
                  <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
                  <p className="text-red-800">{status.message}</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactFirstName" className="block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="contactFirstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Joe"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactLastName" className="block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="contactLastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joe@smithcompany.com"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type something..."
                    rows={6}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 bg-[#e67e22] text-white font-medium rounded-md hover:bg-[#d35400] transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

