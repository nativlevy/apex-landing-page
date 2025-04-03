import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, BookOpen, Users, Code, Lightbulb, Rocket, Mountain } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { TechnicalCurriculum } from "@/components/technical-curriculum"
import { FounderCurriculum } from "@/components/founder-curriculum"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import { Survey } from "@/components/survey"

export default function TracksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activePage="tracks" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex mb-2">Elite Training Programs</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  APEX Specialized Tracks
                </h1>
                <p className="max-w-[800px] text-muted-foreground md:text-xl">
                  We bridge technical excellence with business leadership, fueling Israel&apos;s next wave of AI
                  breakthroughs through two specialized tracks.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <a href="#founder-track">
                    Founder Track <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="#architect-track">
                    Architect Track <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Rocket className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Founder Track</h2>
                </div>
                <p className="text-muted-foreground">
                  Designed for visionary entrepreneurs building the next AI-driven companies. The Founder Track equips
                  you with the essential tools, knowledge, and network to navigate the challenges of building a
                  high-impact startup.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Twice weekly sessions for 3 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Mix of lectures, case studies, and founder stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Office hours with top industry leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ideal for those in inception, validation, or ideation mode</span>
                  </li>
                </ul>
                <div>
                  <Button asChild className="mt-4">
                    <a href="#founder-track">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center space-x-2">
                  <Code className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Architect Track</h2>
                </div>
                <p className="text-muted-foreground">
                  For deep-tech leaders shaping AI&apos;s future. The Architect Track provides hands-on technical
                  training covering AI foundations and emerging trends, taught by industry experts and leading
                  practitioners.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Comprehensive technical curriculum with 14 specialized lectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Taught by industry experts and leading practitioners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Practical, hands-on learning with real-world applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Direct pathway to AI-native roles in top companies</span>
                  </li>
                </ul>
                <div>
                  <Button asChild variant="outline" className="mt-4">
                    <a href="#architect-track">Learn More</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Track Section */}
        <section id="founder-track" className="w-full py-12 md:py-24 lg:py-32 bg-muted scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center space-x-2">
                <Rocket className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Founder Track</h2>
              </div>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Building a Startup in a Fast-Changing World
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Program Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Foundations</h3>
                      <p className="text-sm text-muted-foreground">
                        A mix of lectures, real-world case studies, and inspiring founder stories
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Resources</h3>
                      <p className="text-sm text-muted-foreground">
                        Office hours with top industry leaders offering hands-on guidance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Expert-Led</h3>
                      <p className="text-sm text-muted-foreground">
                        Each module is led by experienced entrepreneurs and experts
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-2">Program Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Twice weekly sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>3-month program duration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Solo founders welcome</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Ideal for inception, validation, ideation mode</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply to Founder Track</Button>
                </CardFooter>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Curriculum Modules</CardTitle>
                  <CardDescription>
                    Designed to support founders through every phase of building and scaling their company
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FounderCurriculum />
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                  <div className="w-full p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-medium mb-2">Exclusive Israeli Ecosystem Access</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Direct connections to Unit 8200 and Talpiot alumni networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Israeli-American VC office hours and pitch practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Hands-on workshops with successful Israeli founders</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Access to Israel's AI/ML research labs and talent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span>Curated introductions to multinational corporate partners</span>
                      </li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Architect Track Section */}
        <section id="architect-track" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center space-x-2">
                <Code className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Architect Track</h2>
              </div>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                A technical flash-course on AI covering the foundations and emerging trends
              </p>
            </div>

            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Curriculum</CardTitle>
                  <CardDescription>
                    Comprehensive training covering AI foundations, architectures, and practical applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TechnicalCurriculum />
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/apply">Apply to Architect Track</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join APEX?</h2>
                  <p className="md:text-xl">
                    Apply now to be part of Israel&apos;s AI future. Whether you&apos;re a technical builder or a
                    visionary founder, we have a place for you.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/survey">Apply to Architect Track</Link>
                  </Button>
                  <Button asChild size="lg" variant="secondary">
                    <Link href="#founder-apply">Apply to Founder Track</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl bg-primary-foreground/10 p-6">
                <h3 className="text-xl font-bold text-primary-foreground">Have Questions?</h3>
                <p className="text-primary-foreground/80">
                  Reach out to our team to learn more about our programs, application process, or how you can get
                  involved.
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
                  <div className="grid gap-2">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <Button type="submit" className="w-full" variant="secondary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

