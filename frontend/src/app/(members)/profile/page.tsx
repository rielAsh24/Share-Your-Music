import { getProfile } from "@/actions/member";
import ProfileForm from "@/components/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Profile() {
  const { name, email } = await getProfile();

  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="grid grid-flow-row justify-items-center gap-y-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Test Profile</AvatarFallback>
          </Avatar>
          <CardTitle>{name[0].toUpperCase() + name.slice(1)}</CardTitle>
          <CardDescription className="text-center">
            {"Make changes to your account here. Click save when you're done."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProfileForm email={email} />
        </CardContent>
      </Card>
    </section>
  );
}
