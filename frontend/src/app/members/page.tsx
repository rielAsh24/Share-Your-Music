import Image from "next/image";
import homeImg from "@/../public/home_page.jpg";

export default function Page() {
  return (
    <section className="flex flex-col-reverse items-center justify-around gap-8 lg:flex-row">
      <div className="grid gap-y-6 lg:gap-y-8">
        <div className="text-4xl font-semibold lg:text-5xl">
          <h2>Our Goal</h2>
        </div>
        <div className="grid max-w-xl gap-y-4 text-justify lg:gap-y-6">
          <p>
            We believe that music &#x1f3b6; is something helps many of us
            confront our feelings, our thoughts, our emotions and sharing this
            experience with others, is really a great way for us humans to
            connect with each other &#x2764;
          </p>
          <p>
            Music listeners &#x1F3A7; have an inclination to various kinds and
            genres of music, which may be liked by a group of people and not by
            others
          </p>
          <p>
            Finding people or a community who have the same musical preference
            could be a great way to expand our playlists &#x1F60F;
          </p>
          <p>
            The club was created to allow members to share their playlist
            &#x1F50A; with their friends and listen to others playlists too
          </p>
        </div>
      </div>
      <Image
        src={homeImg}
        alt="Hero Image"
        className="aspect-auto rounded-md lg:w-2/5"
      />
    </section>
  );
}
