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
          className="aspect-auto rounded-lg lg:w-[1184px]"
        />
        <div className="flex items-start justify-between">
          <h1 className="text-5xl font-semibold leading-tight">
            <span className="text-primary">Symphony Music Club</span>
          </h1>
          <p className="max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
            expedita voluptate consequuntur
          </p>
          <Button className="w-32" asChild>
            <Link href="/apply">Register Now!</Link>
          </Button>
        </div>
      </article>
      <article className="flex w-full max-w-screen-xl items-center justify-around">
        <Image src={hero2} alt="Logo" className="aspect-auto" />
        <div className="max-w-lg space-y-6">
          <h2 className="text-4xl">
            A community that shares the passion for music
          </h2>
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
        <h2 className="text-center text-4xl">Testimonies from our peers</h2>
        <div className="flex justify-evenly gap-x-12 text-justify">
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
