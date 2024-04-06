import home_page from "@/assets/home_page.jpg";
import "@/styles/home.sass";

export default function Home() {
  return (
    <section className="article-content">
      <div className="article-written">
        <h2>Our Goal</h2>
        <p>
          We believe that music &#x1F3B6; is something helps many of us confront
          our feelings, our thoughts, our emotions and sharing this experience
          with others, is really a great way for us humans to connect with each
          other &#x2764;
        </p>
        <p>
          Music listeners &#x1F3A7; have an inclination to various kinds and
          genres of music, which may be liked by a group of people and not by
          others.
        </p>
        <p>
          Finding people or a community who have the same musical preference
          could be a great way to expand our playlists &#x1F60F;
        </p>
        <p>
          The club was created to allow members to share their playlist &#x1F50A
          with their friends and listen to others playlists too.
        </p>
      </div>
      <div>
        <img src={home_page} />
      </div>
    </section>
  );
}
