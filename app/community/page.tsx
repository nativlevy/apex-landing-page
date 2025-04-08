import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mountain, Linkedin, Twitter, Github, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activePage="team" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="inline-flex mb-2">World-Class Expertise</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Meet Our Community</h1>
                <p className="max-w-[800px] text-muted-foreground md:text-xl">
                  Our team brings together leading experts from Israel's defense, tech, and academic sectors to build
                  the next generation of AI talent and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Gadi */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/gadi.jpeg"
                    alt="Gadi"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Gadi</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                  {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Roy */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/roy.jpeg"
                    alt="Roy"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Roy</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Asaf */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/asaf_tzur.jpeg"
                    alt="Asaf"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Asaf</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

               {/* Adi */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/adi.jpeg"
                    alt="Adi"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Adi</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

               {/* Ori A. */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/Ori_A_oz.webp"
                    alt="Ori A Oz"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Ori A Oz</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                  {/* Add social links if available */}
                </CardFooter>
              </Card>

               {/* Iddo */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/iddo_tzur.webp"
                    alt="Iddo Tzur"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Iddo Tzur</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Ori */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Ori"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Ori</CardTitle>
                </CardHeader>
                 <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Matan */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Matan"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Matan</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Shachar Cohen */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Shachar Cohen"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Shachar Cohen</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                  {/* Add social links if available */}
                </CardFooter>
              </Card>

               {/* Avishag */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/avishag.jpeg"
                    alt="Avishag"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Avishag</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Alon */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Alon"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Alon</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Ofek */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Ofek"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Ofek</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground"> {/* Placeholder Description */} </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start gap-3">
                   {/* Add social links if available */}
                </CardFooter>
              </Card>

              {/* Nativ Levy */}
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/team/nativ.jpeg"
                    alt="Nativ Levy"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Nativ Levy</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                   <p className="text-sm text-muted-foreground">{/* Placeholder Description */}</p>
                </CardContent>
                <CardFooter className="p-4 flex justify-start pt-0" >
                   {/* Add social links if available */}
                   <Link href="https://www.linkedin.com/in/nativ-levy/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center text-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                  <p className="text-muted-foreground md:text-xl max-w-xl mx-auto">
                    We're always looking for talented individuals who are passionate about AI and Israel's future. Join
                    us in building the next generation of AI leaders.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button asChild size="lg">
                    <Link href="#careers">View Open Positions</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="mailto:careers@apex-ai.org">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Learn From the Best in the Field
                </h2>
                <p className="max-w-[800px] md:text-xl">
                  Our team of experts brings decades of experience from Israel's top defense units, leading tech
                  companies, and prestigious academic institutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/apply">Apply to APEX</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/tracks">Explore Our Tracks</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

