import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Card, CardContent, CardHeader } from "./card";

export default function Testimonial({
  name,
  content,
}: {
  name: string;
  content: string;
}) {
  return (
    <Card className="grid items-start gap-y-4 bg-secondary/50 p-6 text-secondary-foreground">
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
