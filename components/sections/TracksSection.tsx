import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Zap, Shield } from "lucide-react"

export function TracksSection() {
  return (
    <section id="tracks" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Specialized Tracks</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We bridge technical excellence with business leadership, fueling Israel&apos;s next wave of AI
              breakthroughs.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Tabs defaultValue="architect" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="architect">Architect Track</TabsTrigger>
              <TabsTrigger value="founder">Founder Track</TabsTrigger>
              
            </TabsList>
            <TabsContent value="architect" className="p-6 border rounded-lg mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Shield className="h-10 w-10 text-primary" />
                  <h3 className="text-2xl font-bold">Architect (Technical)</h3>
                </div>
                <p className="text-muted-foreground">
                  Deep-tech leaders shaping AI&apos;s future. For top technologists looking to break into AI-native
                  roles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Pass a technical entry test</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Complete ~20 hours of pre-course reading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Actively job-seeking in AI/data-driven environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ready to contribute to high-stakes, real-world projects</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link href="/tracks#architect-track">Learn More about Architect Track</Link>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="founder" className="p-6 border rounded-lg mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Zap className="h-10 w-10 text-primary" />
                  <h3 className="text-2xl font-bold">Founder (Business)</h3>
                </div>
                <p className="text-muted-foreground">
                  Visionary entrepreneurs building the next AI-driven companies. For aspiring founders ready to
                  build.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Committed to starting a company in the next 12 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Clear vision or problem space in mind (or hungry to find one)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Technical or product background is a strong plus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>Ready to build and scale a high-impact startup</span>
                  </li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link href="/tracks#founder-track">Learn More about Founder Track</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
} 