import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { allMembers, Member } from "@/data/members"

export default function CommunityShowcasePage() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">APEX Community Showcase</h2>
          <p className="text-muted-foreground md:text-xl mt-2">
            Meet the incredible individuals driving and supporting APEX.
          </p>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-11 gap-2">
          {allMembers.map((member: Member) => (
            <Card key={member.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-square relative">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-2">
                <CardTitle className="text-xs">{member.name}</CardTitle>
                {/* {member.description && (
                  <CardDescription>{member.description}</CardDescription>
                )} */}
              </CardHeader>
              {/* <CardFooter className="p-4 flex justify-start gap-3 pt-0 mt-auto">
                <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
