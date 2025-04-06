import Image from "next/image"

export default function Footer() {
  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="flex items-center">
      <Image src="/images/hardhat-icon.svg" alt="Structure Logo" width={30} height={30} className="mr-2" />
      <span className="font-medium text-[#141211] text-[26px]">Structure</span>
    </div>
  </header>
  )
}

