import Image from "next/image";
import aboutImg from "@/../public/about.jpg";
import about1 from "@/../public/about-1.jpg";
import about2 from "@/../public/about-2.png";

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 justify-items-center gap-y-60">
      <article className="grid w-full place-content-center gap-y-6">
        <Image
          src={aboutImg}
          alt="About"
          className="aspect-auto rounded-lg lg:w-[1184px]"
        />
        <div className="grid gap-4 lg:grid-flow-col">
          <h1 className="text-4xl font-semibold lg:text-5xl lg:leading-tight">
            About Us
          </h1>
          <p className="max-sm:text-justify lg:max-w-xl lg:justify-self-end">
            Welcome to Symphony, the university music club for everyone who
            loves music. Whether you want to play, learn, or share music, you
            will find your place here. Join us and discover your symphony. 🎵
          </p>
        </div>
      </article>
      <article className="flex w-full flex-col items-center justify-around gap-12 md:flex-row lg:max-w-screen-xl">
        <Image src={about1} alt="Logo" className="aspect-auto lg:w-[463px]" />
        <div className="grid max-w-lg gap-y-8 text-justify">
          <h2 className="text-4xl">Our History</h2>
          <p>
            Symphony started as a small club, with only a few members and a few
            instruments. We have a simple vision: to create a space where music
            lovers can come together and enjoy music. Since then, we have grown
            to over 50 members, with a variety of musical backgrounds and
            talents.
          </p>
          <p>
            With the growth we witnessed, the club decided to acquire more
            instruments, equipment, and resources to support the musical
            endeavors of our members. We have also established a reputation for
            being one of the most active and diverse music clubs on campus.
          </p>
        </div>
      </article>
      <article className="grid w-full items-center justify-items-center gap-y-12">
        <h2 className="text-center text-4xl">Activities We Conduct</h2>
        <div className="flex w-full max-w-screen-xl flex-col-reverse items-center justify-around lg:flex-row">
          <div className="grid max-w-md grid-rows-3 gap-y-8">
            <div className="space-y-1.5 text-justify">
              <h2 className="font-bold">Jam Sessions</h2>
              <p className="">
                Join or form groups and play music together. Choose from a wide
                range of instruments and genres, or experiment with new ones.
              </p>
            </div>
            <div className="space-y-1.5 text-justify">
              <h2 className="font-bold">Workshops</h2>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aliquam consequuntur recusandae dolorem laborum eius, ullam
                error maiores at.
              </p>
            </div>
            <div className="space-y-1.5 text-justify">
              <h2 className="font-bold">Events</h2>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                aliquam consequuntur recusandae dolorem laborum eius, ullam
                error maiores at.
              </p>
            </div>
          </div>
          <Image
            src={about2}
            alt="Logo"
            className="aspect-auto max-w-sm lg:max-w-lg"
          />
        </div>
      </article>
    </section>
  );
}
