import { NextApiRequest, NextApiResponse } from "next"
import { sendContactEmail } from "@/pages/api/send-contact-email"

// Define the handler with typed req and res
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const result = await sendContactEmail(req.body)

      if (result.success) {
        return res.status(200).json({ success: true })
      } else {
        return res.status(500).json({ success: false, message: result.message })
      }
    } catch (error: unknown) {
      // Narrowing the type of error
      if (error instanceof Error) {
        return res.status(500).json({ success: false, message: error.message })
      } else {
        // Fallback for unexpected types of error
        return res.status(500).json({ success: false, message: "An unknown error occurred" })
      }
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ success: false, message: "Method Not Allowed" })
  }
}
