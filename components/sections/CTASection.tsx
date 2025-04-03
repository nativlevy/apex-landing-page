import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section id="apply" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Build Israel&apos;s AI Future?
              </h2>
              <p className="md:text-xl">
                Join APEX and be part of a movement that&apos;s securing Israel&apos;s leadership in AI. Whether
                you&apos;re a technical builder or a visionary founder, we have a place for you.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/apply">Apply to Architect Track</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/apply">Apply to Founder Track</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 rounded-xl bg-primary-foreground/10 p-6">
            <h3 className="text-xl font-bold text-primary-foreground">Stay Updated</h3>
            <p className="text-primary-foreground/80">
              Sign up for our newsletter to receive updates about APEX programs, events, and success stories.
            </p>
            <form className="space-y-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                />
              </div>
              <Button type="submit" className="w-full" variant="secondary">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-primary-foreground/70">
              By subscribing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 