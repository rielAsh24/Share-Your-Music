import ProfileForm from "@/components/ProfileForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function Profile() {
  return (
    <section className="flex justify-center items-center w-full">
      <Card>
        <CardHeader className="grid grid-flow-row gap-y-2 justify-items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Test Profile</AvatarFallback>
          </Avatar>
          <CardTitle>Test Profile</CardTitle>
          <CardDescription className="text-center">
            {"Make changes to your account here. Click save when you're done."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <ProfileForm />
        </CardContent>
      </Card>
    </section>
  );
}
