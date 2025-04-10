import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin } from "lucide-react"

export function Community() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Founding Team Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Founding Team</h2>
          <p className="text-muted-foreground md:text-xl mt-2">The core team leading APEX.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Tal Fialkow */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/tal.jpeg"
                alt="Tal Fialkow"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Tal Fialkow</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
              <Link href="https://www.linkedin.com/in/tal-fialkow-486b8455/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
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
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="https://www.linkedin.com/in/roy-nissim/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
             </CardFooter>
          </Card>

          {/* Alon */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/alon.jpg"
                alt="Alon"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Alon</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
               <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Ofek */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/ofek.jpeg"
                alt="Ofek"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ofek</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
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
            <CardFooter className="p-4 flex justify-start pt-0" >
               {/* Add social links if available */}
               <Link href="https://www.linkedin.com/in/nativ-levy/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
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
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
               <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Community Section */}
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Community</h2>
            <p className="text-muted-foreground md:text-xl mt-2">Our valued community members contributing to APEX's mission.</p>
        </div>
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
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
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
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
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
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
             </CardFooter>
          </Card>

           {/* Ori A. */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/Ori_A_oz.webp"
                alt="Ori"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ori</CardTitle>
            </CardHeader>
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
               <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
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
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
             </CardFooter>
          </Card>

          {/* Ori */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/ori_a.webp"
                alt="Ori"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ori</CardTitle>
            </CardHeader>
             <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
             </CardFooter>
          </Card>

          {/* Matan */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/matan.webp"
                alt="Matan"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Matan</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Shachar Cohen */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/shachar.webp"
                alt="Shachar Cohen"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Shachar Cohen</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

           {/* Itzik */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/itzik.webp"
                alt="Itzik"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Itzik</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start gap-3 pt-0">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Ofer Herman */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/ofer_herman.jpeg"
                alt="Ofer Herman"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ofer Herman</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
                <Link href="https://www.linkedin.com/in/oferherman/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Ido Jengel */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/ido_engel.jpeg"
                alt="Ido Engel"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ido Engel</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
                <Link href="https://www.linkedin.com/in/idojengel/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Elad Levi */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/elad_levi.jpeg"
                alt="Elad Levi"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Elad Levi</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
                <Link href="https://www.linkedin.com/in/elad-levi-a938a3121/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Ilan Kadar */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/ilan_kader.jpeg"
                alt="Ilan Kadar"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Ilan Kadar</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
               <Link href="https://www.linkedin.com/in/ilan-kadar-b57ba511b/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Yael Daihes */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/yael.jpeg"
                alt="Yael Daihes"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Yael Daihes</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
                <Link href="https://www.linkedin.com/in/yael-daihes/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>

          {/* Or Lenchner */}
          <Card className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src="/team/or_lenchner.jpeg"
                alt="Or Lenchner"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">Or Lenchner</CardTitle>
            </CardHeader>
            <CardFooter className="p-4 flex justify-start pt-0">
                <Link href="https://www.linkedin.com/in/orlenchner/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
} 