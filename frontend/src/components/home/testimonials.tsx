import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader } from "../ui/card";

type Testimonial = { name: string; content: string };

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alice",
    content:
      "They have such talented group of musicians, who can play anything from classical to hip hop. Their performances are always entertaining and inspiring.",
  },
  {
    name: "Bob",
    content:
      "Members of Symphony always provides us with fresh talent, which our listeners love. They also participate in our interviews, podcasts, and contests, which help us promote our station.",
  },
  {
    name: "Carol",
    content:
      "Symphony is a valuable asset for our campus. They not only create and share their music, but also contribute to raising awareness and funds for social and environmental issues",
  },
];

export default function Testimonials() {
  return (
    <article className="grid w-full items-center justify-items-center gap-y-12">
      <h2 className="text-center text-4xl">Testimonies from Our Peers</h2>
      <div className="flex flex-col justify-evenly gap-12 text-justify lg:flex-row">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </article>
  );
}

function TestimonialCard({ name, content }: { name: string; content: string }) {
  return (
    <Card className="grid items-start gap-y-4 border-secondary p-6 text-secondary-foreground shadow-none">
      <CardHeader className="flex flex-row content-center gap-x-2 p-0">
        <Avatar className="size-10 border">
          <AvatarImage alt={`@${name[0]}`} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="h-full align-middle font-medium">{name}</div>
      </CardHeader>
      <CardContent className="space-y-2 p-0">
        <p className="max-w-md">{content}</p>
      </CardContent>
    </Card>
  );
}
