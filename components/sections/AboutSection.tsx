import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why We&apos;re Building APEX</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;re Zionists, and we believe Israel must keep leading at the edge of technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Israel&apos;s Cybersecurity Leadership</h3>
                  <p className="text-muted-foreground">
                    Israel is widely recognized as the world&apos;s leader in cybersecurity. AI is the next
                    frontier, and we can&apos;t afford to fall behind.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Filling the Gap</h3>
                  <p className="text-muted-foreground">
                    There was no program connecting Israeli frontier AI with pragmatic, real-world execution. So we
                    built one.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Israel&apos;s Edge in AI</h3>
                  <p className="text-muted-foreground">
                    Israel&apos;s edge in AI isn&apos;t access to GPUs or data—it&apos;s deep technical talent with
                    a bias for action.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Image
                src="/tel-aviv.jpg?height=550&width=550"
                width={550}
                height={550}
                alt="Tel Aviv"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
        </div>
      </div>
      
    </section>
  )
} 