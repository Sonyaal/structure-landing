"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define validation schema for the contact form
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // In a real application, these would be environment variables
        user: "your-email@gmail.com", // Replace with your email for sending
        pass: "structure1234", // Replace with your app password
      },
    })

    // Email content
    const mailOptions = {
      from: "your-email@gmail.com", // Replace with your email
      to: "sonyaale05@gmail.com",
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

    // For demonstration purposes, we'll log the email content instead of actually sending it
    // In a real application, you would uncomment the line below to send the email
    console.log("Email would be sent with:", mailOptions)

    // Uncomment to actually send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.map((e) => ({ field: e.path.join("."), message: e.message })),
      }
    }
    return { success: false, message: "Failed to send email. Please try again later." }
  }
}

