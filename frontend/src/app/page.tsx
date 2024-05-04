import Image from "next/image";
import heroImg from "@/../public/hero.jpg";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="grid w-10/12 grid-flow-row place-content-center gap-y-4">
      <Image src={heroImg} alt="Logo" className="aspect-auto" />
      <div className="grid grid-cols-2 text-6xl">
        <div className="-mt-20 grid grid-rows-2 text-5xl">
          <h1 className="w-fit rounded-tr-xl bg-background py-4 pr-4">
            Divided by Genres
          </h1>
          <h1 className="w-fit rounded-tr-xl bg-background pr-4">
            Together a Symphony
          </h1>
        </div>
        <Button className="size-20 justify-self-end rounded-full text-4xl">
          A
        </Button>
      </div>
    </section>
  );
}
