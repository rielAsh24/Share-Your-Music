import Image from "next/image";
import homeImg from "@/../public/home_page.jpg";

export default function Page() {
  return (
    <section className="grid grid-cols-2 place-items-center">
      <div className="grid grid-flow-row gap-y-8">
        <div className="text-4xl">
          <h2>Our Goal</h2>
        </div>
        <div className="grid grid-flow-row gap-y-4 text-justify lg:max-w-xl">
          <p className="">
            We believe that music &#x1f3b6; is something helps many of us
            confront our feelings, our thoughts, our emotions and sharing this
            experience with others, is really a great way for us humans to
            connect with each other &#x2764;
          </p>
          <p className="">
            Music listeners &#x1F3A7; have an inclination to various kinds and
            genres of music, which may be liked by a group of people and not by
            others
          </p>
          <p className="">
            Finding people or a community who have the same musical preference
            could be a great way to expand our playlists &#x1F60F;
          </p>
          <p className="">
            The club was created to allow members to share their playlist
            &#x1F50A; with their friends and listen to others playlists too
          </p>
        </div>
      </div>
      <div>
        <Image src={homeImg} alt="Hero Image" className="rounded-md" />
      </div>
    </section>
  );
}
