import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empowering Communities Through Entrepreneurial Action
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                We believe investing in students who take entrepreneurial action
                for others creates a better world for us all.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="bg-[#FFC222] text-black hover:bg-[#e6af1f]">
                  Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
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
  );
};
export default Hero;
