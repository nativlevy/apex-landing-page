"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden p-0 w-10 h-10">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <div className="flex items-center justify-between border-b pb-4">
          <Logo size="sm" linkClassName="ml-1" />
        </div>
        <nav className="flex flex-col gap-4 mt-6">
          <Link
            href="/#about"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#features"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Model
          </Link>
          <Link
            href="/tracks"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Tracks
          </Link>
          <Link
            href="/community"
            className="text-base font-medium transition-colors hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Community
          </Link>
        </nav>
        <div className="flex flex-col gap-4 mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm">Toggle Theme</span>
            <ThemeToggle />
          </div>
          <Button asChild className="w-full">
            <Link href="/apply" onClick={() => setOpen(false)}>
              Apply Now
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

