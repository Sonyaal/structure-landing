// lib/send-contact-email.ts
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail", // You can use a different service here
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
})

export const sendContactEmail = async (formData: {
  firstName: string
  lastName: string
  email: string
  message: string
}) => {
  const { firstName, lastName, email, message } = formData

  const mailOptions = {
    from: email, // Sender address
    to: "structure.create@gmail.com", // Receiver's email address
    subject: `New Contact Form Submission from ${firstName} ${lastName}`,
    text: `
      You have a new message from your contact form:

      Name: ${firstName} ${lastName}
      Email: ${email}
      Message:
      ${message}
    `,
  }

  try {
    // Attempt to send the email
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error: unknown) {
    // Explicitly type the error as an instance of Error
    if (error instanceof Error) {
      console.error("Error sending email:", error.message)
      return { success: false, message: error.message }
    }
    // Handle case where the error is not an instance of Error
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}
