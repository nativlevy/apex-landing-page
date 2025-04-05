import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Train, Coffee } from "lucide-react"

export function LocationSection() {
  return (
    <section id="location" className="w-full py-20 md:py-28 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Where You&apos;ll Build</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Our program is hosted at the historic HaTachana complex in Tel Aviv.
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          <video
            src="/video.mov"
            loop
            autoPlay
            muted
            playsInline
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-md p-8 rounded-b-2xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-medium mb-2">HaTachana</h3>
                <p className="text-white/80 text-lg">
                  Ashkelon Street 14, Tel Aviv-Yafo
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg" variant="secondary" className="rounded-full px-6">
                  <Link href="https://www.google.com/maps/place/Ashkelon+St+14,+Tel+Aviv-Jaffa/@32.058565,34.7596384,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4c97924f5d37:0x155f2101d62d20d6!8m2!3d32.058565!4d34.762208!16s%2Fg%2F11dzn3x976?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                    Open in Maps
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 