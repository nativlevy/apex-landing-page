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
            src="https://cdn.brandfetch.io/monday.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="OpenAI"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/apple.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="Anthropic"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/nvidia.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="NVIDIA"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/google.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="Google"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/meta.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="Meta"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/microsoft.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="Microsoft"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
          <Image
            src="https://cdn.brandfetch.io/dreamgroup.com/w/400/h/400?c=1idjQoo38323pC02ZXr"
            alt="Dream"
            width={120}
            height={60}
            className="object-contain h-12 w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  )
} 