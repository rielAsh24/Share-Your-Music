import Image from "next/image";
import aboutImg from "@/../public/about.jpg";
import about1 from "@/../public/about-1.jpg";
import about2 from "@/../public/about-2.png";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 justify-items-center gap-y-64">
      <article className="grid w-full place-content-center gap-y-8">
        <Image
          src={aboutImg}
          alt="Logo"
          sizes="(min-width: 1024px) 72vw"
          className="aspect-auto rounded-lg"
        />
        <div className="flex items-center justify-between">
          <h1 className="text-5xl leading-tight">About Us</h1>
          <p className="max-w-[576px] text-base leading-normal">
            Welcome to Symphony, the university music club for everyone who
            loves music. Whether you want to play, learn, or share music, you
            will find your place here. Join us and discover your symphony. 🎵
          </p>
        </div>
      </article>
      <article className="flex w-full max-w-screen-xl items-center justify-around">
        <Image src={about1} alt="Logo" className="aspect-auto" />
        <div className="max-w-xl space-y-8 text-justify">
          <h2 className="text-5xl leading-snug">Our History</h2>
          <p className="text-base leading-normal">
            Symphony started as a small club, with only a few members and a few
            instruments. We had a simple vision: to create a space where music
            lovers can come together and enjoy music. Since then, we have grown
            to over 50 members, with a variety of musical backgrounds and
            talents.
          </p>
          <p className="text-base leading-normal">
            With the growth we witnessed, the club decided to acquire more
            instruments, equipment, and resources to support the musical
            endeavors of our members. We have also established a reputation for
            being one of the most active and diverse music clubs on campus.
          </p>
        </div>
      </article>
      <article className="grid w-full items-center justify-items-center gap-y-16">
        <h2 className="text-5xl leading-snug">Activities</h2>
        <div className="flex w-full max-w-screen-xl items-center justify-around">
          <div className="grid max-w-md grid-rows-3 gap-y-8">
            <div className="space-y-4 text-justify">
              <h2 className="text-base font-bold leading-snug">Jam Sessions</h2>
              <p className="text-base leading-normal">
                Join or form groups and play music together. Choose from a wide
                range of instruments and genres, or experiment with new ones.
              </p>
            </div>
            <div className="space-y-4 text-justify">
              <h2 className="text-base font-bold leading-snug">Workshops</h2>
              <p className="text-base leading-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aliquam consequuntur recusandae dolorem laborum eius, ullam
                error maiores at.
              </p>
            </div>
            <div className="space-y-4 text-justify">
              <h2 className="text-base font-bold leading-snug">Events</h2>
              <p className="text-base leading-normal">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aliquam consequuntur recusandae dolorem laborum eius, ullam
                error maiores at.
              </p>
            </div>
          </div>
          <Image
            src={about2}
            alt="Logo"
            className="-mr-8 aspect-auto max-w-lg"
          />
        </div>
      </article>
    </section>
  );
}
