"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
    >
      {children}
    </div>
  )
}

