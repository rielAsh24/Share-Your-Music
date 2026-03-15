import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/testimonials";

export default function Page() {
  return (
    <section className="grid w-full grid-cols-1 justify-items-center gap-y-60 pb-24">
      <Hero />
      <article className="flex w-full flex-col items-center justify-around gap-12 md:flex-row lg:max-w-(--breakpoint-xl)">
        <img src="/hero-2.jpg" alt="Logo" className="aspect-auto" />
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
      <Testimonials />
    </section>
  );
}
