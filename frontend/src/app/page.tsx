import Image from "next/image";
import heroImg from "@/../public/hero.jpg";
import hero1 from "@/../public/hero-1.jpg";
import hero2 from "@/../public/hero-2.jpg";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 justify-items-center gap-y-64">
      <article className="grid w-full place-content-center gap-y-4">
        <Image
          src={heroImg}
          alt="Logo"
          sizes="(min-width: 1024px) 72vw"
          className="aspect-auto rounded-lg"
        />
        <div className="text-5xl">
          <h1 className="leading-tight">
            Divided by Genres
            <br />
            Together a Symphony
          </h1>
        </div>
      </article>
      <article className="flex w-full max-w-screen-xl items-center justify-around">
        <div className="max-w-lg space-y-8">
          <h2 className="text-5xl leading-snug">
            Welcome to our harmonious community
          </h2>
          <p className="text-justify text-base leading-normal">
            We are a group of music lovers who share a passion for creating and
            enjoying music of all genres and styles. Whether you are a singer, a
            rapper, a guitarist, a pianist, a drummer, or anything in between,
            you are welcome to join us and express yourself.
          </p>
        </div>
        <Image src={hero1} alt="Logo" className="aspect-auto" />
      </article>
      <article className="flex w-full max-w-screen-xl items-center justify-around">
        <Image src={hero2} alt="Logo" className="aspect-auto" />
        <div className="max-w-lg space-y-8 text-justify">
          <h2 className="text-5xl leading-snug">More than just a club</h2>
          <p className="text-base leading-normal">
            We support each other, learn from each other, and have fun with each
            other. We also collaborate with other clubs and organizations on
            campus and in the community, such as the drama club, the art club,
            and the local radio station.
          </p>
        </div>
      </article>
      <article className="grid w-full items-center justify-items-center gap-y-16 pb-16">
        <h2 className="text-center text-5xl leading-snug">Testimonials</h2>
        <div className="flex justify-evenly gap-x-16 text-justify">
          <Card className="w-1/3 bg-accent">
            <CardHeader></CardHeader>
            <CardContent>
              <p>
                “They have such talented group of musicians, who can play
                anything from classical to hip hop. Their performances are
                always entertaining and inspiring. I’m a big fan of their music
                and the message”
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <p className="text-right">Alice</p>
            </CardFooter>
          </Card>
          <Card className="w-1/3 bg-accent">
            <CardHeader></CardHeader>
            <CardContent>
              <p>
                “Members of Symphony always provides us with fresh talent, which
                our listeners love. They also participate in our interviews,
                podcasts, and contests, which help us promote our station...”
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <p className="text-right">Bob</p>
            </CardFooter>
          </Card>
          <Card className="w-1/3 bg-accent">
            <CardHeader></CardHeader>
            <CardContent>
              <p>
                “Symphony is a valuable asset for our campus. They not only
                create and share their music, but they also contribute to
                various causes and initiatives, such as raising awareness and
                funds for social and environmental issues”
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <p className="text-right">Carol</p>
            </CardFooter>
          </Card>
        </div>
      </article>
    </section>
  );
}
