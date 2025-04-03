import Image from "next/image"

export function PartnersSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mentors & Lecturers From</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Learn from industry leaders at the forefront of AI innovation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 items-center gap-8 py-8">
          <Image
            src="https://cdn.brandfetch.io/mobileye.com/w/400/h/400"
            alt="Mobileye"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/hailo.ai/w/400/h/400"
            alt="Hailo"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/gong.io/w/400/h/400"
            alt="Gong"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/ai21.com/w/400/h/400"
            alt="AI21 Labs"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/lightricks.com/w/400/h/400"
            alt="Lightricks"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/run.ai/w/400/h/400"
            alt="Run:ai"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/wiz.io/w/400/h/400"
            alt="Wiz"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  )
} 