"use client"

import type React from "react"

import { useState } from "react"
import FadeInSection from "./fade-in-section"

export default function DemoForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <FadeInSection>
      <section id="demo" className="w-full px-8 mt-6">
        <div className="container mx-auto">
        <div className="bg-[#f9eee2] rounded-lg p-6 mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <h2 className="text-4xl font-bold leading-tight">Start building today with Structure.</h2>
              </div>

              <div className="lg:w-2/3 lg:pl-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Joe"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Smith"
                          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Smith Company"
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="joe@smithcompany.com"
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#e67e22] text-white font-medium rounded-md hover:bg-[#d35400] transition-colors"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

