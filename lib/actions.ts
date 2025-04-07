"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const validatedData = contactFormSchema.parse(formData)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // recommended
        pass: process.env.GMAIL_PASS,  // recommended
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER, // your sending email
      to: "structure.create@gmail.com", // updated recipient
      subject: `Contact Form: ${validatedData.firstName} ${validatedData.lastName}`,
      text: `
        Name: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <h3>Message:</h3>
        <p>${validatedData.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      }
    }
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
