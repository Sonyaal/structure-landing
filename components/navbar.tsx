import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image src="/images/hardhat-icon.svg" alt="Structure Logo" width={30} height={30} className="mr-2" />
      <span className="font-medium text-[#141211] text-[20px]">Structure</span>
    </div>
    <Link
      href="#contact"
      className="px-6 py-2 bg-white text-[#141211] rounded-full shadow-lg hover:shadow-lg transition-shadow"
    >
      Contact Us
    </Link>
  </header>
  )
}

