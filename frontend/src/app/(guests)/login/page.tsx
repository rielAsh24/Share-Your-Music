import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
}
