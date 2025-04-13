import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Lightbulb, Globe } from "lucide-react"
import ProjectCard from "@/components/project-card"
import TeamMember from "@/components/team-member"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1fr]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empowering Communities Through Entrepreneurial Action
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  We believe investing in students who take entrepreneurial action for others creates a better world for
                  us all.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="bg-[#FFC222] text-black hover:bg-[#e6af1f]">
                    Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/join">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Join Enactus
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Enactus in action"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FFC222]"></div>
      </section>

      {/* About Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Enactus</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enactus is an international nonprofit organization dedicated to inspiring students to improve the world
                through entrepreneurial action.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC222]">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-gray-500">We build strong communities through collaboration and shared purpose.</p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC222]">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Innovation</h3>
              <p className="text-gray-500">We develop innovative solutions to address social challenges.</p>
            </div>
            <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC222]">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold">Impact</h3>
              <p className="text-gray-500">We create sustainable impact through entrepreneurial action.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <Button variant="outline" className="border-black text-black hover:bg-black/10">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Showcase</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our impactful initiatives that are making a difference in communities.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <ProjectCard
              title="EcoSolutions"
              description="Sustainable waste management solutions for urban communities."
              image="/placeholder.svg?height=200&width=300"
              link="/projects/ecosolutions"
            />
            <ProjectCard
              title="DigitalLiteracy"
              description="Empowering underserved communities with digital skills."
              image="/placeholder.svg?height=200&width=300"
              link="/projects/digitalliteracy"
            />
            <ProjectCard
              title="MicroFinance"
              description="Supporting small businesses through microloans and mentorship."
              image="/placeholder.svg?height=200&width=300"
              link="/projects/microfinance"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button className="bg-[#FFC222] text-black hover:bg-[#e6af1f]">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our dedicated team of students and advisors working together to create positive change.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <TeamMember name="Alex Johnson" role="President" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Sarah Williams" role="Vice President" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Michael Chen" role="Project Director" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Priya Patel" role="Marketing Lead" image="/placeholder.svg?height=300&width=300" />
          </div>
          <div className="flex justify-center">
            <Link href="/team">
              <Button variant="outline" className="border-black text-black hover:bg-black/10">
                Meet Our Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Be part of a global community that's creating positive change through entrepreneurial action.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/join">
                <Button className="bg-[#FFC222] text-black hover:bg-[#e6af1f]">Join Enactus</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
