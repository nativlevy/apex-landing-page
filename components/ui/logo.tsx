import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  linkClassName?: string;
}

export function Logo({ 
  size = "md", 
  showText = true,
  className = "",
  linkClassName = ""
}: LogoProps) {
  const logoSizes = {
    sm: { width: 20, height: 20, className: "h-5 w-5" },
    md: { width: 24, height: 24, className: "h-6 w-6" },
    lg: { width: 32, height: 32, className: "h-8 w-8" }
  }
  
  const { width, height, className: sizeClassName } = logoSizes[size];
  
  return (
    <Link href="/" className={`flex items-center space-x-2 ${linkClassName}`}>
      <Image 
        src="/logo.png" 
        alt="APEX Logo" 
        width={width} 
        height={height} 
        className={`${sizeClassName} object-contain ${className}`}
      />
      {showText && <span className={`font-bold font-['Poppins'] ${size === "lg" ? "text-2xl" : size === "md" ? "text-xl" : "text-base"}`}>APEX</span>}
    </Link>
  )
} 