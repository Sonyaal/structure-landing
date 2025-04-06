import localFont from "next/font/local"
import "./globals.css"

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-VariableFont_wght.ttf", // ✅ must be public-relative path
      weight: "100 900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-montserrat",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-mont">{children}</body>
    </html>
  )
}
