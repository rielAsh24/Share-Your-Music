import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CardContent, Card, CardTitle, CardHeader } from "@/components/ui/card";

export default function ProfileLoading() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="grid grid-flow-row justify-items-center gap-y-2">
          <Avatar>
            <Skeleton className="aspect-square h-full w-full animate-pulse rounded-full" />
          </Avatar>
          <CardTitle className="space-y-2">
            <Skeleton className="h-7 w-full animate-pulse" />
            <Skeleton className="h-4 w-96 max-w-md animate-pulse" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-10 w-full" />
        </CardContent>
      </Card>
    </section>
  );
}
