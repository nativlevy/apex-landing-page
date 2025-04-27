import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavbarProps {
  activePage?: "home" | "tracks" | "team"
}

export function Navbar({ activePage }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-8 md:px-12">
        <div className="flex items-center gap-2">
          <Logo size="md" />
        </div>
        <nav className="hidden md:flex gap-8">
          <Link 
            href="/#about" 
            className={`text-base font-medium transition-colors hover:text-primary`}
          >
            About
          </Link>
          <Link 
            href="/#features" 
            className={`text-base font-medium transition-colors hover:text-primary`}
          >
            Model
          </Link>
          <Link 
            href="/tracks" 
            className={`text-base font-medium transition-colors hover:text-primary ${activePage === "tracks" ? "text-primary" : ""}`}
          >
            Tracks
          </Link>
          <Link 
            href="/community" 
            className={`text-base font-medium transition-colors hover:text-primary ${activePage === "team" ? "text-primary" : ""}`}
          >
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild size="lg" className="hidden md:flex">
            <Link href="/apply">Apply Now</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
} 