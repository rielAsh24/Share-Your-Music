import { getProfile } from "@/actions/member";
import ProfileForm from "@/components/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default async function Profile() {
  const { name, email } = await getProfile();

  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="grid gap-y-2 lg:gap-y-4">
          <div className="flex items-center justify-between">
            <header className="flex gap-x-4">
              <Avatar className="lg:size-16 lg:text-2xl">
                <AvatarImage src="" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center space-y-1">
                <CardTitle>{name[0].toUpperCase() + name.slice(1)}</CardTitle>
                <CardDescription>{"Member"}</CardDescription>
              </div>
            </header>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="text-muted-foreground">
                  Edit
                </TooltipTrigger>
                <TooltipContent>
                  <p>Not available for this account</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CardDescription className="text-center">
            {"Make changes to your account here. Click save when you're done."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 pt-2">
          <ProfileForm email={email} />
        </CardContent>
      </Card>
    </section>
  );
}
