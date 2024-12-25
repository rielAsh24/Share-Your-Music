import Image from "next/image";
import Link from "next/link";

import heroImg from "@/../public/hero.jpg";
import hero2 from "@/../public/hero-2.jpg";

import { Button } from "@/components/ui/button";
import Testimonial from "@/components/ui/testimonial";

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 justify-items-center gap-y-60 pb-24">
      <article className="grid w-full place-content-center gap-y-6">
        <Image
          src={heroImg}
          alt="Logo"
          className="aspect-auto rounded-lg lg:max-w-[1184px]"
        />
        <div className="grid gap-4 lg:grid-flow-col">
          <h1 className="text-4xl font-semibold text-primary lg:text-5xl lg:leading-tight">
            Symphony Music Club
          </h1>
          <p className="max-w-sm lg:justify-self-center">
            A club for music enthusiasts. We are divided by genres, united in
            Symphony.
          </p>
          <Button className="w-32 lg:justify-self-end" asChild>
            <Link href="/apply">Register Now!</Link>
          </Button>
        </div>
      </article>
      <article className="flex w-full flex-col items-center justify-around gap-12 md:flex-row lg:max-w-screen-xl">
        <Image src={hero2} alt="Logo" className="aspect-auto" />
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl">United by a Passion</h2>
          <p className="text-justify">
            We cherish the joy of creating and enjoying music of all genres and
            styles. Whether you are a singer, a rapper, a guitarist, a pianist,
            a drummer, or anything in between, you are welcome to join us and
            express yourself.
          </p>
          <p className="text-justify">
            We support each other, learn from each other, and have fun with each
            other. We also collaborate with other clubs and organizations on
            campus and in the community, such as the drama club, the art club,
            and the local radio station.
          </p>
        </div>
      </article>
      <article className="grid w-full items-center justify-items-center gap-y-12">
        <h2 className="text-center text-4xl">Testimonies from Our Peers</h2>
        <div className="flex flex-col justify-evenly gap-12 text-justify lg:flex-row">
          <Testimonial
            name="Alice"
            content="They have such talented group of musicians, who can play
                anything from classical to hip hop. Their performances are
                always entertaining and inspiring."
          />
          <Testimonial
            name="Bob"
            content="Members of Symphony always provides us with fresh talent, which
            our listeners love. They also participate in our interviews,
            podcasts, and contests, which help us promote our station..."
          />
          <Testimonial
            name="Carol"
            content="Symphony is a valuable asset for our campus. They not only
            create and share their music, but also contribute to raising awareness and 
            funds for social and environmental issues"
          />
        </div>
      </article>
    </section>
  );
}
