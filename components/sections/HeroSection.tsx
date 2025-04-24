import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-32 xl:py-40 flex items-center min-h-[80vh]">
      <div className="container px-8 md:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="inline-flex mb-2">From Defense to AI</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Building Israel&apos;s AI Fortress
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
              APEX is a launchpad turning Israel's top tech talent into AI founders and builders-securing the nation's future through innovation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
            src="https://images.unsplash.com/photo-1598087495082-15d7dd26cf53?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // src="https://images.unsplash.com/photo-1544971587-b842c27f8e14?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={550}
              height={550}
              alt="APEX AI Initiative"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 