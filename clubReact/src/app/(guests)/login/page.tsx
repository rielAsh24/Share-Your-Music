import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import LoginForm from "@/components/LoginForm";

export default function Apply() {
  return (
    <section className="flex w-full justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
}
