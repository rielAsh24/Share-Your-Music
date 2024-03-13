import Image from "next/image";
import homeImg from "@/../public/home_page.jpg";

export default function Page() {
  return (
    <section className="grid grid-cols-2 place-items-center">
      <div className="grid grid-flow-row gap-y-8">
        <div className="text-3xl">
          <h2>Our Goal</h2>
        </div>
        <div className="grid grid-flow-row gap-y-4 text-justify">
          <p className="lg:w-[600px]">
            We believe that music &#x1F3B6 is something helps many of us
            confront our feelings, our thoughts, our emotions and sharing this
            experience with others, is really a great way for us humans to
            connect with each other &#x2764
          </p>
          <p className="lg:w-[600px]">
            Music listeners &#x1F3A7 have an inclination to various kinds and
            genres of music, which may be liked by a group of people and not by
            others.
          </p>
          <p className="lg:w-[600px]">
            Finding people or a community who have the same musical preference
            could be a great way to expand our playlists &#x1F60F&#x1F923.
          </p>
          <p className="lg:w-[600px]">
            The club was created to allow members to share their playlist
            &#x1F50A with their friends and listen to others playlists too.
          </p>
        </div>
      </div>
      <div>
        <Image src={homeImg} alt="Hero Image" />
      </div>
    </section>
  );
}
